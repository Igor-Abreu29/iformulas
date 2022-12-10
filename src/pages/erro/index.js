import './erro.css'

export default function Erro(){
    return(
        <div className='error-content'>
            <div className='title erro'>
                <h1>
                    <a href='/'>
                        Iformulas
                    </a>
                </h1>

                <div className='information-erro'>
                    <h2>Página não encontrada!</h2>
                    <p>Por favor, clique no título acima, ou digite na barra de navegação: '/'.
                        Assim Poderá voltar para o menu principal. Obrigado!
                    </p>
                </div>
            </div>
        </div>
    )
}