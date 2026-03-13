import express from 'express';
import dataRouter from './routers/routes.js'

const app = express()

//Middleware -> Función que se ejecuta entre la petición y la respuesta

app.use(express.json())


// Protocolos HTTP

/*
GET -> para obtener Información
POST -> para crear información
PUT -> para actualizar información
DELETE -> para eliminar información
*/

/* app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Hola, este mensaje llega de mi servidor'
    })
})
 */
//Acoplamiento de código -> Ocurre cuando tengo multiples funcionalidades trabajando en una misma estructura de código


app.use('/api/v1', dataRouter)


app.listen(3000, () => {
    console.log('Servidor Corriendo en el puerto 3000')
})


