#!/bin/bash

echo -e "\nStarting Frontend Server\n"

# Check Node.js
command -v node >/dev/null 2>&1 || { echo "Error: Node.js not installed"; exit 1; }
echo "✓ Node $(node --version)"

# Install dependencies if needed
[ ! -d "node_modules" ] && npm install

# Clean ports and start
sudo fuser -k 3000/tcp 2>/dev/null || true
npm run dev