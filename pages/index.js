import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import { FaArrowUpLong } from "react-icons/fa6";
import styles from '@/styles/Index.module.css';

export default function Home() {
  return (
    <CustomCursor>
      <Header />
      <div className={styles['body-wrapper']}>
        <Hero />
        <AboutMe />
        <Skills />
        <WorkExperience />
        <Contact />
      </div>
      <div
        className={styles['scroll-up']}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FaArrowUpLong className={styles['scroll-up-icon']} />
      </div>
    </CustomCursor>
  );
}
