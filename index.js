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
app.get("/intro", (req,res) => {

    try {
        if (!ElBaifo[0]) {
            return res.status(404).json({ mensaje: "No hay canciones" });
        }

        return res.status(200).json(ElBaifo[0]);

    } catch (error) {
        return res.status(500).json({ mensaje: "Error interno del servidor" });
    }
})

// Con este Endpoint se obtiene la canción con el id que le pongas (Uso Query Params)
app.get("/encontrar-cancion-id", (req,res) => {

    try {
        const cancion = ElBaifo.find(a => a.id == req.query.id);

        if(!cancion){
            return res.status(404).json({
                mensaje: "Canción no encontrada"
            })
        }

        return res.status(200).json(cancion);

    } catch (error) {
        return res.status(500).json({
            mensaje: "Error interno del servidor"
        });
    }
})

// Con este Endpoint se obtiene la canción con el id que le pongas (Uso Route Params)
app.get("/ElBaifo/:id", (req, res) => {

    try {
        const cancion = ElBaifo.find(a => a.id == req.params.id);

        if (!cancion) {
            return res.status(404).json({ mensaje: "Canción no encontrada" });
        }

        return res.status(200).json(cancion);

    } catch (error) {
        return res.status(500).json({ mensaje: "Error interno del servidor" });
    }
});

// Hago un Endpoint para crear y guardar una nueva canción poniendo la restricción de los campos obligatorios con un if
app.post("/guardar-cancion", (req,res) =>{ 

    try {
        if(
            !req.body.titulo || !req.body.duracion || !req.body.ft ||
            !req.body.compositores || !req.body.bpm || !req.body.key
        ){
            return res.status(400).json({
                mensaje: "Falta algún campo obligatorio"
            })
        }

        let nuevaCancion = {
            id: ElBaifo.length+1,
            titulo: req.body.titulo,
            duracion: req.body.duracion,
            artista_principal: "Quevedo",
            ft: req.body.ft,
            compositores: req.body.compositores,
            bpm: req.body.bpm,
            key: req.body.key
        }

        ElBaifo.push(nuevaCancion);

        return res.status(201).json(nuevaCancion)

    } catch (error) {
        return res.status(500).json({ mensaje: "Error interno del servidor" });
    }
})

// Creo un Endpoint PUT para actualizar canción
app.put("/actualizar-cancion", (req,res) => {

    try {
        const index = ElBaifo.findIndex(a => a.id == req.body.id);

        if (index == -1) {
            return res.status(404).json({ mensaje: "Canción no encontrada" });
        }

        if(!req.body.titulo || !req.body.duracion || !req.body.compositores || !req.body.bpm || !req.body.key){
            return res.status(400).json({ mensaje: "Datos incompletos" });
        }

        ElBaifo[req.body.id-1].titulo = req.body.titulo;
        ElBaifo[req.body.id-1].duracion = req.body.duracion;
        ElBaifo[req.body.id-1].artista_principal = "Quevedo";
        ElBaifo[req.body.id-1].ft = req.body.ft || null;
        ElBaifo[req.body.id-1].compositores = req.body.compositores;
        ElBaifo[req.body.id-1].bpm = req.body.bpm;
        ElBaifo[req.body.id-1].key = req.body.key;

        return res.status(200).json(ElBaifo[req.body.id-1]);

    } catch (error) {
        return res.status(500).json({ mensaje: "Error interno del servidor" });
    }
});

// Hago un Endpoint DELETE para eliminar canción
app.delete("/eliminar-cancion", (req,res) => {

    try {
        const index = ElBaifo.findIndex(a => a.id == req.body.id);

        if (index == -1) {
            return res.status(404).json({ mensaje: "Canción no encontrada" });
        }

        ElBaifo.splice(index, 1);

        return res.status(200).json({ mensaje: "Canción eliminada" });

    } catch (error) {
        return res.status(500).json({ mensaje: "Error interno del servidor" });
    }
});

// GET para obtener todos los productores
app.get("/productores", (req,res) => {

    try {
        if (!productores || productores.length === 0) {
            return res.status(404).json({ mensaje: "No hay productores" });
        }

        return res.status(200).json(productores);

    } catch (error) {
        return res.status(500).json({ mensaje: "Error interno del servidor" });
    }
})

// Creo un Endpoint para obtener los productores de una canción
app.get("/canciones/:id/productores", (req,res) => {

    try {
        const resultado = productores.filter(
            a => a.id_cancion == req.params.id
        )

        if (resultado.length === 0) {
            return res.status(404).json({
                mensaje: "No hay productores para esa canción"
            });
        }

        return res.status(200).json(resultado);

    } catch (error) {
        return res.status(500).json({
            mensaje: "Error interno del servidor"
        });
    }
})

// Hago un Endpoint para crear y guardar productores, poniendo la restricción de los campos obligatorios con un if
app.post("/guardar-productor", (req,res) =>{

    try {
        if(!req.body.id_cancion || !req.body.productores){
            return res.status(400).json({
                mensaje: "Faltan datos obligatorios"
            })
        }

        let nuevoProductor = {
            id_cancion: req.body.id_cancion,
            productores: req.body.productores
        }

        productores.push(nuevoProductor);

        return res.status(201).json(nuevoProductor);

    } catch (error) {
        return res.status(500).json({ mensaje: "Error interno del servidor" });
    }
})

// Hago un Endpoint DELETE para eliminar productores
app.delete("/eliminar-productor", (req,res) => {

    try {
        const index = productores.findIndex(a => a.id_cancion == req.body.id_cancion)

        if (index == -1) {
            return res.status(404).json({ mensaje: "Productores no encontrados" });
        }

        productores.splice(index, 1);

        return res.status(200).json({ mensaje: "Productores eliminados" });

    } catch (error) {
        return res.status(500).json({ mensaje: "Error interno del servidor" });
    }
})

// Creo Endpoint para obtener canciones con filtro
app.get("/filtrar-canciones", (req,res) => {

    try {
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

        return res.status(200).json(resultado);

    } catch (error) {
        return res.status(500).json({ mensaje: "Error interno del servidor" });
    }
})

// Creo Endepoint para buscar canciones por filtro de texto parcial
app.get("/buscar-canciones", (req,res) => {

    try {
        if(!req.query.titulo){
            return res.status(400).json({
                mensaje: "Falta el parámetro titulo"
            });
        }

        const resultado = ElBaifo.filter(a =>
            a.titulo.toLowerCase().includes(req.query.titulo.toLowerCase())
        )

        return res.status(200).json(resultado);

    } catch (error) {
        return res.status(500).json({ mensaje: "Error interno del servidor" });
    }
})

// Creo Endpoint para buscar productores por filtro de texto parcial
app.get("/buscar-productores", (req,res) => {

    try {
        if(!req.query.productores){
            return res.status(400).json({
                mensaje: "Falta el parámetro productores"
            });
        }

        const resultado = productores.filter(a =>
            a.productores.toLowerCase().includes(req.query.productores.toLowerCase())
        )

        return res.status(200).json(resultado);

    } catch (error) {
        return res.status(500).json({ mensaje: "Error interno del servidor" });
    }
})

// Creo Endpoint para ordenar los bpm de menor a mayor o viceversa, por defecto es de menor a mayor
app.get("/ordenar-bpm", (req,res) => {

    try {
        const orden = req.query.orden;

        if(orden == "desc"){
            return res.json(ElBaifo.sort((a,b) => b.bpm - a.bpm));
        }

        return res.json(ElBaifo.sort((a,b) => a.bpm - b.bpm));

    } catch (error) {
        return res.status(500).json({ mensaje: "Error interno del servidor" });
    }
})

// Creo Endepoint para hacer la media de bpm
app.get("/bpm/media", (req,res) => {

    try {
        if (ElBaifo.length === 0) {
            return res.status(404).json({
                mensaje: "No hay canciones para calcular la media"
            });
        }

        let suma = 0;

        for(let i = 0; i < ElBaifo.length; i++){
            suma = suma + Number(ElBaifo[i].bpm);
        }

        return res.status(200).json({
            media_bpm: suma / ElBaifo.length
        });

    } catch (error) {
        return res.status(500).json({
            mensaje: "Error interno del servidor"
        });
    }
})

// Creo Endepoint para obtener la acanción que tenga el bpm más alto
app.get("/bpm/max", (req,res) => {

    try {
        if (ElBaifo.length === 0) {
            return res.status(404).json({
                mensaje: "No hay canciones"
            });
        }

        let max = Number(ElBaifo[0].bpm);

        for(let i = 0; i < ElBaifo.length; i++){
            if(Number(ElBaifo[i].bpm) > max){
                max = Number(ElBaifo[i].bpm);
            }
        }

        return res.status(200).json({ maximo: max });

    } catch (error) {
        return res.status(500).json({
            mensaje: "Error interno del servidor"
        });
    }
})

// Creo Endepoint para obtener la acanción que tenga el bpm más bajo
app.get("/bpm/min", (req,res) => {

    try {
        if (ElBaifo.length === 0) {
            return res.status(404).json({
                mensaje: "No hay canciones"
            });
        }

        let min = Number(ElBaifo[0].bpm);

        for(let i = 0; i < ElBaifo.length; i++){
            if(Number(ElBaifo[i].bpm) < min){
                min = Number(ElBaifo[i].bpm);
            }
        }

        return res.status(200).json({ minimo: min });

    } catch (error) {
        return res.status(500).json({
            mensaje: "Error interno del servidor"
        });
    }
})

// Creo Endepoint para obtener el número de bpm más altos o más bajos (El predeterminado si no poner orden=desc es ascendente)
app.get("/orden-bpm", (req,res) => {

    try {
        let num = Number(req.query.num);
        let orden = req.query.orden;

        if (!num || num <= 0) {
            return res.status(400).json({
                mensaje: "El parámetro num es incorrecto"
            });
        }

        let resultado = ElBaifo.slice();

        if(orden == "desc"){
            resultado.sort((a,b) => b.bpm - a.bpm);
        } else {
            resultado.sort((a,b) => a.bpm - b.bpm);
        }

        return res.status(200).json(resultado.slice(0,num));

    } catch (error) {
        return res.status(500).json({
            mensaje: "Error interno del servidor"
        });
    }
})

// Creo Endpoint que te dice el número de canciones totales y el de productores totales
app.get("/totales", (req, res) => {

    try {
        return res.status(200).json({
            canciones: ElBaifo.length,
            productores: productores.length
        });

    } catch (error) {
        return res.status(500).json({
            mensaje: "Error interno del servidor"
        });
    }
});

// Creo Endpoint para agrupar las key, poniendo las key con el número de veces que se repite
app.get("/agrupar-key", (req, res) => {

    try {
        let resultado = {};

        for (let i = 0; i < ElBaifo.length; i++) {
            let key = ElBaifo[i].key;

            if (resultado[key]) {
                resultado[key]++;
            } else {
                resultado[key] = 1;
            }
        }

        return res.status(200).json(resultado);

    } catch (error) {
        return res.status(500).json({
            mensaje: "Error interno del servidor"
        });
    }
});