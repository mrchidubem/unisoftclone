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
    <section>
      <div className="sectionHead">
        <h2>How We Do It</h2>
        <h6>
          We believe innovation starts with people — their needs, challenges,
          and goals. That’s why our UX-driven process ensures every solution is
          practical, scalable, and impactful.
        </h6>
      </div>
      <div>
        <div className="grid">
          {services.map((service, index) => (
            <div key={index} className="card2">
              <Image
                src={service.icon}
                alt={service.title}
                width={64}
                height={64}
                className={styles.icon}
              />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
