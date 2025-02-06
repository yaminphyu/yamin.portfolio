import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { menu } from '@/config';
import styles from '@/styles/Header.module.css'

export default function Header() {
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
                </div>
            </div>
        </section>
    )
}
