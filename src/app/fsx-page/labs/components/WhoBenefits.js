"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles/WhoBenefits.module.css";

// Data array for the benefit cards
const benefitCards = [
  {
    title: "Enterprises",
    description: "We create custom platforms designed for enterprise-level growth",
    image: "/lab3.1.png",
  },
  {
    title: "Startups",
    description: "We help bring your ideas to live and walk the journey with you",
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
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Who Benefits
        </motion.h2>

        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          FSX Labs provides businesses and institutions with the tools they need to innovate, automate, grow and support
        </motion.p>

        <div className={styles.cardGrid}>
          {benefitCards.map((card, index) => (
            <motion.div 
              className={styles.card} 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className={styles.imageWrapper}>
                <Image src={card.image} alt={card.title} layout="fill" objectFit="cover" />
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoBenefits;