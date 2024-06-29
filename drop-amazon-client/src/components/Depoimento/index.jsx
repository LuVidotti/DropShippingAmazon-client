import "./Depoimento.css"; 

function Depoimento({ foto, nome, texto }) {
    return (
        <card className="depoimento-card">
            <img src={foto} alt={`Foto do aluno ${nome}`} />
            <span>{nome}</span>
            <p>"{texto}"</p>
        </card>
    )
}

export default Depoimento;