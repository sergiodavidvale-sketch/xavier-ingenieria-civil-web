# XAVA Ingeniería Civil — Product Roadmap

## Purpose

Este documento define la ruta de evolución de la demo actual hacia un sitio corporativo funcional y, posteriormente, hacia una plataforma ligera de captación y gestión comercial.

La intención es separar claramente cuatro etapas: **demo**, **sitio corporativo productivo**, **captación comercial** y **gestión interna**. No deben mezclarse en una misma iteración sin una decisión explícita.

## Current state

- Versión actual: **V4-B**.
- Estado: **Demo visual avanzada / pendiente de auditoría final de aceptación**.
- Deployment actual: <https://sergiodavidvale-sketch.github.io/xavier-ingenieria-civil-web/>.
- Rama canónica de deployment: `agent/initial-mvp`.
- Stack actual: React + TypeScript + Vite + CSS + GitHub Actions + GitHub Pages.
- La landing actual es estática: no incluye backend, base de datos, autenticación ni formulario funcional.

---

# Phase 1 — Close the demo

## 1. Final visual acceptance audit

Revisar V4-B en desktop, tablet y móvil, con énfasis en:

- identidad XAVA;
- hero secuencial;
- servicios y capacidades;
- proyectos destacados;
- visualización y planeación técnica;
- navegación;
- proceso;
- contacto;
- footer;
- consistencia y rendimiento visual.

Resultado esperado:

- **Approved:** congelar V4-B como **Demo v1.0**; o
- **Minor fixes:** ejecutar únicamente una lista corta de correcciones finales.

No iniciar un rediseño general después de esta auditoría.

## 2. Freeze Demo v1.0

Cuando la demo sea aprobada:

- registrar la aprobación en documentación;
- crear tag/release si el Global Playbook lo contempla;
- dejar la demo como baseline estable;
- abrir las siguientes mejoras como una nueva fase de producto.

---

# Phase 2 — Final identity and real content

## 3. Confirm corporate identity

Cerrar:

- nombre comercial definitivo;
- logotipo/isotipo definitivo;
- paleta y tipografías;
- aplicaciones de marca.

Confirmar si **XAVA Ingeniería Civil** será la marca definitiva antes de renombrar repositorio, rutas o infraestructura técnica heredada.

## 4. Replace demo assets with owned material

Sustituir progresivamente:

- escenas conceptuales del hero por video/fotografía propia;
- render conceptual por renders propios;
- proyectos demo por proyectos reales verificados;
- topografía demo por material autorizado;
- fotografías conceptuales por material de obra real.

Todo proyecto publicado deberá contar con datos verificados y autorización de publicación cuando corresponda.

---

# Phase 3 — Commercial content and real case studies

## 5. Build verified case studies

Estructura recomendada por caso:

**Necesidad → Solución → Ejecución → Resultado**

Campos sugeridos:

- tipo de proyecto;
- ubicación si puede publicarse;
- alcance;
- servicios realizados;
- fotografías/renders;
- resultado verificable;
- autorización de publicación.

## 6. Validate final service offer

Cerrar redacción definitiva de:

- Proyectos;
- Supervisión;
- Construcción;
- Levantamientos topográficos;
- Renderizados y previsualización;
- Presupuestos y cuantificación;
- Planeación y documentación técnica.

No publicar capacidades que todavía no formen parte de la oferta real.

---

# Phase 4 — Corporate data

## 7. Add validated company information

Incorporar cuando esté confirmado:

- razón social cuando corresponda;
- nombre comercial;
- correo;
- teléfono;
- ubicación;
- cobertura geográfica;
- redes sociales;
- horario si aplica.

Evitar publicar información fiscal o personal que no sea necesaria para la operación comercial del sitio.

---

# Phase 5 — Domain and corporate email

## 8. Register production domain

Seleccionar y registrar un dominio únicamente cuando la marca esté confirmada.

Ejemplos a evaluar por disponibilidad:

- `xavaingenieria.com`
- `xavaingenieriacivil.com`

## 9. Configure corporate email

Ejemplos:

- `contacto@...`
- `proyectos@...`
- `cotizaciones@...`

El dominio y correo corporativo deberán estar listos antes de activar los correos automáticos de solicitudes.

---

# Phase 6 — Lead capture

## 10. Real request/contact form

Convertir el contacto provisional en un canal operativo.

Campos preliminares a validar antes del desarrollo:

- nombre;
- empresa;
- teléfono;
- correo;
- ubicación del proyecto;
- tipo de proyecto;
- servicio requerido;
- descripción;
- presupuesto aproximado, solo si comercialmente conviene;
- adjuntos, únicamente si existe un caso de uso y almacenamiento seguro definido.

## 11. Request ID

Cada solicitud aceptada debe generar un folio único, por ejemplo:

`XAVA-REQ-000124`

El folio debe vincular la solicitud con su fecha, prospecto y estado de seguimiento.

---

# Phase 7 — Requests and customers database

## 12. Requests / leads database

Registrar de forma estructurada las solicitudes recibidas.

Estados iniciales sugeridos:

**Nuevo → Contactado → Visita → Cotización → Negociación → Ganado / Perdido**

El modelo definitivo deberá definirse antes de crear la base de datos.

## 13. Customers database

Cuando un prospecto se convierta en cliente, permitir relacionar:

- persona/empresa;
- solicitudes;
- cotizaciones;
- proyectos;
- historial comercial básico.

## 14. Preliminary architecture

Arquitectura objetivo de referencia:

**React/Vite frontend → secure API/server function → PostgreSQL database → protected admin interface**

La implementación concreta se decidirá en una fase de arquitectura. No introducir backend o base de datos dentro de la demo actual.

---

# Phase 8 — Automated communications

## 15. Automatic receipt confirmation

Cuando un visitante envíe correctamente una solicitud, el sistema deberá ejecutar de manera transaccional:

1. validar los datos;
2. registrar la solicitud;
3. generar el folio;
4. enviar confirmación automática al solicitante;
5. enviar notificación interna a XAVA.

El correo al solicitante debe incluir como mínimo:

- confirmación de recepción;
- folio;
- fecha;
- servicio solicitado o resumen breve;
- siguiente paso esperado;
- datos corporativos de contacto.

## 16. Internal notification

La notificación interna debe incluir los datos necesarios para iniciar el seguimiento y, cuando exista un panel administrativo, un enlace al registro correspondiente.

## 17. Future status notifications

Evaluar después, no en la primera versión:

- solicitud en revisión;
- visita programada;
- cotización enviada;
- proyecto adjudicado.

No automatizar estados comerciales sin definir primero responsables y proceso interno.

---

# Phase 9 — Privacy and security gate

Esta fase es obligatoria **antes de almacenar datos personales reales**.

## 18. Privacy

Definir y publicar los elementos legales y operativos aplicables al tratamiento de datos personales, incluyendo aviso de privacidad y finalidades del tratamiento.

## 19. Security

Nunca exponer en el frontend:

- credenciales de base de datos;
- API keys privadas;
- claves de proveedores de correo;
- secretos de autenticación.

El acceso administrativo deberá requerir autenticación y autorización.

Definir además:

- control de acceso;
- retención/eliminación de datos;
- backups;
- protección contra abuso/spam del formulario;
- logging técnico sin exponer información sensible.

---

# Phase 10 — Production readiness

## 20. SEO and discoverability

Completar:

- title y meta description definitivos;
- Open Graph;
- favicon;
- sitemap;
- robots;
- canonical;
- datos estructurados cuando apliquen.

## 21. Analytics

Antes de instalar analítica, definir qué decisiones debe soportar.

Métricas iniciales posibles:

- visitas;
- origen de tráfico;
- clics a contacto;
- formularios iniciados/enviados;
- solicitudes válidas;
- conversión a contacto comercial.

## 22. Final QA

Validar:

- desktop/tablet/mobile;
- accesibilidad;
- performance;
- formularios y estados de error;
- generación de folios;
- escritura en base de datos;
- correo automático;
- seguridad;
- SEO;
- enlaces;
- comportamiento ante fallas externas.

## 23. Production v1.0

Cuando contenido, dominio, privacidad, captación, automatizaciones y QA estén aprobados, publicar:

**XAVA Ingeniería Civil — Production v1.0**

El hosting definitivo podrá mantenerse o cambiar según los requerimientos del backend seleccionado.

---

# Product evolution levels

## Level 1 — Corporate website

Presentación de marca, servicios, capacidades y proyectos.

## Level 2 — Commercial lead capture

Formulario, folios, base de solicitudes y correos automáticos.

## Level 3 — Lightweight CRM

Prospectos, clientes, estados, cotizaciones y seguimiento comercial básico.

## Level 4 — Project/client platform

Posible evolución futura:

- expedientes;
- documentos;
- avances;
- seguimiento de obra;
- portal de clientes;
- dashboards.

**Level 4 no forma parte del alcance inmediato.**

---

# Recommended sequence

**V4-B acceptance audit**

→ **Demo v1.0**

→ **Final identity**

→ **Real assets and verified case studies**

→ **Corporate data**

→ **Domain and corporate email**

→ **Functional form**

→ **Requests database + folios**

→ **Automatic confirmation + internal notification**

→ **Customers / lightweight CRM**

→ **Privacy + security hardening**

→ **SEO + analytics + final QA**

→ **Production v1.0**

## Immediate next step

**Final visual acceptance audit of V4-B.**

No iniciar desarrollo productivo antes de aprobar la Demo v1.0, salvo una decisión explícita documentada.