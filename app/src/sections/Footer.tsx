import { Link } from 'react-router-dom';
import { useI18n } from '../i18n';

const Footer = () => {
  const { t } = useI18n();
  const navLabels = t('nav.links') as Record<string, string>;

  const footerLinks = [
    { key: 'about', href: '/about' },
    { key: 'services', href: '/#system' },
    { key: 'results', href: '/#proof' },
    { key: 'community', href: '/#community' },
    { key: 'contact', href: '/#contact' },
  ];

  const legalLinks = [
    { key: 'privacy', href: '/privacy' },
    { key: 'terms', href: '/terms' },
    { key: 'disclaimer', href: '/disclaimer' },
    { key: 'cookies', href: '/cookies' },
    { key: 'contactsLink', href: '/contacts' },
  ];

  return (
    <footer className="relative w-full border-t border-white/10 bg-elite-black/80">
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <Link
              to="/"
              className="font-display text-xl font-bold tracking-wider text-elite-white hover:text-elite-purple transition-colors"
            >
              V&E
            </Link>
            <p className="text-sm text-elite-gray leading-relaxed">
              {t('footer.description') as string}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-display text-lg font-semibold text-elite-white">{t('footer.navigation') as string}</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.href}
                    className="text-sm text-elite-gray hover:text-elite-white transition-colors"
                  >
                    {navLabels[link.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-display text-lg font-semibold text-elite-white">{t('footer.legal') as string}</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.href}
                    className="text-sm text-elite-gray hover:text-elite-white transition-colors"
                  >
                    {t(`footer.${link.key}`) as string}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-display text-lg font-semibold text-elite-white">{t('footer.contacts') as string}</h4>
            <div className="space-y-2 text-sm text-elite-gray">
              <p>{t('footer.email') as string}: vd.agency2024@gmail.com</p>
              <p>{t('footer.whatsapp') as string}: +380 75 699 95 31</p>
              <p>{t('footer.telegram') as string}: @rosa_flor1</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-xs text-elite-gray flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <span>{t('footer.rights') as string}</span>
          <span>{t('footer.location') as string}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
