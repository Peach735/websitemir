import React from 'react';
import Icon from './Icon.jsx';
import { useLanguage } from '../i18n/LanguageContext.jsx';
import logo from '../../assets/logo.svg';

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

// Recurring "M" background mark used on every content section per brand
// guidance — subtle on light sections, inverted to white on dark ones
// (.purpose, .ctaband). Purely decorative.
export function SectionWatermark({ inverted }) {
  return (
    <img
      className={'section-watermark' + (inverted ? ' section-watermark--inverted' : '')}
      src={logo}
      alt=""
      aria-hidden="true"
    />
  );
}

// Bridge motif: Производитель → МИРАСА → Рынок
export function Bridge({ vertical }) {
  const { t } = useLanguage();
  const b = t.common.bridge;
  const Arrow = () => (
    <span className="bridge__link"><Icon name="arrow-right" /></span>
  );
  return (
    <div className={'bridge' + (vertical ? ' bridge--v' : '')}>
      <div className="bridge__node">
        <div className="k">{b.originKey}</div>
        <div className="v">{b.originVal}</div>
      </div>
      <Arrow />
      <div className="bridge__node bridge__node--mid">
        <div className="k">{b.midKey}</div>
        <div className="v">{b.midVal}</div>
      </div>
      <Arrow />
      <div className="bridge__node">
        <div className="k">{b.destKey}</div>
        <div className="v">{b.destVal}</div>
      </div>
    </div>
  );
}

// Separators via CSS ::after — see .hero__refrain in bridge.css.
export function Refrain({ className }) {
  const { t } = useLanguage();
  return (
    <div className={className}>
      {t.common.refrain.map((w) => (
        <span key={w}>{w}</span>
      ))}
    </div>
  );
}
