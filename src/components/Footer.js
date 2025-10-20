'use client';

import { useState } from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const closeAll = () => {
    setMenuOpen(false);
    setShowDropdown(false);
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    closeAll?.();
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        {/* ✅ Branding Section */}
        <div className={styles.branding}>
          <h2 className={styles.logo}>
            <Link href="/">
              <Image
                src="/Fransunisoft Logo2.png"
                alt="Fransunisoft Logo"
                width={250}
                height={50}
                priority
              />
            </Link>
          </h2>

          <p className={styles.tagline}>
            Engineering innovation and impact across Africa and beyond through the FSX ecosystem
          </p>

          {/* ✅ Social Icons with Links */}
          <div className={styles.socialIcons}>
            <a
              href="https://www.facebook.com/fransunisoft"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Image src="/Facebook.png" alt="Facebook" width={40} height={40} />
            </a>
            <a
              href="https://twitter.com/fransunisoft"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Image src="/X-Twitter.png" alt="Twitter" width={40} height={40} />
            </a>
            <a
              href="https://www.linkedin.com/company/fransunisoft/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Image src="/Linkedin.png" alt="LinkedIn" width={40} height={40} />
            </a>
            <a
              href="https://www.instagram.com/fransunisoft"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Image src="/Instagram.png" alt="Instagram" width={40} height={40} />
            </a>
            <a
              href="https://www.youtube.com/@fransunisoft"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <Image src="/Youtube.png" alt="YouTube" width={40} height={40} />
            </a>
            <a
              href="https://www.tiktok.com/@fransunisoft"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="tiktok"
            >
              <Image src="/tiktok.png" alt="tiktok" width={40} height={40} />
            </a>
          </div>
        </div>

        {/* ✅ Links Section */}
        <div className={styles.links}>
          <div className={styles.linkGroup}>
            <h4>FSX Ecosystem</h4>
            <Link href="/fsx-page/consulting">FSX Consulting</Link>
            <Link href="/fsx-page/labs">FSX Labs</Link>
            <Link href="/fsx-page/tech">FSX Tech</Link>
            <Link href="/fsx-page/connect">FSX Connect</Link>
            <Link href="/fsx-page/events">FSX Events</Link>
            <Link href="/fsx-page/academy">FSX Academy</Link>
          </div>

          <div className={styles.linkGroup}>
            <h4>Quick Links</h4>
            <Link href="/about">About Us</Link>
            <a
              href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7377090374336589825"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
            <a href="#contact" onClick={scrollToContact} className={styles.navLink}>
              Contact Us
            </a>
          </div>
        </div>

        {/* ✅ Newsletter Section */}
        <div className={styles.newsletter}>
          <h4>Newsletter</h4>
          <p>
            Be the first to hear about our latest innovations, research insights, and product
            updates. Sign up for our newsletter and join a community shaping the future of
            technology in Africa.
          </p>
        
   <form className={styles.form}>
            <input type="email" placeholder="Email: johndoe@email.com" required />
            <button type="submit">Subscribe</button>
          </form>
          </div>


      
      </div>

      <div className={styles.bottomNote}>
        © 2025 Fransunisoft. All rights reserved. | Engineering Innovation & Impact
      </div>
    </footer>
  );
}
