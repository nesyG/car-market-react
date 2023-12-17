#!/bin/bash

ENV_FILE_PATH="../config/.env"

# Check if the .env file exists
if [ -f "$ENV_FILE_PATH" ]; then
    # Source (or include) the .env file
    source "$ENV_FILE_PATH"
else
    echo "Error: .env file not found!"
fi

# Import cars data
mongoimport --uri "$MONGO_URI" --collection cars --file data/carsData.json --jsonArray

# Import users data
mongoimport --uri "$MONGO_URI" --collection users --file data/usersData.json --jsonArray

# Import listings data
mongoimport --uri "$MONGO_URI" --collection listings --file data/listingsData.json --jsonArray