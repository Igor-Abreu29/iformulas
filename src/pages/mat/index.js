import './mat.css'
import { Link } from 'react-router-dom'
import { IoMdArrowBack } from 'react-icons/io'
import { Bar } from '../../components/bar'

export default function Matematica(){
    return(
        <div>
            <header className='title tilte-mat'>
                <h1>Matemática</h1>
                <Link to={'/'} className="link">
                    <div className="back">
                        <IoMdArrowBack className="back-icon"/>
                    </div>
                </Link>
            </header>

            <main className='principal-mat'>
                <h1>Assuntos: </h1>

                <Bar li={'#'} texto={'Equação do 1ºGrau'} />
                <Bar li={'#'} texto={'Equação do 2ºGrau'} />
                <Bar li={'#'} texto={'Potenciação'} />
            </main>
        </div>
    )
}