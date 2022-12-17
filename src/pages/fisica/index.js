import "./fis.css"
import {AiFillCopyrightCircle} from 'react-icons/ai'
import { IoMdArrowBack } from "react-icons/io"
import { Link } from "react-router-dom"
import { Bar } from "../../components/bar"


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

           <Bar li={'/fisica/termologia'} texto={'Termologia'}/>
           <Bar li={'/fisica/cinematica'} texto={'Cinemática'}/>
           <Bar li={'#'} texto={'HidroEstática'}/>

            <footer>
                <AiFillCopyrightCircle size={20}/>Igor Abreu
            </footer>
        </main>
    )
}