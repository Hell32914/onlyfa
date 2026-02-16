import { useI18n } from '../i18n';

const Disclaimer = () => {
  const { t } = useI18n();

  return (
    <section id="disclaimer" className="relative py-20 sm:py-28 lg:py-32 w-full">
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-elite-purple mb-4">
            {t('disclaimer.eyebrow') as string}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-elite-white uppercase tracking-tight leading-tight mb-6">
            {t('disclaimer.title') as string}
          </h2>
          <p className="text-sm text-elite-gray mb-8">{t('disclaimer.updated') as string}</p>

          <div className="space-y-6 text-base sm:text-lg text-elite-gray leading-relaxed">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                {t('disclaimer.notice.title') as string}
              </h3>
              <p>
                {t('disclaimer.notice.p1') as string}
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                {t('disclaimer.guarantees.title') as string}
              </h3>
              <ol className="list-decimal list-inside space-y-2">
                {(t('disclaimer.guarantees.items') as string[]).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                {t('disclaimer.liability.title') as string}
              </h3>
              <p>{t('disclaimer.liability.p1') as string}</p>
              <ul className="list-disc list-inside space-y-1">
                {(t('disclaimer.liability.items') as string[]).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                {t('disclaimer.compliance.title') as string}
              </h3>
              <p>
                {t('disclaimer.compliance.p1') as string}
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                {t('disclaimer.changes.title') as string}
              </h3>
              <p>
                {t('disclaimer.changes.p1') as string}
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                {t('disclaimer.contact.title') as string}
              </h3>
              <p className="text-elite-white font-medium">{t('disclaimer.contact.emailLabel') as string} vd.agency2024@gmail.com</p>
              <p className="text-elite-white font-medium">{t('disclaimer.contact.telegramLabel') as string} @rosa_flor1</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
