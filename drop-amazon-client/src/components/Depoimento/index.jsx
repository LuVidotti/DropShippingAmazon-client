import "./Depoimento.css"; 

function Depoimento({ foto, nome, texto }) {
    return (
        <div className="depoimento-card">
            <img src={foto} alt={`Foto do aluno ${nome}`} />
            <span>{nome}</span>
            <p>"{texto}"</p>
        </div>
    )
}

export default Depoimento;