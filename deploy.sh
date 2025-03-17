#!/bin/bash
USERNAME=$1
TOKEN=$2
cd /srv/bawaslu-deployment-cicd/frontend/

echo "Login Docker Registry"
docker login -u $USERNAME -p $TOKEN docker.io
echo "Pulling image"
docker compose pull
echo "Start Container"
docker compose up --build -d
sleep 5s
echo "cleanup unused image"
docker image prune -af