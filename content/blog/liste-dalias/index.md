---
title: "Liste d'alias"
date: "2018-07-08"
---

#### **Petite liste des différents alias que j'utilise de façon régulière, j'en ajouterai au fil du temps.**

```text
// Shell

..=cd ..
...=cd ../../
....=cd ../../../
.....=cd ../../../../
clear=cls
history=cat "%CMDER_ROOT%\config\.history"
unalias=alias /d $1
vim=vim $*
cmder=cd /d "%CMDER_ROOT%"

// Php artisan via Laravel

pa=php artisan $*
pac=php artisan config:clear && php artisan cache:clear
par=php artisan route:list
pam=php artisan migrate
pamr=php artisan migrate:refresh
parseed=php artisan migrate:refresh --seed

// Git

gfa=git fetch --all --prune
gaa=git add .
gc= git commit -m $*
gp=git push origin HEAD
gs=git status

ngs= ng serve --port 8080
vs=code .

copyssh=type %userprofile%\.ssh\id_rsa.pub | clip
```
