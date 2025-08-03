#!/usr/bin/env pwsh
[CmdletBinding()]
param(
    [Parameter()][string]$projectDir = $PSScriptRoot
)

# Handle badge configuration setup
$badgeConfigPath = Join-Path $projectDir "src\data\badge-config.json"
$badgeConfigExamplePath = Join-Path $projectDir "src\data\badge-config.json.example"

if (-not (Test-Path $badgeConfigPath) -and (Test-Path $badgeConfigExamplePath)) {
    Write-Host "⚙️ Setting up badge configuration..." -ForegroundColor Yellow
    try {
        Copy-Item -Path $badgeConfigExamplePath -Destination $badgeConfigPath -Force
        Write-Host "  ✓ Created badge-config.json from example" -ForegroundColor Green
    }
    catch {
        Write-Error "  ✗ Failed to copy badge configuration: $($_.Exception.Message)"
    }
}

# Handle any other .example files in the project
$exampleFiles = Get-ChildItem -Path $projectDir -Filter "*.example" -Recurse

if ($exampleFiles.Count -gt 0) {
    Write-Host "⚙️ Processing remaining .example files..." -ForegroundColor Yellow
    
    foreach ($exampleFile in $exampleFiles) {
        $targetPath = $exampleFile.FullName -replace '\.example$', ''
        $targetName = [System.IO.Path]::GetFileName($targetPath)
        
        if (-not (Test-Path $targetPath)) {
            try {
                Copy-Item -Path $exampleFile.FullName -Destination $targetPath -Force
                Write-Host "  ✓ Created $targetName from example" -ForegroundColor Green
                Remove-Item -Path $exampleFile.FullName -Force
                Write-Host "  ✓ Removed $($exampleFile.Name)" -ForegroundColor Green
            }
            catch {
                Write-Error "  ✗ Failed to process $($exampleFile.Name): $($_.Exception.Message)"
            }
        }
    }
} else {
    Write-Host "✓ No .example files found to process" -ForegroundColor Green
}

Write-Host "Template Setup Completed!" -ForegroundColor Green