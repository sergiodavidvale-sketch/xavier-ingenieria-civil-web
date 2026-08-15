# XAVIER Ingeniería Civil — web MVP

Landing page visual y funcional para presentar cómo podría verse la futura web de **XAVIER Ingeniería Civil**.

> Estado: **MVP / demo — refinamiento visual V2**. No representa todavía un sitio corporativo definitivo ni confirma la constitución legal, experiencia, clientes, proyectos o datos de contacto de la iniciativa.

## Alcance

- Landing page de una sola página.
- Secciones de inicio, servicios, nosotros, diferenciadores, portafolio, proceso y contacto.
- Identidad inicial basada en azul marino, blanco, turquesa y amarillo como acento.
- Diseño responsive para escritorio, tablet y móvil.
- Contenido y contacto centralizados y fáciles de editar.
- Imagen hero original generada para este demo; no corresponde a una obra real de XAVIER.

Fuera de alcance: backend, base de datos, CMS, autenticación, formularios con envío, dominio personalizado y cualquier infraestructura productiva.

## Stack

- React y TypeScript para componentes y contenido tipado.
- Vite para desarrollo y build estático.
- CSS nativo para el sistema visual y el responsive, sin librerías de UI.
- ESLint para validación estática.

Se eligió este stack por ser pequeño, mantenible y suficiente para una landing sin sobrearquitectura.

## Desarrollo local

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev
```

Validación completa:

```bash
npm run check
```

Build de producción:

```bash
npm run build
npm run preview
```

## Configuración editable

Los datos provisionales de marca y contacto viven en `src/siteConfig.ts`. Los textos de secciones están en `src/App.tsx` y los tokens visuales al inicio de `src/styles.css`.

## Deployment

El sitio genera archivos estáticos en `dist/` y se publica con GitHub Actions en GitHub Pages. No requiere variables de entorno ni servicios de pago.

URL del MVP: <https://sergiodavidvale-sketch.github.io/xavier-ingenieria-civil-web/>

El workflow `.github/workflows/deploy.yml` ejecuta instalación reproducible, lint, typecheck, build y deployment desde la rama predeterminada.

## Decisiones

- No se muestran proyectos, clientes, trayectoria, certificaciones o testimonios inventados.
- El portafolio muestra tres conceptos visuales explícitos, sin atribuir obras ejecutadas a XAVIER, hasta validar material real.
- El formulario se sustituye por datos provisionales para no simular un canal activo.
- La marca tipográfica y la X son una interpretación visual inicial, no un logotipo definitivo aprobado.
- La fotografía hero es un recurso conceptual generado para el demo y no prueba experiencia ejecutada.

## Roadmap inmediato

1. Validar identidad y logotipo definitivos.
2. Confirmar datos reales de contacto y cobertura geográfica.
3. Incorporar proyectos reales con permisos, fichas e imágenes verificadas.
4. Definir el canal de captación antes de habilitar un formulario.
