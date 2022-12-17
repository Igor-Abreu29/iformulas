import './qui.css'
import { Bar } from '../../components/bar'
import { Link } from 'react-router-dom'
import { IoMdArrowBack } from 'react-icons/io'

export default function Quimica(){
    return(
        <div>
            <header className='title title-qui'>
                <h1>Química</h1>

                <Link to={'/'} className="link">
                    <div className="back">
                        <IoMdArrowBack className="back-icon"/>
                    </div>
                </Link>
            </header>

            <main className='principal-qui'>
                <h1>Assuntos: </h1>

                <Bar li={'#'} texto={'Estequiometria'}/>
                <Bar li={'#'} texto={'Solução'}/>
                <Bar li={'#'} texto={'Termologia'}/>
            </main>
        </div>
    )
}