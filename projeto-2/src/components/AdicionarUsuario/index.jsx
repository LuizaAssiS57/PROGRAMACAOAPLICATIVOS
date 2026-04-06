import { useState } from 'react'
import './style.css'

export default function AdicionarUsuarios() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [listaDeUsuarios, setListaDeUsuarios] = useState([])

    // Função para adicionar usuários em uma lista.
    const handlerAdcionarUsuario = (event) => {
        // Evitando qua a página recarregue ao mudar algum elemento na página.
        event.preventDefault()

        // Verificando se os campos possuem algum conteúdo.
        if (nome && email) {
            // Adicionando novos usuário.
            setListaDeUsuarios([...listaDeUsuarios, {nome, email}])
            // Definindo os campos como vazio.
            setNome('')
            setEmail('')
        }
    }
}

return (
    // Criando HTML da página.
    <div className='formulario'>
        <h2>Adicionar usuário</h2>
        <form onSubmit={handlerAdcionarUsuario}>
            <input 
                type="text" 
                placeholder= 'Nome' 
                value={nome} 
                onChange={(e) => (e.target.value)}
            />
            <input 
                type="text" 
                placeholder= 'E-mail' 
                value={email} 
                onChange={(e) => (e.target.value)}
            />
            <button type='submit'>Adicionar</button>
        </form>

        <hr />

        <h2>Usuários Adicionados</h2>
        <ul>
            {/* Usando o map para mostrar cada usuário na lista com base no índice. */}
            {listaDeUsuarios.map((usuario, index) => (
                <li key={index}>
                    {usuario.nome} - {usuario.email}
                </li>
            ))}
        </ul>
    </div>
)