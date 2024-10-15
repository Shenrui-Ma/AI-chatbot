#!/bin/bash

echo "Activating frontend services..."
echo "Activating backend services..."

# Frontend activating...
gnome-terminal -- bash -c "cd frontend && pnpm run dev; exec bash"

# Backend activating with environment...
gnome-terminal -- bash -c "source $PWD/miniconda/bin/activate AI-chatbot && cd backend && uvicorn main:app --reload; exec bash"

# Open frontend in default browser
xdg-open http://localhost:3000

echo "Activated successfully."