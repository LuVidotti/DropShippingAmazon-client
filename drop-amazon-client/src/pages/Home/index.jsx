import Header from "../../components/Header";
import Titulo from "../../components/Titulo";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <Header />
            <section className="sobre">
                <Titulo>Sobre o curso</Titulo>
                <div className="container">
                    <p className="sobre__texto">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Home;