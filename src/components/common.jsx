import React from 'react';
import Icon from './Icon.jsx';

export const tel = (p) => 'tel:' + p.replace(/[^\d+]/g, '');

// Reusable image placeholder — renders real photo when src is provided.
export function Ph({ label, style, src }) {
  const [failed, setFailed] = React.useState(false);
  if (src && !failed) {
    return (
      <div className="ph ph--img" style={style}>
        <img src={src} alt={label} onError={() => setFailed(true)} />
      </div>
    );
  }
  return (
    <div className="ph" style={style}>
      <span className="ph__tag">{label}</span>
    </div>
  );
}

// Bridge motif: Производитель → МИРАСА → Рынок
export function Bridge({ vertical }) {
  const Arrow = () => (
    <span className="bridge__link"><Icon name="arrow-right" /></span>
  );
  return (
    <div className={'bridge' + (vertical ? ' bridge--v' : '')}>
      <div className="bridge__node">
        <span className="k">Китай · Европа</span>
        <span className="v">Производитель</span>
      </div>
      <Arrow />
      <div className="bridge__node bridge__node--mid">
        <span className="k">Мост</span>
        <span className="v">МИРАСА</span>
      </div>
      <Arrow />
      <div className="bridge__node">
        <span className="k">Беларусь · Россия</span>
        <span className="v">Рынок</span>
      </div>
    </div>
  );
}

const REFRAIN = ['Уверенно', 'Прозрачно', 'До результата'];

export function Refrain({ className }) {
  return (
    <div className={className}>
      {REFRAIN.map((w, i) => (
        <React.Fragment key={w}>
          {i > 0 && <span className="dot">·</span>}
          <span>{w}</span>
        </React.Fragment>
      ))}
    </div>
  );
}
