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
RELEASE="$SITE_DIR/releases/$COMMIT_HASH"
PRODUCTION_DEPLOY_DIR="$SITE_DIR/production"
declare -a PORTS=("3000" "3001" "3002")

# Checking if the release exists in the release directory.
if [ ! -d "$RELEASE" ]; then
    echo "Release not found in the release directory."
    exit 1
fi

# Keeping the previous release in reference. 
if [ -L "$PRODUCTION_DEPLOY_DIR" ]; then
    PREVIOUS_RELEASE=$(readlink $PRODUCTION_DEPLOY_DIR)
    echo "Found previous release ${PREVIOUS_RELEASE} in the production, saving it for later."
else
    echo "No previous release found in the production, skipping."
    PREVIOUS_RELEASE=""
fi


rollback() {
    if [ -n "$PREVIOUS_RELEASE" ]; then
        echo "Rolling back to previous release ${PREVIOUS_RELEASE}."
        ln -sfn $PREVIOUS_RELEASE $PRODUCTION_DEPLOY_DIR
    else
        echo "No previous release found, skipping rollback."
    fi

    # Restarting After waiting for some time.
    sleep 10

    for port in "${PORTS[@]}"; do
        sudo systemctl restart "portfolio@$port"
    done

    echo "Rollback completed."
}

# Promoting the current release to production. 
ln -sf $RELEASE $SITE_DIR/production

WAIT_TIME=5
restart_services() {
    local port=$1
    local SERVICE_NAME="portfolio@$port"

    echo "Restarting ${SERVICE_NAME} service."
    if ! sudo systemctl restart "$SERVICE_NAME"; then
        echo "Failed to restart ${SERVICE_NAME} service."

        # Rolling back 
        rollback
        exit 1
    fi

    echo "Waiting for ${SERVICE_NAME} service to start."
    sleep $WAIT_TIME

    if ! systemctl is-active --quiet "$SERVICE_NAME"; then
        echo "Failed to start ${SERVICE_NAME} service."

        # Rolling back 
        rollback
        exit 1
    fi

    echo "Restarted ${SERVICE_NAME} service."
}

for port in "${PORTS[@]}"; do
    restart_services $port
done

echo "Deployment completed successfully."
