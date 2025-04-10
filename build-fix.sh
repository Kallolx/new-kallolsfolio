#!/bin/bash

# Install dependencies at the project root
npm install --force

# Ensure Tailwind and PostCSS are installed
npm install tailwindcss postcss autoprefixer postcss-import --save

# Create a simple solution: modify imports directly
echo "Fixing imports for components..."

# A more direct approach to fix Vercel deployment
cd src
ln -s components app/components
ln -s lib app/lib

# Run the build from the root
cd ..
npm run build 