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
    name: 'PainManagement ER',
    tagline: 'Recupera tu vida, libre de dolor',
  },
  nav: {
    conditions: 'Tu dolor',
    treatments: 'Tratamientos',
    services: 'Servicios',
    why: 'Por qué nosotros',
    how: 'Cómo funciona',
    faq: 'Preguntas',
    testimonials: 'Testimonios',
    contact: 'Contacto',
    book: 'Agendar valoración',
    bookShort: 'Agendar',
    menu: 'Menú',
  },
  langSwitcher: {
    label: 'Cambiar idioma',
  },
  a11y: {
    skipToContent: 'Saltar al contenido',
    required: '(obligatorio)',
  },
  hero: {
    slides: [
      {
        eyebrow: 'Clínica del manejo del dolor',
        titleA: 'Recupera tu vida,',
        titleB: 'sin que el dolor decida',
        subtitle:
          'Tratamientos personalizados y mínimamente invasivos para el dolor crónico de espalda, articulaciones y nervios. Un equipo que escucha, diagnostica y te acompaña.',
      },
      {
        eyebrow: 'Tratamientos avanzados',
        titleA: 'Menos dolor,',
        titleB: 'más movimiento',
        subtitle:
          'Procedimientos mínimamente invasivos y de recuperación rápida, diseñados a partir de tu diagnóstico exacto — sin cirugías innecesarias.',
      },
      {
        eyebrow: 'Un equipo que te escucha',
        titleA: 'No estás solo',
        titleB: 'en este camino',
        subtitle:
          'Un equipo médico colegiado que identifica el origen real de tu dolor y te acompaña, paso a paso, hasta que vuelves a moverte.',
      },
    ],
    ctaPrimary: 'Agendar valoración',
    ctaSecondary: 'Ver cómo tratamos el dolor',
    trust: 'Equipo médico colegiado · Primera valoración sin compromiso',
    imageAlt: 'Una persona camina hacia la luz dorada del atardecer, de nuevo en movimiento.',
    slider: {
      region: 'Videos de fondo del hero',
      prev: 'Video anterior',
      next: 'Video siguiente',
      goTo: 'Ir al video',
    },
  },
  services: {
    eyebrow: 'Nuestros servicios',
    title: 'Todo tu cuidado, en un solo lugar',
    subtitle:
      'Del diagnóstico por imagen a la rehabilitación: un mismo equipo y un proceso claro para que recuperes tu movilidad sin dar vueltas.',
    detailsCta: 'Ver detalles',
    approachTitle: 'Cada servicio incluye',
    approach: [
      'Una revisión breve con objetivos claros',
      'Un plan simple y personalizado',
      'Seguimientos breves con ajustes útiles',
    ],
    call: 'Llamar ahora',
    book: 'Agendar cita',
    close: 'Cerrar',
    items: [
      {
        title: 'Servicios de Imágenes Médicas',
        short: 'Diagnósticos confiables con tecnología de precisión.',
        description:
          'Estudios de imagen con equipos de última generación —Rayos X, Resonancia (MRI), Tomografía (CT), IMEKA, Ultrasonido y PET— para localizar el origen exacto de tu dolor.',
        points: [
          'Rayos X, MRI, CT, IMEKA, Ultrasonido y PET',
          'Entrega de resultados en 24–48 horas',
          'Informes claros y fáciles de entender',
        ],
      },
      {
        title: 'Medicina General',
        short: 'Consultas, chequeos y seguimiento integral.',
        description:
          'Atención médica cercana y clara: valoramos tu estado general, realizamos chequeos completos y damos seguimiento a tu evolución en cada etapa.',
        points: [
          'Consultas y chequeos completos',
          'Seguimiento cercano y continuo',
          'Orientación clara en cada paso',
        ],
      },
      {
        title: 'Fisioterapia y Manejo del Dolor',
        short: 'Rehabilitación guiada y alivio real del dolor.',
        description:
          'Planes de rehabilitación personalizados para aliviar el dolor, recuperar movilidad y prevenir recaídas. Incluye segundas opiniones expertas cuando las necesitas.',
        points: [
          'Planes de rehabilitación guiados',
          'Alivio del dolor y recuperación de movilidad',
          'Segundas opiniones expertas',
        ],
      },
      {
        title: 'Terapia Mental',
        short: 'Psicoterapia enfocada en tu bienestar.',
        description:
          'Acompañamiento psicológico para el dolor crónico, la ansiedad y el bienestar emocional, con un enfoque claro, humano y sin juicios.',
        points: [
          'Psicoterapia para dolor crónico y ansiedad',
          'Enfoque claro y cercano',
          'Bienestar y apoyo emocional',
        ],
      },
      {
        title: 'Tratamiento Post-Accidente Automovilístico',
        short: 'Atención especializada tras un accidente.',
        description:
          'Evaluación inmediata, tratamiento y recuperación segura después de un accidente de tránsito, con seguimiento en cada etapa de tu recuperación.',
        points: [
          'Evaluación inmediata',
          'Tratamiento y rehabilitación segura',
          'Seguimiento en cada etapa',
        ],
      },
      {
        title: 'Cuidado del Dolor Dirigido',
        short: 'Soluciones específicas para cada zona.',
        description:
          'Tratamientos enfocados para cabeza, espalda, cadera, rodilla, hombro, cuello y pie: un abordaje específico por zona para lograr soluciones duraderas.',
        points: [
          'Cabeza, espalda, cadera, rodilla, hombro, cuello y pie',
          'Abordaje específico por zona',
          'Soluciones duraderas',
        ],
      },
    ],
    proceduresTitle: 'Tratamientos del dolor',
    proceduresSubtitle: 'Procedimientos precisos y mínimamente invasivos para tratar el origen del dolor.',
    procedures: [
      {
        title: 'Infiltraciones y bloqueos guiados por imagen',
        short: 'Medicación al punto exacto del dolor.',
        description:
          'Llevamos la medicación exactamente al punto del dolor, con control ecográfico o radiológico para máxima precisión.',
        points: [
          'Precisión guiada por ecografía o rayos X',
          'Procedimiento ambulatorio',
          'Alivio dirigido al foco del dolor',
        ],
      },
      {
        title: 'Radiofrecuencia',
        short: 'Alivio prolongado, sin cirugía.',
        description:
          'Desactivamos los nervios que transmiten el dolor para un alivio prolongado, sin cirugía ni ingreso.',
        points: ['Sin cirugía ni ingreso', 'Alivio prolongado', 'Recuperación rápida'],
      },
      {
        title: 'Neuromodulación',
        short: 'Reeduca la señal del dolor crónico.',
        description:
          'Tecnología que reeduca la señal del dolor en casos crónicos y complejos, ajustándose a tu evolución.',
        points: [
          'Para dolor crónico y complejo',
          'Reeduca la señal del dolor',
          'Ajustable a tu evolución',
        ],
      },
      {
        title: 'Terapias regenerativas y fisioterapia',
        short: 'Recupera el tejido y el movimiento.',
        description:
          'Recuperamos el tejido dañado y reentrenamos el movimiento para que el alivio sea duradero.',
        points: ['Recupera el tejido dañado', 'Reentrena el movimiento', 'Resultados duraderos'],
      },
    ],
  },
  conditions: {
    eyebrow: 'Tu dolor',
    title: '¿Dónde te duele?',
    subtitle:
      'Empieza por identificar tu dolor. Tratamos las causas, no solo los síntomas.',
    notListedTitle: '¿No ves tu dolor aquí?',
    notListedText: 'Tratamos muchas más condiciones. Cuéntanos tu caso y te orientamos sin compromiso.',
    notListedCta: 'Consúltanos',
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
    cta: 'Agendar valoración',
    items: [
      {
        title: 'Infiltraciones y bloqueos guiados por imagen',
        tag: 'Mínimamente invasivo',
        description:
          'Llevamos la medicación exactamente al punto del dolor, con control ecográfico o radiológico para máxima precisión.',
        points: [
          'Precisión guiada por ecografía o rayos X',
          'Procedimiento ambulatorio',
          'Alivio dirigido al foco del dolor',
        ],
      },
      {
        title: 'Radiofrecuencia',
        tag: 'Sin cirugía',
        description:
          'Desactivamos los nervios que transmiten el dolor para un alivio prolongado, sin cirugía ni ingreso.',
        points: ['Sin cirugía ni ingreso', 'Alivio prolongado', 'Recuperación rápida'],
      },
      {
        title: 'Neuromodulación',
        tag: 'Dolor crónico',
        description:
          'Tecnología que reeduca la señal del dolor en casos crónicos y complejos, ajustándose a tu evolución.',
        points: [
          'Para dolor crónico y complejo',
          'Reeduca la señal del dolor',
          'Ajustable a tu evolución',
        ],
      },
      {
        title: 'Terapias regenerativas y fisioterapia',
        tag: 'Recuperación',
        description:
          'Recuperamos el tejido dañado y reentrenamos el movimiento para que el alivio sea duradero.',
        points: ['Recupera el tejido dañado', 'Reentrena el movimiento', 'Resultados duraderos'],
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
      {
        quote:
          'El equipo me escuchó cuando nadie más lo hacía. Recuperé la confianza en mi tratamiento.',
        author: 'Ana P.',
        role: 'Dolor de cuello',
      },
      {
        quote:
          'La radiofrecuencia me quitó la ciática que arrastraba desde hacía años. Volví a dormir bien.',
        author: 'Jorge L.',
        role: 'Ciática',
      },
      {
        quote:
          'Volví a caminar sin molestias tras la rehabilitación. Trato cercano y muy profesional.',
        author: 'Elena V.',
        role: 'Dolor postquirúrgico',
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
    consent:
      'He leído y acepto la política de privacidad y autorizo el tratamiento de mis datos para que el equipo médico me contacte.',
    // Consentimiento SMS, aparte del de tratamiento de datos. Partido para que
    // la política de privacidad siga siendo un enlace real dentro de la etiqueta.
    smsConsent:
      'Al ingresar tu número de teléfono, aceptas recibir mensajes de texto de nuestra parte. Pueden aplicar tarifas de mensajería. Puedes responder STOP o UNSUBSCRIBE para darte de baja.',
    smsConsentSee: 'Consulta nuestra',
    smsConsentPolicy: 'Política de Privacidad',
    smsConsentTail: 'para más detalles.',
    privacyNote: 'Tus datos solo se usan para gestionar tu solicitud. Nunca los compartimos con terceros.',
    success: '¡Gracias! Hemos recibido tu solicitud y te contactaremos pronto.',
    error: 'No pudimos enviar tu solicitud. Inténtalo de nuevo en unos minutos.',
    errors: {
      name: 'Indícanos tu nombre (mínimo 2 caracteres).',
      email: 'Introduce un correo electrónico válido.',
      phone: 'Introduce un teléfono válido (mínimo 7 dígitos).',
      consent: 'Debes aceptar el tratamiento de datos para continuar.',
      smsConsent: 'Debes aceptar recibir mensajes de texto para continuar.',
    },
  },
  logistics: {
    panelTitle: 'Hablemos',
    panelSubtitle: 'Estamos para escucharte. Elige el canal que prefieras.',
    phoneLabel: 'Llámanos',
    whatsappLabel: 'WhatsApp',
    whatsappCta: 'Escríbenos por WhatsApp',
    emailLabel: 'Escríbenos',
    locationHeading: 'Dónde estamos',
    hoursHeading: 'Horario de atención',
    hours: [
      { days: 'Lunes a viernes', time: '9:00 – 20:00' },
      { days: 'Sábado', time: '9:00 – 14:00' },
      { days: 'Domingo', time: 'Cerrado' },
    ],
    followHeading: 'Síguenos',
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
  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Resolvemos tus dudas',
    subtitle: 'Lo que más nos preguntan antes de la primera cita. ¿Te queda alguna? Estamos a una llamada.',
    stillTitle: '¿No encuentras tu respuesta?',
    stillText: 'Escríbenos o llámanos y te orientamos sin compromiso.',
    callCta: 'Llamar ahora',
    contactCta: 'Agendar valoración',
  },
  notFound: {
    code: '404',
    title: 'Página no encontrada',
    message: 'Lo sentimos, la página que buscas no existe o se ha movido.',
    home: 'Volver al inicio',
  },
  privacy: {
    link: 'Política de privacidad',
    title: 'Política de privacidad',
    intro:
      'Tu privacidad nos importa. Aquí te explicamos qué datos recogemos, para qué los usamos y qué derechos tienes. (Plantilla orientativa: revísala con tu asesor legal antes de publicar.)',
    updatedLabel: 'Última actualización',
    updated: 'junio de 2026',
    backHome: 'Volver al inicio',
    sections: [
      {
        heading: 'Responsable del tratamiento',
        body: 'PainManagement ER es responsable de los datos personales que nos facilitas a través de este sitio. Puedes contactarnos en hola@painmanagementer.com.',
      },
      {
        heading: 'Qué datos recogemos',
        body: 'Recogemos los datos que nos envías en el formulario de contacto (nombre, correo, teléfono y, opcionalmente, tu mensaje), además de datos técnicos básicos de navegación de forma anónima.',
      },
      {
        heading: 'Para qué los usamos',
        body: 'Usamos tus datos únicamente para responder a tu solicitud, gestionar tu valoración y darte seguimiento. No los usamos para publicidad de terceros.',
      },
      {
        heading: 'Base legal',
        body: 'Tratamos tus datos sobre la base de tu consentimiento explícito, que otorgas al marcar la casilla del formulario, y de nuestro interés legítimo en atender tu solicitud.',
      },
      {
        heading: 'Conservación',
        body: 'Conservamos tus datos durante el tiempo necesario para gestionar tu solicitud y cumplir las obligaciones legales aplicables. Después se eliminan de forma segura.',
      },
      {
        heading: 'Tus derechos',
        body: 'Puedes acceder, rectificar o suprimir tus datos, así como oponerte o limitar su tratamiento, escribiéndonos a hola@painmanagementer.com. También puedes reclamar ante la autoridad de protección de datos competente.',
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
