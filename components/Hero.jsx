import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/Hero.module.css';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Trigger the animation after the component mounts
  }, []);

  return (
      <section
        id="hero"
        className={styles.container}
      >
        <div className={`
          ${styles.wrapper}
          transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}
        `}>
          <div className={styles.introduction}>
            <h1 className={styles.title}>Frontend</h1>
            <h1 className={styles.title}>Developer</h1>
            <div className={styles.description}>
              <p className='animate-slide-in-up'>I am Yamin who works as web developer with a passion for creating beautiful and responsive websites.</p>
              <div className={styles['button-wrapper']}>
                <a href="/yaminCV.pdf" download="yaminCV.pdf">
                  <button
                    className={styles.button}
                  >
                    Download CV
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.profile}>
            <div>
              <Image
                src='/jennie-kim.png?version=12345'
                alt="Yamin"
                width={500}
                height={500}
                priority
                className={styles['profile-image']}
              />
            </div>
          </div>
        </div>
      </section>
  )
}
