#!/bin/bash

IFS=$'\n';
function log_and_exit() {
  echo "$1 not available";
  exit 1;
}

##### MongoDB  #####
curl --connect-timeout 10 --retry 10 --retry-max-time 60 --silent --show-error localhost:27017 | grep 'It looks like you are trying to access MongoDB over HTTP on the native driver port' && echo "Mongo up and running" || log_and_exit "MongoDB"

##### RabbitMQ #####
curl --connect-timeout 10 --retry 10 --retry-max-time 60 --silent --show-error -kL http://localhost/15672 && echo "RabbitMQ up and running" || log_and_exit "RabbitMQ"

#####   TMDB   #####
curl --connect-timeout 10 --retry 10 --retry-max-time 60 --silent --show-error -kL http://localhost:8020/status && echo "TMDB up and running" || log_and_exit "TMDB"

#####   Webapp   #####
curl --connect-timeout 10 --retry 10 --retry-max-time 60 --silent --show-error -kL https://localhost && echo "Webapp up and running" || log_and_exit "Webapp"

