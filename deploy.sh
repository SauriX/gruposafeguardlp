#!/usr/bin/env sh

# Abortar en caso de errores
set -e

# Construir la aplicación usando Yarn
yarn build

# Navegar a la carpeta de salida de la construcción
cd dist

# Si estás desplegando en un dominio personalizado (ej. www.tudominio.com),
# descomenta la siguiente línea y edita con tu dominio.
# echo 'www.tudominio.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# *** ¡CAMBIA ESTA LÍNEA POR LA VERSIÓN HTTPS! ***
git push -f https://github.com/SauriX/gruposafeguardlp.git HEAD:gh-pages

cd -