import './home.css'
import Icon from '../components/icons'
import { AiFillCopyrightCircle } from 'react-icons/ai'

export default function Home(){
    return(
        <main className="container-principal">
            <header className="title">
                <h1>IFormulas</h1>

                <nav className='box-link'>
                    <span className='span-1'>Contatos
                      <ul>
                        <li>(91) 9-99671491</li>
                        <li>(91) 9-988773013</li>
                      </ul>  
                    </span>

                    <span className='span-2'>Criadores
                        <ul>
                            <li>Igor Abreu</li>
                            <li>José Spinelli</li>
                            <li>Bryan Uriel</li>
                        </ul>
                    </span>

                    <span className='span-3'> Sobre
                        <ul>
                            <li>
                                <p>Somos alunos do Instituto Federal do Pará.
                                    Temos o objetivo de ajudar os alunos do IFPA
                                    com dificuldade nas matérias de ciências exatas.
                                </p>
                            </li>
                        </ul>
                    </span>
                </nav>
            </header>

            <section className="container-content">
                <h1>Escolha a matéria: </h1>

                <div className="container mat" onClick={mat}>
                    Matemática
                    <div className='dropdown-mat'>
                            <li>Termologia</li>
                            <li>Cinemática</li>
                    </div>
                </div>
                <div className="container fis">
                    <a className="link" href="../fisica">
                        Física
                    </a>
                </div>
                <div className="container qui">
                    <a className="link"  href="../quimica">
                        Química
                    </a>
                </div>
            </section>
            
            <footer>

                <Icon>
                    <AiFillCopyrightCircle size={20}/>
                    Igor Abreu
                </Icon>
                
            </footer>

        </main>
    )
}

function mat(){
    const dropdown = document.querySelector('.dropdown-mat')
    let cls = dropdown.getAttribute('class')
    console.log(cls)
    if(cls === 'dropdown-mat'){
        dropdown.style.display = 'block'
    }
    else{
        dropdown.style.display = 'none'
    }
}