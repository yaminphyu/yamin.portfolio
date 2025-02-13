import React, { useRef } from 'react';
import indexStyles from '@/styles/Index.module.css';
import styles from '@/styles/Contact.module.css';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdOutlineMessage } from "react-icons/md";
import useAnimation from '@/hooks/useAnimation';

export default function Contact() {
    const contactRef = useRef(null);
    const isVisible = useAnimation({ targetRef: contactRef });

    return (
        <section
            id='contact'
            className={`
                !h-full
                ${indexStyles.container}
            `}
        >
            <div
                ref={contactRef}
                className='flex flex-col h-full lg:h-[80vh] w-full lg:w-[90vw] xl:w-[80vw] p-2 box-border gap-5 md:gap-12 lg:gap-0 justify-center items-center mt-[8vh] sm:mt-[12vh]'
            >
                <div className='w-full h-full lg:h-[60vh] flex flex-col lg:flex-row justify-between lg:justify-start items-center gap-16 lg:gap-0'>
                    <div
                        className={`
                            w-full h-full flex flex-col justify-start items-start gap-10 lg:gap-16
                            transition-all duration-[1000ms] ease-in-out
                            ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
                        `}
                        style={{
                            transitionDelay: isVisible ? `${2 * 200}ms` : "0ms"
                        }}
                    >
                        <div className={`
                            flex flex-col gap-5
                            transition-all duration-[1000ms] ease-in-out
                            ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
                        `}>
                            <h1 className='uppercase text-3xl'>Do you have a projecet to discuss?</h1>
                            <div className='flex gap-3'>
                                <h2 className='uppercase text-3xl text-gray-200'>Get in touch</h2>
                                <MdOutlineMessage className='text-2xl md:text-3xl text-gray-300' />
                            </div>
                        </div>
                        <div className='flex justify-between w-full'>
                            <div
                                className={`
                                    flex flex-col gap-4 w-full
                                    transition-all duration-[1000ms] ease-in-out
                                    ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
                                `}
                                style={{
                                    transitionDelay: isVisible ? `${2 * 200}ms` : "0ms"
                                }}
                            >
                                <h2 className='uppercase text-2xl text-gray-200'>Contact</h2>
                                <a href="mailto:ymp2171995@gmail.com" className='text-cyan-500'>ymp2171995@gmail.com</a>
                            </div>
                            <div
                                className={`
                                    flex flex-col gap-4 w-full
                                    transition-all duration-[1000ms] ease-in-out
                                    ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
                                `}
                                style={{
                                    transitionDelay: isVisible ? `${3 * 200}ms` : "0ms"
                                }}
                            >
                                <h2 className='uppercase text-2xl text-gray-200'>Social Media</h2>
                                <div className='flex gap-4'>
                                    <Link
                                        href={process.env.GITHUB}
                                        target="_blank"
                                    >
                                        <FaGithub className='text-2xl md:text-3xl text-gray-300' />
                                    </Link>
                                    <Link
                                        href={process.env.LINKED_IN}
                                        target="_blank"
                                    >
                                        <FaLinkedin className='text-2xl md:text-3xl text-gray-300' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`
                            w-full h-full flex flex-col justify-start items-start gap-3
                            transition-all duration-[1000ms] ease-in-out
                            ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
                        `}
                        style={{
                            transitionDelay: isVisible ? `${3 * 200}ms` : "0ms"
                        }}
                    >
                        <h2 className='uppercase text-3xl'>Contact Form</h2>
                        <div className='flex flex-col gap-4 p-3 w-full h-full'>
                            <div
                                className={`
                                    flex flex-col gap-3
                                    transition-all duration-[1000ms] ease-in-out
                                    ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
                                `}
                                style={{
                                    transitionDelay: isVisible ? `${2 * 200}ms` : "0ms"
                                }}
                            >
                                <label htmlFor="name" className='text-gray-200'>Name</label>
                                <input type="text" name="name" id="name" className='border-2 border-gray-400 h-12 px-4 py-2 box-border bg-background text-gray-200 rounded-lg' />
                            </div>
                            <div
                                className={`
                                    flex flex-col gap-3
                                    transition-all duration-[1000ms] ease-in-out
                                    ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
                                `}
                                style={{
                                    transitionDelay: isVisible ? `${3 * 200}ms` : "0ms"
                                }}
                            >
                                <label htmlFor="email" className='text-gray-200'>Email</label>
                                <input type="email" name="email" id="email" className='border-2 border-gray-400 h-12 px-4 py-2 box-border bg-background text-gray-200 rounded-lg' />
                            </div>
                            <div
                                className={`
                                    flex flex-col gap-3
                                    transition-all duration-[1000ms] ease-in-out
                                    ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
                                `}
                                style={{
                                    transitionDelay: isVisible ? `${4 * 200}ms` : "0ms"
                                }}
                            >
                                <label htmlFor="message" className='text-gray-200'>Message</label>
                                <textarea name="message" id="message" cols="30" rows="7" className='border-2 border-gray-400 bg-background px-4 py-2 box-border text-gray-200 rounded-lg' ></textarea>
                            </div>
                            <div className={styles['button-wrapper']}>
                                <button
                                    className={styles.button}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
