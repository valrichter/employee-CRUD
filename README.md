# Creacion de un CRUD de empleados con React <img alt="react" width="25" src="https://cdn.simpleicons.org/react/61DAFB" /> y .NET <img alt="net" width="25" src="https://devicon-website.vercel.app/api/dotnetcore/plain.svg?color=%23623697"></img>
Desarrollé una aplicación CRUD (Crear, Leer, Actualizar, Eliminar) para la gestión de empleados, utilizando React en el frontend y .NET en el backend. Cada empleado en la aplicación tiene los atributos de nombre, email y salario.  
React se encarga de la interfaz de usuario, permitiendo a los usuarios interactuar con la aplicación, mientras que .NET maneja la lógica del servidor y la persistencia de datos, asegurando que las operaciones CRUD se realicen de manera eficiente y segura.  
Para la base de datos, utilicé PostgreSQL, que fue desplegada en un contenedor Docker, lo que facilitó la configuración y el manejo de la misma.

## Como inicializar el proyecto

1. El backend en .NET se ejecuta a traves de el IDE Visual Studio (temporal)
2. El frontend se ejecuta con `npm run dev` (temporal)
3. Se debe descargar la imagen de docker de PostgreSQL y ejecutar la query para crea la tabla (temporal)

## Tecnologias usadas

- React
- .NET: Entity Framework & ASP .NET
- PostgreSQL
- Docker

### Query para crear la tabla de `employee`

```SQL
CREATE TABLE "employee" (
  "id" serial PRIMARY KEY,
  "name" varchar(50) NOT NULL,
  "email" varchar(50) UNIQUE NOT NULL,
  "salary" int NOT NULL DEFAULT 0,
  "created_at" timestamptz NOT NULL DEFAULT (now ())
);
```

![Screenshot_1](https://github.com/user-attachments/assets/19810074-bcef-4434-9a0c-c21fdca302ad)

### Imagen de la UI

<img src="https://github.com/user-attachments/assets/9775b4e3-4f47-477d-90af-1f8d09fc09f0" alt="Texto alternativo" width="600"/>

### Arquitectura planeada

![employee CRUD](https://github.com/user-attachments/assets/15bfb42f-bc51-403a-bc42-c9442521bb2d)

