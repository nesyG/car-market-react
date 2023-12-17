#!/bin/bash

ENV_FILE_PATH="../config/.env"

# Check if the .env file exists
if [ -f "$ENV_FILE_PATH" ]; then
    # Source (or include) the .env file
    source "$ENV_FILE_PATH"
else
    echo "Error: .env file not found!"
fi

# Delete all documents from the collections
mongo "$MONGO_URI" --eval "db.cars.deleteMany({});"
mongo "$MONGO_URI" --eval "db.listings.deleteMany({});"
mongo "$MONGO_URI" --eval "db.users.deleteMany({});"

echo "All documents deleted from collections."