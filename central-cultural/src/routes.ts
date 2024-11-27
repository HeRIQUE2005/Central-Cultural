import { Router } from 'express'
import { UsuariosControllers } from './Controllers/CadastrarCliente/ClientesControllers'

//Importação dos Controllers

const router = Router()


router.post('/cadastra',new UsuariosControllers().cadastrarUsuarios)



export default router