#!/bin/bash

npm=`which npm`
pm2=`which pm2`
git=`which git`
parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )

cd "$parent_path"
$git pull upstream master
$npm install
$npm run build
$pm2 startOrReload blogPm2.json
