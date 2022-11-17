#!/bin/bash

if [ ! -f ".env" ]; then
  cp .env.example .env
fi

npm install

filename="index.ts"

m1=$(md5sum "$filename")
i=0

while true; do

  # md5sum is computationally expensive, so check only once every 5 seconds
  sleep 5

  m2=$(md5sum "$filename")

  if [ "$m1" != "$m2" ] ; then
    m1=$m2
    i=$((i+1))
    echo "File has changed!"
    npx ts-node index.ts
  else
    echo "File not changed"
    echo "File already changed $i times"
  fi

done



