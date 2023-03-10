# Proyecto React-Node

![Alt Text](https://postimg.cc/34Q9Fw6x/20cb83d6)

El proyecto se divide en 2 carpetas: `client` y `server`.

## Cliente (`client`)

En `client` se encuentra creado el frontend del sistema creado en el framework React. Este fue creado mediante el snippet `create-react-app` por motivos de agilidad.

Se generaron 7 componentes:

- `AuthContext`: componente funcional que se ocupa de configurar el estado de logeo del usuario.
- `Credits`: componente funcional que se ocupa de renderizar los contribuyentes del código.
- `File`: componente funcional que se ocupa de leer y procesar la data proveniente del browser y del servidor. Ademas, renderiza por pantalla algunos insights basicos.
- `Footer`: componente funcional que se ocupa de renderizar el footer de la aplicacion.
- `Header`: componente funcional que se ocupa de renderizar el navbar de la aplicacion y routear el acceso a los demas componentes de la aplicacion.
- `Home`: componente funcional que se ocupa de dar la bienvenida al usuario y explicar la funcionalidad del sistema.
- `Login`: componente funcional que se ocupa de logearse con un usuario y contrasena en el caso que sea necesario.

Desde el cliente, se genera el login con el servidor entregándole un password y contraseña. Para la creación de nuevos usuarios, se debe acceder directamente al endpoint de registro (link a apartado `/register -> POST`).

Además, desde el cliente se encuentran configurados los siguientes endpoints:

- `/`: para dar la bienvenida a la aplicación.
- `/login`: para logearse con usuario y contraseña.
- `/files`: para...
- `/credits`

## Servidor (`server`)

En `server` se encuentra creado el backend del sistema creado en el framework Express. Se utiliza como gestor de base de datos relacional MySQL. Por motivos de agilidad se crean 2 archivos: `index.js` que contiene la inicialización del servidor, las rutas y middlewares, y `database.js` que contiene la configuración de las credenciales y host de la base de datos.

![Alt Text](https://postimg.cc/WtnS0T7s/2273e4d0)

Se crean 5 endpoints:

- `/`: `GET` para verificar el estado del servidor.
- `/register`: `POST` para registrar un usuario en la base de datos. Recibe un email y un password. Es importante destacar que la contraseña se hashea utilizando bcrypt, de manera de almacenar la contraseña del usuario cifrada.
- `/login`: `POST` para logear a un usuario. Recibe un email y un password cifrado. Utiliza bcrypt para descifrar asincrónicamente y comparar si la contraseña del usuario es correcta.
- `/login`: `GET` para obtener el estado de logeo del usuario que está realizando la petición.
- `/data`: `GET` para obtener el archivo `.csv` desde la carpeta `/data` (solo es accesible mientras el usuario se encuentra logeado).

### Sesión de usuario

No se configura una duración en específico de la sesión de usuario. Si se configura la creación de una cookie de verificación de autenticación, por lo cual, cuando el navegador se cierra, la cookie desaparece, lo que se traduce que la sesión no podrá ser accesada.

La configuración de la sesión no especifica una duración explícita, lo que significa que la sesión del usuario se mantendrá hasta que se destruya explícitamente o hasta que el servidor se reinicie.
Por defecto, la opción `resave` se establece en `true`, lo que significa que la sesión se guardará en cada solicitud, incluso si no se ha modificado. La opción saveUninitialized se establece en false, lo que significa que la sesión no se guardará para un nuevo usuario hasta que se le agregue una propiedad. Estas opciones pueden afectar el rendimiento del servidor, pero no afectan la duración de la sesión.
También es importante señalar que se utiliza el middleware `cookie-parser`, que es responsable de analizar el encabezado de las cookies y de poblar req.cookies con un objeto claveado por los nombres de las cookies. El middleware `express-session` utiliza este objeto para determinar la sesión del usuario. La duración de la cookie de sesión se determina mediante la propiedad expires de la cookie, que se establece por el servidor cuando se crea la sesión. Sin embargo, el middleware `express-session` maneja esto automáticamente y el valor predeterminado de la propiedad expires es null, lo que significa que la cookie será una cookie de sesión que se eliminará cuando el usuario cierre el navegador.

### Correr la aplicacion en su maquina local

Para correr la aplicacion en su maquina local, debe tener instalado mysql. Ademas, debe haber creado una base de datos y dentro de ella una tabla users. Para la creacion de la tabla, dentro de la carpeta server puede encontrar una plantilla de creacion de la tabla users en el archivo `QUERY.sql`

Para la configuracion de la base de datos, debe ingresar al archivo `database.js` y configurar el host, usuario, contrasena y nombre de la base de datos a accesar.

Luego, debe ingresar a server y ejecutar `npm install` y luego ejecutar el archivo servidor mediante `node index.js`
```
cd server
npm install
node index.js
```

Si esta todo bien configurado, desde la linea de comandos se deberia poder ver lo siguiente:
```
app running in 8000
DB is Connected
```

Para correr el cliente, debe ingresar a la carpeta `client` y ejecutar `npm install` y luego `npm start`.

Si esta todo bien configurado, se deberia desplegar el navegador automaticamente.

Para desplegar la aplicacion cliente en su modalidad de produccion, debe ejecutar `npm run build`, luego servir la aplicacion mediante el servidor node mediante `npm install -g serve` y `luego serve -s`
```
cd client
npm run build
npm install -g serve
serve -s
```

A continuacion se muestra un diagrama de casos de uso del proyecto.
![Alt_text](https://postimg.cc/kDnvJLPz/f43f6a63)


### Correr la aplicacion en docker *Work in progress*

Se crean dos archivos archivos Dockerfile. Uno dentro de la carpeta `client` y otro dentro de la carpeta `server`.
Luego, dentro en la carpeta raiz del proyecto se crea el archivo `docker-compose.yml` el cual contiene las dependecias y configuraciones del proyecto para ser ejecutado en docker.
No se se ha podido validar la funcionalidad de los contenedores creados por tiempo. 
