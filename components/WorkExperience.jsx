import React from 'react';
import indexStyles from '@/styles/Index.module.css';
import styles from '@/styles/WorkExperience.module.css';
import Image from 'next/image';
import { workExperiences } from '@/config';
import { FadeIn } from './FadeIn';

export default function WorkExperience() {
    return (
        <section
            id='work-experience'
            className={`!h-full md:!h-screen ${indexStyles.container}`}
        >
            <div className={styles.wrapper}>
                <h1 className={indexStyles.title}>
                    Work Experience
                </h1>

                <div className={styles['main-wrapper']}>
                    <FadeIn
                        delay={300}
                        styleName={styles.line}
                    ></FadeIn>

                    {
                        workExperiences.map((item, index) => (
                            <FadeIn
                                key={index}
                                delay={index * 100}
                                styleName={`
                                    relative w-full flex justify-center
                                    ${index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'}
                                `}
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
                            </FadeIn>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
