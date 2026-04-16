import { useState } from 'react'
import './style.css'

export default function AdicionarPersonagem() {
    const [ator, setAtor] = useState('')
    const [personagem, setPersonagem] = useState('')
    const [listaDePersonagens, setListaDePersonagens] = useState([])

    // Função para adicionar usuários em uma lista.
    const handlerAdicionarPersonagem = (event) => {
        // Evitando qua a página recarregue ao mudar algum elemento na página.
        event.preventDefault()

        // Verificando se os campos possuem algum conteúdo.
        if (ator && personagem) {
            // Adicionando novos usuário.
            setListaDePersonagens([...listaDePersonagens, {ator, personagem}])
            // Definindo os campos como vazio.
            setAtor('')
            setPersonagem('')
        }
    }
    
    return (
        // Criando HTML da página.
        <div className='formulario'>
            <h2>Adicionar Persoangem</h2>
            <form onSubmit={handlerAdicionarPersonagem}>
                <input 
                    type="text" 
                    placeholder= 'Ator' 
                    value={ator} 
                    onChange={(e) => setAtor(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder= 'Personagem' 
                    value={personagem} 
                    onChange={(e) => setPersonagem(e.target.value)}
                />
                <button type='submit'>Adicionar</button>
            </form>
    
            <hr />
    
            <h2>Personagens Adicionados</h2>
            <ul>
                {/* Usando o map para mostrar cada usuário na lista com base no índice. */}
                {listaDePersonagens.map((nome, index) => (
                    <li key={index}>
                        {nome.ator} - {nome.personagem}
                    </li>
                ))}
            </ul>
        </div>
    )
}