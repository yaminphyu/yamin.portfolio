import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <CustomCursor>
      <Header />
        <div className="w-full flex flex-col justify-center items-center absolute mt-[1vh] sm:mt-0">
          <Hero />
          <AboutMe />
          <Skills />
          <WorkExperience />
          <Contact />
        </div>
    </CustomCursor>
  );
}
