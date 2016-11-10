#Práctica: Creación de un Paquete NPM

##¿Qué hace el módulo?

Crea una serie de directorios y ficheros que ayudan al usuario a desplegar un libro en gitbook.

Además existe un plugin que te ayuda a hacer el despliegue en iaas.ull.es y el Heroku.

Lista de comandos:

Instalación:

```shell
npm install -g gitbook-start-aitor-joshua-samuel
```

Comandos:

```shell
gitbook-start -h --> Opción de ayuda
gitbook-start -n [NOMBRE PROYECTO] --> Despliega una serie de directorios
gitbook-start -d [PLUGIN] -->  Te añade el plugin para el despliegue del libro, links de plugin recomendados en el apartado repositorio.
gitbook-stard -u [NOMBRE REPO] -> Crea tu repositorio en github.
gulp deploy-github --> despliega tu libro en github con una tarea de gulp
gulp deploy --> Despliega tu libro en la rama gh-pages
```

##Autores

1. [Aitor Bernal Falcón](http://chinegua.github.io/)
2. [Samuel Ramos Barroso](http://losnen.github.io/)
3. [Joshua Pérez García](http://joshuape.github.io/)


##Repositorio

* [Repositorio de entrega del main](https://github.com/ULL-ESIT-SYTW-1617/practica-plugins-heroku-aitor-joshua-samuel)
* [Repositorio de entrega del plugin](https://github.com/ULL-ESIT-SYTW-1617/gitbook-start-heroku-aitor-joshua-samuel)
* [Enlace a NPM del main](https://www.npmjs.com/package/gitbook-start-aitor-joshua-samuel)
* [Enlace a NPM del plugin](https://www.npmjs.com/package/gitbook-start-heroku-aitor-joshua-samuel)

##Enlaces de interés
* [La práctica en gitbook](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/practicas/practicaplugin.html)
