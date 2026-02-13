@echo off
cd %~dp0

REM Copy data files to cities\data\TLV
set "TARGET=%~dp0..\..\cities\data\TLV"
echo [TLV Mod] Copying data files to cities\data\TLV...
if not exist "%TARGET%" mkdir "%TARGET%"
xcopy /E /Y "%~dp0data\TLV\*" "%TARGET%\" >nul
echo [TLV Mod] Data files copied successfully.

REM Start tile server
echo [TLV Mod] Starting tile server on port 8080...
pmtiles.exe serve . --port 8080 --cors=*