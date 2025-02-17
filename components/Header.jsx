import React, { useContext, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { menu } from '@/config';
import styles from '@/styles/Header.module.css';
import { BsList } from "react-icons/bs";
import { MobileToggleContext } from '@/context/MobileToggleContext';
import useDimension from '@/hooks/useDimension';
import { handleScroll, handleSmoothScroll, useOutsideAlerter } from '@/common';
import { ActiveHashContentContext } from '@/context/ActiveHashContent';

export default function Header() {
    const toggleRef = useRef(null);
    const { toggle, setToggle } = useContext(MobileToggleContext);
    const { activeHash, setActiveHash } = useContext(ActiveHashContentContext);
    const { width } = useDimension();

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleRouteChange = (e) => {
            setActiveHash(`/${window.location.hash}` || '');
            handleScroll(`/${window.location.hash}` || '', setActiveHash);
        };

        handleRouteChange();
    }, []);

    const handleMobileToggle = () => {
        toggle ? closeToggle() : openToggle();
    };

    const openToggle = () => {
        // Prevent body scroll
        document.body.style.overflow = 'hidden';

        // Start animation and set toggle after starting
        setIsVisible(true); // Set animation before toggle
        setToggle(true);
    };

    const closeToggle = () => {
        const scrollPosition = window.scrollY;

        // Trigger animation
        setIsVisible(false); // Set animation state

        // Wait for animation to complete before restoring scroll
        setTimeout(() => {
            // Restore body scroll
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.style.overflow = '';

            window.scrollTo(0, scrollPosition); // Scroll back to the original position

            setToggle(false); // Complete toggle after animation
        }, 500);
    };

    useOutsideAlerter(toggleRef, closeToggle);

    useEffect(() => {
        width > 1020 && setToggle(false);
    }, [width]);

    return (
        <section
            id="header"
            className={styles.container}
        >
            <div className={styles.wrapper}>
                <div>
                    <Link
                        href="/"
                        onClick={(e) => handleSmoothScroll(e, '/#hero', setActiveHash)}
                    >
                        <h1 className={styles.title}>Yamin</h1>
                    </Link>
                </div>
                <div className={styles['menu-list']}>
                    <ul>
                        {
                            menu.map((item) => (
                                <div
                                    key={item.id}
                                    className='flex flex-col group'
                                >
                                    <Link
                                        href={item.url}
                                        onClick={(e) => handleSmoothScroll(e, item.url, closeToggle, setActiveHash)}
                                        className={`${ activeHash === item.url ? 'active' : 'group-hover:text-cyan-400' }`}
                                    >
                                        <li>{item.title}</li>
                                        {
                                            activeHash === item.url ? (
                                                <div className='w-[25px] h-[3px] rounded-full bg-gray-100 mx-2 active-line'></div>
                                            ) : (
                                                <div className='group-hover:w-[25px] group-hover:h-[3px] group-hover:rounded-full group-hover:bg-cyan-400 group-hover:mx-2 group-hover:active-line'></div>
                                            )
                                        }
                                    </Link>
                                </div>
                            ))
                        }
                    </ul>
                </div>
                <div className={styles.socials}>
                    <Link
                        href={process.env.GITHUB}
                        target="_blank"
                    >
                        <FaGithub className={styles.icon} />
                    </Link>
                    <Link
                        href={process.env.LINKED_IN}
                        target="_blank"
                    >
                        <FaLinkedin className={styles.icon} />
                    </Link>
                    <div
                        className={styles['mobile-menu']}
                        onClick={handleMobileToggle}
                    >
                        <BsList
                            className={styles['mobile-menu-icon']}
                        />
                    </div>
                </div>
            </div>
            {
                toggle && (
                    <div
                        className={`
                            ${styles['mobile-toggle']}
                            ${isVisible ? 'animate-fade-in-down' : 'animate-fade-out-up'}
                        `}
                        ref={toggleRef}
                    >
                        <ul className={styles['mobile-toggle-menu']}>
                            {
                                menu.map((item) => (
                                    <div
                                        key={item.id}
                                        className='flex flex-col w-full'
                                    >
                                        <Link
                                            href={item.url}
                                            onClick={(e) => handleSmoothScroll(e, item.url, closeToggle, setActiveHash)}
                                            className={`p-2 w-full bg-dark text-center hover:bg-light rounded-lg ${ activeHash === item.url ? 'bg-light' : '' }`}
                                        >
                                            <li>{item.title}</li>
                                        </Link>
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                )
            }
        </section>
    )
}
