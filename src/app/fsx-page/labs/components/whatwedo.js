"use client";

import Image from "next/image";
import styles from "../styles/WhatWeDo.module.css";

const services = [
  {
    title: "Software Development",
    description: "Scalable apps and platforms built to solve real problems.",
    icon: "/whatwe2.1.png",
  },
  {
    title: "AI Tools",
    description: "Smart solutions that turn data into actionable insights.",
    icon: "/whatwe2.2.png",
  },
  {
    title: "Automation",
    description: "Streamlining processes to save time and costs.",
    icon: "/whatwe2.3.png",
  },
  {
    title: "Innovative Platform",
    description: "Creating digital ecosystems for the future.",
    icon: "/whatwe11.png",
  },
  {
    title: "Design Thinking",
    description: "Human-Centered approach from ideation to prototype.",
    icon: "/whatwe22.png",
  },
  {
    title: "DevSecOps",
    description:
      "Development and security operations during our deployment process.",
    icon: "/whatwe2.6.png",
  },
];

export default function WhatWeDo() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>What We Do</h2>
      <p className={styles.subtitle}>
        FSX Labs provides businesses and institutions with the tools they need
        to innovate, automate, and grow.
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
