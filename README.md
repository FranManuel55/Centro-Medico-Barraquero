# Centro Médico Barraquero - Landing Page

Landing page de alta conversión para Centro Médico Barraquero, especializado en kinesiología y hábitos saludables.

## 🚀 Tecnologías

- **Framework:** Astro 4+
- **Estilos:** Tailwind CSS
- **Tipografía:** Lora, Open Sans
- **Iconos:** Lucide Icons (inline SVG)
- **Contenido:** Astro Content Collections con Zod

## 📁 Estructura del proyecto

```
/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── layout/          # Navbar, Footer, FloatingWhatsApp, BackToTop
│   │   ├── sections/         # Hero, Benefits, About, Services, Gallery, Reviews, FAQ, CTA, Contact
│   └── ...
│   ├── content/
│   │   ├── services/        # Servicios (colección tipada)
│   │   ├── reviews/         # Reseñas (colección tipada)
│   │   └── faq/            # Preguntas frecuentes (colección tipada)
│   ├── data/
│   │   └── siteConfig.ts    # Configuración centralizada del sitio
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── globals.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build
npm run preview
```

## 📝 Personalización

### Datos del sitio (`src/data/siteConfig.ts`)

Editá este archivo para cambiar:
- Número de WhatsApp
- Dirección
- Email
- Horarios
- Redes sociales
- Rating promedio

### Placeholders a reemplazar

Buscar en el código:
- `<!-- PLACEHOLDER:` - Indica dónde insertar imágenes reales
- Logo placeholder en Navbar y Footer (reemplazar con logo real)

### Content Collections

**Servicios:** Archivos en `src/content/services/*.md`
- `title`: Nombre del servicio
- `description`: Descripción breve
- `icon`: Nombre del icono Lucide
- `order`: Orden de aparición

**Reseñas:** Archivos en `src/content/reviews/*.md`
- `name`: Nombre del paciente
- `rating`: 1-5 estrellas
- `date`: Fecha de la reseña
- `text`: Texto de la reseña

**FAQ:** Archivos en `src/content/faq/*.md`
- `question`: Pregunta
- `order`: Orden de aparición
- Contenido: Respuesta

### Mapa de Google

En `src/components/sections/Contact.astro`, reemplazar el placeholder del mapa con el iframe de Google Maps:

```html
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  class="w-full h-full"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>
```

## 🚀 Deploy

El proyecto está listo para deploy en Vercel o Netlify:

```bash
# Vercel
npm install -g vercel
vercel

# Netlify
npm install -g netlify-cli
netlify deploy --prod
```

## ✅ Checklist pre-lanzamiento

- [ ] Reemplazar logo placeholder
- [ ] Actualizar WhatsApp number real en `siteConfig.ts`
- [ ] Actualizar dirección real
- [ ] Insertar coordenadas GPS correctas en JSON-LD (Layout.astro)
- [ ] Reemplazar imágenes placeholder de galería
- [ ] Agregar imagen real del equipo en About
- [ ] Reemplazar iframe de Google Maps con ubicación real
- [ ] Agregar reseñas reales de Google
- [ ] Configurar GA4, Meta Pixel y GTM en el Layout
- [ ] Crear og-image.png (1200x630px)
- [ ] Verificar sitemap.xml y robots.txt

## 📄 Licencia

Propiedad de Centro Médico Barraquero.