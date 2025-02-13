import React, { useRef } from 'react';
import indexStyles from '@/styles/Index.module.css';
import styles from '@/styles/WorkExperience.module.css';
import Image from 'next/image';
import { workExperiences } from '@/config';
import useAnimation from '@/hooks/useAnimation';

export default function WorkExperience() {
    const workExpRef = useRef(null);
    const isVisible = useAnimation({ targetRef: workExpRef });

    return (
        <section
            id='work-experience'
            className={`
                !h-full md:!h-screen
                ${indexStyles.container}
            `}
        >
            <div className={styles.wrapper}>
                <h1 className={indexStyles.title}>
                    Work Experience
                </h1>

                <div
                    ref={workExpRef}
                    className={styles['main-wrapper']}
                >
                    <div className={styles.line}></div>

                    {
                        workExperiences.map((item, index) => (
                            <div
                                key={index}
                                className={`
                                    relative w-full flex justify-center transition-all duration-[1000ms] ease-in-out
                                    ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
                                    ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}
                                `}
                                style={{
                                    transitionDelay: isVisible ? `${index * 100}ms` : "0ms"
                                }}
                            >
                                <div className={styles.item}>
                                    <div
                                        key={index}
                                        className={styles['item-container']}
                                    >
                                        <div className={styles['image-container']}>
                                            <Image
                                                src={item.logo}
                                                alt='vercel'
                                                width={100}
                                                height={100}
                                                className='rounded-full mt-2 md:mt-0'
                                            />
                                        </div>
                                        <div className={styles['about-container']}>
                                            <div className={styles['title-wrapper']}>
                                                <h2 className={styles.company}>{item.company}</h2>
                                                <h4 className={styles.location}>{item.location}</h4>
                                            </div>
                                            <p className={styles.description}>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
