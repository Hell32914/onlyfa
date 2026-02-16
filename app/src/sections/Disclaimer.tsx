const Disclaimer = () => {
  return (
    <section id="disclaimer" className="relative py-20 sm:py-28 lg:py-32 w-full">
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-elite-purple mb-4">
            Disclaimer
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-elite-white uppercase tracking-tight leading-tight mb-6">
            Дисклеймер
          </h2>
          <p className="text-sm text-elite-gray mb-8">Last updated: February 16, 2026</p>

          <div className="space-y-6 text-base sm:text-lg text-elite-gray leading-relaxed">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                Важное уведомление
              </h3>
              <p>
                V&amp;E AGENCY предоставляет услуги по продвижению контента и консультации в области маркетинга. Пожалуйста, внимательно прочитайте этот дисклеймер перед использованием наших услуг.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                Отсутствие гарантий
              </h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  <span className="text-elite-white font-semibold">Результаты не гарантированы.</span> Мы не гарантируем конкретные результаты, включая размер заработков, количество подписчиков или рост популярности. Результаты зависят от многих факторов, включая качество контента, активность клиента и рыночные условия.
                </li>
                <li>
                  <span className="text-elite-white font-semibold">Индивидуальные результаты.</span> Результаты, полученные другими клиентами, не означают, что вы получите аналогичные результаты. Каждый случай уникален.
                </li>
                <li>
                  <span className="text-elite-white font-semibold">Риск потери средств.</span> Инвестиции в продвижение контента связаны с риском. Мы не гарантируем возврат инвестиций.
                </li>
              </ol>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                Ограничение ответственности
              </h3>
              <p>V&amp;E AGENCY не несет ответственность за:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Потерю данных или доходов</li>
                <li>Блокировку аккаунта на платформах и в социальных сетях</li>
                <li>Нарушение правил платформ клиентом</li>
                <li>Действия третьих лиц</li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                Соответствие законодательству
              </h3>
              <p>
                Клиент несет полную ответственность за соответствие всем применимым законам и правилам платформ, на которых размещается контент.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                Изменения в услугах
              </h3>
              <p>
                Мы оставляем за собой право изменять или прекращать услуги в любое время.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                Контакты
              </h3>
              <p className="text-elite-white font-medium">Email: vd.agency2024@gmail.com</p>
              <p className="text-elite-white font-medium">Telegram: @rosa_flor1</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
