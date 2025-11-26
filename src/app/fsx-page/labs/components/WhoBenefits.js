"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles/WhoBenefits.module.css";

// Data array for the benefit cards
const benefitCards = [
  {
    title: "Enterprises",
    description:
      "We create custom platforms designed for enterprise-level growth",
    image: "/lab3.1.png",
  },
  {
    title: "Startups",
    description:
      "We help bring your ideas to live and walk the journey with you",
    image: "/lab3.2.png",
  },
  {
    title: "Businesses",
    description: "Tailored solutions for prak performance and growth",
    image: "/lab3.3.png",
  },
];

const WhoBenefits = () => {
  return (
    <section>
      <div className={styles.section}>
        <div className={styles.wrapper}>
          <div className="sectionHead">
            <h2>Who Benefits</h2>

            <h6>
              FSX Labs provides businesses and institutions with the tools they
              need to innovate, automate, grow and support
            </h6>
          </div>

          <div className="grid">
            {benefitCards.map((card, index) => (
              <div
                className="card2"
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className={styles.imageWrapper}>
                  <Image
                    src={card.image}
                    alt={card.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoBenefits;
