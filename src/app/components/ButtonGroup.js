'use client';

import styles from './button.module.css';

const buttons = [
  { key: 'discover', text: 'Discover FSX Brand Family', href: '#brand-family', style: 'discover', group: 'primary' },
  { key: 'start', text: 'Start Your Journey Today', href: '#contact', style: 'start', group: 'primary' },

  { key: 'fsxevents', text: 'Book Your Events', href: '#contact', style: 'discover', group: 'primary' },
  { key: 'ExploreEvents', text: 'Explore Services', href: '#fsx-events', style: 'start', group: 'primary' },

  { key: 'fsxlabs1', text: 'Tell Us Your Idea', href: '#contact', style: 'discover', group: 'primary' },
  { key: 'ExploreLabs', text: 'Explore What We Do', href: '#what-we-do', style: 'start', group: 'primary' },

  { key: 'fsxtech1', text: 'Get Started', href: '#contact', style: 'discover', group: 'primary' },
  { key: 'ExploreTech', text: 'Explore Services', href: '#fsx-tech', style: 'start', group: 'primary' },

  { key: 'fsxacademy1', text: 'Join Us', href: '#contact', style: 'discover', group: 'primary' },
  { key: 'ExploreAcademy', text: 'Explore Academy', href: '#fsx-academy', style: 'start', group: 'primary' },

  { key: 'fsxconnect1', text: 'Join Community', href: '#contact', style: 'discover', group: 'primary' },
  { key: 'ExploreConnect', text: 'Explore Network', href: '#fsx-connect', style: 'start', group: 'primary' },

  { key: 'fsxConsulting1', text: 'Book Consultation', href: '#contact', style: 'fsxBranch', group: 'primary' },
  { key: 'ExploreConsulting', text: 'Explore Services', href: '#consulting-service', style: 'Explore', group: 'primary' },
];

export default function ButtonGroup({ filterKeys = [], onClickHandlers = {} }) {
  const filteredButtons = filterKeys.length
    ? buttons.filter((btn) => filterKeys.includes(btn.key))
    : buttons;

  const primaryButtons = filteredButtons.filter((btn) => btn.group === 'primary');
  const secondaryButtons = filteredButtons.filter((btn) => btn.group === 'secondary');

  return (
    <div className={styles.buttons}>
      <div className={styles.primaryButtons}>
        {primaryButtons.map((btn, index) => (
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
      <div className={styles.secondaryButtons}>
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
