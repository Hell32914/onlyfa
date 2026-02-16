const Footer = () => {
  const footerLinks = [
    { label: 'Services', href: '#system' },
    { label: 'Results', href: '#proof' },
    { label: 'Community', href: '#community' },
    { label: 'Contact', href: '#contact' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Disclaimer', href: '#disclaimer' },
  ];

  return (
    <footer className="relative w-full border-t border-white/10 bg-elite-black/80">
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <a
              href="#"
              className="font-display text-xl font-bold tracking-wider text-elite-white hover:text-elite-purple transition-colors"
            >
              ELITE
            </a>
            <p className="text-sm text-elite-gray leading-relaxed">
              V&amp;E Digital Marketing Agency. We build creator businesses with clear strategy, execution, and care.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-display text-lg font-semibold text-elite-white">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-elite-gray hover:text-elite-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-display text-lg font-semibold text-elite-white">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-elite-gray hover:text-elite-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-sm text-elite-gray">Email: vd.agency2024@gmail.com</p>
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
