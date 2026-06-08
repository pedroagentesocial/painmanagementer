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
    why: 'Why us',
    how: 'How it works',
    testimonials: 'Testimonials',
    contact: 'Contact',
    book: 'Book an assessment',
    bookShort: 'Book',
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
  conditions: {
    eyebrow: 'Your pain',
    title: 'Where does it hurt?',
    subtitle: 'Start by naming your pain. We treat the cause, not just the symptom.',
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
    items: [
      {
        title: 'Image-guided injections & nerve blocks',
        description:
          'We deliver medication to the exact source of the pain, under ultrasound or X-ray guidance.',
      },
      {
        title: 'Radiofrequency',
        description:
          'We quiet the nerves carrying the pain for lasting relief, without surgery.',
      },
      {
        title: 'Neuromodulation',
        description: 'Technology that retrains the pain signal in chronic, complex cases.',
      },
      {
        title: 'Regenerative therapy & physiotherapy',
        description: 'We restore tissue and retrain movement so the relief lasts.',
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
    success: 'Thank you! We received your request and will contact you soon.',
    error: 'We couldn’t send your request. Please try again in a few minutes.',
    errors: {
      name: 'Please enter your name (at least 2 characters).',
      email: 'Please enter a valid email address.',
      phone: 'Please enter a valid phone number (at least 7 digits).',
    },
  },
  logistics: {
    locationHeading: 'Where to find us',
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
  footer: {
    tagline: 'A clinic specialized in chronic pain management.',
    rights: 'All rights reserved.',
    disclaimer:
      'Information on this site is for guidance only and does not replace professional medical advice.',
  },
};
