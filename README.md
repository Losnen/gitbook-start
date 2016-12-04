#Paquete Gitbook Start

##¿Qué hace el módulo?

* Crea una serie de directorios y ficheros que ayudan al usuario a desplegar un libro en gitbook.
* Además existe un plugin que te ayuda a hacer el despliegue en iaas.ull.es y el Heroku.
* En el caso de que usted quiera incorporar su propio plugin debería hacerlo con el siguiente formato:

```
gitbook-start-nombre-del-plugin-aitor-joshua-samuel
```

Y deberá de contar con dos métodos:

1. El primero un método intialize que prepare el directorio para lo que usted desee hacer con su plugin.
2. El segundo un método deploy que añada una tarea de gulp para realizar la tarea que usted requiera con su plugin.

###Lista de comandos:

#####Instalación:

```shell
npm install -g gitbook-start-aitor-joshua-samuel
```

#####Comandos:

```shell
gitbook-start -h --> Opción de ayuda
gitbook-start -n [NOMBRE PROYECTO] --> Despliega una serie de directorios
gitbook-start -d [PLUGIN] -->  Te añade el plugin para el despliegue del libro.
gitbook-start -u [NOMBRE REPO] -> Crea tu repositorio en github.
gulp deploy-github --> Pushea tu libro a github.
gulp deploy-gh-pages --> Despliega tu libro en gh-pages.
gulp serve ->
gulp build ->
```

#####Ejemplo:

```shell

linux@user: gitbook-start -n mi-libro -> Despliega directorios para mi-libro
Desplegada estructura de directorios
linux@user: gitbook-start -d mi-plugin  -> Despliega el plugin mi-plugin
linux@user: gitbook-start -u mi-repo -> Crea el repo y el token para mi-repo
```

#####Plugins:


* [Enlace a NPM del plugin heroku](https://www.npmjs.com/package/gitbook-start-heroku-aitor-joshua-samuel)
* [Enlace a NPM del plugin iaas](https://www.npmjs.com/package/gitbook-start-iaas-ull-es-aitor-joshua-samuel)

##Autores

1. [Aitor Bernal Falcón](http://chinegua.github.io/)
2. [Samuel Ramos Barroso](http://losnen.github.io/)
3. [Joshua Pérez García](http://joshuape.github.io/)


##Repositorio

* [Repositorio de entrega del main](https://github.com/ULL-ESIT-SYTW-1617/crear-repositorio-en-github-aitor-joshua-samuel)
* [Repositorio de entrega del plugin heroku](https://github.com/ULL-ESIT-SYTW-1617/gitbook-start-heroku-aitor-joshua-samuel)
* [Repositorio de entrega del plugin iaas](https://github.com/ULL-ESIT-SYTW-1617/gitbook-start-iaas-ull-es-aitor-joshua-samuel)
* [Enlace a NPM del main](https://www.npmjs.com/package/gitbook-start-aitor-joshua-samuel)
* [Enlace a NPM del plugin heroku](https://www.npmjs.com/package/gitbook-start-heroku-aitor-joshua-samuel)
* [Enlace a NPM del plugin iaas](https://www.npmjs.com/package/gitbook-start-iaas-ull-es-aitor-joshua-samuel)

##Enlaces de interés
* [La práctica en gitbook](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/practicas/practicaplugin.html)
