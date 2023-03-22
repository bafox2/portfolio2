import type { NextPage } from "next";
import Hero from "../Components/Hero";
import Head from "next/head";
import Image from "next/image";
import Minis from "../Components/Minis";
import Skills from "../Components/Skills";
import Project from "../Components/Project";
import Stats from "../Components/Stats";
import styles from "../styles/Home.module.css";
import stats from "../stats.js";
import projects from "../projects";
import minis from "../minis";
import ParallaxItem from "../Components/ItemParallax";
import AppearItem from "../Components/ItemAppear";
import { fadeInUp, animationContainer } from "../styles/variants";
import toolbox from "../public/assets/toolbox.svg";
import HeroStats from "../Components/HeroStats";
import HeroProjects from "../Components/HeroProjects";

import { motion } from "framer-motion";
import HeroSkills from "../Components/HeroSkills";

const Home: NextPage = () => {
  const returnToTop = () => {
    window.scrollTo(0, 0);
  };

  const projectList = projects.map((project) => {
    if (project.category === "proud")
      return (
        <Project
          name={project.name}
          description={project.description}
          reason={project.reason}
          builtWith={project.builtWith}
          status={project.status}
          github={project.github}
          website={project.website}
          lessons={project.lessons}
          imagePath={project.imagePath}
        />
      );
  });

  const beginnerList = projects.map((project) => {
    if (project.category === "beginner")
      return (
        <Project
          name={project.name}
          description={project.description}
          reason={project.reason}
          builtWith={project.builtWith}
          status={project.status}
          github={project.github}
          website={project.website}
          lessons={project.lessons}
          imagePath={project.imagePath}
        />
      );
  });

  const miniList = minis.map((mini) => {
    return (
      <Project
        name={mini.name}
        description={mini.description}
        reason={mini.reason}
        builtWith={mini.builtWith}
        status={mini.status}
        github={mini.github}
        website={mini.website}
        lessons={mini.lessons}
        imagePath={mini.imagePath}
      />
    );
  });

  return (
    <>
      <main className={styles.mainContent}>
        <HeroProjects />
        {/* <ParallaxItem>
          <h2 className={styles.bigHeader}>Projects</h2>
        </ParallaxItem> */}
        <div className={styles.projects__container} id="projects">
          {projectList}
        </div>
        <HeroStats />

        <div className={styles.projects__container}>{beginnerList}</div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Stats stats={stats} />
        </motion.div>

        <div className={styles.projects__container}>{miniList}</div>
        <HeroSkills />
        <Skills />
      </main>
    </>
  );
};

export default Home;
