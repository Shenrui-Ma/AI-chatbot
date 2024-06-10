@echo off
echo Activating frontend services...
echo Activating backend services...

:: Frontend activating...
start cmd.exe /k "cd frontend && pnpm run dev"

:: Backend activating with environment...
start cmd.exe /k "F:\Miniconda\Scripts\activate ML && cd backend && uvicorn main:app --reload"

:: Open frontend in default browser
start http://localhost:3000

echo Activated successfully.
pause