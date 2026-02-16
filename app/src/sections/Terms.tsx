import { useI18n } from '../i18n';

const Terms = () => {
  const { t } = useI18n();

  return (
    <section id="terms" className="relative py-20 sm:py-28 lg:py-32 w-full">
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-elite-purple mb-4">
            {t('terms.eyebrow') as string}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-elite-white uppercase tracking-tight leading-tight mb-6">
            {t('terms.title') as string}
          </h2>
          <p className="text-sm text-elite-gray mb-8">{t('terms.updated') as string}</p>

          <div className="space-y-6 text-base sm:text-lg text-elite-gray leading-relaxed">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                {t('terms.acceptance.title') as string}
              </h3>
              <p>
                {t('terms.acceptance.p1') as string}
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                {t('terms.services.title') as string}
              </h3>
              <p>
                {t('terms.services.p1') as string}
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                {t('terms.client.title') as string}
              </h3>
              <p>{t('terms.client.p1') as string}</p>
              <ul className="list-disc list-inside space-y-1">
                {(t('terms.client.items') as string[]).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                {t('terms.agency.title') as string}
              </h3>
              <p>{t('terms.agency.p1') as string}</p>
              <ul className="list-disc list-inside space-y-1">
                {(t('terms.agency.items') as string[]).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                {t('terms.payment.title') as string}
              </h3>
              <ul className="list-disc list-inside space-y-1">
                {(t('terms.payment.items') as string[]).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                {t('terms.liability.title') as string}
              </h3>
              <p>{t('terms.liability.p1') as string}</p>
              <ul className="list-disc list-inside space-y-1">
                {(t('terms.liability.items') as string[]).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                {t('terms.termination.title') as string}
              </h3>
              <p>
                {t('terms.termination.p1') as string}
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                {t('terms.law.title') as string}
              </h3>
              <p>
                {t('terms.law.p1') as string}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;
