import React, { useRef } from 'react';
import indexStyles from '@/styles/Index.module.css';
import styles from '@/styles/AboutMe.module.css';
import { aboutMe } from '@/config';
import { FadeIn } from './FadeIn';
import { useScrollUrlActive } from '@/common';
import useAnimation from '@/hooks/useAnimation';

export default function AboutMe() {
    const aboutRef = useRef(null);
    const { isRefVisible } = useAnimation({ mainRef: aboutRef, id: 'about' });
    useScrollUrlActive(aboutRef?.current?.id, isRefVisible);

    return (
        <section
            ref={aboutRef}
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
