'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import styles from '@/components/Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const closeMobileMenu = () => {
    if (window.innerWidth < 768) {
      setMenuOpen(false);
      setShowDropdown(false);
    } else {
      setMenuOpen(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setMenuOpen(false);
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll', () => {
        setScrolled(window.scrollY > 20);
      });
      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', () => {});
      };
    }
  }, []);

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    closeMobileMenu();
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link href="/" onClick={closeMobileMenu}>
          <Image
            src="/Fransunisoft Logo2.png"
            alt="Fransunisoft Logo"
            width={180}
            height={40}
            priority
          />
        </Link>
      </div>

      {/* Mobile toggle button */}
      <button
        className={styles.menuToggle}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {menuOpen ? '✖' : '☰'}
      </button>

      {/* Nav Links */}
      <ul className={`${styles.navLinks} ${menuOpen ? `${styles.mobile} ${styles.active}` : ''}`}>
        <li className={styles.navItem}>
          <Link
            href="/"
            onClick={closeMobileMenu}
            className={pathname === '/' ? styles.activeLink : ''}
          >
            Home
          </Link>
        </li>

        <li className={styles.navItem}>
          <Link
            href="/about"
            onClick={closeMobileMenu}
            className={pathname === '/about' ? styles.activeLink : ''}
          >
            About
          </Link>
        </li>

        <li className={styles.navItem}>
          <a
            href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7377090374336589825"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
          >
            Blog
          </a>
        </li>

        {/* FSX Brands Dropdown */}
        <li
          className={`${styles.dropdown} ${showDropdown ? styles.open : ''}`}
          onClick={() => {
            if (window.innerWidth < 768) setShowDropdown(!showDropdown);
          }}
          onMouseEnter={() => window.innerWidth >= 768 && setShowDropdown(true)}
          onMouseLeave={() => window.innerWidth >= 768 && setShowDropdown(false)}
        >
          <span>FSX Brands ▾</span>
          <ul className={`${styles.dropdownMenu} ${showDropdown ? styles.show : ''}`}>
            {[
              ["consulting", "FSX Consulting"],
              ["tech", "FSX Tech"],
              ["labs", "FSX Labs"],
              ["events", "FSX Events"],
              ["connect", "FSX Connect"],
              ["academy", "FSX Academy"],
            ].map(([path, label]) => (
              <li key={path}>
                <Link href={`/fsx-page/${path}`} onClick={(e) => {
                  if (path === 'not-found') {
                    e.preventDefault();
                  } else {
                    closeMobileMenu();
                  }
                }} className={pathname === `/fsx-page/${path}` ? styles.activeLink : ''}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </li>

        <li className={styles.navItem}>
          <a href="#contact" onClick={scrollToContact}>
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
}
