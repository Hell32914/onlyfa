import { useI18n } from '../i18n';

const CookiePolicy = () => {
  const { t } = useI18n();

  return (
    <section id="cookies" className="relative py-20 sm:py-28 lg:py-32 w-full">
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-elite-purple mb-4">
            {t('cookies.eyebrow') as string}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-elite-white uppercase tracking-tight leading-tight mb-6">
            {t('cookies.title') as string}
          </h2>
          <p className="text-sm text-elite-gray mb-8">{t('cookies.updated') as string}</p>

          <div className="space-y-6 text-base sm:text-lg text-elite-gray leading-relaxed">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                {t('cookies.what.title') as string}
              </h3>
              <p>
                {t('cookies.what.p1') as string}
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                {t('cookies.usage.title') as string}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-elite-white font-semibold">{t('cookies.usage.necessary.title') as string}</h4>
                  <p>{t('cookies.usage.necessary.p1') as string}</p>
                  <ul className="list-disc list-inside space-y-1">
                    {(t('cookies.usage.necessary.items') as string[]).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-elite-white font-semibold">{t('cookies.usage.analytics.title') as string}</h4>
                  <p>{t('cookies.usage.analytics.p1') as string}</p>
                  <ul className="list-disc list-inside space-y-1">
                    {(t('cookies.usage.analytics.items') as string[]).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-elite-white font-semibold">{t('cookies.usage.marketing.title') as string}</h4>
                  <p>{t('cookies.usage.marketing.p1') as string}</p>
                  <ul className="list-disc list-inside space-y-1">
                    {(t('cookies.usage.marketing.items') as string[]).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                {t('cookies.manage.title') as string}
              </h3>
              <p>{t('cookies.manage.p1') as string}</p>
              <ul className="list-disc list-inside space-y-1">
                {(t('cookies.manage.items') as string[]).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                {t('cookies.consent.title') as string}
              </h3>
              <p>
                {t('cookies.consent.p1') as string}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CookiePolicy;
