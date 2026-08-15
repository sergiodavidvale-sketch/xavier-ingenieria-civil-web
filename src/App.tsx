import { useEffect, useState, type ReactNode } from 'react'
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

const process = ['Evaluación', 'Proyecto', 'Planeación', 'Ejecución', 'Supervisión', 'Entrega']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24)
    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

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
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span className="sr-only">Abrir navegación</span>
          <span />
          <span />
        </button>

        <nav id="main-navigation" className={`nav${menuOpen ? ' nav--open' : ''}`}>
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
            <p className="eyebrow eyebrow--light"><span /> Ingeniería civil con dirección</p>
            <h1>Construimos sobre<br /><em>ideas sólidas.</em></h1>
            <p className="hero__lead">Ingeniería y ejecución para convertir ideas en proyectos sólidos.</p>
            <p className="hero__descriptor">{siteConfig.descriptor}</p>
            <div className="hero__actions">
              <a className="button button--primary" href="#servicios">Conoce nuestros servicios <ArrowIcon /></a>
              <a className="button button--ghost" href="#contacto">Contáctanos</a>
            </div>
          </div>
          <div className="hero__index" aria-hidden="true"><b>X</b><span>01 / 06</span></div>
          <p className="hero__caption">Imagen conceptual generada para este demo</p>
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
            <p className="demo-label">Contenido descriptivo preliminar · editable</p>
          </div>
        </section>

        <section className="about section" id="nosotros">
          <div className="container about__grid">
            <div className="about__visual" aria-hidden="true">
              <div className="x-structure"><span /><span /></div>
              <p>Forma<br />Función<br />Futuro</p>
              <small>X / 2026</small>
            </div>
            <div className="about__content">
              <p className="eyebrow"><span /> Nosotros</p>
              <h2>Una iniciativa profesional con <em>visión técnica.</em></h2>
              <p className="about__lead">XAVIER Ingeniería Civil es una iniciativa profesional enfocada en proyectos, supervisión y construcción de ingeniería civil.</p>
              <p>Estamos construyendo una forma de trabajo basada en la planeación, la precisión y el seguimiento responsable de cada etapa.</p>
              <div className="about__note"><span>Nota</span><p>La identidad, oferta y datos corporativos se encuentran en proceso de definición.</p></div>
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
              kicker="Portafolio"
              title={<>El trabajo hablará<br /><span>por nosotros.</span></>}
              copy="Este espacio está preparado para integrar proyectos reales una vez que la información y los permisos de publicación sean validados."
            />
            <div className="portfolio__placeholder">
              <div className="portfolio__drawing" aria-hidden="true"><span /><span /><span /><b>X</b></div>
              <div className="portfolio__copy">
                <span className="status-pill">En preparación</span>
                <p>Portafolio en construcción</p>
                <small>Proyecto demostrativo · Sin atribución a obra real</small>
              </div>
            </div>
          </div>
        </section>

        <section className="process section" id="proceso">
          <div className="container">
            <div className="process__heading">
              <div><p className="eyebrow"><span /> Proceso preliminar</p><h2>Del planteamiento<br /><em>a la entrega.</em></h2></div>
              <p>Un flujo de trabajo demostrativo para visualizar la continuidad técnica del proyecto.</p>
            </div>
            <ol className="process__flow">
              {process.map((step, index) => (
                <li key={step}><span>{String(index + 1).padStart(2, '0')}</span><strong>{step}</strong>{index < process.length - 1 && <ArrowIcon />}</li>
              ))}
            </ol>
            <p className="demo-label">Flujo preliminar / sujeto a validación</p>
          </div>
        </section>

        <section className="contact section" id="contacto">
          <div className="contact__x" aria-hidden="true">X</div>
          <div className="container contact__grid">
            <div>
              <p className="eyebrow eyebrow--light"><span /> Hablemos</p>
              <h2>Todo proyecto sólido<br />empieza con una <em>conversación.</em></h2>
              <p>Cuéntanos qué tienes en mente. Los canales definitivos de contacto se publicarán después de su validación.</p>
            </div>
            <div className="contact__details">
              <ContactRow label="Correo" value={siteConfig.contact.email} />
              <ContactRow label="Teléfono" value={siteConfig.contact.phoneDisplay} />
              <ContactRow label="Ubicación" value={siteConfig.contact.location} />
              <span className="contact__pending">Datos provisionales · No utilizar para comunicación real</span>
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

function ContactRow({ label, value }: { label: string; value: string }) {
  return <div className="contact-row"><span>{label}</span><p>{value}</p></div>
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

export default App

