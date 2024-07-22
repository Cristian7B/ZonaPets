import { ArticleInfo } from "./ArticleInfo"
import { cardGeneralInfo } from "../consts"

export function ZonaPetsInfo() {
    return (
        <div className="general-info">
            {
                cardGeneralInfo.map(({title, value, description}) => (
                    <ArticleInfo 
                        key={title}
                        title={title}
                        value={value}
                        description={description}
                    />
                ))
            }
        </div>
    )
}