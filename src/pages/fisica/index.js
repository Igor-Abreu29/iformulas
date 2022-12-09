import "./fis.css"
import Logo from '../components/header'

export default function Fisica(){
    return(
        <main className="container-principal">
            <Logo/>
            
           <div className="box-title">
                <h1>
                    Assuntos:
                </h1>
           </div>  

            <section className="box-button">
                <button>Termologia</button>
                <button>Cinemática</button>
                <button>HidroEstática</button>
            </section>
        </main>
    )
}