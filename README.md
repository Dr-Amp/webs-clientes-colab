# Webs clientes · workspace colaborativo

Este repo es el punto de entrada para colaborar entre Roberto y un colega programador en un sistema de captación, propuesta y desarrollo de webs para negocios locales.

No está pensado solo como un repositorio de código.
También documenta:
- cómo buscar posibles clientes,
- cómo evaluarlos,
- cómo preparar una propuesta,
- cómo pasar de idea a demo,
- y cómo organizar la colaboración técnica.

## Qué hay dentro

### Documentación
- `AGENTS.md` → reglas operativas para agentes y colaboradores técnicos
- `docs/vision.md` → visión general del proyecto
- `docs/workflow.md` → proceso de búsqueda, filtrado y propuesta
- `docs/ideal-client.md` → perfil de cliente ideal
- `docs/collaboration.md` → forma de trabajar entre Roberto y colaborador
- `docs/security-collaboration.md` → límites de seguridad, secretos, privacidad y outreach
- `docs/branch-pr-policy.md` → política de ramas, PRs y checks antes de merge
- `docs/deploy-safe.md` → nota de deploy seguro; FTP y credenciales locales bloqueados para agentes
- `docs/bmo-intake.md` → lectura inicial BMO, deuda inmediata y checklist mínima de QA
- `docs/first-week-plan.md` → plan de entrada para la primera semana del colaborador

### Organización
- `KANBAN.md` → tablero manual con backlog, próximos pasos y estado del sistema
- `.env.example` → variables de entorno de ejemplo para despliegues manuales, sin credenciales reales

### Escaparate comercial + scaffold técnico propuesto
- `package.json` → scripts npm mínimos para Astro/Tailwind y revisión de bocetos raw
- `astro.config.mjs`, `tailwind.config.mjs`, `tsconfig.json` → configuración base estática
- `src/content/config.ts` → schema de landings locales: negocio, sector, CTAs, SEO y localización
- `src/content/landings/` → fichas de gimnasio, veterinaria y floristería sin reescribir los HTML raw
- `src/pages/index.astro` → entrada de desarrollo que monta la base visual Aino en pantalla completa
- `src/pages/landings/` → listado interno generado desde el content schema
- `public/aino/` → source mount Aino completo/navegable usado como base visual y de interacción
- `docs/scaffold-astro-tailwind.md` → guía para crear nuevas landings y validar el cambio de stack

### Plantillas
- `templates/cold-message.md` → mensaje en frío base
- `templates/audit-template.md` → mini auditoría rápida
- `templates/proposal-template.md` → estructura de propuesta

### Datos
- `data/leads-example.csv` → ejemplo de tabla de leads

### Ejemplos de webs / bases visuales
- `gimnasio-cai/`
- `hospital-veterinario-san-vicente/`
- `floristeria-tropical-garden/`

## Qué debe hacer un colaborador al entrar

1. Leer este `README.md`
2. Leer `AGENTS.md`
3. Leer `docs/security-collaboration.md`
4. Leer `docs/branch-pr-policy.md`
5. Leer `docs/deploy-safe.md`
6. Leer `docs/bmo-intake.md`
7. Leer `docs/vision.md`
8. Leer `docs/workflow.md`
9. Leer `docs/ideal-client.md`
10. Leer `docs/collaboration.md`
11. Leer `docs/first-week-plan.md`
12. Revisar `KANBAN.md`
13. Revisar `templates/`
14. Revisar las carpetas de ejemplo
15. Proponer mejoras al sistema o al scaffold técnico

## Objetivo práctico

Construir un sistema reutilizable para detectar negocios locales con potencial, enseñarles mejoras claras y convertir eso en proyectos web reales.

## Cómo encaja el código

Las carpetas de webs sirven como ejemplos, pruebas o semillas visuales.
Más adelante, cada cliente real puede separarse en su propio repo si hace falta.

La base visual principal de esta rama ahora es `public/aino/`: un montaje navegable del source Aino adaptado a ruta local. La home Astro (`/`) lo abre en pantalla completa como banco de trabajo para convertirlo en la web de desarrollo de webs para comercios locales.

Nota práctica: esta base sirve para desarrollo/criterio visual. Antes de publicarla como web final hay que sustituir marca, textos, casos, imágenes y cualquier asset externo por material propio/licenciado.

El scaffold Astro/Tailwind añadido en esta rama queda como capa de trabajo alrededor de esa base, no como sustituto visual. Para instalar y probar:

```bash
npm install
npm run dev
npm run check
npm run build
```

`npm run dev` y `npm run build` ejecutan `npm run raw:sync` para copiar temporalmente los bocetos raw a `public/` y mantener `/gimnasio-cai/`, `/hospital-veterinario-san-vicente/` y `/floristeria-tropical-garden/` accesibles dentro de Astro.

Para revisar las demos HTML actuales como carril raw sin Astro:

```bash
npm run raw:serve
```

Rutas raw que deben seguir accesibles:
- `/gimnasio-cai/`
- `/hospital-veterinario-san-vicente/`
- `/floristeria-tropical-garden/`

Ver `docs/scaffold-astro-tailwind.md` para crear una landing nueva y entender el schema.

## Próximos pasos recomendados

- validar si la portada comercial ayuda a vender demos a negocios locales
- crear un sistema simple de scoring de leads
- decidir si Astro/Tailwind se queda como motor invisible para demos rápidas
- separar proyectos reales por repositorio cuando empiecen a madurar
