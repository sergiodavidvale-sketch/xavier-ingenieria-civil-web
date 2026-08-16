import { useEffect, useRef, useState, type ReactNode } from 'react'
import heroInfrastructure from './assets/xava-hero-infrastructure-demo.webp'
import heroTopography from './assets/xava-hero-topography-demo.webp'
import heroStructure from './assets/xava-hero-structure-demo.webp'
import renderDemo from './assets/xava-render-demo.webp'
import { siteConfig } from './siteConfig'

const navItems = [
  ['Inicio', 'inicio'],
  ['Servicios', 'servicios'],
  ['Proyectos', 'proyectos'],
  ['Nosotros', 'nosotros'],
  ['Contacto', 'contacto'],
] as const

const services = [
  {
    number: '01',
    title: 'Proyectos',
    copy: 'Planeación, desarrollo técnico, presupuestos, cuantificación, documentación y visualización.',
    icon: <DraftingIcon />,
  },
  {
    number: '02',
    title: 'Supervisión',
    copy: 'Seguimiento técnico, control de avance, calidad, coordinación y verificación en obra.',
    icon: <SurveyIcon />,
  },
  {
    number: '03',
    title: 'Construcción',
    copy: 'Ejecución de obra civil, adecuaciones e infraestructura con control constructivo.',
    icon: <BuildIcon />,
  },
] as const

const heroScenes = [
  { src: heroTopography, alt: 'Levantamiento topográfico conceptual sobre un terreno en análisis' },
  { src: renderDemo, alt: 'Render conceptual de una estructura civil antes de su ejecución' },
  { src: heroStructure, alt: 'Desarrollo estructural conceptual de una obra vertical' },
  { src: heroInfrastructure, alt: 'Infraestructura vial conceptual con pavimento y drenaje en desarrollo' },
] as const

const technicalCapabilities = [
  ['Renderizados y previsualización', 'Anticipar espacios, materiales y criterios de diseño.', <RenderCapabilityIcon />],
  ['Levantamientos topográficos', 'Leer el sitio y documentar sus condiciones de partida.', <TopographyCapabilityIcon />],
  ['Presupuestos y cuantificación', 'Ordenar alcances, conceptos y cantidades del proyecto.', <BudgetCapabilityIcon />],
  ['Planeación y documentación técnica', 'Dar estructura a decisiones, entregables y etapas.', <DocumentationCapabilityIcon />],
] as const

const differentiators = [
  ['01', 'Planeación', 'Definir el rumbo antes de iniciar.'],
  ['02', 'Precisión', 'Cuidar cada decisión técnica.'],
  ['03', 'Control', 'Dar seguimiento a lo que importa.'],
  ['04', 'Ejecución', 'Convertir el proyecto en resultados.'],
] as const

const featuredProjects = [
  {
    number: '01',
    category: 'Obra civil industrial',
    title: 'Sistema estructural conceptual',
    scope: 'Planeación técnica · estructura · ejecución civil',
    variant: 'project-card--featured',
    visual: null,
  },
  {
    number: '02',
    category: 'Adecuación / supervisión',
    title: 'Intervención técnica conceptual',
    scope: 'Revisión · coordinación · seguimiento',
    variant: 'project-card--supervision',
    visual: <SupervisionCapabilityVisual />,
  },
  {
    number: '03',
    category: 'Infraestructura civil',
    title: 'Conexión de infraestructura conceptual',
    scope: 'Criterios técnicos · geometría · integración',
    variant: 'project-card--infrastructure',
    visual: <InfrastructureCapabilityVisual />,
  },
] as const

const conceptStages = [
  {
    number: '01',
    title: 'Conceptualización',
    copy: 'Levantamiento, alcance, criterios técnicos y planeación.',
    label: 'Plano',
    visual: <BlueprintStageVisual />,
  },
  {
    number: '02',
    title: 'Visualización',
    copy: 'Modelado, renderizado, cuantificación y representación.',
    label: 'Render',
    visual: <ModelStageVisual />,
  },
  {
    number: '03',
    title: 'Ejecución',
    copy: 'Construcción, supervisión y seguimiento.',
    label: 'Obra',
    visual: <ExecutionStageVisual />,
  },
] as const

const process = [
  ['Evaluamos', 'Entendemos el alcance y las condiciones.'],
  ['Planeamos', 'Trazamos una ruta técnica y operativa.'],
  ['Ejecutamos', 'Coordinamos recursos, tiempos y actividades.'],
  ['Supervisamos', 'Verificamos avance, calidad y cumplimiento.'],
  ['Entregamos', 'Cerramos con orden y trazabilidad.'],
] as const

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [heroSequenceEnabled, setHeroSequenceEnabled] = useState(false)
  const [heroAssetsReady, setHeroAssetsReady] = useState(false)
  const [activeHeroScene, setActiveHeroScene] = useState(0)
  const menuToggleRef = useRef<HTMLButtonElement>(null)
  const navigationRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24)
    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

  useEffect(() => {
    const sequenceQuery = window.matchMedia('(min-width: 761px) and (prefers-reduced-motion: no-preference)')
    const updateSequence = () => {
      setHeroSequenceEnabled(sequenceQuery.matches)
      if (!sequenceQuery.matches) {
        setActiveHeroScene(0)
        setHeroAssetsReady(false)
      }
    }
    updateSequence()
    sequenceQuery.addEventListener('change', updateSequence)
    return () => sequenceQuery.removeEventListener('change', updateSequence)
  }, [])

  useEffect(() => {
    if (!heroSequenceEnabled) return

    const preloadTimer = window.setTimeout(() => setHeroAssetsReady(true), 900)
    const sequenceTimer = window.setInterval(() => {
      setActiveHeroScene((current) => (current + 1) % heroScenes.length)
    }, 5200)

    return () => {
      window.clearTimeout(preloadTimer)
      window.clearInterval(sequenceTimer)
    }
  }, [heroSequenceEnabled])

  useEffect(() => {
    if (!menuOpen) return

    const previousOverflow = document.body.style.overflow
    const main = document.querySelector('main')
    const footer = document.querySelector('footer')
    const desktopQuery = window.matchMedia('(min-width: 761px)')

    document.body.style.overflow = 'hidden'
    main?.setAttribute('inert', '')
    footer?.setAttribute('inert', '')
    navigationRef.current?.querySelector<HTMLAnchorElement>('a')?.focus()

    const closeMenu = () => setMenuOpen(false)
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      closeMenu()
      window.requestAnimationFrame(() => menuToggleRef.current?.focus())
    }
    const handleViewportChange = (event: MediaQueryListEvent) => {
      if (event.matches) closeMenu()
    }

    document.addEventListener('keydown', handleKeyDown)
    desktopQuery.addEventListener('change', handleViewportChange)

    return () => {
      document.body.style.overflow = previousOverflow
      main?.removeAttribute('inert')
      footer?.removeAttribute('inert')
      document.removeEventListener('keydown', handleKeyDown)
      desktopQuery.removeEventListener('change', handleViewportChange)
    }
  }, [menuOpen])

  return (
    <>
      <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
        <a className="brand" href="#inicio" aria-label="XAVA Ingeniería Civil, inicio">
          <BrandMark />
          <span className="brand__text">
            <strong>XAVA</strong>
            <small>INGENIERÍA CIVIL</small>
          </span>
        </a>

        <button
          ref={menuToggleRef}
          className={`menu-toggle${menuOpen ? ' menu-toggle--open' : ''}`}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? 'Cerrar navegación' : 'Abrir navegación'}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span className="menu-toggle__line" />
          <span className="menu-toggle__line" />
        </button>

        <nav ref={navigationRef} id="main-navigation" className={`nav${menuOpen ? ' nav--open' : ''}`}>
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero__media" role="img" aria-label={heroScenes[activeHeroScene].alt} aria-live="off">
            {heroScenes.map((scene, index) => (
              (index === 0 || (heroSequenceEnabled && heroAssetsReady)) && (
                <img
                  className={`hero__scene hero__scene--${index + 1}${activeHeroScene === index ? ' hero__scene--active' : ''}`}
                  src={scene.src}
                  alt=""
                  aria-hidden="true"
                  decoding="async"
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                  key={scene.src}
                />
              )
            ))}
          </div>
          <div className="hero__veil" />
          <div className="technical-grid" />
          <div className="container hero__content">
            <h1 className="hero__brand"><strong>XAVA</strong><span>INGENIERÍA CIVIL</span></h1>
            <p className="hero__claim">Construimos sobre <em>ideas sólidas.</em></p>
            <p className="hero__descriptor">{siteConfig.descriptor}</p>
            <div className="hero__actions">
              <a className="button button--primary" href="#proyectos">Conoce nuestros proyectos <ArrowIcon /></a>
              <a className="button button--ghost" href="#servicios">Nuestros servicios</a>
            </div>
          </div>
          <div className="hero__index" aria-hidden="true"><b>X</b><span>{String(activeHeroScene + 1).padStart(2, '0')} / {String(heroScenes.length).padStart(2, '0')}</span></div>
        </section>

        <section className="services section" id="servicios">
          <div className="container">
            <SectionHeading
              kicker="Lo que hacemos"
              title={<>Ingeniería que conecta<br /><span>visión y ejecución.</span></>}
              copy="Tres áreas que trabajan como un solo sistema para desarrollar proyectos con claridad técnica y control."
            />
            <div className="services__grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <div className="service-card__top"><span>{service.number}</span>{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  <div className="service-card__line" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects section" id="proyectos">
          <div className="container">
            <SectionHeading
              kicker="Proyectos destacados"
              title={<>Ideas técnicas que toman<br /><span>forma y dirección.</span></>}
              copy="Ingeniería aplicada a proyectos que exigen planeación, precisión y control."
            />
            <div className="projects__editorial">
              {featuredProjects.map((project, index) => (
                <article className={`project-card ${project.variant}`} key={project.title}>
                  <div className="project-card__visual" aria-hidden="true">
                    {index === 0 ? (
                      <img src={renderDemo} alt="" loading="lazy" decoding="async" />
                    ) : project.visual}
                    <span className="project-card__index">{project.number}</span>
                    <span className="demo-label">Proyecto demostrativo</span>
                  </div>
                  <div className="project-card__body">
                    <p>{project.category}</p>
                    <h3>{project.title}</h3>
                    <span>{project.scope}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="concept section" id="concepto">
          <div className="container">
            <SectionHeading
              kicker="Del concepto a la ejecución"
              title={<>Pensar, visualizar,<br /><span>hacer realidad.</span></>}
              copy="Visualizamos cada proyecto antes de llevarlo a obra."
            />
            <div className="concept__flow">
              {conceptStages.map((stage, index) => (
                <article className="concept-stage" key={stage.title}>
                  <div className="concept-stage__visual" aria-hidden="true">
                    {stage.visual}
                    <span>{stage.label}</span>
                  </div>
                  <div className="concept-stage__copy">
                    <span>{stage.number}</span>
                    <h3>{stage.title}</h3>
                    <p>{stage.copy}</p>
                  </div>
                  {index < conceptStages.length - 1 && <ArrowIcon />}
                </article>
              ))}
            </div>
            <p className="concept__note">Secuencia visual demostrativa</p>
          </div>
        </section>

        <section className="visualization section" id="visualizacion" aria-labelledby="visualization-title">
          <div className="container visualization__grid">
            <div className="visualization__media">
              <img
                src={renderDemo}
                alt="Render conceptual demostrativo de una estructura civil industrial"
                loading="lazy"
                decoding="async"
              />
              <span className="demo-label">Render demostrativo</span>
              <div className="visualization__reticle" aria-hidden="true"><span /><span /></div>
            </div>
            <div className="visualization__content">
              <p className="eyebrow eyebrow--light"><span /> Visualización y planeación técnica</p>
              <h2 id="visualization-title">Visualización antes de <em>construir.</em></h2>
              <p>La preparación técnica reúne información, representación y criterios para tomar decisiones antes de entrar a obra.</p>
              <dl className="visualization__details">
                <div><dt>01</dt><dd>Análisis y levantamientos</dd></div>
                <div><dt>02</dt><dd>Presupuesto y cuantificación</dd></div>
                <div><dt>03</dt><dd>Modelado y decisiones técnicas</dd></div>
              </dl>
              <small>Visual conceptual temporal · pendiente de sustituir por material propio</small>
            </div>
          </div>
          <div className="container technical-capabilities" aria-label="Capacidades técnicas complementarias">
            {technicalCapabilities.map(([title, copy, icon], index) => (
              <article key={title}>
                <div><span>{String(index + 1).padStart(2, '0')}</span>{icon}</div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about section" id="nosotros">
          <div className="container about__grid">
            <div className="about__visual" aria-hidden="true">
              <EngineeringDetailVisual />
              <div className="about__visual-x">X</div>
              <div className="about__visual-meta"><span>Revisión técnica</span><strong>Plano · estructura · control</strong></div>
            </div>
            <div className="about__content">
              <p className="eyebrow"><span /> Nosotros</p>
              <h2>Una iniciativa profesional con <em>visión técnica.</em></h2>
              <p className="about__lead">XAVA Ingeniería Civil es una iniciativa profesional enfocada en proyectos, supervisión y construcción de ingeniería civil.</p>
              <p>Estamos construyendo una forma de trabajo basada en la planeación, la precisión y el seguimiento responsable de cada etapa.</p>
            </div>
          </div>
        </section>

        <section className="principles section" aria-labelledby="principles-title">
          <div className="container">
            <div className="principles__intro">
              <p className="eyebrow eyebrow--light"><span /> Cómo trabajamos</p>
              <h2 id="principles-title">Cuatro principios.<br /><em>Un mismo estándar.</em></h2>
            </div>
            <div className="principles__grid">
              {differentiators.map(([number, title, copy]) => (
                <article key={title}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="process section" id="proceso">
          <div className="container">
            <div className="process__heading">
              <div><p className="eyebrow"><span /> Nuestro proceso</p><h2>Claridad en cada<br /><em>etapa del proyecto.</em></h2></div>
              <p>Una secuencia simple para mantener continuidad técnica, control y comunicación.</p>
            </div>
            <ol className="process__flow">
              {process.map(([step, copy], index) => (
                <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong><p>{copy}</p>{index < process.length - 1 && <ArrowIcon />}</li>
              ))}
            </ol>
          </div>
        </section>

        <section className="contact section" id="contacto">
          <div className="contact__x" aria-hidden="true">X</div>
          <div className="container contact__grid">
            <div>
              <p className="eyebrow eyebrow--light"><span /> Hablemos</p>
              <h2>¿Tienes un proyecto<br /><em>en mente?</em></h2>
            </div>
            <div className="contact__status">
              <span aria-hidden="true" />
              <p>Próximamente habilitaremos nuestros canales de contacto.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__main">
          <a className="brand brand--footer" href="#inicio"><BrandMark /><span className="brand__text"><strong>XAVA</strong><small>INGENIERÍA CIVIL</small></span></a>
          <p>{siteConfig.descriptor}</p>
          <a href="#inicio">Volver arriba <span>↑</span></a>
        </div>
        <div className="container footer__bottom"><span>© {new Date().getFullYear()} XAVA Ingeniería Civil</span><span>{siteConfig.statusNote}</span></div>
      </footer>
    </>
  )
}

function SectionHeading({ kicker, title, copy }: { kicker: string; title: ReactNode; copy: string }) {
  return <div className="section-heading"><div><p className="eyebrow"><span /> {kicker}</p><h2>{title}</h2></div><p>{copy}</p></div>
}

function BrandMark() {
  return <svg className="brand-mark" viewBox="0 0 48 48" aria-hidden="true"><path d="M5 3h12l7 12L31 3h12L30 24l13 21H31l-7-12-7 12H5l13-21L5 3Z" /><path className="brand-mark__accent" d="m24 15 6 9-6 9-6-9 6-9Z" /></svg>
}

function ArrowIcon() {
  return <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 10h13M11 5l5 5-5 5" /></svg>
}

function DraftingIcon() {
  return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 39 32 15l8 8-16 16H8Z" /><path d="m27 20 8 8M15 32l5 5M8 39v-8l8 8" /></svg>
}

function SurveyIcon() {
  return <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="15" r="8" /><path d="M24 23v6M18 29h12M21 29l-8 14M27 29l8 14M24 29v14M18 15h12" /></svg>
}

function BuildIcon() {
  return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 40h32M12 40V20h24v20M18 40V28h12v12M8 20h32M16 20V9h16v11M13 14h22" /></svg>
}

function EngineeringDetailVisual() {
  return (
    <svg className="engineering-detail" viewBox="0 0 640 520">
      <g className="engineering-detail__grid"><path d="M0 80h640M0 160h640M0 240h640M0 320h640M0 400h640M80 0v520M160 0v520M240 0v520M320 0v520M400 0v520M480 0v520M560 0v520" /></g>
      <g className="engineering-detail__structure"><path d="M88 422h464M126 422V205h388v217M126 205h388M184 205V128h272v77M184 128h272M214 422V274h212v148M214 274h212M320 128v294" /><path d="m126 422 88-148 106 148 106-148 88 148" /></g>
      <g className="engineering-detail__dimensions"><path d="M110 455h420M110 447v16M530 447v16M68 190V438M60 190h16M60 438h16" /><circle cx="126" cy="205" r="6" /><circle cx="514" cy="205" r="6" /><circle cx="320" cy="274" r="6" /></g>
    </svg>
  )
}

function SupervisionCapabilityVisual() {
  return <svg className="capability-visual" viewBox="0 0 500 260"><path className="capability-visual__soft" d="M58 48h384v170H58zM58 90h384M148 48v170M238 48v170M328 48v170" /><path d="M94 176h52l42-54 55 28 52-64 70 38 48-50" /><circle cx="94" cy="176" r="7" /><circle cx="188" cy="122" r="7" /><circle cx="243" cy="150" r="7" /><circle cx="295" cy="86" r="7" /><circle cx="365" cy="124" r="7" /><path className="capability-visual__accent" d="m350 184 18 18 42-48" /></svg>
}

function InfrastructureCapabilityVisual() {
  return <svg className="capability-visual" viewBox="0 0 500 260"><path className="capability-visual__soft" d="M28 216h444M80 216l92-120h156l92 120M172 96h156M114 172h272M196 96l-34 120M304 96l34 120" /><path d="M56 216h388M118 216l80-120h104l80 120M210 96l-22 120M290 96l22 120" /><path className="capability-visual__accent" d="M250 96v120M228 148h44M218 190h64" /></svg>
}

function BlueprintStageVisual() {
  return <svg className="story-visual story-visual--blueprint" viewBox="0 0 420 230"><path className="story-visual__grid" d="M0 46h420M0 92h420M0 138h420M0 184h420M70 0v230M140 0v230M210 0v230M280 0v230M350 0v230" /><path d="M60 185h300M88 185V88h244v97M88 88h244M130 88V52h160v36M166 185v-58h88v58M210 52v133" /><path className="story-visual__accent" d="M58 204h304M58 198v12M362 198v12M48 80v112M42 80h12M42 192h12" /></svg>
}

function ModelStageVisual() {
  return <svg className="story-visual story-visual--model" viewBox="0 0 420 230"><path className="story-visual__soft" d="m72 158 140 52 136-64-140-52-136 64Zm0 0v-52l136-62 140 50v52" /><path d="m104 143 106 40 106-50-108-39-104 49Zm0 0v-43l104-48 108 38v43M208 52v42M104 100l104 38 108-48" /><path className="story-visual__accent" d="m208 138 108-48v43l-106 50v-45Z" /></svg>
}

function ExecutionStageVisual() {
  return <svg className="story-visual story-visual--execution" viewBox="0 0 420 230"><path className="story-visual__soft" d="M32 196h356M56 196V82h308v114M56 82h308M88 82V42h244v40" /><path d="M86 196v-72h248v72M86 124h248M144 124v72M276 124v72M210 42v154" /><path className="story-visual__accent" d="m56 196 88-72 66 72 66-72 58 72" /></svg>
}

function RenderCapabilityIcon() {
  return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="m7 18 17-9 17 9-17 9-17-9Zm0 0v13l17 8 17-8V18M24 27v12" /><path className="capability-icon__accent" d="m12 29 12 6 12-6" /></svg>
}

function TopographyCapabilityIcon() {
  return <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="14" r="7" /><path d="M24 21v7M18 28h12M20 28 11 43M28 28l9 15M24 28v15M17 14h14" /><path className="capability-icon__accent" d="M6 38c7-4 12 4 19 0s11 3 17-1" /></svg>
}

function BudgetCapabilityIcon() {
  return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M10 7h28v34H10zM16 15h16M16 22h7M16 29h7M28 22h4M28 29h4M16 36h16" /><path className="capability-icon__accent" d="M10 7h28v7H10" /></svg>
}

function DocumentationCapabilityIcon() {
  return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M12 6h18l7 7v29H12zM30 6v8h7M18 21h13M18 27h13M18 33h9" /><path className="capability-icon__accent" d="m30 38 4 4 8-10" /></svg>
}

export default App
