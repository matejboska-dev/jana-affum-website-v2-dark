'use client';
import { useState } from 'react';
import { Icon, IconGlyph, type IconName } from './ServiceIcons';
import s from './services.module.css';

type Question = { label: string; text: string; icon: IconName };

/** Four questions on the left drive the highlighted arm of the diagram on the right. */
export default function InsightDiagram({ questions, intro }: { questions: Question[]; intro?: string }) {
  const [active, setActive] = useState(0);
  const c = 250, ring = 170, node = 34;
  const at = (i: number) => { const a = (-90 + i * 90) * Math.PI / 180; return { x: c + ring * Math.cos(a), y: c + ring * Math.sin(a) }; };
  return <div className={s.insight}>
    <div>
    {intro && <p className={s.qIntro}>{intro}</p>}
    <ul className={s.qList}>{questions.map((q, i) => <li key={q.label} data-active={i === active}>
      <button type="button" aria-pressed={i === active} onClick={() => setActive(i)} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)}>
        <span className={s.iconCircle}><Icon name={q.icon}/></span>
        <span><span className={s.qLabel}>{q.label}</span><span className={s.qText}>{q.text}</span></span>
      </button>
    </li>)}</ul>
    </div>
    <svg className={s.diagram} viewBox="0 0 500 500" role="img" aria-label="Four questions that sit beyond the CV: motivation, working environment, expectations and commitment">
      <circle cx={c} cy={c} r="222" className={s.dgRing}/>
      <circle cx={c} cy={c} r={ring} className={s.dgRingDash}/>
      {questions.map((_, i) => { const p = at(i); return <line key={i} x1={c} y1={c} x2={p.x} y2={p.y} className={s.dgRay} data-active={i === active}/>; })}
      {questions.map((q, i) => { const p = at(i); return <g key={q.label} className={s.dgNode} data-active={i === active} transform={`translate(${p.x} ${p.y})`}>
        <circle r={node}/>
        <g transform="translate(-13 -13) scale(1.08)"><IconGlyph name={q.icon}/></g>
      </g>; })}
      <circle cx={c} cy={c} r="82" className={s.dgCore}/>
      {(() => { const words = questions[active].label.split(' '); const lines = words.length > 1 ? [words[0], words.slice(1).join(' ')] : words; const y0 = c - 6 - (lines.length - 1) * 11;
        return <>
          <text textAnchor="middle" className={s.dgLabel}>{lines.map((l, k) => <tspan key={k} x={c} y={y0 + k * 22}>{l}</tspan>)}</text>
          <text x={c} y={y0 + (lines.length - 1) * 22 + 24} textAnchor="middle" className={s.dgCaption}>beyond the CV</text>
        </>; })()}
    </svg>
  </div>;
}
