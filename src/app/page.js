"use client";

import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import CountUp from "react-countup";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ButtonGroup from "./components/ButtonGroup";

export default function HomePage() {
  useEffect(() => {
    setTimeout(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, 100);
  }, []);

  // Scroll to Brand Family section
  const scrollToBrandFamily = (e) => {
    e.preventDefault();
    const section = document.getElementById("brand-family");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll to Contact section
  const scrollToContact = (e) => {
    e.preventDefault();
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      {/* === HERO === */}
      <div className={styles.heroBackground}>
        <section className={styles.heroMain} data-aos="fade-up">
          <div className={styles.overlay}>
            <h1 className={styles.typewriter}>
           
                Building Smarter, Scaling
                <span className={styles.mobileBreak}></span> Faster
                <span className={styles.desktopBreak}></span> <br /> Engineering
                Experiences, <br />
                and Empowering Growth
             
            </h1>

            <p className={styles.description}>
              Fransunisoft is a Nigeria-based ecosystem designed to fuel
              innovation, empower brands, and connect communities. With six
              dynamic branches and Experiences — FSX Events, FSX Consulting, FSX Tech, FSX
              Academy, FSX Labs, and FSX Connect. We provide solutions that help
              businesses and individuals thrive in today’s fast-changing world.
            </p>

            <ButtonGroup
              filterKeys={["discover", "start"]}
              onClickHandlers={{
                discover: scrollToBrandFamily,
                start: scrollToContact,
              }}
            />
          </div>
        </section>
      </div>

      {/* === WHAT MAKES US DIFFERENT === */}
      <section data-aos="fade-up">
        <div className={styles.fsxSection}>
          <div className={styles.fsxHeading}>
            <h2>What Makes Us Different</h2>
            <h6>
              Beyond traditional boundaries – we integrate, execute, and
              transform
            </h6>
          </div>

          <div className={styles.fsxRow}>
            <div className={styles.fsxContent}>
              <h3>The FSX Advantage</h3>
              <p>
                Unlike traditional consulting firms or tech companies that focus
                on one area,
                <span style={{ color: "#0D519A", fontWeight: "bold" }}>
                  {" "}
                  Fransunisoft{" "}
                </span>
                integrates strategy, technology, learning, community, and
                industries under one ecosystem (FSX).
                <br />
                We deliver holistic solutions on short and long-term execution,
                focusing on outcomes for individuals, communities, businesses,
                and industries.
              </p>

              <h3>How We Deliver Results</h3>
              <ul className={styles.fsxList}>
                <li>
                  Integrated ecosystem – strategy, tech, training, and community
                  partnerships with continuous support
                </li>
                <li>End-to-end execution with hands-on implementation</li>
                <li>Long-term partnerships with continuous support</li>
                <li>Outcome-driven execution with measurable value</li>
                <li>Deep African market expertise with global standards</li>
              </ul>
              <a href="/about" className={styles.fsxButton}>
                Learn More About Our Journey
              </a>
            </div>

            <div className={styles.fsxImage}>
              <Image
                src="/F_What.png"
                alt="FSX Advantage"
                width={500}
                height={1000}
                style={{ width: "100%", height: "auto" }}
                className={styles.fsxImage}
              />
            </div>
          </div>

          <div className={styles.fsxStats}>
            <div className={styles.stat}>
              <div className={styles.countBlock}>
                <CountUp end={50} duration={2} separator="," enableScrollSpy />
                <span className={styles.plus}>+</span>
              </div>
              <div className={styles.label}>Events Coordinated</div>
            </div>

            <div className={styles.stat}>
              <div className={styles.countBlock}>
                <CountUp
                  end={100000}
                  duration={2.5}
                  separator=","
                  enableScrollSpy
                />
                <span className={styles.plus}>+</span>
              </div>
              <div className={styles.label}>Youth Trained</div>
            </div>

            <div className={styles.stat}>
              <div className={styles.countBlock}>
                <CountUp end={3} duration={1.5} separator="," enableScrollSpy />
                <span className={styles.plus}>+</span>
              </div>
              <div className={styles.label}>Community Managed</div>
            </div>

            <div className={styles.stat}>
              <div className={styles.countBlock}>
                <CountUp end={10} duration={2} separator="," enableScrollSpy />
                <span className={styles.plus}>+</span>
              </div>
              <div className={styles.label}>Start Up Launched</div>
            </div>
          </div>
        </div>
      </section>

      {/* === BRAND FAMILY SECTION === */}
      <section
        id="brand-family"
        className={styles.brandFamily}
        data-aos="fade-up"
      >
        <div className={styles.intro}>
          <h2 className={styles.ecosystemBanner}>Our Ecosystem Services</h2>
          

          <h2 className={styles.heading}>The FSX Brand Family</h2>
          <h6 className={styles.subText}>
            Fransunisoft is more than one company <br />
            it’s a family of solutions tailored to help businesses and
            individuals succeed.
          </h6>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>FSX Consulting</h3>
            <p className={styles.cardTagline}>“Build Smarter. Scale Faster.”</p>
            <p className={styles.cardDescription}>
              Business consulting, digital transformation, and community
              programs that bridge strategy with real tech execution and impact.
            </p>
            <Link href="/fsx-page/consulting" className={styles.learnMoreBtn}>
              Learn More
            </Link>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>FSX Labs</h3>
            <p className={styles.cardTagline}>
              “Empowering innovators today, not tomorrow.”
            </p>
            <p className={styles.cardDescription}>
              Platforms, automation, and innovation programs for building
              scalable solutions from scratch.
            </p>
            <Link href="/fsx-page/labs" className="button2">
              Learn More
            </Link>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>FSX Tech</h3>
            <p className={styles.cardTagline}>“Smart Tech. Simplified.”</p>
            <p className={styles.cardDescription}>
              Computer accessories, gadgets, and electronics procurement
              providing reliable, affordable enterprise technology solutions.
            </p>
            <Link href="/fsx-page/tech" className="button2">
              Learn More
            </Link>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>FSX Events</h3>
            <p className={styles.cardTagline}>“Where brands come to life.”</p>
            <p className={styles.cardDescription}>
              Brand activations, corporate events, and community programs with
              global-standard execution.
            </p>
            <Link href="/fsx-page/events" className="button2">
              Learn More
            </Link>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>FSX Connect</h3>
            <p className={styles.cardTagline}>
              “Connecting Ideas, Empowering Impact.”
            </p>
            <p className={styles.cardDescription}>
              Connecting communities and brands through digital platforms and
              strategic partnerships.
            </p>
            <Link href="/fsx-page/connect" className="button2">
              Learn More
            </Link>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>FSX Academy</h3>
            <p className={styles.cardTagline}>“From Learning to Leading.”</p>
            <p className={styles.cardDescription}>
              Training and learning programs designed to empower individuals and
              teams with future-ready skills.
            </p>
            <Link href="/fsx-page/academy" className="button2">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* === PARTNERS === */}
      <section className={styles.partnersSection} data-aos="fade-up">
        <div className={styles.partnersIntro}>
          <h2 className={styles.partnersHeading}>Our Partners</h2>
          <h2 className={styles.partnersSubText}>
            Join Brands and Organisations <br /> That Partner With Us
          </h2>
        </div>

        <div className={styles.logoScroller}>
          <div className={styles.logoTrack}>
            <div className={styles.logoItem}>
              <Image
                src="/F_3MTT Landscape_Logo.png"
                alt="SMIT"
                width={200}
                height={100}
              />
            </div>
            <div className={styles.logoItem}>
              <Image
                src="/F_trevauty.png"
                alt="SMIT"
                width={220}
                height={100}
              />
            </div>
            <div className={styles.logoItem}>
              <Image src="/F_GDG.png" alt="GDG" width={200} height={100} />
            </div>
            <div className={styles.logoItem}>
              <Image
                src="/F_Andela2.png"
                alt="Andela"
                width={200}
                height={100}
              />
            </div>
            <div className={styles.logoItem}>
              <Image
                src="/F_Subtract.png"
                alt="SMIT"
                width={200}
                height={100}
              />
            </div>

            <div className={styles.logoItem}>
              <Image
                src="/F_3MTT Landscape_Logo.png"
                alt="SMIT"
                width={200}
                height={100}
              />
            </div>
            <div className={styles.logoItem}>
              <Image
                src="/F_trevauty.png"
                alt="SMIT"
                width={220}
                height={100}
              />
            </div>
            <div className={styles.logoItem}>
              <Image src="/F_GDG.png" alt="GDG" width={200} height={100} />
            </div>
            <div className={styles.logoItem}>
              <Image
                src="/F_Andela2.png"
                alt="Andela"
                width={200}
                height={100}
              />
            </div>
            <div className={styles.logoItem}>
              <Image
                src="/F_Subtract.png"
                alt="SMIT"
                width={200}
                height={100}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
