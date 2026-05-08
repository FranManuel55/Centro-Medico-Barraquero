export const siteConfig = {
  name: 'Centro Médico Barraquero',
  tagline: 'Kinesiología y Hábitos Saludables',
  description: 'Centro médico especializado en kinesiología, rehabilitación física y promoción de hábitos saludables. Atención personalizada para tu bienestar.',
  url: 'https://centromedicobarraquero.com',
  whatsapp: {
    number: '542615668867',
    message: 'Hola! Vi su web y me gustaría solicitar un turno.',
  },
  email: 'info@centromedicobarraquero.com',
  phone: '',
  address: {
    street: 'Morón 160',
    city: 'Ciudad',
    province: 'Mendoza',
    country: 'Argentina',
    zip: '',
  },
  social: {
    instagram: 'https://www.instagram.com/centromedico.barraquero',
    facebook: 'https://www.facebook.com/centromedico.barraquero',
  },
  hours: {
    monday: '08:00 - 20:00',
    tuesday: '08:00 - 20:00',
    wednesday: '08:00 - 20:00',
    thursday: '08:00 - 20:00',
    friday: '08:00 - 20:00',
    saturday: '08:00 - 13:00',
    sunday: 'Cerrado',
  },
  rating: {
    average: 4.8,
    count: 127,
  },
} as const;

export type SiteConfig = typeof siteConfig;

export function getWhatsAppUrl(message?: string): string {
  const baseUrl = `https://wa.me/${siteConfig.whatsapp.number}`;
  const text = encodeURIComponent(message || siteConfig.whatsapp.message);
  return `${baseUrl}?text=${text}`;
}

export function getWhatsAppUrlContextual(contextMessage: string): string {
  return getWhatsAppUrl(contextMessage);
}