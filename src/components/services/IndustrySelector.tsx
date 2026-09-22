'use client';
import { useState, useEffect, type KeyboardEvent } from 'react';
import { Icon, type IconName } from './ServiceIcons';
import { Button } from './ServiceShared';
import s from './services.module.css';

type Industry = { name: string; icon: IconName; groups: { name?: string; roles: string }[] };

export default function IndustrySelector({ industries }: { industries: Industry[] }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    function handleSelect(e: Event) {
      const customEvent = e as CustomEvent<{ index: number }>;
      if (typeof customEvent.detail?.index === 'number') {
        setActive(customEvent.detail.index);
      }
    }
    window.addEventListener('select-industry', handleSelect);
    return () => window.removeEventListener('select-industry', handleSelect);
  }, []);
  function onKey(e: KeyboardEvent, i: number) {
    const next = e.key === 'ArrowDown' ? i + 1 : e.key === 'ArrowUp' ? i - 1 : e.key === 'Home' ? 0 : e.key === 'End' ? industries.length - 1 : null;
    if (next === null) return;
    e.preventDefault();
    const n = (next + industries.length) % industries.length;
    setActive(n);
    document.getElementById(`ind-tab-${n}`)?.focus();
  }
  return <div className={s.selector} role="tablist" aria-orientation="vertical" aria-label="Industries">
    {industries.map((ind, i) => <div key={ind.name} className={s.selRow} data-active={i === active}>
      <button type="button" role="tab" id={`ind-tab-${i}`} aria-selected={i === active} aria-controls={`ind-panel-${i}`} tabIndex={i === active ? 0 : -1} className={s.selBtn} onClick={() => setActive(i)} onKeyDown={e => onKey(e, i)}>
        <span className={s.iconCircle}><Icon name={ind.icon}/></span>
        <span className={s.selName}>{ind.name}</span>
        <span className={s.selChevron}><Icon name="chevron" size={18}/></span>
      </button>
      <div role="tabpanel" id={`ind-panel-${i}`} aria-labelledby={`ind-tab-${i}`} className={s.selPanel} data-active={i === active}>
        {ind.groups.map((g, j) => <div key={j} className={s.selGroup}>{g.name && <h4>{g.name}</h4>}<p>{g.roles}</p></div>)}
        <Button variant="link">Discuss a role in this field</Button>
      </div>
    </div>)}
  </div>;
}
