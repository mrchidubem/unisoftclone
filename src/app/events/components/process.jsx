'use client';
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './process.module.css'; // CSS Module

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AOS from "aos";
import 'aos/dist/aos.css';
import { steps } from 'framer-motion';

const processSteps = [
  {
    title: "Research & Discovery",
    description: "We dive deep into your brand, objectives, and audience to develop a comprehensive event strategy that aligns with your goals.",
    imageSrc: "/sec3.1.jpg" ,
    
  },
  {
    title: "Creative Development",
    description: "Our creative team develops innovative concepts that bring your vision to life while ensuring maximum impact and engagement.",
    imageSrc: "/sec3.2.png",
     
  },
  {
    title: "Strategic Planning",
    description: "Detailed planning phase where we map out every aspect of your event, from logistics to creative elements and tech integration.",
    imageSrc: "/sec3.3.jpg",
      text: [
      { point: "Strategic reveal moments" },
      { point: "Media and influencer engagement" },
      { point: "Interactive product demonstrations" },
      { point: "Digital and social integration" },
    ]
  },
  { 
    title: "Production Setup",
    description: "Our experienced production team handles all technical aspects, vendor coordination, and venue preparation with precision.",
    imageSrc: "/sec3.4.jpg" ,
      
  },
  {
    title: "Event Execution",
    description: "Flawless execution of your event with real-time coordination, problem-solving, and ensuring everything runs according to plan.",
    imageSrc: "/sec3.5.jpg" ,
      
  },
  {
    title: "Performance Analysis",
    description: "Comprehensive post-event analysis, reporting, and recommendations to measure success and improve future events.",
    imageSrc: "/sec3.6.jpg" ,
    
  }
];

const OurProcess = () => {
// useEffect(() => {
//           setTimeout(() => {
//             AOS.init({
//               duration: 1000,
//               once: false,
//             });
//           }, 100);
//         }, []);
  return (
    <section data-aos="fade-up">
      <div className="sectionHead">
        <h2>Our Process</h2>
        <h6>
          A proven methodology that ensures every event exceeds expectations
        </h6>
      </div>

      {/* <div className={styles.carousel} ref={carouselRef}> */}
       <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // modules={[Pagination]}
        spaceBetween={32}
        slidesPerView={1}
         autoplay={{
     delay: 1500,
  pauseOnMouseEnter: true,
  disableOnInteraction: false,
  // keeps autoplay running after user swipes
  }}
        navigation
        pagination={{ clickable: true }}
        //  grabCursor={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className={styles.equalHeightSwiper}
      >
      <div className='grid' >
        {processSteps.map((step, index) => (
           <SwiperSlide key={index}>
          <div className="card2" key={index} id={styles.card}>
            {step.imageSrc && (
              <Image
                src={step.imageSrc}
                alt={step.title}
                width={320}
                height={199.13}
                className={styles.cardImage}
              />
            )}
            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.description}>{step.description}</p>
          </div>
          </SwiperSlide>
        ))}
      </div>
{/* 
      <div className={styles.carouselIndicators}>
        {processSteps.map((_, index) => (
          <span
            key={index}
          
          />
        ))}
      </div> */}
      </Swiper>
    </section>
  );
};

export default OurProcess;
