import './erro.css'
import { Link } from 'react-router-dom'

export default function Erro(){
    return(
        <div className='error-content'>
            <div className='title erro'>
                <h1>
                    <Link to={'/'}>Iformulas</Link>
                </h1>

                <div className='box-erro'>
                    <h2>Página não encontrada!</h2>
                    <p>Por favor, clique no título acima, ou digite na barra de navegação: '/'.
                        Assim Poderá voltar para o menu principal. Obrigado!
                    </p>
                </div>
            </div>
        </div>
    )
}