import {Request, Response} from "express"

export const provaController = {
    recuperarProvas: (req: Request, res: Response): void => {

        const provas = [
            {id: 1, nome: 'modelagem e arq. sistemas', valor: 7 },
            {id: 2, nome: 'prog. web', valor: 10 },
            {id: 3, nome: 'prog. orientada a objetos', valor: 3}
        ]

        res.send(provas)
    }
}