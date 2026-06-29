// About — who we are + founder experience
function About() {
  return (
    <section className="section" id="about">
      <div className="container about__grid">
        <div className="about__body">
          <div className="section-head" style={{ marginBottom: 24 }}>
            <span className="eyebrow" data-index="01">О компании</span>
            <h2 className="h2">Понимаем требования заказчика изнутри</h2>
          </div>
          <p className="body">
            МИРАСА сопровождает иностранных производителей промышленной продукции —
            из Китая, Европы и других стран — при выходе на рынки Беларуси и России.
            Мы ведём проект от первого контакта до полного исполнения финансовых
            обязательств покупателем.
          </p>
          <p className="body">
            Более 18 лет опыта работы в сфере закупок промышленной продукции 
            и сопровождения поставок для предприятий машиностроительной отрасли. 
            Практическое знание закупочных процессов позволяет успешно сопровождать производителей 
            на всех этапах — от выхода на рынок до исполнения контрактных обязательств.
          </p>
          <p className="body">
            Мы знаем, как принимаются решения на стороне заказчика, какие требования
            предъявляются к продукции и документам, и что именно влияет на исход
            сделки.
          </p>
        </div>
        <div className="stats">
          <div className="stat">
            <div className="num">18+</div>
            <div className="lbl">лет в закупках металлопродукции</div>
          </div>
          <div className="stat">
            <div className="num">МАЗ</div>
            <div className="lbl">опыт внутри крупнейшего машзавода Беларуси</div>
          </div>
          <div className="stat">
            <div className="num">2 рынка</div>
            <div className="lbl">Беларусь и Россия — локальное присутствие</div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.About = About;
