# Arranque BMO

Este documento resume la primera lectura BMO del repo y deja una base segura para colaborar con Roberto-Hermes sin cambiar todavía el producto ni desplegar nada.

## Lectura rápida

`webs-clientes-colab` ya funciona como workspace de negocio: captación, evaluación, propuesta y demos para negocios locales. El repo es pequeño, entendible y buen candidato para iterar con agentes, siempre que se separen bien demo, proyecto real y despliegue.

## Estado actual

- Documentación principal: `README.md`, `docs/vision.md`, `docs/workflow.md`, `docs/ideal-client.md`, `docs/collaboration.md`, `docs/first-week-plan.md`.
- Tablero manual: `KANBAN.md`.
- Plantillas comerciales: `templates/`.
- Datos de ejemplo: `data/leads-example.csv`.
- Demos actuales:
  - `gimnasio-cai/`: HTML único, útil como maqueta comercial completa.
  - `hospital-veterinario-san-vicente/`: HTML único, útil por servicios/urgencias/autoridad.
  - `floristeria-tropical-garden/`: demo más estructurada, con assets separados y script de despliegue.

## Hallazgos principales

### Bueno

- La intención comercial está clara: detectar negocios locales con margen de mejora y convertir oportunidades en demos/propuestas.
- Hay documentación suficiente para que un colaborador entienda el sistema.
- Las tres demos cubren sectores razonables para empezar: gimnasio, veterinaria y floristería.
- La demo de floristería es la base visual más prometedora para una demo WhatsApp-first.

### Deuda inmediata

- No hay scaffold técnico común todavía: sin `package.json`, build, componentes ni checks automatizados.
- Gimnasio y veterinario concentran HTML/CSS/JS en un único archivo.
- El deploy de floristería existía con defaults demasiado específicos; debe tratarse como script manual y seguro, nunca como patrón automático.
- Falta decidir licencia/privacidad del repo antes de convertirlo en plantilla pública.

## Reglas BMO para este repo

- Trabajar en rama o lab por tarea.
- No desplegar sin aprobación explícita.
- No tocar credenciales ni pedirlas dentro del repo.
- No contactar clientes/leads desde automatizaciones.
- Mantener los cambios pequeños y revisables.
- Documentar decisiones abiertas en vez de inventarlas.

## Checklist mínima de QA antes de enseñar una demo

- [ ] Revisión móvil y desktop.
- [ ] Enlaces de WhatsApp, teléfono, Instagram y mapas funcionan o están marcados como placeholder.
- [ ] `title` y `meta description` presentes.
- [ ] Textos sin typos evidentes ni acentos rotos.
- [ ] Imágenes razonablemente optimizadas para demo.
- [ ] Contraste y legibilidad aceptables.
- [ ] Formularios no prometen envío real si no hay backend.
- [ ] Sin credenciales, datos privados o rutas internas.
- [ ] Si hay despliegue, se ha probado antes en dry-run y aprobado por humano.

## Próximas decisiones abiertas

- Stack base para nuevas demos: recomendación inicial BMO pendiente de validar con Roberto: Astro + Tailwind para demos reutilizables, manteniendo carril HTML simple para bocetos rápidos.
- Estructura futura: decidir si separar `examples/`, `clients/`, `scaffolds/`, `leads/` y `ops/` cuando el repo crezca.
- Leads: decidir si seguir con CSV o pasar a Notion/Airtable/CRM ligero cuando haya volumen.
- Licencia/visibilidad: decidir si el repo será privado, plantilla pública o workspace interno sin licencia.

## Siguiente paso recomendado

Abrir una primera PR pequeña con `AGENTS.md`, este documento, `.env.example` sin credenciales de proveedor y la retirada del script FTP de floristería. Después, validar el scaffold Astro/Tailwind como motor interno para demos rápidas, sin migrar todavía las tres demos raw.
