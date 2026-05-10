# Roma Norte Host - Guia de despliegue

## Estructura actual

Sitio estatico en espanol, listo para Cloudflare Pages:

- `index.html` - Inicio
- `servicios.html` - Servicios y precios
- `resultados.html` - Resultados y propiedades activas
- `about.html` - Nosotros, servido tambien como `/about`
- `guia.html` - Pagina de Roma Norte, servida como `/roma-norte`
- `contacto.html` - Formulario de contacto
- `css/style.css` - Estilos globales
- `js/main.js` - Menu movil y confirmacion visual del formulario
- `_redirects` - Rutas limpias y compatibilidad con URLs anteriores
- `_headers` - Headers de Cloudflare
- `sitemap.xml`, `robots.txt`, `llms.txt`, `ai-context.json` - SEO y descubrimiento por agentes

## Rutas publicas

- `https://romanortehost.mx/`
- `https://romanortehost.mx/servicios`
- `https://romanortehost.mx/resultados`
- `https://romanortehost.mx/about`
- `https://romanortehost.mx/roma-norte`
- `https://romanortehost.mx/contacto`

Cloudflare Pages usa `_redirects` para servir esas rutas limpias desde los archivos `.html`.

## Despliegue en Cloudflare Pages

1. Sube el repositorio a GitHub.
2. En Cloudflare Pages, crea un proyecto conectado al repo.
3. Build settings:
   - Framework preset: None
   - Build command: vacio
   - Build output directory: `/`
4. Guarda y despliega.

## Dominio

Configura `romanortehost.mx` como dominio personalizado en Cloudflare Pages. El SSL se genera automaticamente.

## Formulario

El formulario de `contacto.html` muestra confirmacion visual, pero todavia no envia correos reales.

Para conectarlo con un proveedor de formularios:

1. Elige el proveedor o endpoint propio.
2. Define los campos que se enviaran para la evaluacion patrimonial.
3. Reemplaza el handler visual de `js/main.js` por un `fetch` al endpoint.
4. Prueba una solicitud real antes de publicar.

## Verificacion

Despues del deploy:

```bash
curl https://romanortehost.mx/sitemap.xml
curl https://romanortehost.mx/llms.txt
curl https://romanortehost.mx/ai-context.json
```
