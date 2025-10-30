'use client'

import { useEffect } from "react"
import React from "react";
import styles from "./consulting.module.css";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import ButtonGroup from "@/app/components/ButtonGroup";



const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    closeMobileMenu();
  };

  const scrollToConsultingService = (e) => {
    e.preventDefault();
    const section = document.getElementById('consulting-service');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


const Consulting = () => {
  useEffect(() => {
      setTimeout(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, 100); 
    }, []);


  return (
    <div className={styles.consulting}>
      {/* Hero Section */}
      <div className="hero" data-aos="fade-up">
        <div className="heroText">
          <h1>FSX Consulting</h1>
          <p>
            Businesses don’t just need advice they need strategies that work.
            FSX Consulting provides expert guidance for startups and established
            enterprises, helping them overcome challenges and unlock growth
            opportunities in Nigeria and across Africa.
          </p>
          {/* <div >
            <ButtonGroup
              filterKeys={['fsxConsulting1', 'ExploreConsulting']}
              onClickHandlers={{
               fsxConsulting1: scrollToContact,
               ExploreConsulting: scrollToConsultingService,
              }}
            />
          </div> */}
          <div className={styles.customers}>
            <Image
              src="/customerConsulting.png"
              alt="customers image"
              width={153}
              height={48}
              className={styles.responsiveImage}
            />
            <p className={styles.subNote}>
              We have 1K+ Customers across Africa
            </p>
          </div>
        </div>
        <div className={styles.heroImg}>
          <Image
            src="/heroConsulting.png"
            alt="error 404 image"
            width={600}
            height={400}
            
          />
        </div>
      </div>

      {/* Services */}
      <section id="consulting-service" data-aos="fade-up" >
        <div className="sectionHead">
          <h2>Our Consulting Services</h2>
          <h6>
            We bridge the gap between business strategy and technology
            execution, delivering comprehensive solutions that drive sustainable
            growth for Nigerian businesses.
          </h6>
        </div>

        <div className="grid">
          <div className="card1">
            <h4 className={styles.card1head}>Business Consulting</h4>
            <p>
              Strategic guidance to optimize operations, improve efficiency, and
              drive growth.
            </p>
            <ul>
              <li>Strategy & Development</li>
              <li>Market Analysis & Positioning</li>
              <li>Growth Planning & Roadmaps</li>
              <li>Competitive Intelligence</li>
            </ul>
          </div>
          <div className="card1">
            <h4 className={styles.card1head}>Digital Transformation</h4>
            <p>
              Modernize your business with cutting-edge technology solutions and
              digital strategies.
            </p>
            <ul>
              <li>Technology Strategy</li>
              <li>System Integration</li>
              <li>Enterprise Solutions</li>
              <li>Automation</li>
            </ul>
          </div>
          <div className="card1">
            <h4 className={styles.card1head}>Community Programs</h4>
            <p>
              Build engaged communities around your brand and foster meaningful
              connections.
            </p>
            <ul>
              <li>Community Strategy</li>
              <li>Engagement Planning</li>
              <li>Content & Programming</li>
              <li>Growth & Retention Tactics</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section data-aos="fade-up">
        <div className="sectionHead">
          <h2>Our Proven Approach</h2>
          <h6>
            We follow a systematic methodology that bridges strategic thinking
            with practical execution, ensuring every project delivers measurable
            results and sustainable growth.
          </h6>
        </div>

        <div className={styles.approachStages}>
          <div className={styles.approachStagesCardContainer}>
            <div className="card2">
              <p className={styles.approachStagesCount}>1</p>
              <h4>Strategic Analysis</h4>
              <p>Deep dive into your business goals and challenges</p>
            </div>
            <div className="card2">
              <p className={styles.approachStagesCount}>2</p>
              <h4>Solution Design</h4>
              <p>Deep dive into your business goals and challenges</p>
            </div>
            <div className="card2">
              <p className={styles.approachStagesCount}>3</p>
              <h4>Implementation</h4>
              <p>Deep dive into your business goals and challenges</p>
            </div>
            <div className="card2">
              <p className={styles.approachStagesCount}>4</p>
              <h4>Optimization</h4>
              <p>Deep dive into your business goals and challenges</p>
            </div>
          </div>

          <div className={styles.approachImage}>
            <Image
              src="/approachConsulting.png"
              alt="consulting approach image"
              width={500}
              height={500}
          
            />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section data-aos="fade-up">
        <h2 className={styles.missionSectionHead}>Our Mission</h2>
        <div className={styles.coreMission}>
          <Image
            src="/missionConsulting.png"
            alt="consulting approach image"
            width={650}
            height={350}
            className={styles.responsiveImage}
          />

          <div className={styles.coreMissionContainer}>
            <div className={styles.consultMissionAbout}>
              <Image
                src="/consultingMissionIcon.png"
                alt="consulting coremission icon"
                width={16}
                height={16}
                className={styles.coreMissionPic}
              />
              <p>About us</p>
            </div>

            <div className={styles.coreMissionText}>
              <h3>
                The Core Mission Behind
                <span> all our work</span>
              </h3>
              <p>
                Equips startups and enterprises with smart strategies to build
                smarter and scale faster
              </p>
            </div>
            <Link href="/about">
              <div className="button2">Learn More</div>
            </Link>
          </div>
        </div>

        <div className={styles.stats}>
          <div>
            <h3>12+</h3>
            <h6>Years in Business</h6>
            <span className={styles.statp}>
              A decade of trusted consulting experience.
            </span>
          </div>
          <div>
            <h3>30+</h3>
            <h6>Projects Delivered</h6>
            <span className={styles.statp}>
              Real-world solution that achieved measurable results
            </span>
          </div>
          <div>
            <h3>95%</h3>
            <h6>Client Retention Rate</h6>
            <span className={styles.statp}>
              Our clients comes back, which says everything
            </span>
          </div>
          <div>
            <h3>5+</h3>
            <h6>Businesses Impacted</h6>
            <span className={styles.statp}>
              A lot of business has benefited from our solutions spanrovided.
            </span>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section  data-aos="fade-up">
        <div className="sectionHead">
          <h2>Why Our Expertise Matters</h2>
          <h6>
            Empowering businesses with expert insights to thrive, adapt, and
            grow.
          </h6>
        </div>

        <div className={styles.whyGrid}>
          <div className="card3">
            <Image
              src="/cExperience.png"
              alt="consulting approach image"
              width={60}
              height={60}
              className={styles.responsiveImage}
            />
            <h3>Experience</h3>
            <p>Decade of insight fuel smarter decisions and faster execution</p>
          </div>

          <div className="card3">
            <Image
              src="/cData.png"
              alt="consulting approach image"
              width={60}
              height={60}
              className={styles.responsiveImage}
            />
            <h3>Data Driven Insight</h3>
            <p>Decade of insight fuel smarter decisions and faster execution</p>
          </div>

          <div className="card3">
            <Image
              src="/cClient.png"
              alt="consulting approach image"
              width={60}
              height={60}
              className={styles.responsiveImage}
            />
            <h3>Client Approach</h3>
            <p>Decade of insight fuel smarter decisions and faster execution</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consulting;
