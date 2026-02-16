const About = () => {
  return (
    <section id="about" className="relative py-20 sm:py-28 lg:py-32 w-full">
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-elite-purple mb-4">
            About Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-elite-white uppercase tracking-tight leading-tight mb-6">
            О нас
          </h2>

          <div className="space-y-6 text-base sm:text-lg text-elite-gray leading-relaxed">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                История V&amp;E AGENCY
              </h3>
              <p>
                V&amp;E AGENCY — международное маркетинговое агентство, специализирующееся на продвижении контент-криэйторов и брендов в социальных сетях.
              </p>
              <p>
                Мы работаем с клиентами с 2021 года и помогаем выстраивать устойчивые, долгосрочные стратегии роста.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                Наша миссия
              </h3>
              <p>
                Помочь талантливым контент-криэйторам раскрыть свой потенциал, построить стабильный бизнес и развивать аудиторию на платных платформах и в социальных сетях.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                Что мы делаем?
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li><span className="text-elite-white font-semibold">Стратегия контента:</span> разработка плана публикаций и типов контента</li>
                <li><span className="text-elite-white font-semibold">Продвижение:</span> реклама в социальных сетях и платных платформах</li>
                <li><span className="text-elite-white font-semibold">Управление аккаунтами:</span> ведение и оптимизация профилей</li>
                <li><span className="text-elite-white font-semibold">Монетизация:</span> помощь в увеличении доходов от контента</li>
                <li><span className="text-elite-white font-semibold">Поддержка 24/7:</span> консультации и помощь менеджеров</li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                Наша команда
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li><span className="text-elite-white font-semibold">Основатели:</span> команда V&amp;E AGENCY</li>
                <li><span className="text-elite-white font-semibold">Менеджеры по контенту:</span> специалисты в области маркетинга</li>
                <li><span className="text-elite-white font-semibold">Дизайнеры:</span> профессионалы в создании визуального контента</li>
                <li><span className="text-elite-white font-semibold">Аналитики:</span> эксперты по анализу данных и оптимизации</li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                Почему выбрать нас?
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Опыт в индустрии</li>
                <li>Профессиональная команда</li>
                <li>Индивидуальный подход</li>
                <li>Прозрачность в работе</li>
                <li>Поддержка 24/7</li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                Свяжитесь с нами
              </h3>
              <p>
                Email: <span className="text-elite-white font-medium">vd.agency2024@gmail.com</span>
              </p>
              <p>
                Telegram: <span className="text-elite-white font-medium">@rosa_flor1</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
