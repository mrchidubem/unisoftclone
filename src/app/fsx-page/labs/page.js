 'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './styles/labs.module.css';
import Aboutus from './components/about';
import WhatWeDo from './components/whatwedo';
import ShapingAfrica from './components/shapingAfrica';
import HowWeDo from './components/HowWeDo';
import WhoBenefits from './components/WhoBenefits';
import ButtonGroup from "@/app/components/ButtonGroup";


// Scroll to Contact section
const scrollToContact = (e) => {
  e.preventDefault();
  const section = document.getElementById('contact');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

  // Scroll to Brand Family section
  const scrollToBrandFamily = (e) => {
    e.preventDefault();
    const section = document.getElementById('what-we-do');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

export default function Labs() {
  return (
  <>
    {/* ===== Hero Section ===== */}
    <div className="hero" data-aos="fade-up">
      <div className="heroText">
        <h1>FSX Lab</h1>
        <p>
          Every great idea needs a space to grow. FSX Labs is where research,
          creativity, and technology meet. We help you transform ideas into
          prototypes, strategies, and innovations for the future.
        </p>

        <div className={styles.heroBtns}>
          <ButtonGroup
            filterKeys={['fsxlabs1', 'ExploreLabs']}
            onClickHandlers={{
              fsxlabs1: scrollToContact,
              ExploreLabs: scrollToBrandFamily,
            }}
          />
        </div>
      </div>

      <div className={styles.heroImg}>
        <Image
          src="/heroConsulting.png"
          alt="FSX Lab Team"
          fill={false}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
          priority
        />
      </div>
    </div>

      {/* ===== About Us Section ===== */}
      <Aboutus />

      {/* ===== What we do Section ===== */}
      <WhatWeDo />

      {/* Shaping Africa Section */}
      <ShapingAfrica />

      {/* How We Do */}
      <HowWeDo />

      {/* Who Benefits */}
      <WhoBenefits />

    </>
  );
}
