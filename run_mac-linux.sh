#!/bin/bash
# get the current directory
SCRIPT_DIR="$(pwd)"
TARGET="$SCRIPT_DIR/../../cities/data/TLV"
echo "SCRIPT_DIR: $SCRIPT_DIR"
echo "TARGET: $TARGET"

# Copy data files to cities/data/TLV
echo "[TLV Mod] Copying data files to cities\data\TLV..."
mkdir -p "$TARGET"
cp -f "$SCRIPT_DIR/data/TLV/"* "$TARGET/"
echo "[TLV Mod] Data files copied successfully."

# Start tile server
echo "[TLV Mod] Starting tile server on port 8080..."
"$SCRIPT_DIR/pmtiles" serve "$SCRIPT_DIR" --port 8080 --cors=*