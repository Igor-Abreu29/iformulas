import "./fis.css"
import {AiFillCopyrightCircle} from 'react-icons/ai'
import { IoMdArrowBack } from "react-icons/io"
import { Link } from "../../components/link"


export default function Fisica(){
    return(
        <main className="container-principal">
            <header className="title title-fis">
                <h1>Física:</h1>
                <Link url={'/'}>
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
                
                <button>
                    <Link url="./fisica/termologia">Termologia</Link>
                </button>

                <button>
                    <Link>Cinemática</Link>
                </button>

                <button>
                    <Link>HidroEstática</Link>
                </button>

            </section>

            <footer>
                <AiFillCopyrightCircle size={20}/>Igor Abreu
            </footer>
        </main>
    )
}