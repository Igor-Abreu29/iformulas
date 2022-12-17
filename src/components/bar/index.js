import './bar.css'

export function Bar({li,texto}){
    return(
        <div className='box-link'>
            <a href={li} className="link">{texto}</a>
        </div>
    )
}