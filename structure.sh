#!/bin/bash

# Function to recursively list directory contents
list_dir() {
  local indent="$1"  # Indentation for tree structure
  local dir="$2"     # Directory to process

  # List of directories/files to ignore
  excluded=("node_modules" ".git" "dist")

  # Loop through all items in the directory
  for item in "$dir"/*; do
    # Skip if the item is in the excluded list
    if [[ " ${excluded[@]} " =~ " $(basename "$item") " ]]; then
      continue
    fi

    # If the item is a directory, recurse into it
    if [ -d "$item" ]; then
      echo "${indent}├── $(basename "$item")/"
      list_dir "  $indent" "$item"
    elif [ -f "$item" ]; then
      # If the item is a file, print it
      echo "${indent}├── $(basename "$item")"
    fi
  done
}

# Use the first argument or default to the current directory
start_dir="${1:-.}"

# Ensure the provided directory exists
if [ ! -d "$start_dir" ]; then
  echo "Error: Directory '$start_dir' does not exist."
  exit 1
fi

# Start listing from the specified directory
list_dir "" "$start_dir"