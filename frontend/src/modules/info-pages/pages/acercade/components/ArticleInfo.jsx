export function ArticleInfo({title, value, description}) {
    return (
        <article className="cards-info">
            <h3>{title}</h3>
            <h2>{value}</h2>
            <p>{description}</p>
        </article>
    )
}