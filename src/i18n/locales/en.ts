import type { es } from './es';

/**
 * English dictionary. Typed as `typeof es` so it MUST mirror the Spanish
 * structure exactly — TypeScript flags any missing/extra key.
 */
export const en: typeof es = {
  site: {
    name: 'PainManagement ER',
    tagline: 'Reclaim your life, pain-free',
  },
  nav: {
    conditions: 'Your pain',
    treatments: 'Treatments',
    services: 'Services',
    why: 'Why us',
    how: 'How it works',
    faq: 'FAQ',
    testimonials: 'Testimonials',
    contact: 'Contact',
    book: 'Book an assessment',
    bookShort: 'Book',
    menu: 'Menu',
  },
  langSwitcher: {
    label: 'Change language',
  },
  a11y: {
    skipToContent: 'Skip to content',
    required: '(required)',
  },
  hero: {
    slides: [
      {
        eyebrow: 'Pain management clinic',
        titleA: 'Take your life back,',
        titleB: 'not pain’s',
        subtitle:
          'Personalized, minimally invasive treatments for chronic back, joint and nerve pain. A team that listens, diagnoses and stays with you.',
      },
      {
        eyebrow: 'Advanced treatments',
        titleA: 'Less pain,',
        titleB: 'more movement',
        subtitle:
          'Minimally invasive, fast-recovery procedures designed around your exact diagnosis — no unnecessary surgery.',
      },
      {
        eyebrow: 'A team that listens',
        titleA: 'You’re not alone',
        titleB: 'on this path',
        subtitle:
          'A board-certified team that pinpoints the real source of your pain and stays with you, step by step, until you move freely again.',
      },
    ],
    ctaPrimary: 'Book an assessment',
    ctaSecondary: 'See how we treat pain',
    trust: 'Board-certified medical team · First assessment with no commitment',
    imageAlt: 'A person walks toward the golden evening light, moving freely again.',
    slider: {
      region: 'Hero background videos',
      prev: 'Previous video',
      next: 'Next video',
      goTo: 'Go to video',
    },
  },
  services: {
    eyebrow: 'Our services',
    title: 'All your care, in one place',
    subtitle:
      'From medical imaging to rehabilitation: one team and a clear process so you regain your mobility without running in circles.',
    detailsCta: 'View details',
    approachTitle: 'Every service includes',
    approach: [
      'A brief review with clear goals',
      'A simple, customized plan',
      'Brief follow-ups with useful adjustments',
    ],
    call: 'Call now',
    book: 'Book an appointment',
    close: 'Close',
    items: [
      {
        title: 'Medical Imaging Services',
        short: 'Reliable diagnostics with precision technology.',
        description:
          'Imaging studies with state-of-the-art equipment —X-ray, MRI, CT, IMEKA, Ultrasound and PET— to pinpoint the exact source of your pain.',
        points: [
          'X-ray, MRI, CT, IMEKA, Ultrasound and PET',
          'Results delivered in 24–48 hours',
          'Clear, easy-to-read reports',
        ],
      },
      {
        title: 'General Medicine',
        short: 'Consultations, checkups and complete follow-up.',
        description:
          'Close, clear medical care: we assess your overall health, run complete checkups and follow your progress every step of the way.',
        points: [
          'Consultations and complete checkups',
          'Close, continuous follow-up',
          'Clear guidance at every step',
        ],
      },
      {
        title: 'Physical Therapy & Pain Management',
        short: 'Guided rehabilitation and real pain relief.',
        description:
          'Personalized rehabilitation plans to relieve pain, restore mobility and prevent relapses. Includes expert second opinions when you need them.',
        points: [
          'Guided rehabilitation plans',
          'Pain relief and restored mobility',
          'Expert second opinions',
        ],
      },
      {
        title: 'Mental Therapy',
        short: 'Psychotherapy focused on your wellbeing.',
        description:
          'Psychological support for chronic pain, anxiety and emotional wellbeing, with a clear, human and judgment-free approach.',
        points: [
          'Psychotherapy for chronic pain and anxiety',
          'A clear, caring approach',
          'Wellbeing and emotional support',
        ],
      },
      {
        title: 'Post-Accident Treatment',
        short: 'Specialized care after a car accident.',
        description:
          'Immediate evaluation, treatment and safe recovery after a traffic accident, with follow-up at every stage of your recovery.',
        points: [
          'Immediate evaluation',
          'Treatment and safe rehabilitation',
          'Follow-up at every stage',
        ],
      },
      {
        title: 'Targeted Pain Care',
        short: 'Specific solutions for every area.',
        description:
          'Focused treatments for head, back, hip, knee, shoulder, neck and foot: an area-specific approach for lasting solutions.',
        points: [
          'Head, back, hip, knee, shoulder, neck and foot',
          'Area-specific approach',
          'Lasting solutions',
        ],
      },
    ],
    proceduresTitle: 'Pain treatments',
    proceduresSubtitle: 'Precise, minimally invasive procedures that treat the source of the pain.',
    procedures: [
      {
        title: 'Image-guided injections & nerve blocks',
        short: 'Medication to the exact pain point.',
        description:
          'We deliver medication to the exact source of the pain, under ultrasound or X-ray guidance for maximum precision.',
        points: [
          'Precision guided by ultrasound or X-ray',
          'Outpatient procedure',
          'Relief targeted at the pain source',
        ],
      },
      {
        title: 'Radiofrequency',
        short: 'Long-lasting relief, no surgery.',
        description:
          'We quiet the nerves carrying the pain for lasting relief, with no surgery or hospital stay.',
        points: ['No surgery or hospital stay', 'Long-lasting relief', 'Fast recovery'],
      },
      {
        title: 'Neuromodulation',
        short: 'Retrains the chronic pain signal.',
        description:
          'Technology that retrains the pain signal in chronic, complex cases, adjusting to your progress.',
        points: ['For chronic, complex pain', 'Retrains the pain signal', 'Adjustable to your progress'],
      },
      {
        title: 'Regenerative therapy & physiotherapy',
        short: 'Restores tissue and movement.',
        description: 'We restore damaged tissue and retrain movement so the relief lasts.',
        points: ['Restores damaged tissue', 'Retrains movement', 'Lasting results'],
      },
    ],
  },
  conditions: {
    eyebrow: 'Your pain',
    title: 'Where does it hurt?',
    subtitle: 'Start by naming your pain. We treat the cause, not just the symptom.',
    notListedTitle: 'Don’t see your pain here?',
    notListedText: 'We treat many more conditions. Tell us your case and we’ll guide you, no commitment.',
    notListedCta: 'Ask us',
    items: [
      {
        title: 'Back & neck',
        description: 'Herniated discs, sciatica, chronic low-back and neck pain.',
      },
      {
        title: 'Joints',
        description: 'Knee, hip and shoulder: arthritis and injuries that limit your mobility.',
      },
      {
        title: 'Neuropathic pain',
        description: 'Neuralgia and nerve-related pain that painkillers won’t settle.',
      },
      {
        title: 'Migraines & headaches',
        description: 'Chronic headaches that take over your day.',
      },
      {
        title: 'Post-surgical pain',
        description: 'Persistent pain after an operation that just won’t fade.',
      },
      {
        title: 'Fibromyalgia',
        description: 'Widespread pain and fatigue that need a whole-person approach.',
      },
    ],
  },
  treatments: {
    eyebrow: 'How we treat',
    title: 'Precise treatments, not patches',
    subtitle:
      'After the diagnosis we design a plan that fits you. We favor the least invasive option.',
    cta: 'Book an assessment',
    items: [
      {
        title: 'Image-guided injections & nerve blocks',
        tag: 'Minimally invasive',
        description:
          'We deliver medication to the exact source of the pain, under ultrasound or X-ray guidance for maximum precision.',
        points: [
          'Precision guided by ultrasound or X-ray',
          'Outpatient procedure',
          'Relief targeted at the pain source',
        ],
      },
      {
        title: 'Radiofrequency',
        tag: 'No surgery',
        description:
          'We quiet the nerves carrying the pain for lasting relief, with no surgery or hospital stay.',
        points: ['No surgery or hospital stay', 'Long-lasting relief', 'Fast recovery'],
      },
      {
        title: 'Neuromodulation',
        tag: 'Chronic pain',
        description:
          'Technology that retrains the pain signal in chronic, complex cases, adjusting to your progress.',
        points: ['For chronic, complex pain', 'Retrains the pain signal', 'Adjustable to your progress'],
      },
      {
        title: 'Regenerative therapy & physiotherapy',
        tag: 'Recovery',
        description: 'We restore damaged tissue and retrain movement so the relief lasts.',
        points: ['Restores damaged tissue', 'Retrains movement', 'Lasting results'],
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'Serious care, results you can measure',
    subtitle:
      'We don’t chase isolated symptoms: we design a complete plan, measure it, and adjust it with you.',
    placeholderNote: 'Sample figures: to be replaced with real, verifiable data before launch.',
    points: [
      {
        title: 'Multidisciplinary team',
        description: 'Anesthesiologists, rehab physicians and physiotherapists on a single plan.',
      },
      {
        title: 'Precision diagnosis',
        description: 'We pinpoint the real source of your pain before proposing anything.',
      },
      {
        title: 'Minimally invasive',
        description: 'Techniques without major surgery: faster recovery, fewer risks.',
      },
      {
        title: 'Measured follow-up',
        description: 'We quantify your progress and adjust the treatment as you improve.',
      },
    ],
    stats: [
      { value: '15+ years', label: 'of clinical experience' },
      { value: '12,000+', label: 'patients treated' },
      { value: '94%', label: 'report less pain' },
    ],
  },
  howItWorks: {
    eyebrow: 'How it works',
    title: 'From first visit to your life back',
    subtitle: 'A clear path, no surprises. You decide every step.',
    steps: [
      {
        title: 'Request your assessment',
        description: 'Fill in the form in two minutes. We contact you within 24 hours.',
      },
      {
        title: 'Personalized diagnosis',
        description: 'A consultation and tests to understand the exact source of your pain.',
      },
      {
        title: 'Your treatment plan',
        description: 'We walk you through the options and decide the path together.',
      },
      {
        title: 'Follow-up & improvement',
        description: 'We measure results and adjust until you regain your mobility.',
      },
    ],
    cta: 'Start with your assessment',
  },
  testimonials: {
    eyebrow: 'Testimonials',
    title: 'Stories from people who got moving again',
    placeholderNote: 'Sample testimonials: must be real and consented before launch.',
    items: [
      {
        quote:
          'After years of low-back pain, I can finally play with my kids without thinking about my back.',
        author: 'María G.',
        role: 'Low-back pain',
      },
      {
        quote:
          'They explained every step. The knee injection gave me my mobility back in weeks.',
        author: 'Carlos R.',
        role: 'Joint pain',
      },
      {
        quote:
          'My migraines went from disabling to manageable. It completely changed my daily life.',
        author: 'Lucía M.',
        role: 'Chronic migraine',
      },
      {
        quote:
          'The team listened when no one else did. I regained trust in my treatment.',
        author: 'Ana P.',
        role: 'Neck pain',
      },
      {
        quote:
          'Radiofrequency took away the sciatica I had carried for years. I sleep well again.',
        author: 'Jorge L.',
        role: 'Sciatica',
      },
      {
        quote:
          'I walk without discomfort again after rehab. Caring and very professional.',
        author: 'Elena V.',
        role: 'Post-surgical pain',
      },
    ],
  },
  lead: {
    heading: 'Book your assessment',
    subheading: 'Leave your details and a specialist will contact you within 24 hours.',
    name: 'Full name',
    email: 'Email address',
    phone: 'Phone number',
    message: 'Tell us about your pain (optional)',
    submit: 'Send request',
    submitting: 'Sending…',
    consent:
      'I have read and accept the privacy policy and authorize the processing of my data so the medical team can contact me.',
    // SMS opt-in, separate from the data-processing consent above. Split so the
    // privacy policy stays a real link inside the label.
    smsConsent:
      'By Entering Your Phone Number, You Are Agreeing To Receive Text Messages From Us. Message Rates May Apply. You Can Reply STOP or UNSUBSCRIBE To Opt-Out.',
    smsConsentSee: 'See our',
    smsConsentPolicy: 'Privacy Policy',
    smsConsentTail: 'for additional details.',
    privacyNote: 'Your data is only used to handle your request. We never share it with third parties.',
    success: 'Thank you! We received your request and will contact you soon.',
    error: 'We couldn’t send your request. Please try again in a few minutes.',
    errors: {
      name: 'Please enter your name (at least 2 characters).',
      email: 'Please enter a valid email address.',
      phone: 'Please enter a valid phone number (at least 7 digits).',
      consent: 'You must accept the data processing terms to continue.',
      smsConsent: 'You must agree to receive text messages to continue.',
    },
  },
  logistics: {
    panelTitle: 'Let’s talk',
    panelSubtitle: 'We’re here to listen. Choose whichever channel you prefer.',
    phoneLabel: 'Call us',
    whatsappLabel: 'WhatsApp',
    whatsappCta: 'Message us on WhatsApp',
    emailLabel: 'Email us',
    locationHeading: 'Where to find us',
    hoursHeading: 'Opening hours',
    hours: [
      { days: 'Monday to Friday', time: '9:00 – 20:00' },
      { days: 'Saturday', time: '9:00 – 14:00' },
      { days: 'Sunday', time: 'Closed' },
    ],
    followHeading: 'Follow us',
    insuranceHeading: 'Insurers we work with',
    insuranceNote: 'Don’t see yours? Ask us: we work with more insurers.',
    questionsHeading: 'Before you come',
    questions: [
      {
        question: 'Do I need a medical referral?',
        answer:
          'It’s not required. You can request the assessment directly and we’ll review your case.',
      },
      {
        question: 'Are the treatments painful?',
        answer:
          'Most are minimally invasive and done under local anesthesia. We explain every step first.',
      },
      {
        question: 'How long until I feel better?',
        answer:
          'It depends on the treatment and the person, but many patients feel relief within the first few weeks.',
      },
      {
        question: 'Do you work with my insurer?',
        answer:
          'Tell us yours in the form and we’ll confirm your coverage before the first visit.',
      },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'We answer your questions',
    subtitle: 'The things people ask us most before a first visit. Still have one? We’re just a call away.',
    stillTitle: 'Can’t find your answer?',
    stillText: 'Message or call us and we’ll guide you, no commitment.',
    callCta: 'Call now',
    contactCta: 'Book an assessment',
  },
  notFound: {
    code: '404',
    title: 'Page not found',
    message: 'Sorry, the page you’re looking for doesn’t exist or has moved.',
    home: 'Back to home',
  },
  privacy: {
    link: 'Privacy policy',
    title: 'Privacy policy',
    intro:
      'Your privacy matters to us. Here we explain what data we collect, what we use it for and what rights you have. (Template for guidance only: review it with your legal advisor before publishing.)',
    updatedLabel: 'Last updated',
    updated: 'June 2026',
    backHome: 'Back to home',
    sections: [
      {
        heading: 'Data controller',
        body: 'PainManagement ER is responsible for the personal data you provide through this site. You can reach us at hola@painmanagementer.com.',
      },
      {
        heading: 'What data we collect',
        body: 'We collect the data you send through the contact form (name, email, phone and, optionally, your message), plus basic anonymous technical browsing data.',
      },
      {
        heading: 'What we use it for',
        body: 'We use your data only to respond to your request, manage your assessment and follow up with you. We do not use it for third-party advertising.',
      },
      {
        heading: 'Legal basis',
        body: 'We process your data based on your explicit consent, given when you tick the form checkbox, and on our legitimate interest in handling your request.',
      },
      {
        heading: 'Retention',
        body: 'We keep your data for as long as needed to handle your request and meet applicable legal obligations. It is then securely deleted.',
      },
      {
        heading: 'Your rights',
        body: 'You can access, rectify or erase your data, and object to or restrict its processing, by writing to hola@painmanagementer.com. You may also lodge a complaint with the competent data protection authority.',
      },
    ],
  },
  footer: {
    tagline: 'A clinic specialized in chronic pain management.',
    rights: 'All rights reserved.',
    disclaimer:
      'Information on this site is for guidance only and does not replace professional medical advice.',
  },
};
