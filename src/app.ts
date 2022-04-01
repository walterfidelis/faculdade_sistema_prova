import express from 'express'
import { provaController } from './controller/prova.controller'

const app = express()

app.get('/', (req, res)=>res.send('Hello World'))

app.get('/api/recuperarProvas', provaController.recuperarProvas)

app.listen(3000, ()=> console.log('Running at port 3000'))