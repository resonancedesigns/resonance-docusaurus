
#!/usr/bin/env pwsh
<#
.SYNOPSIS
    Copies documentation and configuration files from a parent project directory into the docs-ui workspace, with fallback to .example files for config.

.DESCRIPTION
    This script is intended to set up the docs-ui workspace for Docusaurus or similar documentation builds. It copies the entire documentation directory (by default, 'documentation') from the parent project into the docs-ui directory, preserving all subdirectories and files. It also ensures that required configuration files (sidebars.ts, docusaurus.config.ts) exist, copying from their .example versions if needed.

    - If a config file does not exist in docs-ui, but a .example version does, the .example is copied and then removed.
    - The script is parameterized for project and documentation directory locations.

.PARAMETER projectDirectory
    The root directory of the project. Defaults to the parent of the docs-ui directory.

.PARAMETER documentationDirectory
    The name of the documentation directory in the project root to copy. Defaults to 'documentation'.

.EXAMPLE
    ./setup.ps1
    # Copies ../documentation into ./docs-ui, and ensures config files exist.

.EXAMPLE
    ./setup.ps1 -projectDirectory "C:\MyProject" -documentationDirectory "docs"
    # Copies C:\MyProject\docs into ./docs-ui
#>
[CmdletBinding()]
param(
    [Parameter()][string]$projectDirectory = $(Split-Path $PSScriptRoot -Parent),
    [Parameter()][string]$docsDirectory = 'documentation'
)

# Files to check for .example fallback
$filesWithExample = @(
    "sidebars.ts",
    "docusaurus.config.ts"
)

$docsUIDir = $PSScriptRoot

Write-Host "Project Dir: $projectDirectory" -ForegroundColor Green
Write-Host "Docs Dir: $docsDirectory" -ForegroundColor Green
Write-Host "Docs UI Dir: $docsUIDir" -ForegroundColor Green
Write-Host ""

function Copy-Directory {
    param(
        [string]$sourceDir,
        [string]$destinationDir
    )

    if (Test-Path $sourceDir -PathType Container) {
        Write-Host "Processing: $sourceDir -> $destinationDir" -ForegroundColor Yellow

        try {
            # Recursively copy all files and subdirectories from $sourceDir to $destinationDir,
            # preserving structure, only overwriting existing files
            Get-ChildItem -Path $sourceDir -Recurse | ForEach-Object {
                if (-not $_.PSIsContainer) {
                    $relativePath = $_.FullName.Substring($sourceDir.Length).TrimStart('\','/')
                    $destPath = Join-Path $destinationDir $relativePath
                    $destDir = Split-Path $destPath -Parent

                    if (-not (Test-Path $destDir)) {
                        New-Item -ItemType Directory -Path $destDir -Force | Out-Null
                    }

                    Copy-Item -Path $_.FullName -Destination $destPath -Force
                    Write-Host "  ✓ Copied: $relativePath" -ForegroundColor Green
                }
            }
        }
        catch {
            Write-Error ("  ✗ Failed to Copy {0}: {1}" -f $sourceDir, $_.Exception.Message)
        }

        Write-Host ""
    }
    else {
        Write-Host "$sourceDir not Found...Skipping." -ForegroundColor Yellow
        Write-Host ""
    }
}


Copy-Directory `
    -SourceDir (Join-Path $projectDirectory $docsDirectory) `
    -DestinationDir $docsUIDir

# Handle files with .example fallback
foreach ($file in $filesWithExample) {
    Write-Host "Processing: $file" -ForegroundColor Yellow

    $localPath = Join-Path $docsUIDir $file
    $localExamplePath = "$localPath.example"

    if (-not (Test-Path $localPath)) {
        try {
            Copy-Item -Path $localExamplePath -Destination $localPath -Force

            Write-Host "  ✓ Copied from .example" -ForegroundColor Green
            
            Remove-Item -Path $localExamplePath -Force
        }
        catch {
            Write-Error "  ✗ Failed to Copy from .example: $($_.Exception.Message)"
        }
    }

    if (Test-Path $localExamplePath) {
        try {
            Remove-Item -Path $localExamplePath -Force

            Write-Host "  ✓ Removed .example File" -ForegroundColor Green
        }
        catch {
            Write-Error "  ✗ Failed to Remove .example File: $($_.Exception.Message)"
        }
    }
}

Write-Host "Setup Completed!" -ForegroundColor Green