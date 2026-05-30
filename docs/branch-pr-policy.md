# Política de ramas, PR y checks

## Ramas

- `main` representa el estado estable.
- Una rama por tarea relevante.
- Nombres recomendados:
  - `bmo/<descripcion-corta>` para trabajo de BMO/Hermes;
  - `roberto/<descripcion-corta>` para trabajo de Roberto;
  - `fix/<descripcion-corta>` para correcciones pequeñas.

Ejemplo:

```bash
git fetch --all --prune
git switch -c bmo/guardrails-colaboracion main
```

## PR o handoff

Todo cambio no trivial debe llegar con PR o, como mínimo, handoff equivalente:

```text
Resumen:
Archivos cambiados:
Probado real:
Comprobación estática / dry-run:
No ejecutado / riesgos:
Decisiones humanas pendientes:
```

## Checks mínimos

Siempre que aplique:

```bash
git status --short
git diff --check
git diff --stat
```

Para HTML/CSS/JS:

- abrir la página afectada en local;
- revisar mobile y desktop;
- probar CTAs principales;
- comprobar que formularios y enlaces no prometen funcionalidad inexistente.

Para scripts:

- documentar variables necesarias;
- probar modo seguro o dry-run;
- no ejecutar contra servicios reales sin aprobación.

## Revisión antes de merge

No mergear si:

- hay secretos, tokens, hosts/usuarios reales o `.env` en el diff;
- el cambio despliega/publica algo;
- contacta clientes/leads;
- cambia stack o arquitectura sin decisión;
- falta licencia/permiso de assets necesarios;
- los riesgos no están explicados.
