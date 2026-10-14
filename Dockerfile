# ---- Build ----
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# Vite incorpora esta URL en el build (es publica, no pongas secretos)
ARG VITE_API_BASE_URL=http://localhost:8080/
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL
RUN npm run build

# ---- Servidor (nginx sin root, escucha en 8080) ----
FROM nginxinc/nginx-unprivileged:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
