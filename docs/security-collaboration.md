# Guardrails de colaboración segura

## Objetivo

Permitir que Roberto-Hermes, BMO y colaboradores técnicos trabajen en demos, auditorías y propuestas sin poner en riesgo clientes, credenciales, reputación ni producción.

## Límites explícitos

Los agentes pueden:

- editar documentación, plantillas y demos locales en rama;
- proponer scaffolds y checks;
- preparar borradores de auditoría, mensaje o propuesta;
- hacer pruebas locales y reportar evidencias.

Los agentes no pueden sin aprobación humana:

- contactar leads o clientes;
- desplegar o publicar cambios;
- usar FTP, hosting, DNS, email real o credenciales;
- recolectar datos personales más allá de ejemplos mínimos;
- prometer funcionalidades no implementadas;
- cambiar stack de producción o separar repos reales.

## Manejo de secretos

- `.env` y `.env.*` locales quedan ignorados por git.
- `.env.example` sí debe estar versionado y solo puede contener placeholders.
- Nunca copiar credenciales reales a issues, PRs, docs, commits, logs ni mensajes de agente.
- Si un valor parece real, tratarlo como secreto aunque no se pueda verificar.

## Privacidad y licencia pendiente

No hay licencia formal documentada. Mientras no se decida:

- tratar el repo como privado/no redistribuible;
- no reutilizar fotos/logos/textos de terceros fuera del contexto permitido;
- marcar contenidos dudosos como placeholder o pendiente de permiso;
- minimizar datos de leads y clientes.

## Outreach

Las plantillas de `templates/` son borradores. Ningún agente debe enviar mensajes en frío, emails, WhatsApps, DMs ni llamadas. Todo outreach requiere revisión y envío humano.

## Checklist antes de pedir merge

- `git diff --check` sin errores.
- Diff revisado para secretos y datos privados.
- Cambios limitados al alcance de la tarea.
- Documentado qué se probó realmente.
- Riesgos y decisiones abiertas anotados.
- Si afecta una demo, smoke visual/manual documentado.
