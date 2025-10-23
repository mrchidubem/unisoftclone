"use client";
import React, { useEffect } from "react";
import styles from "../styles/about.module.css";
import Image from "next/image";

const AboutSection = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.active);
          }
        });
      },
      { threshold: 0.2 }
    );

    animatedElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContent}>
        {/* Left Column - Text */}
        <div className={styles.aboutText} data-animate="fade-in-left">
          <h2>About FSX Lab</h2>
          <p>
            FSX Labs is Nigeria’s center for research and innovation. We provide
            entrepreneurs, startups, and organizations with the tools and environment
            to turn new ideas into practical, scalable solutions. From projects
            testing to research-driven development, where tomorrow’s breakthroughs begin.
          </p>

          <h3>What Makes Us Standout</h3>
          <p>
            FSX Labs is known as a research/innovation space where bold ideas are
            analyzed, experimented, tested, and developed into scalable, market-ready,
            and impactful global projects within the shortest timeline. FSX Labs puts
            the question and solutions into context.
          </p>
        </div>

        {/* Right Column - Image */}
        <div className={styles.aboutImage} data-animate="fade-in-right">
          <Image 
            src="/lab1.2.jpg"  
            alt="About FSX Lab" 
            className={styles.image} 
            width={600} 
            height={352} 
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
