import { useI18n } from '../i18n';

const Privacy = () => {
  const { t } = useI18n();

  return (
    <section id="privacy" className="relative py-20 sm:py-28 lg:py-32 w-full">
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-elite-purple mb-4">
            {t('privacy.eyebrow') as string}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-elite-white uppercase tracking-tight leading-tight mb-6">
            {t('privacy.title') as string}
          </h2>
          <p className="text-sm text-elite-gray mb-8">{t('privacy.updated') as string}</p>

          <div className="space-y-6 text-base sm:text-lg text-elite-gray leading-relaxed">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                {t('privacy.intro.title') as string}
              </h3>
              <p>
                {t('privacy.intro.p1') as string}
              </p>
              <p>
                {t('privacy.intro.p2') as string}
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                {t('privacy.info.title') as string}
              </h3>
              <p>{t('privacy.info.p1') as string}</p>
              <ul className="list-disc list-inside space-y-1">
                {(t('privacy.info.items') as string[]).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                {t('privacy.use.title') as string}
              </h3>
              <p>{t('privacy.use.p1') as string}</p>
              <ul className="list-disc list-inside space-y-1">
                {(t('privacy.use.items') as string[]).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                {t('privacy.security.title') as string}
              </h3>
              <p>
                {t('privacy.security.p1') as string}
              </p>
              <p>
                {t('privacy.security.p2') as string}
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                {t('privacy.sharing.title') as string}
              </h3>
              <p>
                {t('privacy.sharing.p1') as string}
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                {t('privacy.cookies.title') as string}
              </h3>
              <p>
                {t('privacy.cookies.p1') as string}
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                {t('privacy.rights.title') as string}
              </h3>
              <p>{t('privacy.rights.p1') as string}</p>
              <ul className="list-disc list-inside space-y-1">
                {(t('privacy.rights.items') as string[]).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                {t('privacy.contact.title') as string}
              </h3>
              <p>{t('privacy.contact.p1') as string}</p>
              <p className="text-elite-white font-medium">{t('privacy.contact.emailLabel') as string} rybalka156@gmail.com</p>
              <p className="text-elite-white font-medium">{t('privacy.contact.telegramLabel') as string} @rosa_flor1</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
