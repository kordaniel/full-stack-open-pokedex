#!/usr/bin/env bash

echo "Pokedex build process starting"

echo "---------- Installing dependencies"
npm install && { echo "Dependencies installed succesfully"; } || { ES=$?; echo "Installation failed"; exit ${ES}; }

echo "---------- Building application"
npm run build && { echo "Application built succesfully"; } || { ES=$?; echo "Build failed"; exit ${ES}; }

echo "Pokedex build process succesfully completed"
