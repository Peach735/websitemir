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
    text: 'Оцениваем потенциал продукции, анализируем рынок и подготавливаем основу для успешного выхода на рынки Беларуси и России.',
    items: ['Оценка перспектив продукции', 'Анализ рынка и конкурентной среды', 'Сертификация и подготовка документации', 'Подготовка коммерческих предложений'],
  },
  {
    n: '02', title: 'Продажи и представительство',
    media: 'фото · переговоры / встреча',
    imgSrc: svcNegotiation,
    text: 'Представляем интересы производителя на территории Беларуси и России, развиваем деловые контакты и сопровождаем переговорный процесс.',
    items: ['Поиск клиентов и новых возможностей продаж', 'Локальное представительство', 'Деловая переписка и переговоры', 'Взаимодействие с заказчиками'],
  },
  {
    n: '03', title: 'Сопровождение сделки',
    media: 'фото · приёмка / контроль качества',
    imgSrc: svcQuality,
    text: 'Обеспечиваем профессиональное сопровождение закупочных процедур и поставок на всех этапах реализации проекта.',
    items: ['Тендеры и государственные закупки', 'Биржевые торги (БУТБ)', 'Испытания и квалификация продукции', 'Приемка продукции и работа с рекламациями'],
  },
  {
    n: '04', title: 'Финансовое сопровождение',
    media: 'фото · отчётность / платежи',
    imgSrc: svcFinance,
    text: 'Контролируем исполнение финансовых обязательств и сопровождаем процесс до полного завершения сделки.',
    items: ['Контроль сроков оплаты', 'Мониторинг исполнения контрактных обязательств', 'Работа с дебиторской задолженностью', 'Сопровождение урегулирования спорных вопросов'],
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow-row"><span className="eyebrow">Что мы делаем</span></div>
          <h2 className="h2">Четыре опоры успешного выхода на рынок</h2>
          <p className="lead">Каждое направление доступно как отдельная услуга или как часть комплексного сопровождения — от анализа рынка до полного исполнения финансовых обязательств по контракту.</p>
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
