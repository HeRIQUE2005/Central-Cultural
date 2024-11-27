import prismaClient from "../../prisma";

interface CadCargos {
    nome: string

}

class CargoSevices {
    async cadastrarCargo({ nome }: CadCargos) {
        await prismaClient.cadastrarCargo.create({
            data: {
                nome: nome
            }
        })
        return ({ dados: 'Cadastro Efetuado Com Sucesso' })
    }
    async consultarCargo() {
        const resposta = await prismaClient.cadastrarCargo.findMany({
            select: {
                id: true,
                nome: true,

            }
        })
        return resposta
    }
    async apagarCargo(id: string) {
        await prismaClient.cadastrarCargo.delete({
            where: {
                id: id
            }
        })
        return ({ dados: 'Registro Apagado com Sucesso' })
    }
}

export { CargoSevices }