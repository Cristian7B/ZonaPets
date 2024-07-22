export function CategoryQuestion({category, data}) {
    return (
        <>
            <div className="category">
                <ion-icon class="icon-category" name="flag-outline"></ion-icon>
                <p>{category}</p>
            </div>
            <div className="preguntas-list">
                <ul>
                    {
                        data.map(({titulo}) => (
                            <li key={titulo}>{titulo}</li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}