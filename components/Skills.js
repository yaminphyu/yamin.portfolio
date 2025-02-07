/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { skills } from "@/config";
import styles from "@/styles/Skills.module.css";

export default function Skills() {
    const skillRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 } // Adjust the visibility threshold as needed
        );

        if (skillRef.current) {
            observer.observe(skillRef.current);
        }

        return () => {
            if (skillRef.current) {
                observer.unobserve(skillRef.current);
            }
            observer.disconnect();
        };
    }, []); // Run only once when the component mounts

    return (
        <section
            id="skills"
            className={styles.container}
        >
            <div className={styles.wrapper}>
                <h1 className={styles.title}>
                    Skills
                </h1>
                <div
                    ref={skillRef}
                    className={`
                        ${styles['skill-container']}
                        ${ isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10" }
                    `}
                >
                    <h2>
                        The skills, tools, and technologies I have used.
                    </h2>
                    <div className={styles.skills}>
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className={`
                                    ${styles["skill-item"]}
                                    ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
                                `}
                                style={{
                                    transitionDelay: isVisible ? `${index * 200}ms` : "0ms"
                                }}
                            >
                                <Image
                                    src={skill.icon}
                                    alt="skills"
                                    width={35}
                                    height={35}
                                    className={styles.item}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
