[CmdletBinding()]
param(
    [Parameter()][string]$appDir = '.'
)

# Phase 2: Local Development Server Setup
# This phase sets up and starts the Docusaurus development server:
# - Resolves the full path to the documentation directory
# - Creates a command script for the new PowerShell session
# - Installs dependencies using pnpm
# - Runs prebuild steps (if any)
# - Starts the development server with hot-reload
Write-Host "🚀 Phase 2: Starting Development Server..." -ForegroundColor Green

$appDirPath = Join-Path . $appDir -Resolve

# Create command script for the new PowerShell session
# This will run in the documentation directory
$command = @"
Write-Host "📁 Changing to App Directory: $appDirPath" -ForegroundColor Yellow
Set-Location '$appDirPath'

Write-Host "📦 Installing Dependencies with pnpm..." -ForegroundColor Yellow
& pnpm install

Write-Host "⚙️ Running Pre-Build Step..." -ForegroundColor Yellow
& pnpm run prebuild:prod

Write-Host "🌐 Starting Docusaurus Development Server..." -ForegroundColor Green
Write-Host "   📍 URL: http://localhost:3000" -ForegroundColor Cyan
Write-Host "   🔄 Hot-Reload Enabled for Live Editing" -ForegroundColor Cyan
& pnpm start
"@

# Start the development server in a new PowerShell window
# -NoExit keeps the window open after the server starts
# This allows you to see server logs and stop it with Ctrl+C
Write-Host "🪟 Opening New PowerShell Window for Development Server..." -ForegroundColor Magenta

Start-Process pwsh `
    -ArgumentList  `
    "-NoExit", `
    "-Command", $command

Write-Host "✅ Build Complete!" -ForegroundColor Green
Write-Host "   The Development Server Should Start Shortly in the New Window." -ForegroundColor White
Write-Host "   Visit http://localhost:3000 to View Your Application." -ForegroundColor White