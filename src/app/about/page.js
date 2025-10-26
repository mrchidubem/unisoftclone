/* 'use client'; */

import styles from './about.module.css';
import Image from 'next/image';


export const metadata = {
  title: "About Us Fransunisoft",
  description:
    "Learn more about Fransunisoft, our misiion and vision. ",

};


const values = [
  {
    title: 'Innovation',
    description: 'We embrace creativity and technology to design bold solutions.',
    icon: '/Core value section Icon.png',
  },
  {
    title: 'Excellence',
    description: 'We deliver with quality, professionalism, and attention to detail.',
    icon: '/Core value section Icon (1).png',
  },
  {
    title: 'Integrity',
    description: 'We act with honesty and transparency in everything we do.',
    icon: '/Core value section Icon (2).png',
  },
  {
    title: 'Growth',
    description: 'We empower people, businesses, and communities to scale and thrive.',
    icon: '/Core value section Icon (3).png',
  },
  {
    title: 'Community',
    description: 'We invest in people and networks that create lasting change.',
    icon: '/Core value section Icon (4).png',
  },
  {
    title: 'Collaboration',
    description: 'We believe in partnerships and collective impact.',
    icon: '/Core value section Icon (5).png',
  },
];

export default function AboutPage() {
  return (
    <main className={styles.aboutMain}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.imageWrapper}>
          <Image
            src="/About_hands.png"
            alt="FSX Hero Background"
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.overlay}>
             <div className='sectionHead'>
            <h1>About Fransunisoft</h1>
            <p>Innovation and Growth</p>
            </div>
          </div>
        </div>
      </div>

      {/* Story, Vision, Mission Section */}
      <section className={styles.svmSection}>
        <div className={styles.textColumn}>
          <div className="sectionHeadm">
            
            <h2>Our Story</h2>
            <p>
              Fransunisoft was founded with a simple belief; that technology should be a bridge, not a barrier, to growth. In Nigeria and across Africa, businesses and individuals often struggle with scalable, affordable, and reliable digital solutions. We started our journey to close this gap by building smarter systems, empowering entrepreneurs, and helping organizations embrace innovation. From humble beginnings, our story has always been about one thing: creating solutions that matter and driving digital transformation across Africa.
            </p>
          </div>

          <div className="sectionHeadm">
            <h2>Our Vision</h2>
            <p>
              To be Africa’s leading force in digital innovation, empowering businesses and individuals to work smarter, scale faster, and compete globally through technology-driven solutions.
            </p>
          </div>

          <div className="sectionHeadm">
            <h2>Our Mission</h2>
            <p>
              At Fransunisoft, our mission is to deliver reliable, user-focused, and scalable digital solutions that help our clients unlock opportunities, improve efficiency, and achieve sustainable growth. Through innovation, collaboration, and a deep understanding of the African business landscape, we make technology work for everyone.
            </p>
          </div>
        </div>

        <div className={styles.imageColumn}>
          <Image
            src="/mission_vision.png"
            alt="FSX Story, Vision, Mission"
            width={100}
            height={100}
            className={styles.responsiveImage}
          />
        </div>
      </section>

      {/* Core Values Section */}
      <section>
        <div className='sectionHead'>
        <h2>Our Core Values</h2>
        </div>
        <div className={styles.grid}>
          {values.map((value, index) => (
            <div key={index} className="card2">
              <div className={styles.icon}>
                <Image
                  src={value.icon}
                  alt={`${value.title} icon`}
                  width={60}
                  height={60}
                />
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}      
        </div>
      </section>

      {/* CEO Section */}
      <section>
           <div className='sectionHead'>
        <h2 >Meet Our CEO</h2>
        </div>
        <div className={styles.content}>
     <div className={styles.imageWrapper}>
  <Image
    src="/CEO Profile_Photo.png"
    alt="Oluwaseyi Francis Ayodele"
    width={643}
    height={613}
    className={styles.ceoImage}
  />
</div>


          <div className={styles.bio}>
            <p>
              <strong>Oluwaseyi Francis Ayodele</strong> is a software engineer, community manager, and innovation advocate passionate about building scalable solutions and empowering Africa’s next generation of tech leaders. 
              With over a decade of experience across software development, fintech solutions, IT consulting, and community growth, he has led impactful projects that bridge technology and people.
            </p> <br/>
           
            <p>
              
Seyi has trained and mentored thousands of young talents, facilitated programs that have engaged over 150,000 youths across Nigeria and Africa, and supported startups from idea to launch. 
His leadership spans community-driven initiatives, corporate collaborations, and digital transformation strategies that enable organizations to scale smarter and faster.
            </p> <br/>
            <p>
              He is the founder of Fransunisoft, the parent company behind the FSX brand family, which focuses on technology, consulting, events, training, and community building. 
              Through this ecosystem, he is driving innovation and creating sustainable impact in Africa’s tech and business landscape
            </p> <br/>
            <p>
             Beyond his work in business and technology, Seyi actively speaks at conferences, mentors aspiring founders, and champions opportunities for young Africans in the global digital economy.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
