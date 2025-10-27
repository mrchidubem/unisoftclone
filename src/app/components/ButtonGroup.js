'use client';

import { usePathname } from 'next/navigation';

import styles from './button.module.css';

const buttons = [
  { key: 'discover', text: 'Discover FSX Brand Family', href: '#brand-family', style: 'discover', group: 'primary' },
  { key: 'start', text: 'Start Your Journey Today', href: '#contact', style: 'start', group: 'primary' },

  { key: 'fsxevents', text: 'Book Your Events', href: '#contact', style: 'discovers', group: 'primary' },
  { key: 'ExploreEvents', text: 'Explore Services', href: '#fsx-events', style: 'starts', group: 'primary'},

  { key: 'fsxlabs1', text: 'Tell Us Your Idea', href: '#contact', style: 'discovers', group: 'primary' },
  { key: 'ExploreLabs', text: 'Explore What We Do', href: '#what-we-do', style: 'starts', group: 'primary' },

  { key: 'fsxtech1', text: 'Get Started', href: '#contact', style: 'discovers', group: 'primary' },
  { key: 'ExploreTech', text: 'Explore Services', href: '#fsx-tech', style: 'starts', group: 'primary' },

  { key: 'fsxacademy1', text: 'Join Us', href: '#contact', style: 'discovers', group: 'primary' },
  { key: 'ExploreAcademy', text: 'Explore Academy', href: '#fsx-academy', style: 'starts', group: 'primary' },

  { key: 'fsxconnect1', text: 'Join Community', href: '#contact', style: 'discovers', group: 'primary' },
  { key: 'ExploreConnect', text: 'Explore Network', href: '#fsx-connect', style: 'starts', group: 'primary' },

  // { key: 'fsxConsulting1', text: 'Book Consultation', href: '#contact', style: 'fsxBranch', group: 'primary' },
  { key: 'fsxConsulting1', text: 'Book Consultation', href: '#contact', style: 'discovers', group: 'primary' },
  { key: 'ExploreConsulting', text: 'Explore Services', href: '#consulting-service', style: 'starts', group: 'primary' },
];

export default function ButtonGroup({ filterKeys = [], onClickHandlers = {} }) {
  const filteredButtons = filterKeys.length
    ? buttons.filter((btn) => filterKeys.includes(btn.key))
    : buttons;

  const primaryButtons = filteredButtons.filter((btn) => btn.group === 'primary');
  const secondaryButtons = filteredButtons.filter((btn) => btn.group === 'secondary');

   
  const pathname = usePathname();


  return (
    // <div className={styles.buttons}>
    <div
        className={
        pathname === '/'
          ? `${styles.buttons}`
          : `${styles.battle}`
      } >
      <div   className={
        pathname === '/'
          ? `${styles.primaryButtons}`
          : `${styles.battles}`
      }
      // className={styles.primaryButtons}
      >
        {primaryButtons.map((btn, index) => (
          <a
            key={index}
            href={btn.href}
            onClick={onClickHandlers[btn.key] || undefined}
            className={pathname === '/' ? `${styles.btn} ${styles[btn.style]} `: `${styles.btnFsx}  ${styles[btn.style]}`}
      //         pathname === '/'
      //     ? `${styles.primaryButtons}`
      //     : `${styles.battles}`
      // }
          >
            {btn.text}
          </a>
        ))}
      </div>
      {/* <div className={styles.secondaryButtons}> */}
       <div   className={
        pathname === '/'
          ? `${styles.secondaryButtons}`
          : `${styles.battles}`
      }
      // className={styles.primaryButtons}
      >
        {secondaryButtons.map((btn, index) => (
          <a
            key={index}
            href={btn.href}
            onClick={onClickHandlers[btn.key] || undefined}
            className={`${styles.btn} ${styles[btn.style]}`}
          >
            {btn.text}
          </a>
        ))}
      </div>
    </div>
  );
}
