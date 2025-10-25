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


// FSX Tech Landing Page
const FSXTech = () => {
  const swiperRef = useRef(null);

  // Init AOS animations
  useEffect(() => {
    setTimeout(() => {
      AOS.init({ duration: 1000, once: true });
    }, 100);
  }, []);

  // Swiper navigation
  const handlePrev = () => swiperRef.current?.swiper.slidePrev();
  const handleNext = () => swiperRef.current?.swiper.slideNext();

  return (
    <div className={styles.tech}>
      {/* HERO */}
      <div className="hero" data-aos="fade-up">
        <div className="heroText">
          
            <h1>FSX Tech</h1>
          <p>
            Technology should simplify, not complicate. At FSX Tech, we design and deliver IT and digital solutions that help businesses in Nigeria and beyond run smoother, faster, and smarter.
          </p>
          
          <div className={styles.heroBtns}>
            <Link href="#contact" legacyBehavior>
              <a className={`${styles.button2} ${styles.accentButtonHero}`}>Get Started</a>
            </Link>
            <Link href="#services" legacyBehavior>
              <a className={`${styles.button2} ${styles.variant8Button}`}>Explore Services</a>
            </Link>
          </div>
        </div>
        <div className={styles.heroImg}>
          <Image src="/frame-321.png" alt="Hero Image" width={600} height={400} />
        </div>
      </div>

      {/* ABOUT */}
      <section className={styles.about} data-aos="fade-up">
        <div className={styles.aboutText}>
          <h3>About FSX Tech</h3>
          <p>
            We deliver innovative IT and digital solutions that help businesses transform operations through technology.
          </p>
          <p>
            From laptops and CCTV systems to network infrastructure and consulting, FSX Tech provides complete digital solutions tailored to your needs.
          </p>

          <h3>Why Choose FSX Tech?</h3>
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
          <Image src="/workstation.png" alt="3D Workstation" width={600} height={400} />
        </div>
      </section>

      {/* SERVICES */}
      <section className={styles.services} id="services" data-aos="fade-up">
        <div className="sectionHead">
          <h2>Our Services</h2>
          <h6>
            We offer IT and digital solutions that simplify operations and drive growth across Nigeria and beyond.
          </h6>
        </div>

        <div className={styles.cardsGrid}>
          {[
            { img: "/Core value section Icon (2).png", title: "Security Solution", desc: "CCTV systems, access control, and monitoring to protect your assets." },
            { img: "/monitor (1).png", title: "IT Equipment Supply", desc: "Laptops, printers, smart office automation, and conference cameras." },
            { img: "/Network (2).png", title: "Network Infrastructure", desc: "Routers, switches, and wireless solutions for reliable connectivity." },
            { img: "/Settings (1).png", title: "IT Consulting", desc: "Technology planning and digital transformation strategies." },
            { img: "/certification-icon.svg", title: "Technical Support", desc: "24/7 support and maintenance to keep systems running smoothly." },
            { img: "/innovation-hub-icon.svg", title: "Digital Solutions", desc: "Custom software and digital tools to enhance productivity." },
          ].map((s, i) => (
            <div className="card3" key={i}>
              <Image src={s.img} alt={s.title} width={60} height={60} className={styles.responsiveImage} />
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className={styles.products} data-aos="fade-up">
        <div className="sectionHead">
          <h2>Featured Products</h2>
          <h6>Premium IT equipment and technology for Nigerian businesses.</h6>
        </div>

        <div className={styles.swiperContainer}>
          <button className={styles.swiperButtonPrev} onClick={handlePrev}><ChevronLeft /></button>
          <Swiper
            ref={swiperRef}
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={3}
            loop
            autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 16 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            pagination={{ clickable: true }}
          >
            {[
              { img: "/frame-384.png", title: "Laptops & Desktops", desc: "High-performance devices for modern business." },
              { img: "/cctv.png", title: "CCTV Security Systems", desc: "Complete surveillance solutions for protection." },
              { img: "/frame-230.png", title: "Network Equipment", desc: "Routers, switches, and hardware for stable connectivity." },
              { img: "/printermain.png", title: "Printers", desc: "Reliable printing for office environments." },
            ].map((p, i) => (
              <SwiperSlide key={i}>
                <div className="card2">
                  <Image src={p.img} alt={p.title} width={300} height={200} className={styles.responsiveImage} />
                  <h4>{p.title}</h4>
                  <p className={styles.productDesc}>{p.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className={styles.swiperButtonNext} onClick={handleNext}><ChevronRight /></button>
        </div>

        <div className={styles.productsFooter}>
          <p><em>Need custom configurations or bulk orders?</em></p>
          <Link href="#contact" legacyBehavior>
            <a className={styles.accentButton}>Request Custom Quote</a>
          </Link>
        </div>
      </section>

      {/* CONTACT ANCHOR */}
      <div id="contact"></div>
    </div>
  );
};

export default FSXTech;
