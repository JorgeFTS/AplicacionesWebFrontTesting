# ChambaPro — Frontend

[![Frontend CI](https://github.com/JorgeFTS/frontend-chambapro/actions/workflows/ci.yml/badge.svg)](https://github.com/JorgeFTS/frontend-chambapro/actions/workflows/ci.yml)

Aplicación web de **ChambaPro**, una plataforma que conecta clientes con técnicos. Los clientes buscan técnicos, ven su perfil y reseñas y contratan servicios; los técnicos gestionan su agenda de reservas y ven sus estadísticas.

> **Estado:** en desarrollo. Estoy agregando la capa de calidad y DevOps: tests unitarios y E2E, CI con GitHub Actions, Docker y despliegue en Azure.
> TODO: confirmar el nombre del equipo e integrantes del proyecto original y acreditarlos aquí.

## Stack

- Vue 3 (`<script setup>`) + Vite
- PrimeVue · Pinia · Vue Router · vue-i18n (español / inglés)
- Chart.js (estadísticas del técnico) · Axios
- Organización por dominios: `iam`, `service`, `user`, `analytics`

## Cómo correrlo en local

Requisitos: Node 22+.

```bash
npm install
cp .env.example .env     # opcional: solo si tu backend NO está en http://localhost:5214/
npm run dev
```

La URL del backend se toma de `VITE_API_BASE_URL` (por defecto `http://localhost:5214/`).
Las variables `VITE_*` quedan dentro del JavaScript publicado: **no pongas secretos ahí**.

### Mock de datos (`server/`)

La carpeta `server/` trae un `db.json` de una etapa anterior del proyecto, pensado para [json-server](https://github.com/typicode/json-server).
**Está desactualizado:** no cubre endpoints actuales como el login (`/api/v1/authentication/sign-in`). La idea es actualizarlo y usarlo como base para los tests E2E.

## Con Docker

```bash
docker compose up --build
```

Queda en http://localhost:4173 apuntando al backend en `http://localhost:8080/` (el del `docker-compose` del repo de la API).
Para otro backend: `VITE_API_BASE_URL=https://mi-api/ docker compose up --build`.

## Scripts

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción en `dist/` |
| `npm run preview` | Sirve el build local |

## Roadmap DevOps / QA

- [x] URL del backend por variable de entorno
- [x] Dockerfile con nginx
- [ ] Tests unitarios (Vitest + Vue Test Utils)
- [ ] Tests E2E (Playwright)
- [ ] CI con GitHub Actions (build + tests)
- [ ] Despliegue en Azure
