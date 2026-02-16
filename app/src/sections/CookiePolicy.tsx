const CookiePolicy = () => {
  return (
    <section id="cookies" className="relative py-20 sm:py-28 lg:py-32 w-full">
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-elite-purple mb-4">
            Cookie Policy
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-elite-white uppercase tracking-tight leading-tight mb-6">
            Политика использования cookies
          </h2>
          <p className="text-sm text-elite-gray mb-8">Last updated: February 16, 2026</p>

          <div className="space-y-6 text-base sm:text-lg text-elite-gray leading-relaxed">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                Что такое cookies?
              </h3>
              <p>
                Cookies — это небольшие текстовые файлы, которые хранятся на вашем устройстве при посещении веб-сайта. Они помогают нам улучшить ваш опыт.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                Какие cookies мы используем?
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-elite-white font-semibold">Необходимые cookies</h4>
                  <p>Эти cookies необходимы для функционирования веб-сайта:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Аутентификация пользователя</li>
                    <li>Безопасность</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-elite-white font-semibold">Аналитические cookies</h4>
                  <p>Мы используем Google Analytics для анализа трафика:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Какие страницы вы посещаете</li>
                    <li>Сколько времени вы проводите на сайте</li>
                    <li>Откуда вы пришли</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-elite-white font-semibold">Маркетинговые cookies</h4>
                  <p>Используются для показа релевантной рекламы:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Google Ads</li>
                    <li>Facebook Pixel</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                Как управлять cookies?
              </h3>
              <p>Вы можете управлять cookies в настройках браузера:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Chrome: Меню → Настройки → Конфиденциальность и безопасность</li>
                <li>Firefox: Меню → Параметры → Приватность и защита</li>
                <li>Safari: Параметры → Приватность</li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                Согласие на использование cookies
              </h3>
              <p>
                Посещая наш веб-сайт, вы соглашаетесь с использованием cookies в соответствии с этой политикой.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookiePolicy;
