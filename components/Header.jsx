import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { menu } from '@/config';
import styles from '@/styles/Header.module.css';
import { BsList } from "react-icons/bs";
import { MobileToggleContext } from '@/context/MobileToggleContext';
import useDimension from '@/hooks/useDimension';

export default function Header() {
    const { toggle, setToggle } = useContext(MobileToggleContext);
    const { width } = useDimension();
    const [isVisible, setIsVisible] = useState(false);

    const handleMobileToggle = () => {
        if (toggle) {
            closeToggle(); // When closing the toggle
        } else {
            openToggle(); // When opening the toggle
        }
    };

    const openToggle = () => {
        const scrollPosition = window.pageYOffset;

          // Disable body scroll
          document.body.style.position = 'fixed';
          document.body.style.top = `-${scrollPosition}px`;
          document.body.style.width = '100%';
          document.body.style.overflow = 'hidden';

          // Start animation and set toggle after starting
          setIsVisible(true); // Set animation before toggle
          setToggle(true);
    };

    const closeToggle = () => {
      const scrollPosition = parseInt(document.body.style.top, 10) * -1;

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
                    <h1 className={styles.title}>Yamin</h1>
                </div>
                <div className={styles['menu-list']}>
                    <ul>
                        {
                            menu.map((item) => (
                                <li key={item.id}>
                                    <a href={item.url}>{item.title}</a>
                                </li>
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
                    >
                        <ul className={styles['mobile-toggle-menu']}>
                            {
                                menu.map((item) => (
                                    <li
                                        key={item.id}
                                        className='p-2'
                                    >
                                        <a href={item.url}>{item.title}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                )
            }
        </section>
    )
}
