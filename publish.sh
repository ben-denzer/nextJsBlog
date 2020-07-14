#!/bin/bash

npm=`which npm`
pm2=`which pm2`
git=`which git`
APP_DIR=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )

echo "### STARTING PUBLISH.SH"

echo '### ENTER APP DIRECTORY - cd "$APP_DIR"'
cd "$APP_DIR"

echo "### PULL LATEST CHANGES - git pull upstream master"
$git --git-dir=${APP_DIR}/.git pull upstream master

echo "### INSTALL DEPENDENCIES - npm install"
$npm install
if [ $? -ne 0 ]
then
   echo "###################################################"
   echo "#####   NPM INSTALL FAILED - NOT PUBLISHING   #####"
   echo "###################################################"
   exit
fi

echo "### BUILD APPLICATION - npm run build"
$npm run build
if [ $? -ne 0 ]
then
   echo "#############################################"
   echo "#####   BUILD FAILED - NOT PUBLISHING   #####"
   echo "#############################################"
   exit
fi

echo "### START/RESTART APP SERVER - pm2 startOrReload blogPm2.json"
$pm2 startOrReload blogPm2.json

echo "### RESET PM2 COUNTER - pm2 reset blog"
$pm2 reset blog
