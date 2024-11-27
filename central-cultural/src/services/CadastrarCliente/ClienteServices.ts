import { hash } from "bcryptjs";
import prismaClient from "../../prisma";


prismaClient

interface CadCLientes {
    nome: string
    password: string
    celular: string
    cpf: string
    email: string
    preferencias: string
}

class ClientesServices {

    async cadastrarCliente({ nome, password, celular, cpf, email, preferencias }: CadCLientes) {
        const senhaCrypt = await hash(password, 8)
        await prismaClient.cadastrarClientes.create({
            data: {
                nome: nome,
                senha: senhaCrypt,
                celular: celular,
                cpf: cpf,
                email: email,
                preferencias: preferencias,
            }
        })
        return ({ dados: 'Cadastro Efetuado com Sucesso' })
    }

    async consultarCLiente() {
        const resposta = prismaClient.cadastrarClientes.findMany({
            select: {
                id: true,
                nome: true,
                senha: true,
                celular: true,
                cpf: true,
                email: true,
                preferencias: true,
            }
        })
        return resposta
    }

    async apagarCLiente(id: string) {
        await prismaClient.cadastrarClientes.delete({
            where: {
                id: id
            }
        })
        return ({ dados: 'Resgistro Apagado com Sucesso' })
    }

}

export { ClientesServices }