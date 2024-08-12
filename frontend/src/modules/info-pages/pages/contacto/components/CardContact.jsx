export function CardContact({icon, index, name, url, id}) {
    return (    
        <article className="card" id={id}>
            <a className="fa1" 
                href={url}
                target="_blank"
            >
                <img id={`cardContent${index}`} src={icon} alt={name} />
            </a>
            <div className="social-mediablur">
                <h2 className="social-media">
                    {name}
                </h2>
            </div>
        </article>
    )
}