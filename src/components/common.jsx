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
        <div className="k">Китай · Европа</div>
        <div className="v">Производитель</div>
      </div>
      <Arrow />
      <div className="bridge__node bridge__node--mid">
        <div className="k">Мост</div>
        <div className="v">МИРАСА</div>
      </div>
      <Arrow />
      <div className="bridge__node">
        <div className="k">Беларусь · Россия</div>
        <div className="v">Рынок</div>
      </div>
    </div>
  );
}

const REFRAIN = ['Уверенно', 'Прозрачно', 'До результата'];

// Separators via CSS ::after — see .hero__refrain in bridge.css.
export function Refrain({ className }) {
  return (
    <div className={className}>
      {REFRAIN.map((w) => (
        <span key={w}>{w}</span>
      ))}
    </div>
  );
}
