import "./fis.css"
import {AiFillCopyrightCircle} from 'react-icons/ai'
import { IoMdArrowBack } from "react-icons/io"
import { Link } from "react-router-dom"


export default function Fisica(){
    return(
        <main className="container-principal">
            <header className="title title-fis">
                <h1>Física:</h1>
                <Link to={'/'} className="link">
                    <div className="back">
                        <IoMdArrowBack className="back-icon"/>
                    </div>
                </Link>
            </header>
            
           <div className="box-title">
                <h1>
                    Assuntos:
                </h1>
           </div>  

            <section className="box-button">
                    <Link className="link" to="./termologia">Termologia</Link>

                    <Link className="link">Cinemática</Link>

                    <Link className="link">HidroEstática</Link>
            </section>

            <footer>
                <AiFillCopyrightCircle size={20}/>Igor Abreu
            </footer>
        </main>
    )
}