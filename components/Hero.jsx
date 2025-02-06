import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Hero.module.css';

export default function Hero() {
    return (
        <section
          id="hero"
          className={styles.container}
        >
          <div className={styles.wrapper}>
            <div className={styles.introduction}>
              <h1 className={styles.title}>Frontend</h1>
              <h1 className={styles.title}>Developer</h1>
              <div className={styles.description}>
                <p>I am Yamin who works as web developer with a passion for creating beautiful and responsive websites.</p>
                <div className={styles['button-wrapper']}>
                  <button
                    className={styles.button}
                    onClick={() => alert("coming soon")}
                  >
                    View my work
                  </button>
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
                  className={styles['profile-image']}
                />
              </div>
            </div>
          </div>
        </section>
    )
}
