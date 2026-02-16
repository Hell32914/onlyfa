import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/#system' },
    { label: 'Results', href: '/#proof' },
    { label: 'Community', href: '/#community' },
    { label: 'Contact', href: '/#contact' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Use', href: '/terms' },
    { label: 'Disclaimer', href: '/disclaimer' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Contacts', href: '/contacts' },
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
              ELITE
            </Link>
            <p className="text-sm text-elite-gray leading-relaxed">
              V&amp;E Digital Marketing Agency. We build creator businesses with clear strategy, execution, and care.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-display text-lg font-semibold text-elite-white">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-elite-gray hover:text-elite-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-display text-lg font-semibold text-elite-white">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-elite-gray hover:text-elite-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-display text-lg font-semibold text-elite-white">Contacts</h4>
            <div className="space-y-2 text-sm text-elite-gray">
              <p>Email: vd.agency2024@gmail.com</p>
              <p>WhatsApp: +380 75 699 95 31</p>
              <p>Telegram: @rosa_flor1</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-xs text-elite-gray flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <span>© 2026 V&amp;E Digital Marketing Agency. All rights reserved.</span>
          <span>Operating remotely. Registered in Ukraine.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
