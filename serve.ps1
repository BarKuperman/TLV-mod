# Copy data files to cities\data\TLV
$modDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$target = Join-Path $modDir "..\..\cities\data\TLV"

Write-Host "[TLV Mod] Copying data files to cities\data\TLV..."
New-Item -ItemType Directory -Path $target -Force | Out-Null
Copy-Item -Path (Join-Path $modDir "data\TLV\*") -Destination $target -Force
Write-Host "[TLV Mod] Data files copied successfully."

# Start tile server
Write-Host "[TLV Mod] Starting tile server on port 8080..."
& (Join-Path $modDir "pmtiles.exe") serve $modDir --port 8080 --cors=*