#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build


# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
printf "run 15\n"
git init
git checkout -B main
git add -A
git commit -m 'deploy'

printf "run 21\n"
# if you are deploying to https://BarretHexschool.github.io
 git push -f origin main   
# git push -f git@github.com:BarretHexschool/BarretHexschool.github.io.git main

printf "run 26\n"
# navigate into the build output directory
cd dist
dir
printf "run 30\n"
# if you are deploying to https://BarretHexschool.github.io/vuetraining_w6
git push -f git@github.com:BarretHexschool/VueTraining_w6.git main:gh-pages

printf "run 34\n"
cd -