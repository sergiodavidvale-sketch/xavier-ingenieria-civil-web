import { useEffect, useRef, useState, type ReactNode } from 'react'
import { siteConfig } from './siteConfig'

const navItems = [
  ['Inicio', 'inicio'],
  ['Servicios', 'servicios'],
  ['Nosotros', 'nosotros'],
  ['Proceso', 'proceso'],
  ['Contacto', 'contacto'],
] as const

const services = [
  {
    number: '01',
    title: 'Proyectos',
    copy: 'Planeación, desarrollo técnico, presupuestos y documentación de ingeniería.',
    icon: <DraftingIcon />,
  },
  {
    number: '02',
    title: 'Supervisión',
    copy: 'Seguimiento técnico, control de avance, calidad y coordinación de obra.',
    icon: <SurveyIcon />,
  },
  {
    number: '03',
    title: 'Construcción',
    copy: 'Ejecución de proyectos de ingeniería civil con planeación y control.',
    icon: <BuildIcon />,
  },
] as const

const differentiators = [
  ['01', 'Planeación', 'Definir el rumbo antes de iniciar.'],
  ['02', 'Precisión', 'Cuidar cada decisión técnica.'],
  ['03', 'Control', 'Dar seguimiento a lo que importa.'],
  ['04', 'Ejecución', 'Convertir el proyecto en resultados.'],
] as const

const capabilities = [
  {
    number: '01',
    title: 'Obra civil',
    copy: 'Estructuras, cimentaciones, adecuaciones y ejecución civil con planeación técnica.',
    variant: 'capability-card--civil',
    visual: <CivilCapabilityVisual />,
  },
  {
    number: '02',
    title: 'Supervisión técnica',
    copy: 'Control de avance, calidad, coordinación y seguimiento durante cada etapa de obra.',
    variant: 'capability-card--supervision',
    visual: <SupervisionCapabilityVisual />,
  },
  {
    number: '03',
    title: 'Infraestructura',
    copy: 'Soluciones civiles e infraestructura pensadas para responder al contexto del proyecto.',
    variant: 'capability-card--infrastructure',
    visual: <InfrastructureCapabilityVisual />,
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
  const menuToggleRef = useRef<HTMLButtonElement>(null)
  const navigationRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24)
    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

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
        <a className="brand" href="#inicio" aria-label="XAVIER Ingeniería Civil, inicio">
          <BrandMark />
          <span className="brand__text">
            <strong>XAVIER</strong>
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
          <div className="hero__image" role="img" aria-label="Escena conceptual de infraestructura civil en construcción" />
          <div className="hero__veil" />
          <div className="technical-grid" />
          <div className="container hero__content">
            <h1 className="hero__brand"><strong>XAVIER</strong><span>INGENIERÍA CIVIL</span></h1>
            <p className="hero__claim">Construimos sobre <em>ideas sólidas.</em></p>
            <p className="hero__lead">Ingeniería, supervisión y ejecución con enfoque técnico.</p>
            <p className="hero__descriptor">{siteConfig.descriptor}</p>
            <div className="hero__actions">
              <a className="button button--primary" href="#servicios">Conoce nuestros servicios <ArrowIcon /></a>
              <a className="button button--ghost" href="#contacto">Contáctanos</a>
            </div>
          </div>
          <div className="hero__index" aria-hidden="true"><b>X</b><span>ING / CIV</span></div>
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
              <p className="about__lead">XAVIER Ingeniería Civil es una iniciativa profesional enfocada en proyectos, supervisión y construcción de ingeniería civil.</p>
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

        <section className="portfolio section" id="proyectos">
          <div className="container">
            <SectionHeading
              kicker="Capacidades"
              title={<>Soluciones para cada<br /><span>etapa del proyecto.</span></>}
              copy="Tres áreas de trabajo para abordar proyectos civiles con planeación, seguimiento y ejecución."
            />
            <div className="portfolio__grid">
              {capabilities.map((capability) => (
                <article className={`portfolio-card ${capability.variant}`} key={capability.title}>
                  <div className="portfolio-card__visual" aria-hidden="true">
                    <span className="portfolio-card__number">{capability.number}</span>
                    {capability.visual}
                  </div>
                  <div className="portfolio-card__body">
                    <span>Capacidad {capability.number}</span>
                    <h3>{capability.title}</h3>
                    <p>{capability.copy}</p>
                  </div>
                </article>
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
          <a className="brand brand--footer" href="#inicio"><BrandMark /><span className="brand__text"><strong>XAVIER</strong><small>INGENIERÍA CIVIL</small></span></a>
          <p>{siteConfig.descriptor}</p>
          <a href="#inicio">Volver arriba <span>↑</span></a>
        </div>
        <div className="container footer__bottom"><span>© {new Date().getFullYear()} XAVIER Ingeniería Civil</span><span>{siteConfig.statusNote}</span></div>
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

function CivilCapabilityVisual() {
  return <svg className="capability-visual" viewBox="0 0 500 260"><path className="capability-visual__soft" d="M36 218h428M92 218V104h316v114M92 104h316M148 104V52h204v52M148 52h204" /><path d="M132 218V142h236v76M132 142h236M202 142v76M298 142v76M72 232h356" /><path className="capability-visual__accent" d="m92 218 110-76 96 76 70-76" /></svg>
}

function SupervisionCapabilityVisual() {
  return <svg className="capability-visual" viewBox="0 0 500 260"><path className="capability-visual__soft" d="M58 48h384v170H58zM58 90h384M148 48v170M238 48v170M328 48v170" /><path d="M94 176h52l42-54 55 28 52-64 70 38 48-50" /><circle cx="94" cy="176" r="7" /><circle cx="188" cy="122" r="7" /><circle cx="243" cy="150" r="7" /><circle cx="295" cy="86" r="7" /><circle cx="365" cy="124" r="7" /><path className="capability-visual__accent" d="m350 184 18 18 42-48" /></svg>
}

function InfrastructureCapabilityVisual() {
  return <svg className="capability-visual" viewBox="0 0 500 260"><path className="capability-visual__soft" d="M28 216h444M80 216l92-120h156l92 120M172 96h156M114 172h272M196 96l-34 120M304 96l34 120" /><path d="M56 216h388M118 216l80-120h104l80 120M210 96l-22 120M290 96l22 120" /><path className="capability-visual__accent" d="M250 96v120M228 148h44M218 190h64" /></svg>
}

export default App
