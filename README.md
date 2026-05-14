# ManuelAparicioDoeste_TrabajoFinalMarcas
Trabajo final marcas
# API El Baifo - Quevedo

Este proyecto es una API REST creada con Node.js y Express que simula una base de datos del álbum El Baifo del artista Quevedo.

Permite consultar, crear, actualizar y eliminar canciones, así como gestionar productores y realizar diferentes operaciones de filtrado y estadísticas.

## Tecnologías utilizadas

- Node.js
- Express
- JavaScript
- JSON (datos en memoria)

## Estructura del proyecto

El proyecto está formado principalmente por un archivo:

- index.js → contiene toda la API, rutas y datos.

## Cómo ejecutar el proyecto

1. Instala Node.js si no lo tienes instalado.
2. Abre una terminal en la carpeta del proyecto.
3. Instala Express:

npm install express

4. Ejecuta el servidor:

node index.js

5. El servidor se iniciará en:

http://localhost:7777

## Endpoints principales

### Canciones

Obtener todas las canciones  
GET /

Obtener primera canción del álbum  
GET /intro

Buscar canción por ID (query)  
GET /encontrar-cancion-id?id=1

Buscar canción por ID (params)  
GET /ElBaifo/:id

Crear nueva canción  
POST /guardar-cancion

Body JSON:
{
  "titulo": "Nombre",
  "duracion": "3:00",
  "ft": "Artista (opcional)",
  "compositores": "Lista de compositores",
  "bpm": 100,
  "key": "C minor"
}

Actualizar canción  
PUT /actualizar-cancion

Body JSON:
{
  "id": 1,
  "titulo": "Nuevo nombre",
  "duracion": "3:10",
  "ft": null,
  "compositores": "Texto",
  "bpm": 95,
  "key": "A minor"
}

Eliminar canción  
DELETE /eliminar-cancion

Body:
{
  "id": 1
}

## Búsquedas y filtros

Buscar por título  
GET /buscar-canciones?titulo=baifo

Filtro general  
GET /filtrar-canciones?titulo=&artista=&key=

## Estadísticas BPM

Media de BPM  
GET /bpm/media

BPM máximo  
GET /bpm/max

BPM mínimo  
GET /bpm/min

Ordenar canciones por BPM  
GET /ordenar-bpm?orden=desc

Top canciones por BPM  
GET /orden-bpm?num=3&orden=desc

## Productores

Obtener todos los productores  
GET /productores

Productores de una canción  
GET /canciones/:id/productores

Crear productor  
POST /guardar-productor

Eliminar productor  
DELETE /eliminar-productor

## Otras estadísticas

Total de canciones y productores  
GET /totales

Agrupar canciones por key
GET /agrupar-key

## Notas importantes

- Los datos están guardados en memoria (arrays), no en base de datos.
- Si reinicias el servidor, los datos se pierden.
- Es un proyecto de clase para practicar APIs con Express.

## Autor

Proyecto realizado por mi: Manuel Aparicio Doeste como práctica de desarrollo de APIs REST con Node.js en este moemento un estudiante de 1º de DAM.