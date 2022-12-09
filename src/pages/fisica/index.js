import "./fis.css"
import Logo from '../components/header'
import {AiFillCopyrightCircle} from 'react-icons/ai'

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
                <button>
                    <a className="link" href="./fisica/termologia">Termologia</a>
                </button>
                <button>Cinemática</button>
                <button>HidroEstática</button>
            </section>

            <footer>
                <AiFillCopyrightCircle size={20}/>Igor Abreu
            </footer>
        </main>
    )
}