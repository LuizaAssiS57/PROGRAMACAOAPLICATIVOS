import './style.css'

function InfoAluno() {
    const nome = 'João Silva'
    const idade = 23
    const curso = "Desenvolvimento de Sistemas"

    return (
        <div className='info-aluno'>
            <h2>Informações do Aluno: </h2>
            <p>Nome: { nome }</p>
            <p>Idade: { idade }</p>
            <p>Curso: { curso }</p>
        </div>
    )
}

export default InfoAluno