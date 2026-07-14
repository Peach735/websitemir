import React from 'react';
import Icon from './Icon.jsx';
import { Ph } from './common.jsx';
import svcAnalytics from '../../assets/photos/svc-analytics.jpg';
import svcNegotiation from '../../assets/photos/svc-negotiation.jpg';
import svcQuality from '../../assets/photos/svc-quality.jpg';
import svcFinance from '../../assets/photos/svc-finance.jpg';

const SERVICES = [
  {
    n: '01', title: 'Выход на рынок',
    media: 'фото · аналитика рынка / документы',
    imgSrc: svcAnalytics,
    text: 'Оцениваем перспективы вашей продукции, готовим документацию и стратегию вывода — чтобы выход был просчитанным, а не на удачу.',
    items: ['Оценка перспектив продукции', 'Анализ конкурентов и цен', 'Сертификация и документация', 'Коммерческие предложения'],
  },
  {
    n: '02', title: 'Продажи и представительство',
    media: 'фото · переговоры / встреча',
    imgSrc: svcNegotiation,
    text: 'Становимся вашим локальным представителем: ищем клиентов, ведём переговоры и переписку от вашего имени на месте.',
    items: ['Поиск клиентов и каналов сбыта', 'Локальное представительство', 'Деловая переписка и переговоры'],
  },
  {
    n: '03', title: 'Сопровождение сделки',
    media: 'фото · приёмка / контроль качества',
    imgSrc: svcQuality,
    text: 'Проводим сделку через тендеры, биржу и приёмку. Берём на себя процедуры, в которых легко ошибиться без опыта изнутри.',
    items: ['Тендеры и госзакупки', 'Биржевые торги (БУТБ)', 'Испытания и квалификация', 'Приёмка и работа с претензиями'],
  },
  {
    n: '04', title: 'Финансовый контроль',
    media: 'фото · отчётность / платежи',
    imgSrc: svcFinance,
    text: 'Доводим сделку до денег: контролируем сроки платежей и работаем с задолженностью, пока обязательства не закрыты полностью.',
    items: ['Контроль платежей и сроков', 'Работа с дебиторской задолженностью'],
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow-row"><span className="eyebrow">Что мы делаем</span></div>
          <h2 className="h2">Четыре опоры моста — полное сопровождение</h2>
          <p className="lead">Каждое направление можно взять отдельно или собрать в полный цикл — от анализа рынка до оплаты.</p>
        </div>
        <div className="svcrows">
          {SERVICES.map((s, i) => (
            <div className={'svcrow' + (i % 2 ? ' svcrow--flip' : '')} key={s.n}>
              <div className="svcrow__media"><Ph label={s.media} src={s.imgSrc} /></div>
              <div>
                <span className="svcrow__n">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <ul className="svcrow__list">
                  {s.items.map((it) => (
                    <li key={it}><Icon name="check" />{it}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
