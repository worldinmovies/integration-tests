#!/bin/bash

IFS=$'\n';
function log_and_exit() {
  echo "$1 not available";
  exit 1;
}

##### MongoDB  #####
curl --connect-timeout 10 --retry 10 --retry-max-time 60 --silent --show-error localhost:27017 | grep 'It looks like you are trying to access MongoDB over HTTP on the native driver port' && echo "Mongo up and running" || log_and_exit "MongoDB"

#####  Redis   #####
while ! nc -z localhost 6379 ; do echo "Redis not yet up"; sleep 1 ; done
echo "Redis up and running";

##### RabbitMQ #####
while ! nc -z localhost 5672 ; do echo "RabbitMQ not yet up"; sleep 1 ; done
echo "RabbitMQ up and running";

#####   TMDB   #####
curl --connect-timeout 10 --retry 10 --retry-max-time 60 --silent --show-error -L https://tmdb.localhost/status && echo "TMDB up and running" || log_and_exit "TMDB"

#####   Webapp   #####
curl --connect-timeout 10 --retry 10 --retry-max-time 60 --silent --show-error -L https://webapp.localhost && echo "Webapp up and running" || log_and_exit "Webapp"

