const express = require("express");
const app = express();
const port = 7777;

app.use(express.json());

app.listen(port, () =>
console.log("Servidor del Baifo abierto"));

let ElBaifo = [
    {"id": 1, "título": "ESTÁ EN CASA", "duración": "2:12", "artista principal": "Quevedo", "ft": null, "compositor/es": "Pedro Luis Domínguez Quevedo, Juan Pedro Moreno Carril, Javier Flaquet Moragues, Geovanny Javier Chasiloa Caza", "bpm": "94", "key": "C minor"},
    {"id": 2, "título": "CAPRICHOSO", "duración": "3:07","artista principal": "Quevedo", "ft": null, "compositor/es": "Pedro Luis Domínguez Quevedo, Mohamed Yassir Baitra, Jader Mantilla Cañas, Geovanny Javier Chasiloa Caza, Javier Flaquet Moragues, Isaac Bueno del Pino, Juan Pedro Moreno Carril", "bpm": "95", "key": "C minor"},     
    {"id": 3, "título": "EL BAIFO", "duración": "3:19","artista principal": "Quevedo", "ft": null, "compositor/es": "Pedro Luis Domínguez Quevedo, Geovanny Javier Chasiloa Caza, Javier Flaquet Moragues, Manuel Negrin Hernández, Moises Patricio González Pérez", "bpm": "92", "key": "C major"},
    {"id": 4, "título": "GÁLDAR", "duración": "3:03","artista principal": "Quevedo", "ft": "Tonny Tun Tun", "compositor/es": "Pedro Luis Domínguez Quevedo, Mohamed Yassir Baitra, Jader Mantilla Cañas, Javier Falquet Moragues, Geovanny Javier Chasiloa Caza, Isaac Bueno del Pino, Jaime Rocha Perez, KIDDO, Yandro Reina", "bpm": "97", "key": "F# major"},
    {"id": 5, "título": "SCANDIC", "duración": "3:01","artista principal": "Quevedo", "ft": null, "compositor/es": "Geovanny Javier Chasiloa Caza, Pedro Luis Domínguez Quevedo, Mohamed Yassir Baitra, Javier Falquet Moragues, Juan Pedro Moreno Carril, Fabricio Espinola Reyes", "bpm": "92", "key": "A# minor"},
    {"id": 6, "título": "AL GOLPITO", "duración": "3:28","artista principal": "Quevedo", "ft": "Nueva Línea", "compositor/es": "Pedro Luis Domínguez Quevedo, Mohamed Yassir Baitra, Geovanny Javier Chasiloa Caza, Jaime Rocha Perez, Isaac Bueno del Pino, Javier Falquet Moragues, Hirahi Afonso", "bpm": "206", "key": "F minor"},
    {"id": 7, "título": "2010YPICO", "duración": "3:11","artista principal": "Quevedo", "ft": null, "compositor/es": "Pedro Luis Domínguez Quevedo, Mohamed Yassir Baitra, Geovanny Javier Chasiloa Caza, Javier Falquet Moragues", "bpm": "93", "key": "G minor"},
    {"id": 8, "título": "ALGO VA A PASAR", "duración": "4:08","artista principal": "Quevedo", "ft": "La Pantera, Lucho RK, Juseph", "compositor/es": "Pedro Luis Domínguez Quevedo, Geovanny Javier Chasiloa Caza, Javier Falquet Moragues, Isaac Bueno del Pino, Sergio Aimar Castellano Almeida, Kevin Juseph Zapata Rodriguez, Emilio Roca Cáceres, Jader Mantilla Cañas", "bpm": "176", "key": "F# minor"},
    {"id": 9, "título": "HOOKAH Y CALOR", "duración": "3:33","artista principal": "Quevedo", "ft": null, "compositor/es": "Pedro Luis Domínguez Quevedo, Mohamed Yassir Baitra, Javier Falquet Moragues, Isaac Bueno del Pino, Geovanny Javier Chasiloa Caza", "bpm": "105", "key": "F# major"},
    {"id": 10, "título": "FLAKITO", "duración": "3:15","artista principal": "Quevedo", "ft": null, "compositor/es": "Pedro Luis Domínguez Quevedo, Javier Falquet Moragues, Geovanny Javier Chasiloa Caza", "bpm": "172", "key": "F# minor"},
    {"id":11, "título": "MI BALCÓN", "duración": "4:16","artista principal": "Quevedo", "ft": null, "compositor/es": "Pedro Luis Domínguez Quevedo, Mohamed Yassir Baitra, Jader Mantilla Cañas, Geovanny Javier Chasiloa Caza, Javier Falquet Moragues, Hirahi Daniel Afonso Meneses, Jaime Rocha Perez, Hirahi Afonso", "bpm": "92", "key": "A minor"},
    {"id": 12, "título": "LA GRACIOSA", "duración": "4:18","artista principal": "Quevedo", "ft": "Elvis Crespo", "compositor/es": "Elvis Crespo Díaz, Jader Mantilla Cañas, Javier Falquet Moragues, Geovanny Javier Chasiloa Caza, Isaac Bueno del Pino, Jaime Rocha Perez, KIDDO, Yandro Reina", "bpm": "110", "key": "A b major"},
    {"id": 13, "título": "NI BORRACHO", "duración": "4:08","artista principal": "Quevedo", "ft": null, "compositor/es": "KIDDO, Yandro Reinoso, Yoandy Vera Reyes, Pedro Luis Domínguez Quevedo, Emilio Roca Cáceres, Kevin Juseph Zapata Rodriguez, Sergio Aimar Castellano Almeida, Isaac Bueno del Pino, Jaime Rocha Perez, Jader Mantilla Cañas, Eduardo Lucas Artiles Bordón, Javier Falquet Moragues, Geovanny Javier Chasiloa Caza", "bpm": "153", "key": "A minor"},
    {"id": 14, "título": "HIJO DE VOLCÁN", "duración": "5:49","artista principal": "Quevedo", "ft": "Los Gofiones", "compositor/es": "Pedro Luis Domínguez Quevedo, Javier Falquet Moragues, Geovanny Javier Chasiloa Caza, Isaac Bueno del Pino, Jaime Rocha Perez, Hirahi Daniel Afonso Meneses, Hirahi Afonso", "bpm": "170", "key": "C# major"}   
]

let productores = [
    {"id_cancion": 1, "productores": "GARABATTO, KIDDO, Josh Gudwin, Colin Leonard"},
    {"id_cancion": 2, "productores": "GIO, GARABATTO, Bdp Mucic, KIDDO, Colin Leonard, Josh Gudwin"},
    {"id_cancion": 3, "productores": "GIO, GARABATTO, Josh Gudwin, Colin Leonard"},
    {"id_cancion": 4, "productores": "GIO, GARABATTO, Bdp Music, Pana YMB, Josh Gudwin, Colin Leonard"},
    {"id_cancion": 5, "productores": "GIO, Blvck Reyes, KIDDO, Josh Gudwin, Colin Leonard"},
    {"id_cancion": 6, "productores": "GIO, GARABATTO, Bdp Music, Pana YMB, Yassir, Josh Gudwin, Colin Leonard"},
    {"id_cancion": 7, "productores": "GIO, GARABATTO, Josh Gudwin, Colin Leonard"},
    {"id_cancion": 8, "productores": "GIO, GARABATTO, Bdp Music, Josh Gudwin, Colin Leonard"},
    {"id_cancion": 9, "productores": "GARABATTO, Bdp Music, Josh Gudwin, Colin Leonard"},
    {"id_cancion": 10, "productores": "GARABATTO, Josh Gudwin, Colin Leonard"},
    {"id_cancion": 11, "productores": "GIO, GARABATTO, Pana, Pana YMB, Josh Gudwin, Colin Leonard"},
    {"id_cancion": 12, "productores": "GIO, GARABATTO, Bdp Music, Pana YMB, Josh Gudwin, Colin Leonard"},
    {"id_cancion": 13, "productores": "Bdp Music, GARABATTO, Pana YMB, KIDDO, Josh Gudwin, Colin Leonard"},
    {"id_cancion": 14, "productores": "GIO, GARABATTO, Bdp Music, Pana YMB, Josh Gudwin, Colin Leonard"}
]

 app.get("/", (req,res) => {
    return res.json(ElBaifo);
 })

 app.get("/intro", (req,res) =>{
    return res.json(ElBaifo[0]);
 })

app.get("/encontrar-cancion-id", (req,res) => {
    return res.json(ElBaifo[req.body.id])
})

app.get("/ElBaifo/:id", (req, res) => {
    const cancion = ElBaifo.find(a => a.id == req.params.id);
    return res.json(cancion);
})

