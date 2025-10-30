"use client";
import styles from '../styles/shafrc.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

const data = [
  {
    title: 'Innovation Hub',
    text: "Imagine a space where bold ideas come alive; that's exactly what our innovation labs in Nigeria are built for.",
    img: '/lab2.1.png',
  },
  {
    title: 'Research and Development Africa',
    text: "We’re pushing the boundaries of research and development across Africa, turning today’s challenges into tomorrow’s opportunities.",
    img: '/lab2.2.png',
  },
  {
    title: 'Prototype Testing',
    text: "Before your product hits the market, our hands-on prototype testing ensures it’s refined, reliable, and ready to impress.",
    img: '/lab2.3.png',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ShapingAfrica = () => {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.heading}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <h2>Shaping the Future of Technology in Africa</h2>
        <p>
          Together, we’ll engineer the tools that shape Africa. From concept to
          prototype to market-ready product, FSX Labs is your partner in
          innovation.
        </p>
      </motion.div>

      <div className={styles.grid}>
        {data.map((item, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <div className={styles.image}>
              <Image
                src={item.img}
                alt={item.title}
                width={500}
                height={300}
                className={styles.img}
              />
            </div>
            <div className={styles.content}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ShapingAfrica;
