export const languages = {
  es: 'Español',
  pt: 'Português',
} as const;

export const defaultLang = 'es';

export type Lang = keyof typeof languages;

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang && maybeLang in languages) return maybeLang as Lang;
  return defaultLang;
}

export const translations = {
  es: {
    meta: {
      title: 'Palenquilombo Capoeira — Mestre Dragão | Bogotá',
      description:
        'Grupo de capoeira en Bogotá dirigido por Mestre Dragão. Clases, roda, música y tradición afrobrasileña. Martes y sábados en Casary SAS, Bogotá.',
      langName: 'Español',
    },
    nav: {
      about: 'Nosotros',
      gallery: 'Galería',
      videos: 'Videos',
      schedule: 'Horarios',
      contact: 'Contacto',
      cta: 'Únete',
      menu: 'Abrir menú',
      close: 'Cerrar menú',
      language: 'Cambiar idioma',
    },
    hero: {
      eyebrow: 'Capoeira en Bogotá · Colombia',
      title: 'Palenquilombo Capoeira',
      subtitle:
        'Ritmo, resistencia y comunidad. Entrena capoeira con Mestre Dragão y sé parte de la roda.',
      ctaPrimary: 'Reserva tu clase',
      ctaSecondary: 'Ver horarios',
      badge: 'Con Mestre Dragão',
    },
    about: {
      eyebrow: 'Nosotros',
      title: 'Nuestra roda',
      lead: 'Palenquilombo es palenque y quilombo: memoria, resistencia y fiesta. Un espacio donde la capoeira se vive como música, juego y comunidad.',
      paragraphs: [
        'Somos un grupo de capoeira con raíces afrobrasileñas que entrena, canta y juega en Bogotá. Bajo la guía de Mestre Dragão, la roda se convierte en un encuentro donde cada persona aporta su energía y su axé.',
        'Trabajamos la ginga, la música con berimbau y atabaque, los movimientos y la malandragem. No importa tu experiencia: aquí empiezas desde donde estás y creces con el grupo.',
      ],
      values: [
        {
          title: 'Música y berimbau',
          text: 'La roda empieza con el sonido. Aprendes los toques, las canciones y el ritmo que guía el jogo.',
        },
        {
          title: 'Ginga y juego',
          text: 'Movimiento, equilibrio y creatividad. Técnica de capoeira para todos los niveles.',
        },
        {
          title: 'Comunidad',
          text: 'Un grupo que se entrena, se cuida y se encuentra. Aquí la roda es la casa.',
        },
      ],
    },
    gallery: {
      eyebrow: 'Galería',
      title: 'Momentos de roda',
      lead: 'Energía de los entrenos, la música y la comunidad.',
      open: 'Ampliar imagen',
      close: 'Cerrar',
      prev: 'Anterior',
      next: 'Siguiente',
    },
    videos: {
      eyebrow: 'Videos',
      title: 'En movimiento',
      lead: 'Mira la roda en acción.',
      play: 'Reproducir',
      note: 'Toca para reproducir',
    },
    schedule: {
      eyebrow: 'Horarios',
      title: 'Entrena con nosotros',
      lead: 'Dos encuentros a la semana. Llega con ropa cómoda; el resto lo pone la roda.',
      days: {
        tuesday: 'Martes',
        saturday: 'Sábados',
      },
      note: 'Actividades en Casary SAS, Cl. 72A #74A-77, Bogotá.',
    },
    contact: {
      eyebrow: 'Contacto',
      title: 'Únete a la roda',
      lead: 'Escríbenos para tu primera clase o pásate por la sede.',
      addressLabel: 'Sede',
      address: 'Casary SAS — Cl. 72A #74A-77',
      city: 'Bogotá, Colombia',
      mapLabel: 'Ver en Google Maps',
      mapTitle: 'Ubicación de Palenquilombo Capoeira en Bogotá',
      socialTitle: 'Síguenos',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      email: 'Correo',
      soon: 'Próximamente',
    },
    whatsapp: {
      label: 'WhatsApp',
      floating: 'Escríbenos por WhatsApp',
      message: '¡Hola Palenquilombo! Quiero información sobre las clases de capoeira.',
    },
    footer: {
      tagline: 'Capoeira, música y comunidad en Bogotá.',
      rights: 'Todos los derechos reservados.',
      nav: 'Navegación',
      builtwith: 'Hecho con',
    },
    cta: {
      title: '¿Listo para tu primera ginga?',
      text: 'La roda te espera. Ven a entrenar y descubre la energía de la capoeira.',
      button: 'Escríbenos',
    },
  },
  pt: {
    meta: {
      title: 'Palenquilombo Capoeira — Mestre Dragão | Bogotá',
      description:
        'Grupo de capoeira em Bogotá sob a direção do Mestre Dragão. Aulas, roda, música e tradição afro-brasileira. Terças e sábados na Casary SAS, Bogotá.',
      langName: 'Português',
    },
    nav: {
      about: 'Sobre nós',
      gallery: 'Galeria',
      videos: 'Vídeos',
      schedule: 'Horários',
      contact: 'Contato',
      cta: 'Participe',
      menu: 'Abrir menu',
      close: 'Fechar menu',
      language: 'Mudar idioma',
    },
    hero: {
      eyebrow: 'Capoeira em Bogotá · Colômbia',
      title: 'Palenquilombo Capoeira',
      subtitle:
        'Ritmo, resistência e comunidade. Treine capoeira com o Mestre Dragão e faça parte da roda.',
      ctaPrimary: 'Reserve sua aula',
      ctaSecondary: 'Ver horários',
      badge: 'Com Mestre Dragão',
    },
    about: {
      eyebrow: 'Sobre nós',
      title: 'Nossa roda',
      lead: 'Palenquilombo é palenque e quilombo: memória, resistência e festa. Um espaço onde a capoeira é vivida como música, jogo e comunidade.',
      paragraphs: [
        'Somos um grupo de capoeira de raízes afro-brasileiras que treina, canta e joga em Bogotá. Sob a orientação do Mestre Dragão, a roda vira um encontro onde cada pessoa traz sua energia e seu axé.',
        'Trabalhamos a ginga, a música com berimbau e atabaque, os movimentos e a malandragem. Não importa sua experiência: você começa de onde está e cresce com o grupo.',
      ],
      values: [
        {
          title: 'Música e berimbau',
          text: 'A roda começa com o som. Você aprende os toques, as músicas e o ritmo que guia o jogo.',
        },
        {
          title: 'Ginga e jogo',
          text: 'Movimento, equilíbrio e criatividade. Técnica de capoeira para todos os níveis.',
        },
        {
          title: 'Comunidade',
          text: 'Um grupo que treina, se cuida e se encontra. Aqui a roda é a casa.',
        },
      ],
    },
    gallery: {
      eyebrow: 'Galeria',
      title: 'Momentos da roda',
      lead: 'Energia dos treinos, da música e da comunidade.',
      open: 'Ampliar imagem',
      close: 'Fechar',
      prev: 'Anterior',
      next: 'Próxima',
    },
    videos: {
      eyebrow: 'Vídeos',
      title: 'Em movimento',
      lead: 'Veja a roda em ação.',
      play: 'Reproduzir',
      note: 'Toque para reproduzir',
    },
    schedule: {
      eyebrow: 'Horários',
      title: 'Treine com a gente',
      lead: 'Dois encontros por semana. Venha com roupa confortável; o resto a roda faz.',
      days: {
        tuesday: 'Terças',
        saturday: 'Sábados',
      },
      note: 'Atividades na Casary SAS, Cl. 72A #74A-77, Bogotá.',
    },
    contact: {
      eyebrow: 'Contato',
      title: 'Junte-se à roda',
      lead: 'Escreva para a sua primeira aula ou apareça na sede.',
      addressLabel: 'Sede',
      address: 'Casary SAS — Cl. 72A #74A-77',
      city: 'Bogotá, Colômbia',
      mapLabel: 'Ver no Google Maps',
      mapTitle: 'Localização do Palenquilombo Capoeira em Bogotá',
      socialTitle: 'Siga a gente',
      whatsapp: 'WhatsApp',
      instagram: 'Instagram',
      email: 'E-mail',
      soon: 'Em breve',
    },
    whatsapp: {
      label: 'WhatsApp',
      floating: 'Fale conosco pelo WhatsApp',
      message: 'Olá Palenquilombo! Quero informações sobre as aulas de capoeira.',
    },
    footer: {
      tagline: 'Capoeira, música e comunidade em Bogotá.',
      rights: 'Todos os direitos reservados.',
      nav: 'Navegação',
      builtwith: 'Feito com',
    },
    cta: {
      title: 'Pronto para a sua primeira ginga?',
      text: 'A roda espera por você. Venha treinar e sentir a energia da capoeira.',
      button: 'Fale conosco',
    },
  },
} as const;

export function useTranslations(lang: Lang) {
  return translations[lang];
}
