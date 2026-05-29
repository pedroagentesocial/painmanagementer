/**
 * Spanish dictionary — SOURCE OF TRUTH for the UI text shape.
 * en.ts is typed `typeof es`, so any missing/extra key is a compile error.
 * Components never hardcode user-facing text; they read it via useTranslations(lang).
 *
 * PLACEHOLDER fields (metrics, credentials, testimonials) are clearly marked and
 * MUST be replaced with real, verifiable data before launch (medical-advertising
 * rules: no invented stats or fake testimonials).
 */
export const es = {
  site: {
    name: 'PainManagementer',
    tagline: 'Recupera tu vida, libre de dolor',
  },
  nav: {
    conditions: 'Tu dolor',
    treatments: 'Tratamientos',
    why: 'Por qué nosotros',
    how: 'Cómo funciona',
    testimonials: 'Testimonios',
    contact: 'Contacto',
    book: 'Agendar valoración',
    bookShort: 'Agendar',
  },
  langSwitcher: {
    label: 'Cambiar idioma',
  },
  a11y: {
    skipToContent: 'Saltar al contenido',
    required: '(obligatorio)',
  },
  hero: {
    eyebrow: 'Clínica del manejo del dolor',
    titleA: 'Recupera tu vida,',
    titleB: 'sin que el dolor decida',
    subtitle:
      'Tratamientos personalizados y mínimamente invasivos para el dolor crónico de espalda, articulaciones y nervios. Un equipo que escucha, diagnostica y te acompaña hasta que vuelves a moverte.',
    ctaPrimary: 'Agendar valoración',
    ctaSecondary: 'Ver cómo tratamos el dolor',
    trust: 'Equipo médico colegiado · Primera valoración sin compromiso',
    imageAlt: 'Una persona camina hacia la luz dorada del atardecer, de nuevo en movimiento.',
  },
  conditions: {
    eyebrow: 'Tu dolor',
    title: '¿Dónde te duele?',
    subtitle:
      'Empieza por identificar tu dolor. Tratamos las causas, no solo los síntomas.',
    items: [
      {
        title: 'Espalda y cuello',
        description: 'Hernias discales, ciática, dolor lumbar y cervical crónico.',
      },
      {
        title: 'Articulaciones',
        description: 'Rodilla, cadera y hombro: artrosis y lesiones que limitan tu movilidad.',
      },
      {
        title: 'Dolor neuropático',
        description: 'Neuralgias y dolor de origen nervioso que no cede con analgésicos.',
      },
      {
        title: 'Migrañas y cefaleas',
        description: 'Dolor de cabeza crónico que condiciona tu día a día.',
      },
      {
        title: 'Dolor postquirúrgico',
        description: 'Dolor persistente tras una operación que no termina de remitir.',
      },
      {
        title: 'Fibromialgia',
        description: 'Dolor generalizado y fatiga que requieren un abordaje integral.',
      },
    ],
  },
  treatments: {
    eyebrow: 'Cómo tratamos',
    title: 'Tratamientos precisos, no parches',
    subtitle:
      'Tras el diagnóstico diseñamos un plan a tu medida. Priorizamos lo mínimamente invasivo.',
    items: [
      {
        title: 'Infiltraciones y bloqueos guiados por imagen',
        description:
          'Llevamos la medicación exactamente al punto del dolor, con control ecográfico o radiológico.',
      },
      {
        title: 'Radiofrecuencia',
        description:
          'Desactivamos los nervios que transmiten el dolor para un alivio prolongado, sin cirugía.',
      },
      {
        title: 'Neuromodulación',
        description:
          'Tecnología que reeduca la señal del dolor en casos crónicos y complejos.',
      },
      {
        title: 'Terapias regenerativas y fisioterapia',
        description:
          'Recuperamos el tejido y reentrenamos el movimiento para que el alivio dure.',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Por qué nosotros',
    title: 'Cuidado serio, resultados que se miden',
    subtitle:
      'No tratamos síntomas sueltos: diseñamos un plan integral, lo medimos y lo ajustamos contigo.',
    placeholderNote: 'Cifras de ejemplo: se sustituirán por datos reales verificables antes de publicar.',
    points: [
      {
        title: 'Equipo multidisciplinar',
        description:
          'Anestesiólogos, rehabilitadores y fisioterapeutas trabajando sobre un mismo plan.',
      },
      {
        title: 'Diagnóstico de precisión',
        description: 'Identificamos el origen real del dolor antes de proponer nada.',
      },
      {
        title: 'Mínimamente invasivo',
        description: 'Técnicas sin cirugía mayor: recuperación rápida y menos riesgos.',
      },
      {
        title: 'Seguimiento medido',
        description: 'Cuantificamos tu progreso y ajustamos el tratamiento según evolucionas.',
      },
    ],
    stats: [
      { value: '+15 años', label: 'de experiencia clínica' },
      { value: '+12.000', label: 'pacientes tratados' },
      { value: '94%', label: 'reportan mejoría del dolor' },
    ],
  },
  howItWorks: {
    eyebrow: 'Cómo funciona',
    title: 'De la primera consulta a volver a tu vida',
    subtitle: 'Un recorrido claro, sin sorpresas. Tú decides cada paso.',
    steps: [
      {
        title: 'Solicita tu valoración',
        description: 'Rellena el formulario en dos minutos. Te contactamos en menos de 24 horas.',
      },
      {
        title: 'Diagnóstico personalizado',
        description: 'Consulta y pruebas para entender el origen exacto de tu dolor.',
      },
      {
        title: 'Tu plan de tratamiento',
        description: 'Te explicamos las opciones y decidimos juntos el camino a seguir.',
      },
      {
        title: 'Seguimiento y mejora',
        description: 'Medimos resultados y ajustamos hasta que recuperas tu movilidad.',
      },
    ],
    cta: 'Empieza por tu valoración',
  },
  testimonials: {
    eyebrow: 'Testimonios',
    title: 'Historias de quienes volvieron a moverse',
    placeholderNote: 'Testimonios de ejemplo: antes de publicar deben ser reales y con consentimiento.',
    items: [
      {
        quote:
          'Después de años con dolor lumbar, por fin puedo jugar con mis hijos sin pensar en la espalda.',
        author: 'María G.',
        role: 'Dolor lumbar',
      },
      {
        quote:
          'Me explicaron cada paso. La infiltración de rodilla me devolvió la movilidad en semanas.',
        author: 'Carlos R.',
        role: 'Dolor articular',
      },
      {
        quote:
          'Mis migrañas pasaron de incapacitantes a manejables. Cambió por completo mi día a día.',
        author: 'Lucía M.',
        role: 'Migraña crónica',
      },
    ],
  },
  lead: {
    heading: 'Agenda tu valoración',
    subheading: 'Déjanos tus datos y un especialista te contactará en menos de 24 horas.',
    name: 'Nombre completo',
    email: 'Correo electrónico',
    phone: 'Teléfono',
    message: 'Cuéntanos sobre tu dolor (opcional)',
    submit: 'Enviar solicitud',
    submitting: 'Enviando…',
    success: '¡Gracias! Hemos recibido tu solicitud y te contactaremos pronto.',
    error: 'No pudimos enviar tu solicitud. Inténtalo de nuevo en unos minutos.',
    errors: {
      name: 'Indícanos tu nombre (mínimo 2 caracteres).',
      email: 'Introduce un correo electrónico válido.',
      phone: 'Introduce un teléfono válido (mínimo 7 dígitos).',
    },
  },
  logistics: {
    locationHeading: 'Dónde estamos',
    insuranceHeading: 'Seguros con los que trabajamos',
    insuranceNote: '¿No ves el tuyo? Pregúntanos: trabajamos con más aseguradoras.',
    questionsHeading: 'Antes de venir',
    questions: [
      {
        question: '¿Necesito una derivación médica?',
        answer:
          'No es imprescindible. Puedes solicitar la valoración directamente y revisamos tu caso.',
      },
      {
        question: '¿Los tratamientos son dolorosos?',
        answer:
          'La mayoría son mínimamente invasivos y con anestesia local. Te explicamos cada paso antes.',
      },
      {
        question: '¿Cuánto tarda en notarse la mejoría?',
        answer:
          'Depende del tratamiento y de cada persona, pero muchos pacientes notan alivio en las primeras semanas.',
      },
      {
        question: '¿Trabajáis con mi aseguradora?',
        answer:
          'Indícanos la tuya en el formulario y te confirmamos la cobertura antes de la primera cita.',
      },
    ],
  },
  footer: {
    tagline: 'Clínica especializada en el manejo del dolor crónico.',
    rights: 'Todos los derechos reservados.',
    disclaimer:
      'La información de este sitio es orientativa y no sustituye una consulta médica profesional.',
  },
};
