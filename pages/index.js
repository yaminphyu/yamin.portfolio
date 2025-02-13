import AboutMe from "@/components/AboutMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="w-full flex flex-col justify-center items-center absolute mt-[1vh] sm:mt-0">
        <Hero />
        <AboutMe />
        <Skills />
        <WorkExperience />
      </div>
    </div>
  );
}
