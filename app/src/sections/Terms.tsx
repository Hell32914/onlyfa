const Terms = () => {
  return (
    <section id="terms" className="relative py-20 sm:py-28 lg:py-32 w-full">
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-elite-purple mb-4">
            Terms of Use
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-elite-white uppercase tracking-tight leading-tight mb-6">
            Условия использования
          </h2>
          <p className="text-sm text-elite-gray mb-8">Last updated: February 16, 2026</p>

          <div className="space-y-6 text-base sm:text-lg text-elite-gray leading-relaxed">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                1. Согласие с условиями
              </h3>
              <p>
                Используя наш веб-сайт, вы соглашаетесь с этими Условиями использования.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                2. Описание услуг
              </h3>
              <p>
                V&amp;E AGENCY предоставляет консультационные услуги по продвижению контента и маркетингу. Мы не гарантируем конкретные результаты.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                3. Права и обязанности клиента
              </h3>
              <p>Клиент обязуется:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Предоставлять достоверную информацию</li>
                <li>Соблюдать правила платформ и социальных сетей</li>
                <li>Не нарушать законодательство</li>
                <li>Не использовать контент для незаконных целей</li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                4. Права и обязанности V&amp;E AGENCY
              </h3>
              <p>Мы обязуемся:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Предоставлять услуги в соответствии с договором</li>
                <li>Соблюдать конфиденциальность</li>
                <li>Поддерживать профессиональный уровень обслуживания</li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                5. Оплата
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Стоимость услуг указывается в отдельном договоре</li>
                <li>Оплата производится в соответствии с условиями договора</li>
                <li>Возврат средств рассматривается в индивидуальном порядке</li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                6. Ограничение ответственности
              </h3>
              <p>V&amp;E AGENCY не несет ответственность за:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Прямые или косвенные убытки</li>
                <li>Потерю данных или доходов</li>
                <li>Действия третьих лиц</li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                7. Прекращение услуг
              </h3>
              <p>
                Услуги могут быть прекращены по взаимному согласию или в соответствии с условиями договора.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                8. Применимое право
              </h3>
              <p>
                Эти Условия регулируются законодательством Украины.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;
