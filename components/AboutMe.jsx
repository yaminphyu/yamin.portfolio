import React, { useRef } from 'react';
import indexStyles from '@/styles/Index.module.css';
import styles from '@/styles/AboutMe.module.css';
import { aboutMe } from '@/config';
import useAnimation from '@/hooks/useAnimation';

export default function AboutMe() {
    const aboutMeRef = useRef(null);
    const isVisible = useAnimation({ targetRef: aboutMeRef });

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
                    ref={aboutMeRef}
                    className={styles.container}
                >
                    {
                        aboutMe.map((item, index) => (
                            <p
                                key={index}
                                className={`${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
                                style={{
                                    transitionDelay: isVisible ? `${index * 200}ms` : "0ms"
                                }}
                            >
                                {item.description}
                            </p>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
