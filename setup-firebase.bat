@echo off
echo ============================================
echo  Firebase Admin Panel Setup
echo ============================================
echo.

echo Step 1: Installing react-router-dom...
call npm install react-router-dom
if %errorlevel% neq 0 (
    echo ERROR: Failed to install react-router-dom
    pause
    exit /b 1
)
echo ✓ Dependencies installed
echo.

echo Step 2: Creating directories...
if not exist "src\config" mkdir "src\config"
if not exist "src\components" mkdir "src\components"
if not exist "src\components\auth" mkdir "src\components\auth"
if not exist "src\components\admin" mkdir "src\components\admin"
echo ✓ Directories created
echo.

echo ============================================
echo  Setup Complete!
echo ============================================
echo.
echo Next steps:
echo 1. Copy the component files from the session folder
echo 2. Update main.tsx
echo 3. Update App.tsx
echo.
echo See MANUAL_INSTALLATION_STEPS.txt for details
echo.
pause
