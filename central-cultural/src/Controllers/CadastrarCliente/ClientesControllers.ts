import { Request, Response } from 'express'
import { ClientesServices } from '../../services/CadastrarCliente/ClienteServices'



class UsuariosControllers {
    async cadastrarUsuarios(req: Request, res: Response) {
        const { nome, email, password, cpf, preferencias, celular } = req.body
        const enviarDadosServices = new ClientesServices()
        const resposta = await enviarDadosServices.cadastrarCliente({
            nome,
            email,
            password,
            cpf,
            preferencias,
            celular
        })
        return res.json(resposta)
    }

    async consultarUsuarios(req: Request, res: Response) {
        const enviarDadosServices = new ClientesServices()
        const resposta = await enviarDadosServices.consultarCLiente()
        return res.json(resposta)
    }

    // async consultarUsuariosUnico(req: Request, res: Response) {
    //     const { id } = req.body
    //     const enviarDadosServices = new ClientesServices()
    //     const resposta = await enviarDadosServices.consultarUsuariosUnico(id)
    //     return res.json(resposta)
    // }

    // async alterarDadosUsuarios(req: Request, res: Response) {
    //     const { id, nome, email } = req.body
    //     const enviarDadosServices = new ClientesServices()
    //     const resposta = await enviarDadosServices.alterarDadosUsuarios({
    //         id,
    //         nome,
    //         email
    //     })
    //     return res.json(resposta)
    // }

    async apagarUsuarios(req: Request, res: Response) {
        const { id } = req.params
        const enviarDadosServices = new ClientesServices()
        const resposta = await enviarDadosServices.apagarCLiente(id)
        return res.json(resposta)
    }
}

export { UsuariosControllers }