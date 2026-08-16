# XAVA Ingeniería Civil — web MVP

Landing page visual y funcional para presentar cómo podría verse la futura web de **XAVA Ingeniería Civil**.

> Estado: **MVP / demo — V4-B storytelling y oferta técnica**. No representa todavía un sitio corporativo definitivo ni confirma la constitución legal, experiencia, clientes, proyectos o datos de contacto de la iniciativa.

## Alcance

- Landing page de una sola página.
- Narrativa de inicio, servicios, proyectos demostrativos, concepto a ejecución, visualización, nosotros, principios, proceso y contacto.
- Identidad inicial basada en azul marino, blanco, turquesa y amarillo como acento.
- Diseño responsive para escritorio, tablet y móvil.
- Contenido y contacto centralizados y fáciles de editar.
- Hero secuencial con cuatro escenas conceptuales; no corresponde a obras reales de XAVA.
- Render y tres escenarios de proyecto estrictamente demostrativos, sin clientes, ubicaciones o resultados atribuidos.
- Oferta complementaria de renderizado, topografía, presupuestos, cuantificación, planeación y documentación técnica.

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

## V4-B — marca, secuencia hero y oferta técnica

- La marca visible vigente de la demo es **XAVA Ingeniería Civil**. El isotipo X se conserva temporalmente.
- El repositorio, la ruta local y la URL de GitHub Pages mantienen el nombre técnico heredado `xavier-ingenieria-civil-web`; este nombre no representa la marca pública actual.
- El hero usa un crossfade de cuatro escenas: levantamiento topográfico, render, desarrollo estructural e infraestructura civil.
- Solo la primera escena se solicita en el render inicial. Las otras tres se montan después de una pausa breve y únicamente en escritorio sin movimiento reducido.
- Servicios amplía su alcance técnico y Visualización evoluciona a **Visualización y planeación técnica**, con cuatro capacidades complementarias compactas.

### Assets temporales

- `src/assets/xava-hero-topography-demo.webp`: levantamiento topográfico conceptual y primera escena/fallback del hero.
- `src/assets/xava-render-demo.webp`: render conceptual usado en hero, Proyectos y Visualización.
- `src/assets/xava-hero-structure-demo.webp`: desarrollo estructural conceptual heredado de V4-A.
- `src/assets/xava-hero-infrastructure-demo.webp`: infraestructura vial y drenaje conceptuales.
- En móvil y con `prefers-reduced-motion` se monta únicamente la escena topográfica estática. No se descargan las otras escenas.

Antes de una publicación corporativa deben sustituirse las escenas del hero, los tres proyectos conceptuales, el render y las referencias técnicas por video, casos, topografía e imágenes propios con permisos y datos verificados.

## Decisiones

- No se muestran clientes, trayectoria, certificaciones, testimonios o resultados inventados.
- Los proyectos destacados son escenarios conceptuales rotulados como “Proyecto demostrativo”.
- Obra civil, supervisión e infraestructura viven dentro de la narrativa de proyectos para evitar una segunda sección redundante de capacidades.
- El contacto muestra un único estado de próxima disponibilidad para no simular canales activos.
- La marca tipográfica y la X son una interpretación visual inicial, no un logotipo definitivo aprobado.
- La fotografía hero es un recurso conceptual generado para el demo y no prueba experiencia ejecutada.

## Roadmap inmediato

1. Sustituir la secuencia demo por video o fotografía propios optimizados.
2. Incorporar proyectos, renders y levantamientos reales con permisos y fichas verificadas.
3. Validar isotipo, contacto y cobertura definitivos.
4. Definir el canal de captación antes de habilitar un formulario.

La comparación interactiva Render vs Obra y cualquier interacción avanzada permanecen fuera de esta versión.
