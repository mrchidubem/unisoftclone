"use client";

import Image from "next/image";
import styles from "../styles/HowWeDo.module.css";

const services = [
  {
    title: "Discovery & Research",
    description: "Understand you and your product users' challenges.",
    icon: "/hw11.png",
  },
  {
    title: "Ideation & Design",
    description: "Map user journeys, create prototypes.",
    icon: "/hw1.png",
  },
  {
    title: "Development",
    description: "Build with cutting-edge tools & frameworks.",
    icon: "/hw2.png",
  },
  {
    title: "Testing & Iteration",
    description: "Refine solutions through feedback & prototype testing.",
    icon: "/hw4.png",
  },
  {
    title: "Launch & Scale",
    description: "Deploy and grow your digital product.",
    icon: "/hw5.png",
  },
  {
    title: "Ongoing Support",
    description: "Give ongoing support for future updates.",
    icon: "/hw6.png",
  },
];

export default function HowWeDo() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>How We Do It</h2>
      <p className={styles.subtitle}>
        We believe innovation starts with people — their needs, challenges, and goals. That’s why our UX-driven process ensures every solution is practical, scalable, and impactful.
      </p>

      <div className={styles.cardsWrapper}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={service.icon}
              alt={service.title}
              width={64}
              height={64}
              className={styles.icon}
            />
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDesc}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}