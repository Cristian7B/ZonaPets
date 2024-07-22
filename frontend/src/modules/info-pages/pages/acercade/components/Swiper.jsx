export function Swiper() {
    return (
        <div className="img-grid">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <img className="images-grid" src="{% static 'imagenes/image 3.png' %}" alt="Objetivos de ZonaPets"/>
                    </div>
                    <div className="swiper-slide">
                        <img className="images-grid" src="{% static 'imagenes/image 4.png' %}" alt="Objetivos de ZonaPets"/>
                    </div>
                    <div className="swiper-slide">
                        <img className="images-grid" src="{% static 'imagenes/image 5.png' %}" alt="Objetivos de ZonaPets"/>
                    </div>
                    <div className="swiper-slide">
                        <img className="images-grid" src="{% static 'imagenes/image 6.png' %}" alt="Objetivos de ZonaPets"/>
                    </div>
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
        </div>
    )
}