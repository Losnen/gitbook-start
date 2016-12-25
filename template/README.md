# Manual del paquete gitbook-start

* [Enlace a NPM del paquete](https://www.npmjs.com/package/gitbook-start)

## Comandos:

```gitbook-start -h  Opción de ayuda```

```gitbook-start -n [Nombre del Proyecto] -a [Autor] -e [Email]``` Despliega un directorio con todo lo necesario para comenzar a escribir el libro

```gitbook-start -d [PLUGIN]``` Te añade un servidor express para desplegar tu libro

```gitbook-start -i``` Crea el token de github

```gitbook-start -r [NOMBRE REPO]``` Crea tu repositorio en github

## Tareas

```gulp deploy-github || npm run deploy``` Sube los archivos al repo de gitub

```gulp deploy-gh-pages || npm run gh-pages``` Sube la carpeta de los HTML a la rama gh-pages

```gulp serve || npm run serve``` Crea un servidor para ver el libro

```gulp build || npm run build``` Genera los HTML del libro.
