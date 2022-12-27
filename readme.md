### Instrucciones para levantar el proyecto

### Clonar repo

Ejecutar en la terminal `git@github.com:dondarrion91/inmobiliaria-back.git`

### Instalar dependencias

```
npm install
```

### Definir variables de entorno

1.  En la carpeta raiz del proyecto crear un archivo llamado `.env`
2.  En dicho archivo agregar el siguiente contenido:

```
DB_HOSTNAME=db
DB_PORT=3306
DB_DATABASE=db
DB_USERNAME=julian
DB_PASSWORD=password
NODE_ENV=development
```

### Instalar docker

-   https://docs.docker.com/docker-for-windows/install/

### Levantar contenedor de docker con la api y la imagen de MySql

```
npm run docker
```

## Instrucciones para hacer cambios al proyecto

### Crear un issue

1. Ir a https://github.com/dondarrion91/inmobiliaria-back/issues
2. Crear nuevo issue.
3. Agregar `titulo` y breve `descripción` sobre lo que se va a trabajar.
4. `Asignarse` el issue.
5. Agregar `label` descriptivo.
6. `Submit` issue.
7. Una vez creado el issue ir a terminal y moverse a la rama develop con el comando `git checkout develop`
8. Pullear nuevos cambios de la rama develop `git pull origin develop`
9. Crear nueva rama en la que se va a trabajar:

```
git checkout -b label#num
```

donde `label` es el label asignado al issue y `num` el numero de issue que asigna github, Por ejemplo: `git checkout -b documentation#6`
![Numero de issue](./public/issue.png)

### Pushear cambios y realizar pull request

1. Una vez terminado los cambios agregar archivos con `git add ./ruta_del_archivo_a_agregar`
2. Hacer `git commit -m "Mensaje del commit"`
3. Siempre antes de pushear ejecutar `git pull origin develop`
4. En caso de haber conflictos al pullear arreglarlos y commitear
5. Pushear al branch que se esta trabajando, nunca a `develop` o a `master`.
6. `git push origin label#num`
7. Ir a https://github.com/dondarrion91/inmobiliaria-back/pulls
8. Crear nuevo pull request.
9. En compare seleccionar la rama que se pusheo anteriormente para compararla con develop
   ![pull request](./public/pullrequest.png)
10. Revisar cambios hechos y si esta todo ok `Crear pull request`
11. Agregar `titulo`.
12. En descripción escribir `Closes #numero-de-issue` para relacionar el issue con el pull request asi al mergear se cierra automaticamente
13. `Crear pull request`

# Changelog

-   ### **29/05/2021** **(0.1.1)**

    -   **Users** Se agrega modelo de usuarios.

    -   **Tests** Se agregan nuevas dependencias para testing.

-   ### **06/06/2021** **(0.2.0)**

    -   **i18n** Se agrega i18n para mensajes de error.

    -   **Users** Se agrega autenticación de usuarios.

    -   **Tests** Se agregan tests de autenticación de usuarios (TODO).
