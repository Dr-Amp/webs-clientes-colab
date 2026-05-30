# Deploy seguro

Este repositorio no tiene un flujo de deploy aprobado para agentes.

## Regla base

No usar FTP ni credenciales locales como mecanismo estándar de publicación. Ningún agente debe desplegar, publicar, reiniciar servicios ni tocar hosting/DNS sin aprobación humana explícita.

## Estado del script FTP

El script FTP de floristería se retira del repo. No debe quedar un `deploy.py` ejecutable para agentes ni colaboradores.

Si en el futuro se decide publicar una demo, se documentará un flujo nuevo y revisable. La subida real solo será aceptable con destino, rama/commit, credenciales fuera de git y aprobación humana previa. Los valores de `.env.example` son placeholders, no credenciales.

## Requisitos antes de cualquier deploy futuro

1. Destino y dominio aprobados por humano.
2. Rama/commit exacto identificado.
3. Variables reales fuera de git: `.env` local ignorado o panel del proveedor.
4. `.env.example` actualizado solo con placeholders.
5. Modo dry-run o lista de archivos a publicar revisable.
6. Checklist de QA previo:
   - mobile y desktop;
   - enlaces `tel:`, WhatsApp, Instagram y Maps;
   - formularios sin promesas falsas;
   - title/meta description;
   - ausencia de secretos en `git diff`.
7. Plan simple de rollback o copia previa.

## Alternativas preferidas

Para demos estáticas, preferir un flujo revisable con PR y deploy de preview del proveedor cuando se decida stack/hosting. La decisión de hosting queda pendiente y no debe inferirse por un agente.
