#!/usr/bin/env bash
set -euo pipefail

npm install --prefix frontend
npm install --prefix dashboard

npm run build --prefix frontend
npm run build --prefix dashboard

rm -rf dist
mkdir -p dist
cp -r frontend/build/. dist/
mkdir -p dist/dashboard
cp -r dashboard/build/. dist/dashboard/
