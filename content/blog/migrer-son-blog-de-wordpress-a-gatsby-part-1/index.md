---
title: Migrer son blog de Wordpress à Gatsby - Part 1
date: "2019-09-04"
description: "Les avantages de Gatsby par rapport à Wordpress"
---

## Passer de Wordpress à Gatsby

Cet article comportera deux parties, la première, pourquoi je suis passé de l'un à l'autre, la seconde plus technique, mettre en place gatsby.

J'ai depuis peu enfin décidé de me remettre à la rédaction d'article sur mon blog, que ce soit pour vous qui me lisez afin de vous aider à travers des tutos/articles ou de nouvelles connaissances, ou pour moi, histoire d'avoir un support de veille.

Le but premier était donc de me débarasser de Wordpress, jamais été fan mais à l'époque c'est ce qu'on m'avait appris en cours et ça faisait le travail ; il était simple de créer du contenu sans vraiment avoir à écrire du code.
Je me suis donc penché sur les différents SSG _(static site generator)_ du moment ; on a beaucoup le choix ([oui beaucoup](https://www.staticgen.com/)) mais dans ceux ayant le plus la côte on note :

- [Hugo](https://gohugo.io/) fait avec le langage [Goland](https://golang.org/) (Go pour les intimes) par Google
- [Jekill](https://jekyllrb.com/), vétéran parmis les SSG et un des plus utilisés, fait en ruby
- [Vuepress](https://vuepress.vuejs.org/) tout jeune lui, qui utilise le FW [Vue](https://vuejs.org/)

Au final, même si dans un premier Vuepress avait mes faveurs pour la simplicité de son framework, j'ai choisi [Gatsby](https://www.gatsbyjs.org/) parcqu'il est magnifique.

![The great Gatsby](./the_great_gatsby_.jpg)

### The great Gatsby

Avant de vous expliquer le pourquoi, quelques infos. Il est créé par **Kyle Mathews** avec une première itération publique en 2017 en tant que projet open-source. Son repo github compte plus de 37k étoiles et on peut lire sur son site de façon humble :

> Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps

Il se sert de React et GraphQL pour fonctionner. On peut l'utiliser pour créer plusieurs choses, un blog, un shop, un site vitrine, etc...

### Wordpress versus Gatsby

Premièrement, étant plus à l'aise avec le javascript, je préfère l'environement de Gatsby à celui de Wordpress et son php. Surtout qu'il permet de meilleur performance en terme de réactivité et d'affichage. Et oui [Jamy](https://www.youtube.com/watch?v=j_ETzVXZMu0), ici les pages de notre site sont maintenant statiques, la génération ne se fait plus au moment où l'utilisateur arrive sur la page comme sur WP. Avec Gatsby, toutes les pages html/css/js sont générées au moment de la compilation de notre build et le rendu est donc beaucoup plus rapide ([statique vs dynamique](https://noahveltman.com/static-dynamic/) eng). On arrive donc à un meilleur First Contentful Paint ([FCP](https://developers.google.com/web/tools/lighthouse/audits/first-contentful-paint?utm_source=lighthouse&utm_medium=unknown)) et Time to Interactive ([TTI](https://developers.google.com/web/tools/lighthouse/audits/time-to-interactive?utm_source=lighthouse&utm_medium=unknown)) parmis d'autre critères chers à google.

De plus, c'était pour moi l'occasion de me (re)mettre à React et raccrocher un wagon à mon éventail de compétences. Venant d'Angular, il y a des différences notables, notamment l'emploi du JSX ou du CSS-IN-JS.

Un autre point que je n'aime pas avec WP est son écosystème très renfermé et toutes ses fonctions spécifiques. Je le trouve trop lourd, son architecture de theme parent/enfant est un enfer lorsqu'on veut créer son propre thème avec son propre css custom. L'architecture de Gatsby orientée composant est beaucoup plus simple et logique.

Enfin niveau sécurité, même si on est encore loin du rythme de découverte de nouvelle [failles windows](https://www.zdnet.com/article/new-windows-hack-warning-patch-intel-systems-now-to-block-swapgsattack-exploits/) 10, Wordpress à son lot d'exploit liés à ses plugins, ses themes ou son main bundle. Avec gatsby, vu que tous nos fichier sont statiques et qu'il n'y a aucune base de donnée cela diminue grandement les potentiels failles.

À tout cela on peut ajouter d'autres choses sympa :

- [Plein de plugins](https://www.gatsbyjs.org/plugins/) tout prêt
- SPA (Single Page Application) qui suit le pattern [PRPL](https://www.gatsbyjs.org/docs/prpl-pattern/), aucun refresh n'est nécéssaire, les ressources necéssaires sont load une seule fois, les liens internes au site sont preload
- Scalable - Voyez gatsby comme un module auquel on peut rattacher plein de services différents, un cms pour par ex un client qui ne va pas mettre les mains dans le code façon WP, un shop, un service tiers de paiement, etc
- Pouvoir utiliser son contenu partout - En effet les articles sont de simples fichiers mardown .md dans un repo public git, je peux facilement les utiliser pour faire des slide par exemple, les partager de différentes manières ou encore si un jour je veux les migrer facilement pour une autre technologie que Gatsby c'est simple

En fait la seule condition de vouloir rester sur Wordpress est le fait qu'il ne requiert à aucun moment de mettre les mains dans le code là où Gatsby demande un minimum de connaissance du framework React ainsi que GraphQL qui est une manière différente de faire des requêtes API que celle qu'on retrouve la plupart du temps REST.

**Pour conclure il ne m'aura fallu qu'une après-midi pour setup mon nouveau blog et je vous explique la migration des articles WP, le setup du projet Gatsby ainsi que son hébergement via Netlify dans [la partie 2](/migrer-son-blog-de-wordpress-a-gatsby-part-2/) !**
