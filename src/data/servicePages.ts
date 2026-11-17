/* Páginas de servicio. El contenido de fondo sale del diccionario del sitio
   (src/i18n/locales); aquí solo van la URL de cada idioma, el título, la
   introducción y qué bloques y guías del blog muestra cada una.
   Los índices apuntan a t.services.items y t.conditions.items. */

import type { Lang } from '../i18n/config';

interface Copy {
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  servicesTitle: string;
  guidesTitle: string;
  moreLabel: string;
}

interface ServicePage {
  slug: Record<Lang, string>;
  /** Índice en t.conditions.items, si la página es de una condición. */
  condition?: number;
  /** Índices en t.services.items. */
  services: number[];
  /** Slugs de artículos del blog (iguales en los dos idiomas). */
  guides: string[];
  copy: Record<Lang, Copy>;
}

const comunes = {
  en: { guidesTitle: 'Guides from our blog', moreLabel: 'More from PainManagement ER' },
  es: { guidesTitle: 'Guías de nuestro blog', moreLabel: 'Más de PainManagement ER' },
};

export const SERVICE_PAGES = {
  espalda: {
    slug: { en: 'back-and-neck-pain', es: 'dolor-de-espalda-y-cuello' },
    condition: 0,
    services: [5, 0],
    guides: [
      'chronic-low-back-pain-guide',
      'neck-pain-guide',
      'sciatica-guide',
      'spinal-stenosis',
      'back-pain-mri-imaging',
      'car-accident-whiplash',
    ],
    copy: {
      en: {
        ...comunes.en,
        title: 'Back and Neck Pain Treatment in Sandy, Utah',
        description:
          'Herniated discs, sciatica, chronic low-back and neck pain: personalized, minimally invasive treatment in Sandy, Utah. We treat the cause, not just the symptom.',
        eyebrow: 'Back & neck',
        h1: 'Back and neck pain treatment in Sandy, Utah',
        intro: 'We treat the cause, not just the symptom: first a diagnosis that finds the exact source of the pain, then a plan built around you that favors the least invasive option.',
        servicesTitle: 'Diagnosis and focused care',
      },
      es: {
        ...comunes.es,
        title: 'Tratamiento del dolor de espalda y cuello en Sandy, Utah',
        description:
          'Hernias de disco, ciática, lumbalgia crónica y dolor de cuello: tratamiento personalizado y mínimamente invasivo en Sandy, Utah. Tratamos la causa, no solo el síntoma.',
        eyebrow: 'Espalda y cuello',
        h1: 'Tratamiento del dolor de espalda y cuello en Sandy, Utah',
        intro: 'Tratamos la causa, no solo el síntoma: primero un diagnóstico que encuentra el origen exacto del dolor y después un plan a tu medida que prioriza lo menos invasivo.',
        servicesTitle: 'Diagnóstico y atención por zona',
      },
    },
  },
  tratamientos: {
    slug: { en: 'pain-treatments', es: 'tratamientos-del-dolor' },
    services: [2, 3],
    guides: [
      'non-opioid-chronic-pain-treatment',
      'chronic-pain-mental-health',
      'chronic-postsurgical-pain',
      'fibromyalgia-guide',
      'migraine-headache-disorders',
      'peripheral-neuropathy-diabetes',
    ],
    copy: {
      en: {
        ...comunes.en,
        title: 'Minimally Invasive Pain Treatments in Sandy, Utah',
        description:
          'Image-guided injections and nerve blocks, radiofrequency, neuromodulation and regenerative therapy for chronic pain in Sandy, Utah. We favor the least invasive option.',
        eyebrow: 'How we treat',
        h1: 'Minimally invasive pain treatments in Sandy, Utah',
        intro: 'Precise, minimally invasive procedures that treat the source of the pain. After the diagnosis we design a plan that fits you, and we walk you through every option before deciding together.',
        servicesTitle: 'Care that goes with your treatment',
      },
      es: {
        ...comunes.es,
        title: 'Tratamientos mínimamente invasivos para el dolor en Sandy, Utah',
        description:
          'Infiltraciones y bloqueos guiados por imagen, radiofrecuencia, neuromodulación y terapia regenerativa para el dolor crónico en Sandy, Utah. Priorizamos lo menos invasivo.',
        eyebrow: 'Cómo tratamos',
        h1: 'Tratamientos mínimamente invasivos para el dolor en Sandy, Utah',
        intro: 'Procedimientos precisos y mínimamente invasivos para tratar el origen del dolor. Tras el diagnóstico diseñamos un plan a tu medida y te explicamos cada opción antes de decidir juntos.',
        servicesTitle: 'Atención que acompaña tu tratamiento',
      },
    },
  },
  accidente: {
    slug: { en: 'car-accident-pain', es: 'dolor-despues-de-un-accidente' },
    services: [4, 0, 5],
    guides: ['car-accident-whiplash', 'neck-pain-guide', 'chronic-low-back-pain-guide', 'back-pain-mri-imaging'],
    copy: {
      en: {
        ...comunes.en,
        title: 'Pain Treatment After a Car Accident in Sandy, Utah',
        description:
          'Immediate evaluation, imaging studies, treatment and safe recovery after a traffic accident in Sandy, Utah, with follow-up at every stage.',
        eyebrow: 'After an accident',
        h1: 'Pain treatment after a car accident in Sandy, Utah',
        intro: 'Specialized care after a car accident: an immediate evaluation, the imaging studies that pinpoint the source of your pain, and treatment and rehabilitation with follow-up at every stage of your recovery.',
        servicesTitle: 'What your care includes',
      },
      es: {
        ...comunes.es,
        title: 'Tratamiento tras un accidente de auto en Sandy, Utah',
        description:
          'Evaluación inmediata, estudios de imagen, tratamiento y recuperación segura después de un accidente de tráfico en Sandy, Utah, con seguimiento en cada etapa.',
        eyebrow: 'Después de un accidente',
        h1: 'Tratamiento del dolor después de un accidente de auto en Sandy, Utah',
        intro: 'Atención especializada después de un accidente de auto: una evaluación inmediata, los estudios de imagen que ubican el origen de tu dolor, y tratamiento y rehabilitación con seguimiento en cada etapa de tu recuperación.',
        servicesTitle: 'Qué incluye tu atención',
      },
    },
  },
} satisfies Record<string, ServicePage>;

export type ServicePageId = keyof typeof SERVICE_PAGES;
