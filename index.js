const express = require("express");
const app = express();
const port = 7777;

app.use(express.json());

app.listen(port, () =>
console.log("Servidor del Baifo abierto"));

let ElBaifo = [
    {"id": 1, "titulo": "ESTÁ EN CASA", "duracion": "2:12", "artista_principal": "Quevedo", "ft": null, "compositores": "Pedro Luis Domínguez Quevedo, Juan Pedro Moreno Carril, Javier Flaquet Moragues, Geovanny Javier Chasiloa Caza", "bpm": "94", "key": "C minor"},
    {"id": 2, "titulo": "CAPRICHOSO", "duracion": "3:07","artista_principal": "Quevedo", "ft": null, "compositores": "Pedro Luis Domínguez Quevedo, Mohamed Yassir Baitra, Jader Mantilla Cañas, Geovanny Javier Chasiloa Caza, Javier Flaquet Moragues, Isaac Bueno del Pino, Juan Pedro Moreno Carril", "bpm": "95", "key": "C minor"},     
    {"id": 3, "titulo": "EL BAIFO", "duracion": "3:19","artista_principal": "Quevedo", "ft": null, "compositores": "Pedro Luis Domínguez Quevedo, Geovanny Javier Chasiloa Caza, Javier Flaquet Moragues, Manuel Negrin Hernández, Moises Patricio González Pérez", "bpm": "92", "key": "C major"},
    {"id": 4, "titulo": "GÁLDAR", "duracion": "3:03","artista_principal": "Quevedo", "ft": "Tonny Tun Tun", "compositores": "Pedro Luis Domínguez Quevedo, Mohamed Yassir Baitra, Jader Mantilla Cañas, Javier Falquet Moragues, Geovanny Javier Chasiloa Caza, Isaac Bueno del Pino, Jaime Rocha Perez, KIDDO, Yandro Reina", "bpm": "97", "key": "F# major"},
    {"id": 5, "titulo": "SCANDIC", "duracion": "3:01","artista_principal": "Quevedo", "ft": null, "compositores": "Geovanny Javier Chasiloa Caza, Pedro Luis Domínguez Quevedo, Mohamed Yassir Baitra, Javier Falquet Moragues, Juan Pedro Moreno Carril, Fabricio Espinola Reyes", "bpm": "92", "key": "A# minor"},
    {"id": 6, "titulo": "AL GOLPITO", "duracion": "3:28","artista_principal": "Quevedo", "ft": "Nueva Línea", "compositores": "Pedro Luis Domínguez Quevedo, Mohamed Yassir Baitra, Geovanny Javier Chasiloa Caza, Jaime Rocha Perez, Isaac Bueno del Pino, Javier Falquet Moragues, Hirahi Afonso", "bpm": "206", "key": "F minor"},
    {"id": 7, "titulo": "2010YPICO", "duracion": "3:11","artista_principal": "Quevedo", "ft": null, "compositores": "Pedro Luis Domínguez Quevedo, Mohamed Yassir Baitra, Geovanny Javier Chasiloa Caza, Javier Falquet Moragues", "bpm": "93", "key": "G minor"},
    {"id": 8, "titulo": "ALGO VA A PASAR", "duracion": "4:08","artista_principal": "Quevedo", "ft": "La Pantera, Lucho RK, Juseph", "compositores": "Pedro Luis Domínguez Quevedo, Geovanny Javier Chasiloa Caza, Javier Falquet Moragues, Isaac Bueno del Pino, Sergio Aimar Castellano Almeida, Kevin Juseph Zapata Rodriguez, Emilio Roca Cáceres, Jader Mantilla Cañas", "bpm": "176", "key": "F# minor"},
    {"id": 9, "titulo": "HOOKAH Y CALOR", "duracion": "3:33","artista_principal": "Quevedo", "ft": null, "compositores": "Pedro Luis Domínguez Quevedo, Mohamed Yassir Baitra, Javier Falquet Moragues, Isaac Bueno del Pino, Geovanny Javier Chasiloa Caza", "bpm": "105", "key": "F# major"},
    {"id": 10, "titulo": "FLAKITO", "duracion": "3:15","artista_principal": "Quevedo", "ft": null, "compositores": "Pedro Luis Domínguez Quevedo, Javier Falquet Moragues, Geovanny Javier Chasiloa Caza", "bpm": "172", "key": "F# minor"},
    {"id":11, "titulo": "MI BALCÓN", "duracion": "4:16","artista_principal": "Quevedo", "ft": null, "compositores": "Pedro Luis Domínguez Quevedo, Mohamed Yassir Baitra, Jader Mantilla Cañas, Geovanny Javier Chasiloa Caza, Javier Falquet Moragues, Hirahi Daniel Afonso Meneses, Jaime Rocha Perez, Hirahi Afonso", "bpm": "92", "key": "A minor"},
    {"id": 12, "titulo": "LA GRACIOSA", "duracion": "4:18","artista_principal": "Quevedo", "ft": "Elvis Crespo", "compositores": "Elvis Crespo Díaz, Jader Mantilla Cañas, Javier Falquet Moragues, Geovanny Javier Chasiloa Caza, Isaac Bueno del Pino, Jaime Rocha Perez, KIDDO, Yandro Reina", "bpm": "110", "key": "A b major"},
    {"id": 13, "titulo": "NI BORRACHO", "duracion": "4:08","artista_principal": "Quevedo", "ft": null, "compositores": "KIDDO, Yandro Reinoso, Yoandy Vera Reyes, Pedro Luis Domínguez Quevedo, Emilio Roca Cáceres, Kevin Juseph Zapata Rodriguez, Sergio Aimar Castellano Almeida, Isaac Bueno del Pino, Jaime Rocha Perez, Jader Mantilla Cañas, Eduardo Lucas Artiles Bordón, Javier Falquet Moragues, Geovanny Javier Chasiloa Caza", "bpm": "153", "key": "A minor"},
    {"id": 14, "titulo": "HIJO DE VOLCÁN", "duracion": "5:49","artista_principal": "Quevedo", "ft": "Los Gofiones", "compositores": "Pedro Luis Domínguez Quevedo, Javier Falquet Moragues, Geovanny Javier Chasiloa Caza, Isaac Bueno del Pino, Jaime Rocha Perez, Hirahi Daniel Afonso Meneses, Hirahi Afonso", "bpm": "170", "key": "C# major"}   
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

// Con este Endpoint se obtiene la primera canción del disco
 app.get("/intro", (req,res) =>{
    return res.json(ElBaifo[0]);
 })

// Con este Endpoint se obtiene la canción con el id que le pongas (Uso Query Params)
app.get("/encontrar-cancion-id", (req,res) => {
    const cancion = ElBaifo.find(a => a.id == req.query.id);

    if(!cancion){
        return res.status(404).json({
            mensaje: "Canción no encontrada"
        })
    }

    return res.json(cancion)
})

// Con este Endpoint se obtiene la canción con el id que le pongas (Uso Route Params)
app.get("/ElBaifo/:id", (req, res) => {
    const cancion = ElBaifo.find(a => a.id == req.params.id);
    return res.json(cancion);
})

// Hago un Endpoint para crear y guardar una nueva canción poniendo la restricción de los campos obligatorios con un if
app.post("/guardar-cancion", (req,res) =>{

    if(!req.body.titulo || !req.body.duracion || !req.body.artista_principal){
        return res.status(400).json({
            mensaje: "Falta algún campo o algunos campos obligatorios. (Recuerda introducir: titulo, duracion y artista)"
        })
    }

    let nuevaCancion = {
        id: ElBaifo.length+1,
        titulo: req.body.titulo,
        duracion: req.body.duracion,
        artista_principal: req.body.artista_principal
    }

    ElBaifo.push(nuevaCancion);

    return res.status(201).json(nuevaCancion)
})

// Creo un Endpoint PUT para actualizar canción
app.put("/actualizar-cancion", (req,res) => {
    
    ElBaifo[req.body.id-1].titulo = req.body.titulo;
    ElBaifo[req.body.id-1].duracion = req.body.duracion;

    return res.json(ElBaifo[req.body.id-1])
})

// Hago un Endpoint DELETE para eliminar canción
app.delete("/eliminar-cancion", (req,res) => {
    const index = ElBaifo.findIndex(a => a.id == req.body.id)
    ElBaifo.splice(index, 1)
    return res.send("La canción con id " + req.body.id + " eliminada")
})

// GET para obtener todos los productores
app.get("/productores", (req,res) => {
    return res.json(productores)
})

// Creo un Endpoint para obtener los productores de una canción

app.get("/canciones/:id/productores", (req,res) => {

    const resultado = productores.filter(
        a => a.id_cancion == req.params.id
    )

    return res.json(resultado)
})

// Hago un Endpoint para crear y guardar productores, poniendo la restricción de los campos obligatorios con un if
app.post("/guardar-productor", (req,res) =>{

    if(!req.body.id_cancion || !req.body.productores){
        return res.status(400).json({
            mensaje: "Falta algún campo obligatorio. (Recuerda introducir: id_cancion y productores)"
        })
    }

    let nuevoProductor = {
        id_cancion: req.body.id_cancion,
        productores: req.body.productores
    }

    productores.push(nuevoProductor);

    return res.status(201).json(nuevoProductor)
})

// Hago un Endpoint DELETE para eliminar productores
app.delete("/eliminar-productor", (req,res) => {

    const index = productores.findIndex(a => a.id_cancion == req.body.id_cancion)

    productores.splice(index, 1);

    return res.send("Productores eliminados")
})

// Creo Endpoint para obtener canciones con filtro
app.get("/filtrar-canciones", (req,res) => {

    let resultado = ElBaifo

    if(req.query.titulo){
        resultado = resultado.filter(a =>
            a.titulo.toLowerCase().includes(req.query.titulo.toLowerCase())
        )
    }

    if(req.query.artista){
        resultado = resultado.filter(a =>
            a.artista_principal.toLowerCase().includes(req.query.artista.toLowerCase())
        )
    }

    if(req.query.key){
        resultado = resultado.filter(a =>
            a.key.toLowerCase() == req.query.key.toLowerCase()
        )
    }

    return res.json(resultado)
})