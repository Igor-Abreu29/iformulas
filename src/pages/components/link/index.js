import './link.css'
export function Link({children, url}){
    return(
        <a className="Link" href={url} rel="noopener norefer">
            {children}
        </a>
    )
}