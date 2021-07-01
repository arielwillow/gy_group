#!/usr/bin/env sh


cd dist

git init
git add -A
git commit -m 'deploy'

git remote add origin https://gitee.com/arielwillow/gy_group.git

git remote set-url --add origin git@github.com:arielwillow/gy_group.git


git push -f origin master:master