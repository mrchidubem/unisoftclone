"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./events.module.css";
import OurProcess from "./components/process.jsx";
import { useCallback, useEffect } from "react";
import ButtonGroup from "@/app/components/ButtonGroup";
import AOS from "aos";
import 'aos/dist/aos.css';

const PAGE_TITLE = "FSX Events";
const PAGE_DESCRIPTION =
  "We design and execute world-class events that combines cutting-edge technologies and creative storytelling. From intimate corporate gatherings to large-scale brand activations, we transform your vision into unforgettable experiences across Nigeria and Africa.";

const ALL_CARDS = [
  {
    id: 1,
    title: "Product Launch",
    description:
      "Create buzz and excitement around your new product with a memorable launch experience that captures media attention and drives sales.",
    linkText: "Discover Product Services",
    imageSrc: "/sec2.1.png",
    services: [
      { text: "Strategic reveal moments" },
      { text: "Media and influencer engagement" },
      { text: "Interactive product demonstrations" },
      { text: "Digital and social integration" },
    ],
  },
  {
    id: 2,
    title: "Coporate Mixers",
    description:
      "Foster connections and build relationships in a relaxed yet professional setting designed for networking and team building.",
    linkText: "View Conference Solutions",
    imageSrc: "/sec2.2.png",
    services: [
      { text: "Strategic networking activities" },
      { text: "Professional yet relaxed atmosphere" },
      { text: "Catering and entertainment options" },
      { text: "Brand-aligned theming" },
    ],
  },
  {
    id: 3,
    title: "Conferences",
    description:
      " Host impactful gatherings that educate, inspire, and connect industry leaders through thoughtfully curated content and experiences.",
    linkText: "Plan Your Conference ",
    imageSrc: "/sec2.3.png",
    services: [
      { text: "Content strategy and speaker management" },
      { text: "Interactive breakout sessions" },
      { text: "Networking opportunities" },
      { text: "Technology integration and live streaming" },
    ],
  },
  {
    id: 4,
    title: "Award Ceremonies",
    description:
      "Celebrate achievements and honor excellence with a sophisticated ceremony that leaves lasting memories for honorees and attendees",
    linkText: "Book Team Retreats",
    imageSrc: "/sec2.4.jpg",
    services: [
      { text: "Red carpet reception" },
      { text: "Professional staging and lighting" },
      { text: "Custom trophy and award design" },
      { text: "Live entertainment and presentation" },
    ],
  },
  {
    id: 5,
    title: "Team Building Events",
    description:
      "Strengthen collaboration and morale with engaging activities designed to improve communication and foster team unity.",
    linkText: "Digital Event Solutions",
    imageSrc: "/sec2.5.jpg",
    services: [
      { text: "Customized team challenges" },
      { text: "Professional facilitators" },
      { text: "Indoor and outdoor options" },
      { text: "Post-event assessment and feedback" },
    ],
  },
  {
    id: 6,
    title: "Immersive Experiences",
    description:
      "Transport your audience to new dimensions with cutting-edge engagement and virtual reality technologies that create unforgettable brand moments.",
    linkText: "Create Your Experience",
    imageSrc: "/sec2.6.png",
    services: [
      { text: " Custom AR/VR content developments" },
      { text: " Multi-sensory experiences" },
      { text: " Interactive digital environments" },
      { text: " Social Sharing Integration" },
    ],
  },
];

// --- EventServicesSection Component ---
function EventServicesSection() {
 

  return (
    // <section id="ourservices" className={styles.servicesSection}>
    <section id="ourservices" data-aos="fade-up">
      <div className="sectionHead" >
        <h2>Our Event Services</h2>
        <h6>
          Comprehensive event solutions designed to elevate your brand and
          engage your audience.
        </h6>
      </div>

      <div className="grid">
        {ALL_CARDS.map((card, index) => (
          <div key={index} className='card1'>
            <Image
                src={card.imageSrc}
                alt={card.title}
                width={320}
                height={163}
                objectFit="contain"
                className={styles.cardImage}
              />
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDescription}>{card.description}</p>

            {card.services.map((service, i) => (
              <div key={i} className={styles.serviceListItem}>
                <Image
                src="/checkmark-event.png"
                alt={card.title}
                width={29.17}
                height={29.17}
                // className={styles.cardImage}
              />
              <p>{service.text}</p>
              </div>
            ))}
            <div className={styles.cardLinkText}>
              <p>
                {card.linkText}
              </p>
              
              <Image
                src="/arrow-event.png"
                alt="arrow right"
                width={24}
                height={24}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



function HeroSection() {
  const scrollToContact = useCallback((e) => {
    e.preventDefault();
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Scroll to Our Services section
  const scrollToEventServices = useCallback((e) => {
    e.preventDefault();
    const section = document.getElementById("ourservices");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="hero" data-aos="fade-up">
      <div className="heroText">
        <h1>{PAGE_TITLE}</h1>
        <p>{PAGE_DESCRIPTION}</p>

        {/* <div className={styles.heroBtns}> */}
        <div>
          <ButtonGroup
            filterKeys={["fsxevents", "ExploreEvents"]}
            onClickHandlers={{
              fsxevents: scrollToContact,
              ExploreEvents: scrollToEventServices,
            }}
          />
        </div>
      </div>

      <div className={styles.heroImg}>
        <Image
          src="/events-hero.png"
          alt="error 404 image"
          width={600}
          height={450}
        />
      </div>
    </div>
  );
}



// --- Main Page Component ---
export default function EventHeroPage() {
   useEffect(() => {
          setTimeout(() => {
            AOS.init({
              duration: 1000,
              once: false,
            });
          }, 100);
        }, []);
  return (
    <div className={styles.mainContainer}>
      <HeroSection />
      <EventServicesSection />
      <OurProcess />
    </div>
  );
}
