#!/usr/bin/env bash
sudo apt-get update
curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install npm grunt-cli -g
