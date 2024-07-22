export function CardContact({icon, name, styles, url}) {
    return (    
        <article className="card" id="card3">
            <a className="fa1" 
                href={url}
                target="_blank"
            >
                <img src={icon} alt={name} />
            </a>
            <div className="social-mediablur">
                <h2 className="social-media">
                    {name}
                </h2>
            </div>
        </article>
    )
}