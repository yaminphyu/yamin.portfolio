/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { skills } from "@/config";
import indexStyles from '@/styles/Index.module.css';
import styles from "@/styles/Skills.module.css";
import useAnimation from "@/hooks/useAnimation";
import { FadeIn } from "./FadeIn";
import { useScrollUrlActive } from "@/common";

export default function Skills() {
    const skillRef = useRef(null);
    const targetRef = useRef(null);

    const { isVisible, isRefVisible } = useAnimation({ mainRef: skillRef, targetRef });
    useScrollUrlActive(skillRef?.current?.id, isRefVisible);

    return (
        <section
            ref={skillRef}
            id="skills"
            className={`${indexStyles.container} !h-full`}
        >
            <div className={indexStyles.wrapper}>
                <h1 className={indexStyles.title}>
                    Skills
                </h1>
                <div
                    ref={targetRef}
                    className={`
                        ${styles['container']}
                        ${ isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10" }
                    `}
                >
                    <h2>
                        The skills, tools, and technologies I have used.
                    </h2>
                    <div className={styles.skills}>
                        {skills.map((skill, index) => (
                            <FadeIn
                                key={index}
                                delay={index * 200}
                                styleName={styles["skill-item"]}
                            >
                                <Image
                                    src={skill.icon}
                                    alt="skills"
                                    width={35}
                                    height={35}
                                    className={styles.item}
                                />
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
