'use client';
import React, { useRef, useEffect } from "react";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import AOS from "aos";
import 'swiper/css';
import 'swiper/css/pagination';
import styles from "./FSXTech.module.css";
import Link from 'next/link';
import Image from "next/image";
import ButtonGroup from "@/app/components/ButtonGroup";

// Scroll Handlers
const closeMobileMenu = () => {};

const scrollToContact = (e) => {
  e.preventDefault();
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
  closeMobileMenu();
};

const scrollToExplore = (e) => {
  e.preventDefault();
  const section = document.getElementById('services');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
  closeMobileMenu();
};

/**
 * FSX Tech Component - Cleaned and formatted for optimal rendering.
 * Handles hero, about, services, and products sections with Swiper carousel.
 */

const FSXTech = () => {
  const swiperRef = useRef(null);
  const paginationRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      AOS.init({ duration: 1000, once: true });
    }, 100);
  }, []);

  const handlePrev = () => swiperRef.current?.swiper.slidePrev();
  const handleNext = () => swiperRef.current?.swiper.slideNext();

  // 4 unique products, duplicated for loop (total 8; clones hidden internally)
  const baseProducts = [
    { img: "/frame-384.png", title: "Laptops & Desktops", desc: "High-performance computing devices for modern business needs." },
    { img: "/cctv.png", title: "CCTV Security Systems", desc: "Comprehensive security camera solutions for business protection." },
    { img: "/frame-230.png", title: "Network Equipment", desc: "Routers, switches, and networking hardware for reliable connectivity." },
    { img: "/printermain.png", title: "Printer and scanner", desc: "Routers, switches, and networking hardware for reliable connectivity." },
  ];
  const products = [...baseProducts, ...baseProducts];  // Double for seamless loop

  return (
    <div className={styles.tech}>
      {/* Hero */}
      <div className="hero" data-aos="fade-up">
        <div className="heroText">
          <h1>FSX Tech </h1>
          <p>
            Technology should simplify, not complicate. 
            At FSX Tech, we design and deliver IT and digital 
            solutions both hard ware and software that help businesses in Nigeria and beyond run smoother,
             faster, and smarter.
             </p>

          <div  >
            <ButtonGroup
              filterKeys={['fsxtech1', 'ExploreTech']}
              onClickHandlers={{
                fsxtech1: scrollToContact,
                ExploreTech: scrollToExplore,
              }}
            />
          </div>
        </div>

        <div className={styles.heroImg}>
          <Image 
            src="/frame-321.png" 
            alt="Hero Image"
            width={600} 
            height={400} 
         
          />
        </div>
      </div>

      {/* About */}
      <section className={styles.about} data-aos="fade-up">
        
        <div className={styles.aboutText}>
          <h3 className={styles.aboutfsxtech}>About FSX Tech</h3>
          <p className={styles.aboutparagraph}>
              At FSX Tech, We are a leading provider of smart digital and IT solutions in Nigeria, 
              dedicated to helping businesses transform their operations through innovative technology.</p>
          <p>
            Our mission is to deliver IT and digital solutions that help businesses run smoother, 
            faster, and smarter. From laptops and CCTV systems to network infrastructure and digital transformation consulting,
             we provide comprehensive technology solutions tailored to your business needs.         
              </p>

          <h5 className={styles.aboutwhy}>Why Choose FSX Tech?</h5>
          <ul className={styles.featuresList}>
            {[
              "Simplify technology for business growth",
              "Delivering reliable and scalable solutions",
              "Providing exceptional customer support",
              "Staying ahead with latest technology trends",
              "Building long-term partnerships with clients",
            ].map((f, i) => (
              <li key={i}>
                <CheckCircle size={16} />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.aboutImage}>
          <Image 
            src="/workstation.png" 
            alt="3D Workstation"
            width={500} 
            height={500} 
            className={styles.responsiveImage}
            sizes="(max-width: 768px) 100vw, 50vw" /* NEW: Match hero for consistency */
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </section>

      {/* Services */}
      <section className={styles.services} id="services" data-aos="fade-up">
        <div className="sectionHead">
          <h2>Our Services</h2>
          <h6>
              We provide comprehensive IT solutions and smart technolofies designed to simplify operations and drive business growth across Nigeria and beyond.          </h6>
        </div>

        <div className="grid">
          {[
            { img: "/Core value section Icon (2).png", title: "Security Solution", desc: "CCTV systems, access control, and monitoring to protect your assets." },
            { img: "/monitor (1).png", title: "IT Equipment Supply", desc: "Laptops, printers, smart office automation, and conference cameras." },
            { img: "/Network (2).png", title: "Network Infrastructure", desc: "Routers, switches, and wireless solutions for reliable connectivity." },
            { img: "/Settings (1).png", title: "IT Consulting", desc: "Technology planning and digital transformation strategies." },
            { img: "/certification-icon.svg", title: "Technical Support", desc: "24/7 support and maintenance to keep systems running smoothly." },
            { img: "/innovation-hub-icon.svg", title: "Digital Solutions", desc: "Custom software and digital tools to enhance productivity." },
          ].map((s, i) => (
            <div className="card3" key={i}>
              <Image src={s.img} alt={s.title} width={60} height={60} />
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className={styles.products} data-aos="fade-up">
        
        <div className="sectionHead">
          <h2>Featured Products</h2>
          <h6>Premium IT equipment and technology solutions tailored for Nigerian businesses.</h6>
        </div>

        <div className={styles.swiperContainer}>
          <button className={styles.swiperButtonPrev} onClick={handlePrev}>
            <ChevronLeft />
          </button>
          <Swiper
            ref={swiperRef}
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={4}
            loop
            autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 24 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
            pagination={{ el: paginationRef.current, clickable: true }}
          >
            {products.map((p, i) => (
             <SwiperSlide key={i}>
  <div className="card2">
    <div className={styles.productCard}>  {/* New wrapper: Scoped fixes here */}
      <Image src={p.img} alt={p.title} width={200} height={140} className={styles.responsiveImage} />
      <h4>{p.title}</h4>
      <p className={styles.productDesc}>{p.desc}</p>
    </div>
  </div>
</SwiperSlide>
            ))}
          </Swiper>
          <button className={styles.swiperButtonNext} onClick={handleNext}>
            <ChevronRight />
          </button>
          {/* External pagination container - bullets render here, below slides */}
          <div ref={paginationRef} className={styles.swiperPagination}></div>
        </div>

        <div className={styles.productsFooter}>
          <p><em>Need custom configurations or bulk orders?</em></p>
          <a 
            href="#" 
            className={styles.accentButton} 
            onClick={scrollToContact}
          >
            Request Custom Quote
          </a>
        </div>
      </section>

      {/* Contact Anchor */}
      <div id="contact"></div>
    </div>
  );
};

export default FSXTech;