#!/usr/bin/env sh


cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:arielwillow/715_Things_GY.git master:master
