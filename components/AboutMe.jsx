import React from 'react';
import indexStyles from '@/styles/Index.module.css';
import styles from '@/styles/AboutMe.module.css';
import { aboutMe } from '@/config';
import { FadeIn } from './FadeIn';

export default function AboutMe() {
    return (
        <section
            id='about'
            className={`
                !h-full lg:!h-screen
                ${indexStyles.container}`}
        >
            <div className={indexStyles.wrapper}>
                <h1 className={indexStyles.title}>
                    About me
                </h1>
                <div
                    className={styles.container}
                >
                    {
                        aboutMe.map((item, index) => (
                            <FadeIn
                                key={index}
                                delay={index * 200}
                                styleName={`w-full`}
                            >
                                <p>{item.description}</p>
                            </FadeIn>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
