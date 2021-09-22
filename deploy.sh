#!/usr/bin/env sh

# abort on errors
set -env

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'www.geopest.co.za' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:geopestadmin/geopest.git main

cd -