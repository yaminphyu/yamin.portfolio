import React, { useState } from 'react';
import indexStyles from '@/styles/Index.module.css';
import styles from '@/styles/Contact.module.css';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdOutlineMessage } from "react-icons/md";
import { FadeIn } from './FadeIn';

const ContactInfo = () => (
    <FadeIn
        delay={400}
        styleName={'w-full'}
    >
        <div className="flex flex-col gap-5">
            <h1 className="uppercase text-2xl lg:text-3xl">Do you want me to hire?</h1>
            <div className="flex gap-3">
                <h2 className="uppercase text-xl lg:text-2xl text-gray-200">Get in touch</h2>
                <MdOutlineMessage className="text-2xl md:text-3xl text-gray-300" />
            </div>
        </div>
    </FadeIn>
);

const SocialLinks = () => (
    <FadeIn
        delay={600}
        styleName={'w-full'}
    >
        <div className="flex flex-col gap-1 md:gap-4 w-full">
            <h2 className="uppercase text-xl lg:text-2xl text-gray-200">Social Media</h2>
            <div className="flex gap-4">
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
    </FadeIn>
);

const ContactForm = ({ userInformation, setUserInformation, sendEmail }) => {
    const handleChange = (e) => setUserInformation({ ...userInformation, [e.target.id]: e.target.value });

    return (
        <FadeIn
            delay={800}
            styleName={'w-full'}
        >
            <div className="flex flex-col gap-4 p-3 w-full h-full">
                {['Name', 'Email', 'Message'].map((label, index) => (
                    <FadeIn
                        key={label}
                        delay={400 + index * 200}
                        styleName={'w-full'}
                    >
                        <div className="flex flex-col gap-3">
                            <label
                                htmlFor={label.toLowerCase()}
                                className="text-gray-200"
                            >{label}</label>
                            {label === "Message" ? (
                                <textarea
                                    id={label.toLowerCase()}
                                    className="border-2 border-gray-400 bg-background px-4 py-2 box-border text-gray-200 rounded-lg"
                                    rows="7"
                                    onChange={handleChange}
                                ></textarea>
                            ) : (
                                <input
                                    type={label === "Email" ? "email" : "text"}
                                    id={label.toLowerCase()}
                                    className="border-2 border-gray-400 h-12 px-4 py-2 box-border bg-background text-gray-200 rounded-lg"
                                    onChange={handleChange}
                                />
                            )}
                        </div>
                    </FadeIn>
                ))}
                <div className={styles['button-wrapper']}>
                    <button
                        className={styles.button}
                        onClick={sendEmail}
                    >Submit</button>
                </div>
            </div>
        </FadeIn>
    );
};

export default function Contact() {
    const [userInformation, setUserInformation] = useState({
        name: '',
        email: '',
        message: '',
    });

    const sendEmail = async () => {
        const response = await fetch("/api/sendEmail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                to: "ymp2171995@gmail.com",
                subject: userInformation?.email,
                message: userInformation?.message,
            }),
        })

        const data = await response.json();
    };

    return (
        <section
            id="contact"
            className={`!h-full ${indexStyles.container}`}
        >
            <div className="flex flex-col h-full lg:h-[80vh] w-full lg:w-[90vw] xl:w-[80vw] p-2 box-border gap-5 md:gap-12 lg:gap-0 justify-center items-center mt-[8vh] sm:mt-[12vh]">
                <div className="w-full h-full lg:h-[60vh] flex flex-col lg:flex-row justify-between lg:justify-start items-center gap-16 lg:gap-0">
                    <div className="w-full h-full flex flex-col justify-start items-start gap-10 lg:gap-16 p-3 lg:p-0">
                        <ContactInfo />
                        <div className="flex flex-col lg:flex-row justify-between w-full gap-5 lg:gap-0">
                            <FadeIn
                                delay={400}
                                styleName={'w-full'}
                            >
                                <div className="flex flex-col gap-1 md:gap-4 w-full">
                                    <h2 className="uppercase text-xl lg:text-2xl text-gray-200">Contact</h2>
                                    <a href="mailto:ymp2171995@gmail.com" className="text-cyan-500">ymp2171995@gmail.com</a>
                                </div>
                            </FadeIn>
                            <SocialLinks />
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col justify-start items-start gap-3">
                        <h2 className="uppercase text-2xl lg:text-3xl">Contact Form</h2>
                        <ContactForm
                            userInformation={userInformation}
                            setUserInformation={setUserInformation}
                            sendEmail={sendEmail}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
