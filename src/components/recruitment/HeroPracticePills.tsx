'use client';

import { Icon, type IconName } from '@/components/services/ServiceIcons';
import s from '@/components/services/services.module.css';

interface PracticeArea {
  name: string;
  icon: IconName;
  indIndex: number;
}

const practiceAreas: PracticeArea[] = [
  { name: 'Technology & IT', icon: 'monitor', indIndex: 0 },
  { name: 'Data & AI', icon: 'cpu', indIndex: 0 },
  { name: 'Cloud & Cyber', icon: 'cloud', indIndex: 0 },
  { name: 'Engineering', icon: 'gear', indIndex: 1 },
];

export default function HeroPracticePills() {
  const handleClick = (index: number) => {
    window.dispatchEvent(new CustomEvent('select-industry', { detail: { index } }));
  };

  return (
    <div className={s.heroPractice}>
      <span className={s.heroPracticeLabel}>Primary Practice Areas</span>
      <ul className={s.heroPracticePills} aria-label="Key recruitment industries">
        {practiceAreas.map((pill) => (
          <li key={pill.name}>
            <a
              href="#expertise"
              className={s.heroPracticePill}
              onClick={() => handleClick(pill.indIndex)}
            >
              <span className={s.heroPracticeIcon}>
                <Icon name={pill.icon} size={15} />
              </span>
              <span>{pill.name}</span>
            </a>
          </li>
        ))}
      </ul>
      <p className={s.heroPracticeFooter}>
        <span>Specialist &amp; executive search across Europe</span>
        <span aria-hidden="true" style={{ opacity: 0.5 }}>·</span>
        <a href="#expertise" className={s.heroPracticeLink}>
          Explore all 12 industries &darr;
        </a>
      </p>
    </div>
  );
}
