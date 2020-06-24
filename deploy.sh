#!/usr/bin/env sh


cd dist

git init
git add -A
git commit -m 'deploy'

git remote add origin https://gitee.com/arielwillow/gy_715.git

git push -f origin master