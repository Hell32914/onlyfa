import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type Language = 'en' | 'ru' | 'es';

type TranslationValue = string | number | boolean | Record<string, unknown> | unknown[];

type I18nContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => TranslationValue;
};

const STORAGE_KEY = 'site_language';

const translations = {
  en: {
    language: {
      label: 'Language',
      options: {
        en: { short: 'EN', name: 'English' },
        ru: { short: 'RU', name: 'Russian' },
        es: { short: 'ES', name: 'Spanish' },
      },
    },
    nav: {
      links: {
        about: 'About',
        services: 'Services',
        results: 'Results',
        community: 'Community',
        contact: 'Contact',
      },
      apply: 'Apply Now',
    },
    hero: {
      eyebrow: 'Premium Creator Management',
      headline: {
        line1: 'Turn Content',
        line2: 'Into Empire',
      },
      subheadline:
        'Creator management for brands that want scale—without the chaos. We handle strategy, chat, marketing, and monetization. You create.',
      ctaPrimary: 'Apply Now',
      ctaSecondary: 'See how it works',
      cardOne: {
        title: 'Full-Service Management',
        body:
          'From content strategy to fan engagement, we handle every aspect of your brand growth. Our team works 24/7 to support sustainable performance.',
      },
      cardTwo: {
        title: 'Case Studies',
        body:
          'We share transparent examples of strategy and execution. Results vary by creator, market, and consistency.',
      },
      alt: 'Hero background',
    },
    proof: {
      eyebrow: 'Proof',
      headline: {
        line1: "We don't guess.",
        line2: 'We scale.',
      },
      body:
        'From content calendar to high-ticket upsells, we run the business side so you can show up as the brand. Our data-driven approach supports steady, measurable progress over time.',
      stats: {
        revenue: 'Revenue generated for partners',
        adSpend: 'Ad spend managed (ROAS 4.8x)',
        percentile: 'Average creator percentile',
        percentilePrefix: 'Top ',
        percentileSuffix: '%',
      },
      badge: {
        title: 'Case study',
        subtitle: 'Performance varies',
      },
      disclaimer: 'Results are not guaranteed. Individual performance may vary.',
      alt: 'Success story',
    },
    system: {
      headline: {
        line1: 'A system built',
        line2: 'for growth.',
      },
      body:
        'We combine content strategy, paid traffic, and 24/7 community management—so your brand stays consistent and measurable.',
      features: {
        content: {
          title: 'Content Strategy',
          description: 'Weekly shoots, editing, and posting calendar optimized for maximum engagement.',
        },
        paid: {
          title: 'Paid Traffic',
          description: 'Meta + Reddit + native ads with strict compliance and high ROAS.',
        },
        community: {
          title: 'Community Management',
          description: 'Fan retention, upsells, and brand safety handled 24/7 by our expert team.',
        },
        optimization: {
          title: 'Weekly Optimization',
          description: 'Data-led decisions, A/B testing, and pricing experiments for continuous growth.',
        },
      },
      card: {
        title: 'Focus',
        subtitle: 'Performance varies',
      },
      alt: 'Our system',
    },
    spotlight: {
      eyebrow: 'Featured Partner',
      headline: {
        line1: 'From launch to consistent',
        line2: 'momentum.',
      },
      profile: {
        name: 'MIA',
        role: 'Fashion + Lifestyle Creator',
        labels: {
          niche: 'Niche',
          growth: 'Growth',
          fanBase: 'Fan Base',
        },
        values: {
          niche: 'Fashion + Lifestyle',
          growth: 'Improved monthly revenue (varies)',
          fanBase: 'Engaged audience (varies)',
        },
      },
      cta: {
        title: 'Real strategy. Real support.',
        body:
          'See how we build a tailored roadmap from content planning to community management. Results vary by creator and market conditions.',
        button: 'View Case Study',
      },
      alt: 'Featured partner',
    },
    community: {
      headline: {
        line1: "You're not doing",
        line2: 'this alone.',
      },
      body:
        'Our creators get access to a private network, weekly strategy calls, and a support team that actually replies. Join a community of ambitious creators who lift each other up.',
      pills: {
        network: 'Private Network',
        calls: 'Weekly Calls',
        support: '24/7 Support',
      },
      testimonials: [
        {
          quote:
            'They turned my page into a real business. I went from struggling to find time for everything to having a team that handles it all.',
          author: 'Lena R.',
        },
        {
          quote:
            'I finally have boundaries—and bigger months. The team respects my time while maximizing my earnings.',
          author: 'Sofia M.',
        },
        {
          quote:
            'The team feels like family, but professional. They truly care about my success and it shows in the results.',
          author: 'Ava T.',
        },
      ],
      altTop: 'Community',
      altBottom: 'Community member',
    },
    contact: {
      headline: {
        line1: 'Ready to',
        line2: 'Scale?',
      },
      body:
        "Apply now. We'll review your brand and reply within 48 hours. Let's discuss how we can transform your content into a thriving business.",
      infoLabels: {
        email: 'Email',
        whatsapp: 'WhatsApp',
        telegram: 'Telegram',
      },
      form: {
        submittedTitle: 'Application Received!',
        submittedBody: "We'll review your brand and get back to you within 48 hours.",
        nameLabel: 'Name',
        namePlaceholder: 'Your full name',
        emailLabel: 'Email',
        emailPlaceholder: 'your@email.com',
        handleLabel: 'Social Handle',
        handlePlaceholder: 'IG / TikTok / Platform',
        goalsLabel: 'Tell us your goals',
        goalsPlaceholder: 'What are you looking to achieve?',
        submit: 'Request a Call',
        submitting: 'Submitting...',
      },
      alt: 'Contact background',
    },
    footer: {
      description:
        'V&E Digital Marketing Agency. We build creator businesses with clear strategy, execution, and care.',
      navigation: 'Navigation',
      legal: 'Legal',
      contacts: 'Contacts',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      disclaimer: 'Disclaimer',
      cookies: 'Cookie Policy',
      contactsLink: 'Contacts',
      email: 'Email',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      rights: '© 2026 V&E Digital Marketing Agency. All rights reserved.',
      location: 'Operating remotely. Registered in Ukraine.',
    },
    ageGate: {
      title: '18+ Only',
      restricted: 'This website is available only to users who are 18 years of age or older.',
      leave: 'Leave site',
      prompt: 'Please confirm that you are at least 18 years old to enter.',
      yes: 'Yes, I am 18+',
      no: 'No',
    },
    about: {
      eyebrow: 'About Us',
      title: 'About us',
      history: {
        title: 'V&E AGENCY Story',
        p1:
          'V&E AGENCY is an international marketing agency specializing in promoting content creators and brands on social platforms.',
        p2: 'We have worked with clients since 2021 and help build sustainable, long-term growth strategies.',
      },
      mission: {
        title: 'Our mission',
        p1:
          'Help talented content creators unlock their potential, build a stable business, and grow audiences on paid platforms and social media.',
      },
      whatWeDo: {
        title: 'What do we do?',
        items: {
          strategy: {
            label: 'Content strategy:',
            text: 'planning posts and content formats.',
          },
          promotion: {
            label: 'Promotion:',
            text: 'advertising on social platforms and paid channels.',
          },
          accounts: {
            label: 'Account management:',
            text: 'running and optimizing profiles.',
          },
          monetization: {
            label: 'Monetization:',
            text: 'helping increase revenue from content.',
          },
          support: {
            label: '24/7 support:',
            text: 'consultations and help from managers.',
          },
        },
      },
      team: {
        title: 'Our team',
        items: {
          founders: {
            label: 'Founders:',
            text: 'V&E AGENCY team.',
          },
          content: {
            label: 'Content managers:',
            text: 'marketing specialists.',
          },
          designers: {
            label: 'Designers:',
            text: 'professionals in visual content creation.',
          },
          analysts: {
            label: 'Analysts:',
            text: 'experts in data analysis and optimization.',
          },
        },
      },
      why: {
        title: 'Why choose us?',
        items: [
          'Industry experience',
          'Professional team',
          'Individual approach',
          'Transparent work',
          '24/7 support',
        ],
      },
      contact: {
        title: 'Contact us',
        emailLabel: 'Email:',
        telegramLabel: 'Telegram:',
      },
    },
    privacy: {
      eyebrow: 'Privacy Policy',
      title: 'Privacy Policy',
      updated: 'Last updated: February 16, 2026',
      intro: {
        title: '1. Introduction',
        p1: 'V&E AGENCY ("Company", "we", "us") respects your privacy.',
        p2:
          'This Privacy Policy explains how we collect, use, disclose, and protect information about you when you use our website.',
      },
      info: {
        title: '2. Information we collect',
        p1: 'We collect information you provide voluntarily:',
        items: ['Name', 'Phone number or Telegram', 'Email address', 'Other information you provide in the contact form'],
      },
      use: {
        title: '3. How we use your information',
        p1: 'We use the collected information to:',
        items: [
          'Contact you about potential cooperation',
          'Provide information about our services',
          'Improve our website and services',
          'Comply with the law',
        ],
      },
      security: {
        title: '4. Data security',
        p1:
          'We take reasonable measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction.',
        p2: 'However, no method of transmission over the Internet is 100% secure.',
      },
      sharing: {
        title: '5. Sharing with third parties',
        p1:
          'We do NOT sell or transfer your personal data to third parties without your explicit consent, except as required by law.',
      },
      cookies: {
        title: '6. Cookies',
        p1: 'Our website uses cookies to improve your experience. See the Cookie Policy for details.',
      },
      rights: {
        title: '7. Your rights',
        p1: 'You have the right to:',
        items: ['Access your personal data', 'Correct inaccurate data', 'Delete your data (right to be forgotten)'],
      },
      contact: {
        title: '8. Contact',
        p1: 'If you have questions about this Policy, contact us:',
        emailLabel: 'Email:',
        telegramLabel: 'Telegram:',
      },
    },
    terms: {
      eyebrow: 'Terms of Use',
      title: 'Terms of Use',
      updated: 'Last updated: February 16, 2026',
      acceptance: {
        title: '1. Acceptance of terms',
        p1: 'By using our website, you agree to these Terms of Use.',
      },
      services: {
        title: '2. Description of services',
        p1:
          'V&E AGENCY provides consulting services for content promotion and marketing. We do not guarantee specific results.',
      },
      client: {
        title: '3. Client rights and obligations',
        p1: 'The client agrees to:',
        items: [
          'Provide accurate information',
          'Follow platform and social network rules',
          'Comply with the law',
          'Not use content for illegal purposes',
        ],
      },
      agency: {
        title: '4. V&E AGENCY rights and obligations',
        p1: 'We commit to:',
        items: ['Provide services according to the contract', 'Maintain confidentiality', 'Keep a professional level of service'],
      },
      payment: {
        title: '5. Payment',
        items: [
          'Service pricing is specified in a separate agreement',
          'Payment is made according to the agreement terms',
          'Refunds are considered on an individual basis',
        ],
      },
      liability: {
        title: '6. Limitation of liability',
        p1: 'V&E AGENCY is not responsible for:',
        items: ['Direct or indirect losses', 'Loss of data or income', 'Actions of third parties'],
      },
      termination: {
        title: '7. Termination of services',
        p1: 'Services may be terminated by mutual agreement or according to the contract terms.',
      },
      law: {
        title: '8. Governing law',
        p1: 'These Terms are governed by the laws of Ukraine.',
      },
    },
    disclaimer: {
      eyebrow: 'Disclaimer',
      title: 'Disclaimer',
      updated: 'Last updated: February 16, 2026',
      notice: {
        title: 'Important notice',
        p1:
          'V&E AGENCY provides content promotion services and marketing consulting. Please read this disclaimer carefully before using our services.',
      },
      guarantees: {
        title: 'No guarantees',
        items: [
          'Results are not guaranteed. We do not guarantee specific outcomes, including income size, subscriber count, or popularity growth. Results depend on many factors, including content quality, client activity, and market conditions.',
          'Individual results. Results achieved by other clients do not mean you will achieve the same outcomes. Every case is unique.',
          'Risk of loss. Investments in content promotion carry risk. We do not guarantee a return on investment.',
        ],
      },
      liability: {
        title: 'Limitation of liability',
        p1: 'V&E AGENCY is not responsible for:',
        items: [
          'Loss of data or income',
          'Account blocks on platforms and social networks',
          'Client violations of platform rules',
          'Actions of third parties',
        ],
      },
      compliance: {
        title: 'Legal compliance',
        p1:
          'The client is fully responsible for compliance with all applicable laws and platform rules where content is published.',
      },
      changes: {
        title: 'Changes to services',
        p1: 'We reserve the right to modify or discontinue services at any time.',
      },
      contact: {
        title: 'Contacts',
        emailLabel: 'Email:',
        telegramLabel: 'Telegram:',
      },
    },
    cookies: {
      eyebrow: 'Cookie Policy',
      title: 'Cookie Policy',
      updated: 'Last updated: February 16, 2026',
      what: {
        title: 'What are cookies?',
        p1:
          'Cookies are small text files stored on your device when you visit a website. They help us improve your experience.',
      },
      usage: {
        title: 'What cookies do we use?',
        necessary: {
          title: 'Necessary cookies',
          p1: 'These cookies are required for the website to function:',
          items: ['User authentication', 'Security'],
        },
        analytics: {
          title: 'Analytics cookies',
          p1: 'We use Google Analytics to analyze traffic:',
          items: ['Which pages you visit', 'How much time you spend on the site', 'Where you came from'],
        },
        marketing: {
          title: 'Marketing cookies',
          p1: 'Used to show relevant ads:',
          items: ['Google Ads', 'Facebook Pixel'],
        },
      },
      manage: {
        title: 'How to manage cookies?',
        p1: 'You can manage cookies in your browser settings:',
        items: [
          'Chrome: Menu → Settings → Privacy and security',
          'Firefox: Menu → Settings → Privacy & Security',
          'Safari: Preferences → Privacy',
        ],
      },
      consent: {
        title: 'Cookie consent',
        p1: 'By visiting our website, you agree to the use of cookies according to this policy.',
      },
    },
  },
  ru: {
    language: {
      label: 'Язык',
      options: {
        en: { short: 'EN', name: 'Английский' },
        ru: { short: 'RU', name: 'Русский' },
        es: { short: 'ES', name: 'Испанский' },
      },
    },
    nav: {
      links: {
        about: 'О нас',
        services: 'Услуги',
        results: 'Результаты',
        community: 'Сообщество',
        contact: 'Контакты',
      },
      apply: 'Подать заявку',
    },
    hero: {
      eyebrow: 'Премиум-менеджмент креаторов',
      headline: {
        line1: 'Преврати контент',
        line2: 'В империю',
      },
      subheadline:
        'Менеджмент для брендов, которые хотят масштабироваться — без хаоса. Мы берем на себя стратегию, чаты, маркетинг и монетизацию. Ты создаешь.',
      ctaPrimary: 'Подать заявку',
      ctaSecondary: 'Как это работает',
      cardOne: {
        title: 'Полный менеджмент',
        body:
          'От стратегии контента до общения с фанатами — мы закрываем все аспекты роста бренда. Команда работает 24/7 для устойчивой динамики.',
      },
      cardTwo: {
        title: 'Кейсы',
        body:
          'Показываем прозрачные примеры стратегии и исполнения. Результаты зависят от креатора, рынка и регулярности.',
      },
      alt: 'Фон главного экрана',
    },
    proof: {
      eyebrow: 'Факты',
      headline: {
        line1: 'Мы не гадаем.',
        line2: 'Мы масштабируем.',
      },
      body:
        'От контент-календаря до дорогих апсейлов — мы ведем бизнес-часть, чтобы ты мог быть лицом бренда. Наш подход на данных дает стабильный, измеримый рост со временем.',
      stats: {
        revenue: 'Доход, созданный для партнеров',
        adSpend: 'Управляемый рекламный бюджет (ROAS 4.8x)',
        percentile: 'Средний перцентиль креаторов',
        percentilePrefix: 'Топ ',
        percentileSuffix: '%',
      },
      badge: {
        title: 'Кейс',
        subtitle: 'Результаты различаются',
      },
      disclaimer: 'Результаты не гарантированы. Индивидуальные показатели могут отличаться.',
      alt: 'История успеха',
    },
    system: {
      headline: {
        line1: 'Система, созданная',
        line2: 'для роста.',
      },
      body:
        'Мы объединяем стратегию контента, платный трафик и 24/7 комьюнити-менеджмент — чтобы бренд был стабильным и измеримым.',
      features: {
        content: {
          title: 'Стратегия контента',
          description: 'Еженедельные съемки, монтаж и календарь публикаций для максимального вовлечения.',
        },
        paid: {
          title: 'Платный трафик',
          description: 'Meta + Reddit + нативная реклама с жестким соблюдением правил и высоким ROAS.',
        },
        community: {
          title: 'Управление сообществом',
          description: 'Удержание фанатов, апсейлы и безопасность бренда 24/7.',
        },
        optimization: {
          title: 'Еженедельная оптимизация',
          description: 'Решения на основе данных, A/B тесты и эксперименты с ценами для постоянного роста.',
        },
      },
      card: {
        title: 'Фокус',
        subtitle: 'Результаты различаются',
      },
      alt: 'Наша система',
    },
    spotlight: {
      eyebrow: 'Избранный партнер',
      headline: {
        line1: 'От запуска к устойчивому',
        line2: 'темпу.',
      },
      profile: {
        name: 'MIA',
        role: 'Креатор в сфере моды и лайфстайла',
        labels: {
          niche: 'Ниша',
          growth: 'Рост',
          fanBase: 'База фанатов',
        },
        values: {
          niche: 'Мода + лайфстайл',
          growth: 'Рост месячной выручки (зависит)',
          fanBase: 'Вовлеченная аудитория (зависит)',
        },
      },
      cta: {
        title: 'Реальная стратегия. Реальная поддержка.',
        body:
          'Посмотрите, как мы создаем индивидуальную дорожную карту от планирования контента до комьюнити-менеджмента. Результаты зависят от креатора и рынка.',
        button: 'Смотреть кейс',
      },
      alt: 'Избранный партнер',
    },
    community: {
      headline: {
        line1: 'Ты не один(а)',
        line2: 'в этом.',
      },
      body:
        'Наши креаторы получают доступ к закрытой сети, еженедельным созвонам по стратегии и команде поддержки, которая действительно отвечает. Присоединяйся к сообществу амбициозных креаторов.',
      pills: {
        network: 'Закрытая сеть',
        calls: 'Еженедельные созвоны',
        support: 'Поддержка 24/7',
      },
      testimonials: [
        {
          quote:
            'Они превратили мою страницу в настоящий бизнес. Я перешла от постоянной нехватки времени ко всей команде, которая берет все на себя.',
          author: 'Lena R.',
        },
        {
          quote:
            'Наконец появились границы — и более сильные месяцы. Команда уважает мое время и при этом максимизирует доход.',
          author: 'Sofia M.',
        },
        {
          quote:
            'Команда как семья, но при этом очень профессиональная. Они искренне заботятся о моем успехе, и это видно по результатам.',
          author: 'Ava T.',
        },
      ],
      altTop: 'Сообщество',
      altBottom: 'Участник сообщества',
    },
    contact: {
      headline: {
        line1: 'Готов(а) к',
        line2: 'масштабированию?',
      },
      body:
        'Подайте заявку. Мы рассмотрим ваш бренд и ответим в течение 48 часов. Давайте обсудим, как превратить ваш контент в устойчивый бизнес.',
      infoLabels: {
        email: 'Email',
        whatsapp: 'WhatsApp',
        telegram: 'Telegram',
      },
      form: {
        submittedTitle: 'Заявка получена!',
        submittedBody: 'Мы рассмотрим ваш бренд и ответим в течение 48 часов.',
        nameLabel: 'Имя',
        namePlaceholder: 'Ваше полное имя',
        emailLabel: 'Email',
        emailPlaceholder: 'your@email.com',
        handleLabel: 'Ник в соцсетях',
        handlePlaceholder: 'IG / TikTok / Платформа',
        goalsLabel: 'Расскажите о целях',
        goalsPlaceholder: 'Чего вы хотите достичь?',
        submit: 'Запросить звонок',
        submitting: 'Отправка...',
      },
      alt: 'Фон контактов',
    },
    footer: {
      description:
        'V&E Digital Marketing Agency. Мы строим бизнесы креаторов с четкой стратегией, исполнением и заботой.',
      navigation: 'Навигация',
      legal: 'Правовая информация',
      contacts: 'Контакты',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия использования',
      disclaimer: 'Дисклеймер',
      cookies: 'Политика cookies',
      contactsLink: 'Контакты',
      email: 'Email',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      rights: '© 2026 V&E Digital Marketing Agency. Все права защищены.',
      location: 'Работаем удаленно. Зарегистрированы в Украине.',
    },
    ageGate: {
      title: 'Только 18+',
      restricted: 'Этот сайт доступен только пользователям старше 18 лет.',
      leave: 'Покинуть сайт',
      prompt: 'Подтвердите, что вам уже исполнилось 18 лет.',
      yes: 'Да, мне 18+',
      no: 'Нет',
    },
    about: {
      eyebrow: 'О нас',
      title: 'О нас',
      history: {
        title: 'История V&E AGENCY',
        p1:
          'V&E AGENCY — международное маркетинговое агентство, специализирующееся на продвижении контент-креаторов и брендов в социальных сетях.',
        p2: 'Мы работаем с клиентами с 2021 года и помогаем выстраивать устойчивые, долгосрочные стратегии роста.',
      },
      mission: {
        title: 'Наша миссия',
        p1:
          'Помочь талантливым контент-креаторам раскрыть свой потенциал, построить стабильный бизнес и развивать аудиторию на платных платформах и в социальных сетях.',
      },
      whatWeDo: {
        title: 'Что мы делаем?',
        items: {
          strategy: {
            label: 'Стратегия контента:',
            text: 'разработка плана публикаций и типов контента.',
          },
          promotion: {
            label: 'Продвижение:',
            text: 'реклама в социальных сетях и платных платформах.',
          },
          accounts: {
            label: 'Управление аккаунтами:',
            text: 'ведение и оптимизация профилей.',
          },
          monetization: {
            label: 'Монетизация:',
            text: 'помощь в увеличении доходов от контента.',
          },
          support: {
            label: 'Поддержка 24/7:',
            text: 'консультации и помощь менеджеров.',
          },
        },
      },
      team: {
        title: 'Наша команда',
        items: {
          founders: {
            label: 'Основатели:',
            text: 'команда V&E AGENCY.',
          },
          content: {
            label: 'Менеджеры по контенту:',
            text: 'специалисты в области маркетинга.',
          },
          designers: {
            label: 'Дизайнеры:',
            text: 'профессионалы в создании визуального контента.',
          },
          analysts: {
            label: 'Аналитики:',
            text: 'эксперты по анализу данных и оптимизации.',
          },
        },
      },
      why: {
        title: 'Почему выбрать нас?',
        items: [
          'Опыт в индустрии',
          'Профессиональная команда',
          'Индивидуальный подход',
          'Прозрачность в работе',
          'Поддержка 24/7',
        ],
      },
      contact: {
        title: 'Свяжитесь с нами',
        emailLabel: 'Email:',
        telegramLabel: 'Telegram:',
      },
    },
    privacy: {
      eyebrow: 'Политика конфиденциальности',
      title: 'Политика конфиденциальности',
      updated: 'Последнее обновление: 16 февраля 2026',
      intro: {
        title: '1. Введение',
        p1: 'V&E AGENCY ("Компания", "мы", "нас") уважает конфиденциальность ваших личных данных.',
        p2:
          'Эта Политика конфиденциальности объясняет, как мы собираем, используем, раскрываем и защищаем информацию о вас при использовании нашего веб-сайта.',
      },
      info: {
        title: '2. Какую информацию мы собираем',
        p1: 'Мы собираем информацию, которую вы предоставляете нам добровольно:',
        items: ['Имя', 'Номер телефона или Telegram', 'Email адрес', 'Другая информация, которую вы указываете в форме обратной связи'],
      },
      use: {
        title: '3. Как мы используем вашу информацию',
        p1: 'Мы используем собранную информацию для:',
        items: [
          'Связи с вами по поводу возможного сотрудничества',
          'Предоставления информации о наших услугах',
          'Улучшения нашего веб-сайта и услуг',
          'Соответствия законодательству',
        ],
      },
      security: {
        title: '4. Безопасность данных',
        p1:
          'Мы принимаем разумные меры для защиты ваших личных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.',
        p2: 'Однако ни один метод передачи по Интернету не является 100% безопасным.',
      },
      sharing: {
        title: '5. Передача данных третьим лицам',
        p1:
          'Мы НЕ продаем и НЕ передаем ваши личные данные третьим лицам без вашего явного согласия, за исключением случаев, требуемых законодательством.',
      },
      cookies: {
        title: '6. Cookies',
        p1: 'Наш веб-сайт использует cookies для улучшения вашего опыта. Подробнее см. в Политике cookies.',
      },
      rights: {
        title: '7. Ваши права',
        p1: 'Вы имеете право:',
        items: ['Получить доступ к вашим личным данным', 'Исправить неточные данные', 'Удалить ваши данные (право на забывчивость)'],
      },
      contact: {
        title: '8. Контакты',
        p1: 'Если у вас есть вопросы по этой Политике, свяжитесь с нами:',
        emailLabel: 'Email:',
        telegramLabel: 'Telegram:',
      },
    },
    terms: {
      eyebrow: 'Условия использования',
      title: 'Условия использования',
      updated: 'Последнее обновление: 16 февраля 2026',
      acceptance: {
        title: '1. Согласие с условиями',
        p1: 'Используя наш веб-сайт, вы соглашаетесь с этими Условиями использования.',
      },
      services: {
        title: '2. Описание услуг',
        p1:
          'V&E AGENCY предоставляет консультационные услуги по продвижению контента и маркетингу. Мы не гарантируем конкретные результаты.',
      },
      client: {
        title: '3. Права и обязанности клиента',
        p1: 'Клиент обязуется:',
        items: [
          'Предоставлять достоверную информацию',
          'Соблюдать правила платформ и социальных сетей',
          'Не нарушать законодательство',
          'Не использовать контент для незаконных целей',
        ],
      },
      agency: {
        title: '4. Права и обязанности V&E AGENCY',
        p1: 'Мы обязуемся:',
        items: ['Предоставлять услуги в соответствии с договором', 'Соблюдать конфиденциальность', 'Поддерживать профессиональный уровень обслуживания'],
      },
      payment: {
        title: '5. Оплата',
        items: [
          'Стоимость услуг указывается в отдельном договоре',
          'Оплата производится в соответствии с условиями договора',
          'Возврат средств рассматривается в индивидуальном порядке',
        ],
      },
      liability: {
        title: '6. Ограничение ответственности',
        p1: 'V&E AGENCY не несет ответственность за:',
        items: ['Прямые или косвенные убытки', 'Потерю данных или доходов', 'Действия третьих лиц'],
      },
      termination: {
        title: '7. Прекращение услуг',
        p1: 'Услуги могут быть прекращены по взаимному согласию или в соответствии с условиями договора.',
      },
      law: {
        title: '8. Применимое право',
        p1: 'Эти Условия регулируются законодательством Украины.',
      },
    },
    disclaimer: {
      eyebrow: 'Дисклеймер',
      title: 'Дисклеймер',
      updated: 'Последнее обновление: 16 февраля 2026',
      notice: {
        title: 'Важное уведомление',
        p1:
          'V&E AGENCY предоставляет услуги по продвижению контента и консультации в области маркетинга. Пожалуйста, внимательно прочитайте этот дисклеймер перед использованием наших услуг.',
      },
      guarantees: {
        title: 'Отсутствие гарантий',
        items: [
          'Результаты не гарантированы. Мы не гарантируем конкретные результаты, включая размер заработков, количество подписчиков или рост популярности. Результаты зависят от многих факторов, включая качество контента, активность клиента и рыночные условия.',
          'Индивидуальные результаты. Результаты, полученные другими клиентами, не означают, что вы получите аналогичные результаты. Каждый случай уникален.',
          'Риск потери средств. Инвестиции в продвижение контента связаны с риском. Мы не гарантируем возврат инвестиций.',
        ],
      },
      liability: {
        title: 'Ограничение ответственности',
        p1: 'V&E AGENCY не несет ответственность за:',
        items: [
          'Потерю данных или доходов',
          'Блокировку аккаунта на платформах и в социальных сетях',
          'Нарушение правил платформ клиентом',
          'Действия третьих лиц',
        ],
      },
      compliance: {
        title: 'Соответствие законодательству',
        p1:
          'Клиент несет полную ответственность за соответствие всем применимым законам и правилам платформ, на которых размещается контент.',
      },
      changes: {
        title: 'Изменения в услугах',
        p1: 'Мы оставляем за собой право изменять или прекращать услуги в любое время.',
      },
      contact: {
        title: 'Контакты',
        emailLabel: 'Email:',
        telegramLabel: 'Telegram:',
      },
    },
    cookies: {
      eyebrow: 'Политика cookies',
      title: 'Политика использования cookies',
      updated: 'Последнее обновление: 16 февраля 2026',
      what: {
        title: 'Что такое cookies?',
        p1:
          'Cookies — это небольшие текстовые файлы, которые хранятся на вашем устройстве при посещении веб-сайта. Они помогают нам улучшить ваш опыт.',
      },
      usage: {
        title: 'Какие cookies мы используем?',
        necessary: {
          title: 'Необходимые cookies',
          p1: 'Эти cookies необходимы для функционирования веб-сайта:',
          items: ['Аутентификация пользователя', 'Безопасность'],
        },
        analytics: {
          title: 'Аналитические cookies',
          p1: 'Мы используем Google Analytics для анализа трафика:',
          items: ['Какие страницы вы посещаете', 'Сколько времени вы проводите на сайте', 'Откуда вы пришли'],
        },
        marketing: {
          title: 'Маркетинговые cookies',
          p1: 'Используются для показа релевантной рекламы:',
          items: ['Google Ads', 'Facebook Pixel'],
        },
      },
      manage: {
        title: 'Как управлять cookies?',
        p1: 'Вы можете управлять cookies в настройках браузера:',
        items: [
          'Chrome: Меню → Настройки → Конфиденциальность и безопасность',
          'Firefox: Меню → Параметры → Приватность и защита',
          'Safari: Параметры → Приватность',
        ],
      },
      consent: {
        title: 'Согласие на использование cookies',
        p1: 'Посещая наш веб-сайт, вы соглашаетесь с использованием cookies в соответствии с этой политикой.',
      },
    },
  },
  es: {
    language: {
      label: 'Idioma',
      options: {
        en: { short: 'EN', name: 'Ingles' },
        ru: { short: 'RU', name: 'Ruso' },
        es: { short: 'ES', name: 'Espanol' },
      },
    },
    nav: {
      links: {
        about: 'Sobre',
        services: 'Servicios',
        results: 'Resultados',
        community: 'Comunidad',
        contact: 'Contacto',
      },
      apply: 'Postular ahora',
    },
    hero: {
      eyebrow: 'Gestion premium de creadores',
      headline: {
        line1: 'Convierte contenido',
        line2: 'En imperio',
      },
      subheadline:
        'Gestion de creadores para marcas que quieren escalar, sin caos. Nosotros manejamos estrategia, chat, marketing y monetizacion. Tu creas.',
      ctaPrimary: 'Postular ahora',
      ctaSecondary: 'Ver como funciona',
      cardOne: {
        title: 'Gestion integral',
        body:
          'Desde la estrategia de contenido hasta la relacion con fans, cubrimos cada aspecto del crecimiento de tu marca. Nuestro equipo trabaja 24/7 para un rendimiento sostenible.',
      },
      cardTwo: {
        title: 'Casos de estudio',
        body:
          'Compartimos ejemplos transparentes de estrategia y ejecucion. Los resultados varian segun el creador, el mercado y la constancia.',
      },
      alt: 'Fondo principal',
    },
    proof: {
      eyebrow: 'Prueba',
      headline: {
        line1: 'No adivinamos.',
        line2: 'Escalamos.',
      },
      body:
        'Desde el calendario de contenido hasta las ventas premium, llevamos el lado de negocio para que tu seas la marca. Nuestro enfoque basado en datos impulsa progreso estable y medible con el tiempo.',
      stats: {
        revenue: 'Ingresos generados para socios',
        adSpend: 'Inversion publicitaria gestionada (ROAS 4.8x)',
        percentile: 'Percentil promedio de creadores',
        percentilePrefix: 'Top ',
        percentileSuffix: '%',
      },
      badge: {
        title: 'Caso de estudio',
        subtitle: 'El rendimiento varia',
      },
      disclaimer: 'Los resultados no estan garantizados. El rendimiento individual puede variar.',
      alt: 'Historia de exito',
    },
    system: {
      headline: {
        line1: 'Un sistema creado',
        line2: 'para crecer.',
      },
      body:
        'Combinamos estrategia de contenido, trafico de pago y gestion de comunidad 24/7 para que tu marca sea consistente y medible.',
      features: {
        content: {
          title: 'Estrategia de contenido',
          description: 'Sesiones semanales, edicion y calendario de publicaciones optimizado para maxima participacion.',
        },
        paid: {
          title: 'Trafico de pago',
          description: 'Meta + Reddit + anuncios nativos con cumplimiento estricto y alto ROAS.',
        },
        community: {
          title: 'Gestion de comunidad',
          description: 'Retencion de fans, ventas adicionales y seguridad de marca 24/7.',
        },
        optimization: {
          title: 'Optimizacion semanal',
          description: 'Decisiones basadas en datos, pruebas A/B y experimentos de precios para crecimiento continuo.',
        },
      },
      card: {
        title: 'Enfoque',
        subtitle: 'El rendimiento varia',
      },
      alt: 'Nuestro sistema',
    },
    spotlight: {
      eyebrow: 'Socio destacado',
      headline: {
        line1: 'Del lanzamiento al impulso',
        line2: 'constante.',
      },
      profile: {
        name: 'MIA',
        role: 'Creadora de moda y estilo de vida',
        labels: {
          niche: 'Nicho',
          growth: 'Crecimiento',
          fanBase: 'Base de fans',
        },
        values: {
          niche: 'Moda + estilo de vida',
          growth: 'Mejora de ingresos mensuales (varia)',
          fanBase: 'Audiencia comprometida (varia)',
        },
      },
      cta: {
        title: 'Estrategia real. Apoyo real.',
        body:
          'Mira como construimos un plan a medida desde la planificacion de contenido hasta la gestion de comunidad. Los resultados varian segun el creador y el mercado.',
        button: 'Ver caso de estudio',
      },
      alt: 'Socio destacado',
    },
    community: {
      headline: {
        line1: 'No lo haces',
        line2: 'solo.',
      },
      body:
        'Nuestros creadores tienen acceso a una red privada, llamadas semanales de estrategia y un equipo de soporte que realmente responde. Unete a una comunidad de creadores ambiciosos que se impulsan entre si.',
      pills: {
        network: 'Red privada',
        calls: 'Llamadas semanales',
        support: 'Soporte 24/7',
      },
      testimonials: [
        {
          quote:
            'Convirtieron mi pagina en un negocio real. Pase de no tener tiempo para todo a tener un equipo que lo maneja todo.',
          author: 'Lena R.',
        },
        {
          quote:
            'Por fin tengo limites y meses mas fuertes. El equipo respeta mi tiempo mientras maximiza mis ingresos.',
          author: 'Sofia M.',
        },
        {
          quote:
            'El equipo se siente como familia, pero profesional. Realmente se preocupan por mi exito y se nota en los resultados.',
          author: 'Ava T.',
        },
      ],
      altTop: 'Comunidad',
      altBottom: 'Miembro de la comunidad',
    },
    contact: {
      headline: {
        line1: 'Listo para',
        line2: 'escalar?',
      },
      body:
        'Postula ahora. Revisaremos tu marca y responderemos en 48 horas. Hablemos de como transformar tu contenido en un negocio sostenible.',
      infoLabels: {
        email: 'Email',
        whatsapp: 'WhatsApp',
        telegram: 'Telegram',
      },
      form: {
        submittedTitle: 'Solicitud recibida!',
        submittedBody: 'Revisaremos tu marca y te responderemos en 48 horas.',
        nameLabel: 'Nombre',
        namePlaceholder: 'Tu nombre completo',
        emailLabel: 'Email',
        emailPlaceholder: 'tu@email.com',
        handleLabel: 'Usuario social',
        handlePlaceholder: 'IG / TikTok / Plataforma',
        goalsLabel: 'Cuentanos tus metas',
        goalsPlaceholder: 'Que quieres lograr?',
        submit: 'Solicitar llamada',
        submitting: 'Enviando...',
      },
      alt: 'Fondo de contacto',
    },
    footer: {
      description:
        'V&E Digital Marketing Agency. Construimos negocios de creadores con estrategia clara, ejecucion y cuidado.',
      navigation: 'Navegacion',
      legal: 'Legal',
      contacts: 'Contactos',
      privacy: 'Politica de privacidad',
      terms: 'Terminos de uso',
      disclaimer: 'Descargo de responsabilidad',
      cookies: 'Politica de cookies',
      contactsLink: 'Contactos',
      email: 'Email',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      rights: '© 2026 V&E Digital Marketing Agency. Todos los derechos reservados.',
      location: 'Operamos en remoto. Registrados en Ucrania.',
    },
    ageGate: {
      title: 'Solo 18+',
      restricted: 'Este sitio esta disponible solo para usuarios de 18 anos o mas.',
      leave: 'Salir del sitio',
      prompt: 'Por favor confirma que tienes al menos 18 anos para entrar.',
      yes: 'Si, tengo 18+',
      no: 'No',
    },
    about: {
      eyebrow: 'Sobre nosotros',
      title: 'Sobre nosotros',
      history: {
        title: 'Historia de V&E AGENCY',
        p1:
          'V&E AGENCY es una agencia de marketing internacional especializada en promocionar creadores de contenido y marcas en redes sociales.',
        p2: 'Trabajamos con clientes desde 2021 y ayudamos a construir estrategias de crecimiento sostenibles a largo plazo.',
      },
      mission: {
        title: 'Nuestra mision',
        p1:
          'Ayudar a creadores de contenido talentosos a desbloquear su potencial, construir un negocio estable y crecer audiencias en plataformas de pago y redes sociales.',
      },
      whatWeDo: {
        title: 'Que hacemos?',
        items: {
          strategy: {
            label: 'Estrategia de contenido:',
            text: 'planificacion de publicaciones y formatos de contenido.',
          },
          promotion: {
            label: 'Promocion:',
            text: 'publicidad en redes sociales y canales de pago.',
          },
          accounts: {
            label: 'Gestion de cuentas:',
            text: 'gestion y optimizacion de perfiles.',
          },
          monetization: {
            label: 'Monetizacion:',
            text: 'apoyo para aumentar ingresos por contenido.',
          },
          support: {
            label: 'Soporte 24/7:',
            text: 'consultas y ayuda de managers.',
          },
        },
      },
      team: {
        title: 'Nuestro equipo',
        items: {
          founders: {
            label: 'Fundadores:',
            text: 'equipo V&E AGENCY.',
          },
          content: {
            label: 'Managers de contenido:',
            text: 'especialistas en marketing.',
          },
          designers: {
            label: 'Disenadores:',
            text: 'profesionales en creacion de contenido visual.',
          },
          analysts: {
            label: 'Analistas:',
            text: 'expertos en analisis de datos y optimizacion.',
          },
        },
      },
      why: {
        title: 'Por que elegirnos?',
        items: [
          'Experiencia en la industria',
          'Equipo profesional',
          'Enfoque personalizado',
          'Transparencia en el trabajo',
          'Soporte 24/7',
        ],
      },
      contact: {
        title: 'Contactanos',
        emailLabel: 'Email:',
        telegramLabel: 'Telegram:',
      },
    },
    privacy: {
      eyebrow: 'Politica de privacidad',
      title: 'Politica de privacidad',
      updated: 'Ultima actualizacion: 16 de febrero de 2026',
      intro: {
        title: '1. Introduccion',
        p1: 'V&E AGENCY ("Compania", "nosotros") respeta tu privacidad.',
        p2:
          'Esta politica explica como recopilamos, usamos, divulgamos y protegemos informacion sobre ti cuando usas nuestro sitio web.',
      },
      info: {
        title: '2. Informacion que recopilamos',
        p1: 'Recopilamos informacion que proporcionas voluntariamente:',
        items: ['Nombre', 'Numero de telefono o Telegram', 'Direccion de email', 'Otra informacion que proporcionas en el formulario de contacto'],
      },
      use: {
        title: '3. Como usamos tu informacion',
        p1: 'Usamos la informacion recopilada para:',
        items: [
          'Contactarte sobre una posible colaboracion',
          'Brindar informacion sobre nuestros servicios',
          'Mejorar nuestro sitio web y servicios',
          'Cumplir con la ley',
        ],
      },
      security: {
        title: '4. Seguridad de datos',
        p1:
          'Tomamos medidas razonables para proteger tus datos personales contra acceso no autorizado, alteracion, divulgacion o destruccion.',
        p2: 'Sin embargo, ningun metodo de transmision por Internet es 100% seguro.',
      },
      sharing: {
        title: '5. Compartir con terceros',
        p1:
          'NO vendemos ni transferimos tus datos personales a terceros sin tu consentimiento explicito, salvo que la ley lo exija.',
      },
      cookies: {
        title: '6. Cookies',
        p1: 'Nuestro sitio usa cookies para mejorar tu experiencia. Consulta la Politica de cookies para mas detalles.',
      },
      rights: {
        title: '7. Tus derechos',
        p1: 'Tienes derecho a:',
        items: ['Acceder a tus datos personales', 'Corregir datos inexactos', 'Eliminar tus datos (derecho al olvido)'],
      },
      contact: {
        title: '8. Contacto',
        p1: 'Si tienes preguntas sobre esta politica, contactanos:',
        emailLabel: 'Email:',
        telegramLabel: 'Telegram:',
      },
    },
    terms: {
      eyebrow: 'Terminos de uso',
      title: 'Terminos de uso',
      updated: 'Ultima actualizacion: 16 de febrero de 2026',
      acceptance: {
        title: '1. Aceptacion de terminos',
        p1: 'Al usar nuestro sitio web, aceptas estos terminos de uso.',
      },
      services: {
        title: '2. Descripcion de servicios',
        p1:
          'V&E AGENCY ofrece servicios de consultoria para promocion de contenido y marketing. No garantizamos resultados especificos.',
      },
      client: {
        title: '3. Derechos y obligaciones del cliente',
        p1: 'El cliente se compromete a:',
        items: [
          'Proporcionar informacion veraz',
          'Cumplir las reglas de las plataformas y redes sociales',
          'Cumplir la ley',
          'No usar contenido para fines ilegales',
        ],
      },
      agency: {
        title: '4. Derechos y obligaciones de V&E AGENCY',
        p1: 'Nos comprometemos a:',
        items: ['Prestar servicios segun el contrato', 'Mantener la confidencialidad', 'Mantener un nivel profesional de servicio'],
      },
      payment: {
        title: '5. Pago',
        items: [
          'El precio del servicio se especifica en un acuerdo separado',
          'El pago se realiza segun los terminos del acuerdo',
          'Los reembolsos se consideran de forma individual',
        ],
      },
      liability: {
        title: '6. Limitacion de responsabilidad',
        p1: 'V&E AGENCY no es responsable de:',
        items: ['Perdidas directas o indirectas', 'Perdida de datos o ingresos', 'Acciones de terceros'],
      },
      termination: {
        title: '7. Terminacion de servicios',
        p1: 'Los servicios pueden finalizarse por acuerdo mutuo o segun el contrato.',
      },
      law: {
        title: '8. Ley aplicable',
        p1: 'Estos terminos se rigen por las leyes de Ucrania.',
      },
    },
    disclaimer: {
      eyebrow: 'Descargo de responsabilidad',
      title: 'Descargo de responsabilidad',
      updated: 'Ultima actualizacion: 16 de febrero de 2026',
      notice: {
        title: 'Aviso importante',
        p1:
          'V&E AGENCY brinda servicios de promocion de contenido y consultoria en marketing. Lee este descargo con atencion antes de usar nuestros servicios.',
      },
      guarantees: {
        title: 'Sin garantias',
        items: [
          'Los resultados no estan garantizados. No garantizamos resultados especificos, incluidos ingresos, numero de seguidores o crecimiento de popularidad. Los resultados dependen de muchos factores, incluida la calidad del contenido, la actividad del cliente y las condiciones del mercado.',
          'Resultados individuales. Los resultados de otros clientes no significan que obtendras los mismos. Cada caso es unico.',
          'Riesgo de perdida. Las inversiones en promocion de contenido conllevan riesgo. No garantizamos retorno de inversion.',
        ],
      },
      liability: {
        title: 'Limitacion de responsabilidad',
        p1: 'V&E AGENCY no es responsable de:',
        items: [
          'Perdida de datos o ingresos',
          'Bloqueo de cuentas en plataformas y redes sociales',
          'Incumplimiento de reglas de la plataforma por parte del cliente',
          'Acciones de terceros',
        ],
      },
      compliance: {
        title: 'Cumplimiento legal',
        p1:
          'El cliente es totalmente responsable del cumplimiento de todas las leyes y reglas de las plataformas donde se publica el contenido.',
      },
      changes: {
        title: 'Cambios en los servicios',
        p1: 'Nos reservamos el derecho de modificar o descontinuar servicios en cualquier momento.',
      },
      contact: {
        title: 'Contactos',
        emailLabel: 'Email:',
        telegramLabel: 'Telegram:',
      },
    },
    cookies: {
      eyebrow: 'Politica de cookies',
      title: 'Politica de cookies',
      updated: 'Ultima actualizacion: 16 de febrero de 2026',
      what: {
        title: 'Que son las cookies?',
        p1:
          'Las cookies son pequenos archivos de texto almacenados en tu dispositivo cuando visitas un sitio web. Nos ayudan a mejorar tu experiencia.',
      },
      usage: {
        title: 'Que cookies usamos?',
        necessary: {
          title: 'Cookies necesarias',
          p1: 'Estas cookies son necesarias para que el sitio funcione:',
          items: ['Autenticacion de usuario', 'Seguridad'],
        },
        analytics: {
          title: 'Cookies analiticas',
          p1: 'Usamos Google Analytics para analizar el trafico:',
          items: ['Que paginas visitas', 'Cuanto tiempo pasas en el sitio', 'De donde vienes'],
        },
        marketing: {
          title: 'Cookies de marketing',
          p1: 'Se usan para mostrar anuncios relevantes:',
          items: ['Google Ads', 'Facebook Pixel'],
        },
      },
      manage: {
        title: 'Como gestionar cookies?',
        p1: 'Puedes gestionar cookies desde la configuracion del navegador:',
        items: [
          'Chrome: Menu → Configuracion → Privacidad y seguridad',
          'Firefox: Menu → Ajustes → Privacidad y seguridad',
          'Safari: Preferencias → Privacidad',
        ],
      },
      consent: {
        title: 'Consentimiento de cookies',
        p1: 'Al visitar nuestro sitio web, aceptas el uso de cookies segun esta politica.',
      },
    },
  },
} as const;

const resolveTranslation = (source: TranslationValue, key: string) => {
  return key.split('.').reduce<TranslationValue | undefined>((value, part) => {
    if (!value || typeof value !== 'object') {
      return undefined;
    }

    if (Array.isArray(value)) {
      return undefined;
    }

    return (value as Record<string, TranslationValue>)[part];
  }, source);
};

const getTranslation = (language: Language, key: string) => {
  const direct = resolveTranslation(translations[language], key);
  if (direct !== undefined) {
    return direct;
  }

  const fallback = resolveTranslation(translations.en, key);
  return fallback ?? key;
};

const LanguageContext = createContext<I18nContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'ru' || stored === 'es') {
      return stored;
    }

    return 'en';
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const t = useCallback((key: string) => getTranslation(language, key), [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t,
    }),
    [language, t]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useI18n must be used within a LanguageProvider');
  }

  return context;
};
