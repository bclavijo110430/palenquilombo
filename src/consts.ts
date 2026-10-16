export const SITE = {
  name: 'Palenquilombo Capoeira',
  master: 'Mestre Dragão',
  address: 'Casary SAS — Cl. 72A #74A-77',
  city: 'Bogotá, Colombia',
  /** Google Maps embed (no tracking params) */
  mapEmbed:
    'https://www.google.com/maps?q=Casary+SAS,+Cl.+72A+%2374A-77,+Bogot%C3%A1&output=embed',
  /** External "open in maps" link */
  mapLink:
    'https://www.google.com/maps/search/?api=1&query=Casary+SAS,+Cl.+72A+%2374A-77,+Bogot%C3%A1',
  /** Contact handles (leave empty to render as "coming soon") */
  whatsapp: 'https://wa.me/573044743948',
  instagram: '',
  email: '',
} as const;

export const WHATSAPP = {
  number: '573044743948',
  display: '+57 304 474 3948',
  link: 'https://wa.me/573044743948',
} as const;

/** Builds a wa.me link, optionally with a prefilled message. */
export function whatsappLink(message?: string): string {
  return message ? `${WHATSAPP.link}?text=${encodeURIComponent(message)}` : WHATSAPP.link;
}

export const SCHEDULE = [
  { dayKey: 'tuesday', time: '7:45 – 9:45 PM' },
  { dayKey: 'saturday', time: '10:00 – 12:00' },
] as const;

/** Base path (respects `base` in astro.config, e.g. "/palenquilombo/"). */
export const BASE_URL = import.meta.env.BASE_URL;

/** Prefix a public asset path with the site base URL. */
export function asset(path: string): string {
  const base = BASE_URL.endsWith('/') ? BASE_URL : `${BASE_URL}/`;
  return `${base}${path.replace(/^\//, '')}`;
}
