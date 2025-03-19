#!/bin/bash

# Exit on Error
set -e

# Check if the the commit hash is provided or not. 
if [ -z "$1" ]; then
    echo "No commit hash provided."
    exit 1
fi

# Checking if the release directory is provided or not.
if [ -z "$2" ]; then
    echo "No release directory provided."
    exit 1
fi

COMMIT_HASH=$1
SITE_DIR=$2
RELEASE_DIR="$SITE_DIR/releases/$COMMIT_HASH"
SERVICE_NAME="portfolio"

# Checking if the release exists in the release directory.
if [ ! -d "$RELEASE_DIR" ]; then
    echo "Release not found in the release directory."
    exit 1
fi

# Promoting the current release to production. 
ln -sf $RELEASE_DIR $SITE_DIR/production

# Restarting the release.
echo "Restarting ${SERVICE_NAME} service."
sudo systemctl restart ${SERVICE_NAME}
echo "Restarted ${SERVICE_NAME} service."

echo "Deployment completed successfully."
