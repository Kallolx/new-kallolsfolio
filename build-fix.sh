#!/bin/bash

# Install dependencies at the project root
npm install --force

# Ensure Tailwind and PostCSS are installed
npm install tailwindcss postcss autoprefixer postcss-import --save

# Run the build
npm run build 