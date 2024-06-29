import "./Titulo.css";

function Titulo({ children }) {
    return (
        <div style={{display: "grid", placeItems: "center"}}>
            <h1 className="titulo">{children}</h1>
        </div>
    )
}

export default Titulo;