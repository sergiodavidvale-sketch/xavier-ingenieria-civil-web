# XAVIER Ingeniería Civil — web MVP

Landing page visual y funcional para presentar cómo podría verse la futura web de **XAVIER Ingeniería Civil**.

> Estado: **MVP / demo — V4-A storytelling visual**. No representa todavía un sitio corporativo definitivo ni confirma la constitución legal, experiencia, clientes, proyectos o datos de contacto de la iniciativa.

## Alcance

- Landing page de una sola página.
- Narrativa de inicio, servicios, proyectos demostrativos, concepto a ejecución, visualización, nosotros, principios, proceso y contacto.
- Identidad inicial basada en azul marino, blanco, turquesa y amarillo como acento.
- Diseño responsive para escritorio, tablet y móvil.
- Contenido y contacto centralizados y fáciles de editar.
- Hero con clip WebM temporal derivado de la imagen conceptual original; no corresponde a una obra real de XAVIER.
- Render y tres escenarios de proyecto estrictamente demostrativos, sin clientes, ubicaciones o resultados atribuidos.

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

La rama canónica es `agent/initial-mvp`. El trabajo visual se integra por pull request desde ramas `agent/*`; al llegar a la rama canónica, el workflow `.github/workflows/deploy.yml` ejecuta instalación reproducible, lint, typecheck, build y deployment.

## V4-A — storytelling visual

La V4-A cambia la lectura de “capacidades de una empresa” a “cómo se piensa, visualiza y ejecuta un proyecto”. El recorrido editorial es:

1. hero dinámico;
2. servicios;
3. proyectos destacados demostrativos;
4. secuencia plano → render → obra;
5. visualización antes de construir;
6. nosotros, principios, proceso y contacto.

La sección independiente de **Capacidades** se retiró para evitar repetir lo que ya comunican Servicios y Proyectos destacados. Sus tres ámbitos —obra civil, supervisión e infraestructura— se integraron como categorías de los proyectos conceptuales.

### Assets temporales

- `src/assets/xavier-hero-concept.webp`: imagen conceptual generada para la demo. Funciona como fondo/fallback del hero y no documenta una obra real.
- `src/assets/xavier-hero-demo.webm`: clip VP9 de cinco segundos, sin audio, generado localmente a partir de la imagen conceptual. Usa `autoplay`, `muted`, `loop` y `playsInline`; se monta solo en pantallas mayores a 760 px y cuando el usuario no solicita movimiento reducido.
- `src/assets/xavier-render-demo.webp`: render conceptual generado para V4-A. Se reutiliza con carga diferida en Proyectos y Visualización; no documenta una obra real.
- El video final aún no está disponible. Para no descargar material de procedencia o licencia dudosa, V4-A usa el clip simulado anterior. En móvil y con `prefers-reduced-motion` se muestra únicamente el poster. El `source` del `<video>` queda listo para sustituirse por material propio.

Antes de una publicación corporativa deben sustituirse el hero, los tres proyectos conceptuales y el render por video, casos e imágenes propios con permisos y datos verificados.

## Decisiones

- No se muestran clientes, trayectoria, certificaciones, testimonios o resultados inventados.
- Los proyectos destacados son escenarios conceptuales rotulados como “Proyecto demostrativo”.
- Obra civil, supervisión e infraestructura viven dentro de la narrativa de proyectos para evitar una segunda sección redundante de capacidades.
- El contacto muestra un único estado de próxima disponibilidad para no simular canales activos.
- La marca tipográfica y la X son una interpretación visual inicial, no un logotipo definitivo aprobado.
- La fotografía hero es un recurso conceptual generado para el demo y no prueba experiencia ejecutada.

## Roadmap inmediato

1. Sustituir la simulación del hero por video propio optimizado y sin audio.
2. Incorporar proyectos y renders reales con permisos, fichas e imágenes verificadas.
3. Validar identidad, logotipo, contacto y cobertura definitivos.
4. Definir el canal de captación antes de habilitar un formulario.

La comparación interactiva Render vs Obra y cualquier interacción avanzada quedan expresamente fuera de V4-A y reservadas para una posible V4-B.
