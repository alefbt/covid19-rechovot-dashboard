#!/bin/bash

SCRIPTPATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"

cd "$SCRIPTPATH/.."

cd ./dashboard-src
quasar b -m pwa

cd ..
rm -rf ./dist
mkdir ./dist

rsync -av ./dashboard-src/dist/pwa/ ./dist/

cd "$SCRIPTPATH/.."
git add .
git commit -m "release"

git push
echo "done"