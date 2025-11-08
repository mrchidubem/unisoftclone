'use client'
import Image from "next/image";
import styles from "./connect.module.css";
import { Roboto } from "next/font/google";
// import Link from "next/link";
import AOS from "aos";
import 'aos/dist/aos.css';
import CountUp from 'react-countup';
import { useEffect } from "react"
import ButtonGroup from "@/app/components/ButtonGroup";

// const roboto = Roboto({
//   variable: "--font-roboto",
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

// export const metadata = {
//   title: "Fsx Connect",
//   description: "Connect with entrepreneurs, investors, mentors, and innovators across Africa and beyond.",
// };



// const scrollToContact = (e, sectionId) => {
//   e.preventDefault();
//   const section = document.getElementById(sectionId);
//   if (section) {
//     section.scrollIntoView({ behavior: "smooth" });
//   }
// };
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
    const section = document.getElementById('joinCommunity');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
     closeMobileMenu();
  };




export default function FsxConnect() {
  useEffect(() => {
        setTimeout(() => {
          AOS.init({
            duration: 1000,
            once: false,
          });
        }, 100);
      }, []);

  return (
    <div
      className=""
    >
      <div className={styles.fsxConnectContainer}>
        <div className="hero" data-aos="fade-up">
          <div className="heroText">
            <h1>FSX Connect</h1>
            <p>
              Building meaningful networks for growth and collaboration. Connect
              with entrepreneurs, investors, mentors, and innovators across
              Africa and beyond.
            </p>
             <div className={styles.heroBtns} >
                        <ButtonGroup
                          filterKeys={['fsxconnect1', 'ExploreConnect']}
                          onClickHandlers={{
                           fsxconnect1: scrollToContact,
                           ExploreConnect: scrollToExplore,
                          }}
                        />
                      </div>
            {/* <div className={styles.heroBtnContainer}>
           <button className={styles.exploreBtn}  onClick={(e) => scrollToSection(e, "joinCommunity" )}>Explore Network</button>
              <button className={styles.joinBtn} onClick={(e) => scrollToSection(e, "contact")}>Join Community</button> 
            </div> */}
          </div>
          {/* <div className={styles.heroImageContainer}> */}
          <div className={styles.heroImg}>
            <Image
              src="/fsx_connect_hero_img.png"
              alt="FSX Connect"
              width={600}
              height={330}
              //layout="fill" //When you use layout="fill" (Next.js <Image>), the image is set to absolutely position itself and fill its parent container. You do not set width or height on the <Image> itself. But you must give the parent container a size (width + height), otherwise the image has nothing to "fill".
              // className={styles.heroImage}
              // objectFit="cover"
            />
          </div>
        </div>

        <section data-aos="fade-up">
          <div className={styles.fsxStats}>
            <div className={styles.stat}>
              <h2 className={styles.countBlock}>
                <CountUp
                  end={5000}
                  duration={2}
                  separator=","
                  enableScrollSpy
                  className={styles.plus}
                />
                +
              </h2>
              <h6 className={styles.label}>Community Members</h6>
            </div>
            <div className={styles.stat}>
              <h2 className={styles.countBlock}>
                <CountUp
                  end={100}
                  duration={2.5}
                  separator=","
                  enableScrollSpy
                  className={styles.plus}
                />
                +
              </h2>
              <h6 className={styles.label}>Successful Partnerships</h6>
            </div>
            <div className={styles.stat}>
              <h2 className={styles.countBlock}>
                <CountUp
                  end={200}
                  duration={1.5}
                  separator=","
                  enableScrollSpy
                  className={styles.plus}
                />
                +
              </h2>
              <h6 className={styles.label}>Industry Experts</h6>
            </div>
            <div className={styles.stat}>
              <h2 className={styles.countBlock}>
                <CountUp
                  end={10}
                  duration={2}
                  separator=","
                  enableScrollSpy
                  className={styles.plus}
                />
                +
              </h2>
              <h6 className={styles.label}>Countries Represented</h6>
            </div>
          </div>
        </section>
      

        {/* <section  data-aos="fade-up">
          <div className={styles.cardParticipation}>
            <div className={styles.communityMem}>
              <h2 className={styles.communityMemCount}> <CountUp end={5000} duration={2} separator="" enableScrollSpy className={styles.counts}/>+</h2>
              <h6 className={styles.communityMemTitle}>Community Members</h6>
            </div>
            <div className={styles.communityMem}>
              <h2 className={styles.successfulCount}><CountUp end={100} duration={2} separator="" enableScrollSpy className={styles.counts}/>+</h2>
              <h6 className={styles.successfulTitle}>Successful Partnerships</h6>
            </div>
            <div className={styles.communityMem}>
              <h2 className={styles.industryExpertsCount}><CountUp end={200} duration={2} separator="" enableScrollSpy className={styles.counts}/>+</h2>
              <h6 className={styles.industryExpertsTitle}>Industry Experts</h6>
            </div>
            <div className={styles.communityMem}>
              <h2><CountUp end={5} duration={2} separator="" enableScrollSpy className={styles.counts}/>+</h2>
              <h6 className={styles.countriesTitle}>Countries Represented</h6>
            </div>
          </div>
        </section> */}

        
        <section data-aos="fade-up">
          <div className="sectionHead">
            <h2>Our Connection Services</h2>
            <h6>
              We facilitate meaningful connections through specialized networks
              and programs designed to foster collaboration and growth.
            </h6>
          </div>
          <div className='grid' id="connection" >
            <div className='card2'>
              <Image
                src="/networkIcon.png"
                alt="Network Icon"
                width={60}
                height={60}
                className={styles.cardIcon}
              />
              <h4 className={styles.cardTitle}>Professional Networks</h4>
              <p className={styles.cardDescription}>
                Connect with like-minded professionals, entrepreneurs, and
                innovators in your industry and beyond through curated
                networking events and forums.
              </p>
            </div>
            <div className="card2">
              <Image
                src="/investor-relations-icon.png"
                alt="Investor Relations Icon"
                width={60}
                height={60}
                className={styles.cardIcon}
              />
              <h4 className={styles.cardTitle}>Investor Relations</h4>
              <p className={styles.cardDescription}>
                Bridge the gap between innovative startups and investors looking
                for the next breakthrough opportunity with our matchmaking
                platform.
              </p>
            </div>
            <div className="card2">
              <Image
                src="/mentor-matching-icon.png"
                alt="Mentor Matching Icon"
                width={60}
                height={60}
                className={styles.cardIcon}
              />
              <h4 className={styles.cardTitle}>Mentorship Matching</h4>
              <p className={styles.cardDescription}>
                Intelligent pairing of mentors and mentees based on goals,
                experience, and growth objectives to maximize learning and
                development.
              </p>
            </div>
            <div className="card2">
              <Image
                src="/start-up-ecosystem.png"
                alt="Startup Ecosystem Icon"
                width={60}
                height={60}
                className={styles.cardIcon}
              />
              <h4 className={styles.cardTitle}>Startup Ecosystem</h4>
              <p className={styles.cardDescription}>
                Access a vibrant ecosystem of startups, incubators, and
                accelerators to fuel innovation and entrepreneurial growth
                across Africa.
              </p>
            </div>
            <div className="card2">
              <Image
                src="/partnership-oppurtunity-icon.png"
                alt="Partnership Opportunity Icon"
                width={60}
                height={60}
                className={styles.cardIcon}
              />
              <h4 className={styles.cardTitle}>Partnership Opportunities</h4>
              <p className={styles.cardDescription}>
                Discover strategic partnership opportunities with corporations,
                governments, and NGOs to scale your impact and reach.
              </p>
            </div>
            <div className="card2">
              <Image
                src="/networkIcon.png"
                alt="Executive network Icon"
                width={60}
                height={60}
                className={styles.cardIcon}
              />
              <h4 className={styles.cardTitle}>Executive Network</h4>
              <p className={styles.cardDescription}>
                Connect with C-suite executives and senior leaders for
                high-level strategic discussions and collaboration
                opportunities.
              </p>
            </div>
          </div>
        </section>

        <section id="joinCommunity" data-aos="fade-up">
          <div className="sectionHead">
            <h2>Our Network Communities</h2>
            <h6>
              Join specialized communities tailored to different professional
              needs and interests.
            </h6>
          </div>
          <div className={styles.communityCardsContainer}>
            <div className={styles.communityCard}>
              <div className={styles.communityCardImage}>
                <Image
                  src="/tech-innovator-icon.png"
                  alt="tech innovator Icon"
                  width={400}
                  height={280}
                  objectFit="cover"
                  className={styles.communityImg}
                />
              </div>
              <div className={styles.communityCardContent}>
                <h3 className={styles.communityCardTitle}>
                  Tech Innovators Circle
                </h3>
                <p className={styles.communityCardDescription}>
                  A circle where tech enthusiast, founders, co-founders share
                  insights, challenges, opportunities and mentorships.
                </p>
              </div>
            </div>
            <div className={styles.communityCard}>
              <div className={styles.communityCardContent}>
                <h3 className={styles.communityCardTitle}>
                  Entrepreneurs Network
                </h3>
                <p className={styles.communityCardDescription}>
                  A network where fellow entrepreneurs and investors extends
                  insights, resources, partnerships and opportunities to
                  traction and growth stage businesses.
                </p>
              </div>
              <div className={styles.communityCardImage}>
                <Image
                  src="/enterpreneur-icon.png"
                  alt="entrepreneur Icon"
                  width={400}
                  height={280}
                  objectFit="cover"
                  className={styles.communityImg}
                />
              </div>
            </div>
            <div className={styles.communityCard}>
              <div className={styles.communityCardImage}>
                <Image
                  src="/creative-mind-icon.png"
                  alt="Creative Mind Icon"
                  width={400}
                  height={280}
                  objectFit="cover"
                  className={styles.communityImg}
                />
              </div>
              <div className={styles.communityCardContent}>
                <h3 className={styles.communityCardTitle}>
                  Creative Minds Alliance
                </h3>
                <p className={styles.communityCardDescription}>
                  An alliance where designers, artists, and creative
                  professionals collaborates.
                </p>
              </div>
            </div>
          </div>
          <button className={styles.joinCommunityButton} onClick={scrollToContact}>Join community</button>
        </section>

        <section data-aos="fade-up">
          <div className="sectionHead">
            <h2>Why Join FSX Connect?</h2>
            <h6>
              Discover the unique advantages of being part of our growing
              community of professionals and innovators.
            </h6>
          </div>
          <div className="grid">
            <div className="card2">
              <Image
                width={60}
                height={60}
                src="/start-up-ecosystem.png"
                alt="Accelerated growth Icon"
                className={styles.cardImg}
              />
              <h5 className={styles.whyJoinCardTitle}>Accelerated Growth</h5>
              <p className={styles.whyJoinCardDescription}>
                Access resources, mentorship, and connections that propel your
                career or business forward.
              </p>
            </div>
            <div className="card2">
              <Image
                width={60}
                height={60}
                src="/diverse-community-icon.svg"
                alt="Diverse Community Icon"
                 className={styles.cardImg}
              />
              <h5 className={styles.whyJoinCardTitle}>Diverse Community</h5>
              <p className={styles.whyJoinCardDescription}>
                Connect with professionals from various industries, backgrounds,
                and expertise levels.
              </p>
            </div>

            <div className="card2">
              <Image
                width={60}
                height={60}
                src="/innovation-hub-icon.png"
                alt="Innovation Hub Icon"
                 className={styles.cardImg}
              />
              <h5 className={styles.whyJoinCardTitle}>Innovation Hub</h5>
              <p className={styles.whyJoinCardDescription}>
                Be part of a dynamic ecosystem where new ideas are born and
                collaborations flourish.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.ctaSection} data-aos="fade-up">
          <div className={styles.ctaContainer}>
            <p className={styles.ctaDescription}>
              Are you passionate about giving back to the community to enhance
              nation building, youth development, SDG support and innovation
              strategy?
            </p>
            <button className={styles.ctaButton}  onClick={ scrollToContact }>Join Us Today</button> 
          </div>
          <div className={styles.ctaImageContainer}>
            <Image
              // src="/ellipse-globe-icon.svg"
              src="/globes-icon.png"
              alt="Call to Action Image"
              className={styles.ctaImage}
              // width={550}
              // height={350}
               width={600}
              height={400}
              objectFit="cover"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
