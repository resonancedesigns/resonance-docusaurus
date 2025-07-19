#!/usr/bin/env pwsh

<#
.SYNOPSIS
    Copies configuration files from parent directory to local workspace with fallback to .example files.

.DESCRIPTION
    This script defines an array of files and directories to copy. For each file, it checks 
    the parent directory. If the file exists in the parent, it copies it locally, overwriting 
    the local one. If no files exist in the parent and a local .example exists, it uses that.

.EXAMPLE
    .\setup.ps1
#>

[CmdletBinding()]
param()

# Define the array of files to copy
$directoriesToCopy = @(
    "docs",
    "docs-ui.customizations"
)

# Files to check for .example fallback
$filesWithExample = @(
    "sidebars.ts",
    "docusaurus.config.ts"
)

# Get the current directory (workspace root)
$workspaceRoot = Get-Location
$parentDirectory = Split-Path $workspaceRoot -Parent
$parentDocsPath = Join-Path $parentDirectory "docs"

Write-Host "Workspace Root: $workspaceRoot" -ForegroundColor Green
Write-Host "Docs Directory: $parentDocsPath" -ForegroundColor Green
Write-Host ""

function Copy-Directory {
    param(
        [string]$directoryName
    )
    $parentPath = Join-Path $parentDirectory $directoryName

    if (Test-Path $parentPath -PathType Container) {
        Write-Host "Processing: $directoryName Directory" -ForegroundColor Yellow
        Write-Host "  Found: $parentPath" -ForegroundColor Green

        try {
            # Recursively copy all files and subdirectories from parent/$DirectoryName to local,
            # preserving structure, only overwriting existing files
            Get-ChildItem -Path $parentPath -Recurse | ForEach-Object {
                if (-not $_.PSIsContainer) {
                    $relativePath = $_.FullName.Substring($parentPath.Length).TrimStart('\','/')
                    $destPath = Join-Path $workspaceRoot $relativePath
                    $destDir = Split-Path $destPath -Parent

                    if (!(Test-Path $destDir)) {
                        New-Item -ItemType Directory -Path $destDir -Force | Out-Null
                    }

                    Copy-Item -Path $_.FullName -Destination $destPath -Force
                    Write-Host "  ✓ Copied: $relativePath" -ForegroundColor Green
                }
            }
        }
        catch {
            Write-Error "  ✗ Failed to Copy $DirectoryName Directory: $($_.Exception.Message)"
        }

        Write-Host ""
    }
    else {
        Write-Host "$DirectoryName Directory not Found...Skipping." -ForegroundColor Yellow
        Write-Host ""
    }
}

# Iterate over all directories to copy
foreach ($dir in $directoriesToCopy) {
    Copy-Directory -DirectoryName $dir
}

# Handle files with .example fallback
foreach ($file in $filesWithExample) {
    Write-Host "Processing: $file" -ForegroundColor Yellow

    $localPath = Join-Path $workspaceRoot $file
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
}

Write-Host "Setup Completed!" -ForegroundColor Green