# XAVA Ingeniería Civil — Web Demo

Landing demo para visualizar la futura presencia digital de **XAVA Ingeniería Civil**.

## Estado actual

**V4-B deployed**

`Demo visual avanzada / pendiente de auditoría final de aceptación`

La versión pública está disponible en:
<https://sergiodavidvale-sketch.github.io/xavier-ingenieria-civil-web/>

La marca visible vigente es **XAVA Ingeniería Civil**. El repositorio, la ruta local y la URL de GitHub Pages conservan temporalmente el nombre técnico heredado `xavier-ingenieria-civil-web`.

## Qué existe actualmente

- Branding XAVA Ingeniería Civil.
- Hero secuencial con cuatro escenas conceptuales: topografía, render/previsualización, estructura e infraestructura.
- Servicios: Proyectos, Supervisión y Construcción.
- Capacidades complementarias:
  - Renderizados y previsualización.
  - Levantamientos topográficos.
  - Presupuestos y cuantificación.
  - Planeación y documentación técnica.
- Proyectos destacados demo.
- Del concepto a la ejecución.
- Visualización y planeación técnica.
- Nosotros.
- Principios.
- Proceso.
- Contacto provisional.
- Responsive para desktop, tablet y móvil.
- Deployment mediante GitHub Pages.

La landing es una demostración visual. No confirma todavía la constitución legal, experiencia, clientes, proyectos, cobertura ni datos de contacto definitivos de la iniciativa.

## Stack

- React.
- TypeScript.
- Vite.
- CSS.
- ESLint.
- GitHub Actions.
- GitHub Pages.

El alcance permanece como una landing estática. No incluye backend, base de datos, CMS, autenticación, formularios funcionales ni dominio personalizado.

## Desarrollo local

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev
```

Validación completa:

```bash
npm run lint
npm run typecheck
npm run build
npm run check
git diff --check
```

Para revisar el build localmente:

```bash
npm run preview
```

## Configuración editable

Los datos provisionales de marca y contacto viven en `src/siteConfig.ts`. Los textos de las secciones están en `src/App.tsx` y los estilos en `src/styles.css`.

## Deployment

El sitio genera archivos estáticos en `dist/` y se publica con GitHub Actions en GitHub Pages. No requiere variables de entorno ni servicios de pago.

- URL pública: <https://sergiodavidvale-sketch.github.io/xavier-ingenieria-civil-web/>
- Rama canónica de deployment: `agent/initial-mvp`.
- Workflow: `.github/workflows/deploy.yml`.

El trabajo se integra por pull request desde ramas `agent/*`. El nombre técnico heredado del repositorio no debe cambiarse hasta que exista una decisión explícita de migración.

## V4-B

V4-B consolidó la marca visible **XAVA Ingeniería Civil**, reemplazó el recurso único del hero por una secuencia conceptual de cuatro escenas y amplió la comunicación de la oferta técnica.

El hero usa transiciones crossfade discretas entre levantamiento topográfico, render, desarrollo estructural e infraestructura civil. En móvil y con `prefers-reduced-motion` se presenta una escena estática para reducir carga y movimiento.

La oferta incorpora renderizados, topografía, presupuestos, cuantificación, planeación y documentación como capacidades complementarias, sin convertirlas en una cuarta categoría principal de servicios.

## Temporary demo assets

Los siguientes recursos son temporales y conceptuales:

- `src/assets/xava-hero-topography-demo.webp` — topografía y fallback del hero.
- `src/assets/xava-render-demo.webp` — render/previsualización conceptual.
- `src/assets/xava-hero-structure-demo.webp` — estructura en desarrollo.
- `src/assets/xava-hero-infrastructure-demo.webp` — infraestructura civil.
- Los tres proyectos destacados son escenarios conceptuales rotulados como demostrativos.
- El render utilizado en el storytelling es conceptual.

Estos recursos no representan obras, clientes, ubicaciones ni resultados reales de XAVA. Antes de una publicación corporativa deberán sustituirse por:

- video real propio;
- fotografías reales;
- levantamientos reales;
- renders propios;
- casos de éxito reales;
- material autorizado para publicación.

## Decisiones y estado

- [Decision log](docs/decision-log.md)
- [Project status / handoff](docs/project-status.md)

## Roadmap inmediato

### Completed

- V1 — MVP inicial.
- V2 — refinamiento visual.
- V3 — hardening responsive y credibilidad.
- V4-A — storytelling visual.
- V4-B — marca XAVA, hero secuencial y capacidades técnicas.

### Next

#### Gate 1

Auditoría visual final de aceptación de V4-B.

#### Gate 2

Congelar **Demo v1.0** si la auditoría se aprueba. Si no se aprueba, definir únicamente una lista corta de correcciones finales.

### Después

Sustitución progresiva de assets demo por material real, validado y autorizado.

No debe iniciarse una nueva versión automáticamente después de la auditoría.
