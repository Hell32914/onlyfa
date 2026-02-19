import { useI18n } from '../i18n';

const About = () => {
  const { t } = useI18n();

  return (
    <section id="about" className="relative py-20 sm:py-28 lg:py-32 w-full">
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-elite-purple mb-4">
            {t('about.eyebrow') as string}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-elite-white uppercase tracking-tight leading-tight mb-6">
            {t('about.title') as string}
          </h2>

          <div className="space-y-6 text-base sm:text-lg text-elite-gray leading-relaxed">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                {t('about.history.title') as string}
              </h3>
              <p>
                {t('about.history.p1') as string}
              </p>
              <p>
                {t('about.history.p2') as string}
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                {t('about.mission.title') as string}
              </h3>
              <p>
                {t('about.mission.p1') as string}
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                {t('about.whatWeDo.title') as string}
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li><span className="text-elite-white font-semibold">{t('about.whatWeDo.items.strategy.label') as string}</span> {t('about.whatWeDo.items.strategy.text') as string}</li>
                <li><span className="text-elite-white font-semibold">{t('about.whatWeDo.items.promotion.label') as string}</span> {t('about.whatWeDo.items.promotion.text') as string}</li>
                <li><span className="text-elite-white font-semibold">{t('about.whatWeDo.items.accounts.label') as string}</span> {t('about.whatWeDo.items.accounts.text') as string}</li>
                <li><span className="text-elite-white font-semibold">{t('about.whatWeDo.items.monetization.label') as string}</span> {t('about.whatWeDo.items.monetization.text') as string}</li>
                <li><span className="text-elite-white font-semibold">{t('about.whatWeDo.items.support.label') as string}</span> {t('about.whatWeDo.items.support.text') as string}</li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                {t('about.team.title') as string}
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li><span className="text-elite-white font-semibold">{t('about.team.items.founders.label') as string}</span> {t('about.team.items.founders.text') as string}</li>
                <li><span className="text-elite-white font-semibold">{t('about.team.items.trafficManagers.label') as string}</span> {t('about.team.items.trafficManagers.text') as string}</li>
                <li><span className="text-elite-white font-semibold">{t('about.team.items.content.label') as string}</span> {t('about.team.items.content.text') as string}</li>
                <li><span className="text-elite-white font-semibold">{t('about.team.items.salesManagers.label') as string}</span> {t('about.team.items.salesManagers.text') as string}</li>
                <li><span className="text-elite-white font-semibold">{t('about.team.items.hr.label') as string}</span> {t('about.team.items.hr.text') as string}</li>
                <li><span className="text-elite-white font-semibold">{t('about.team.items.analysts.label') as string}</span> {t('about.team.items.analysts.text') as string}</li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                {t('about.why.title') as string}
              </h3>
              <ul className="list-disc list-inside space-y-1">
                {(t('about.why.items') as string[]).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-elite-white mb-2">
                {t('about.contact.title') as string}
              </h3>
              <p>
                {t('about.contact.emailLabel') as string}{' '}
                <span className="text-elite-white font-medium">vd.agency2024@gmail.com</span>
              </p>
              <p>
                {t('about.contact.telegramLabel') as string}{' '}
                <span className="text-elite-white font-medium">@rosa_flor1</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
