# AGENTS.md

Guía compacta para Roberto-Hermes, BMO y cualquier agente o colaborador técnico que trabaje en este repo.

## Antes de editar

1. Lee `README.md`, `KANBAN.md` y la documentación relevante en `docs/`.
2. Revisa la carpeta concreta que vayas a tocar y sus dependencias cercanas.
3. Comprueba el estado de git con `git status --short`.
4. Si trabajas con BMO o agentes, usa una rama/lab por tarea. No edites `main` directamente salvo cambio documental mínimo acordado.

## Reglas de seguridad

- No subas credenciales, tokens, contraseñas FTP, datos privados de clientes ni `.env` reales.
- No ejecutes despliegues reales sin aprobación humana explícita.
- No uses FTP, SFTP, SSH, hosting real ni credenciales locales desde agentes.
- No contactes leads/clientes desde automatizaciones sin revisión humana.
- No cambies DNS, hosting, cuentas, pagos ni servicios externos desde este repo.
- Si un formulario, WhatsApp, email o integración no está conectada de verdad, dilo claramente en la demo/documentación.

## Forma de trabajar

- Cambios pequeños y revisables.
- Documenta decisiones importantes en `docs/`.
- Mantén el tono en español claro y accionable.
- Distingue demo, propuesta y proyecto real.
- Si una demo pasa a cliente real, considera separarla a su propio repo antes de añadir secretos o infraestructura.

## Política de ramas y PR

- `main` es estable; trabaja en rama por tarea (`bmo/<tema>`, `roberto/<tema>` o `fix/<tema>`).
- Entrega los cambios mediante PR o handoff revisable antes de merge.
- Antes de merge, revisa secretos, alcance, privacidad/licencia pendiente y riesgos de deploy/outreach.
- Ver detalles en `docs/branch-pr-policy.md`, `docs/security-collaboration.md` y `docs/deploy-safe.md`.

## Checks mínimos antes de entregar una PR

Ejecuta lo que aplique y reporta resultados reales:

```bash
git diff --check
npm run check
npm run build
```

Para cambios visuales, además revisa manualmente:

- móvil y desktop;
- enlaces `tel:`, WhatsApp, redes y mapas;
- títulos/meta básicos;
- contraste y legibilidad;
- ausencia de credenciales o datos privados.

## Formato recomendado de reporte

- Objetivo.
- Archivos cambiados.
- Qué leíste antes de editar.
- Tests/checks ejecutados.
- Checks estáticos o dry-run.
- No ejecutado / riesgos.
- Siguiente recomendación.
