# Scaffold Astro/Tailwind para landings locales

Estado: propuesta validable por Roberto/Diego. El stack debe quedar invisible para cliente: primero demos vendibles, después orden técnico.

## Decisión propuesta

Usar Astro SSG + Tailwind como base mínima para landings nuevas y migraciones graduales. Motivos:

- genera HTML estático fácil de desplegar;
- permite componentes reutilizables sin meter un framework pesado;
- el content schema obliga a ordenar negocio, sector, CTAs, SEO y localización antes de diseñar;
- las demos raw actuales pueden seguir vivas en sus carpetas mientras se decide qué se migra.

## Carriles del repo

- Carril raw/bocetos: `gimnasio-cai/`, `hospital-veterinario-san-vicente/`, `floristeria-tropical-garden/`.
- Carril producto/scaffold: `src/`, `package.json`, `astro.config.mjs`, `tailwind.config.mjs`.
- Documentación y seguridad: `README.md`, `AGENTS.md`, `docs/`.

## Comandos

```bash
npm install
npm run dev
npm run check
npm run build
```

`npm run dev` y `npm run build` ejecutan `npm run raw:sync`, que copia las demos raw a `public/` para que Astro sirva las rutas actuales sin mover ni reescribir las fuentes.

Para revisar solo los HTML raw sin Astro:


```bash
npm run raw:serve
# abrir http://localhost:8000/gimnasio-cai/
# abrir http://localhost:8000/hospital-veterinario-san-vicente/
# abrir http://localhost:8000/floristeria-tropical-garden/
```

## Estructura nueva

```text
src/
  content/
    config.ts                  # schema de landings
    landings/*.md              # fichas negocio/sector/CTA/SEO/localización
  layouts/BaseLayout.astro     # layout base mínimo
  pages/index.astro            # portada comercial/portfolio con demos destacadas
  pages/landings/index.astro   # listado interno generado desde content schema
  styles/global.css            # Tailwind + estilos globales mínimos
```

## Schema de una landing

Cada landing vive en `src/content/landings/<slug>.md` y debe declarar:

- `business`: nombre, sector, ciudad, provincia/país;
- `seo`: title, description, canonical opcional, robots;
- `localization`: locale, timezone, área servida;
- `ctas`: lista de CTAs con `label`, `href` y tipo (`primary`, `secondary`, `whatsapp`, `phone`, `email`);
- `status`: `draft`, `demo`, `proposal` o `client-ready`;
- `rawDemoPath`: ruta al boceto HTML si existe;
- `notes`: riesgos o decisiones pendientes.

## Cómo crear una landing nueva

1. Crear `src/content/landings/<slug>.md` copiando una ficha existente.
2. Rellenar negocio, sector, ciudad, SEO y CTAs reales o marcados como placeholder.
3. Si existe boceto HTML manual, dejarlo en `<slug>/index.html` y apuntar `rawDemoPath: "/<slug>/"`.
4. Ejecutar `npm run check` para validar schema y tipos.
5. Ejecutar `npm run build` para confirmar salida estática.
6. Solo después de validación humana, crear componentes específicos o migrar secciones del raw.

## Criterio comercial antes de tocar código

- La home debe vender webs locales, no explicar el scaffold.
- Las demos raw son el material enseñable principal mientras funcionen mejor visualmente.
- Roberto/Diego deben poder explicar la propuesta sin hablar de Astro, Tailwind ni schemas.
- Si el stack añade fricción para entregar una demo rápida, se considera propuesta abierta y se simplifica.

## Reglas de migración

- No reescribir todas las demos de golpe.
- No borrar ni mover los HTML raw sin aprobación.
- Si una demo pasa a cliente real, confirmar datos, permisos de imágenes, teléfono, WhatsApp, correo, legal y deploy.
- Mantener `robots: noindex, nofollow` en demos no aprobadas.
- Documentar cada cambio de stack como propuesta revisable, no como decisión irreversible.

## Estado de las demos actuales

- Gimnasio CAI: accesible en `/gimnasio-cai/`, ficha schema creada.
- Hospital Veterinario San Vicente: accesible en `/hospital-veterinario-san-vicente/`, ficha schema creada.
- Tropical Garden: accesible en `/floristeria-tropical-garden/`, ficha schema creada.
