import { SwiperSlide, Swiper } from "swiper/react"
import { Autoplay, EffectCube, EffectCards, EffectFade } from "swiper/modules"

import heartIcon from "../static/assets/heart-circle-outline.svg"

import image3 from "../static/assets/image 3.png"
import image4 from "../static/assets/image 4.png"
import image5 from "../static/assets/image 5.png"
import image6 from "../static/assets/image 6.png"
import image7 from "../static/assets/image7.jpg"
import image8 from "../static/assets/image8.jpg"
import image10 from "../static/assets/imagen10.jpg"
import image11 from "../static/assets/image11.jpg"

import "swiper/swiper-bundle.css"


export function SwiperComp() {
    const autoplayConfig = {
        delay: 1, // El tiempo en milisegundos entre cada slide
        disableOnInteraction: false // Si se establece en false, la reproducción automática no se detendrá después de la interacción del usuario
    };
    return (
        // <div className="img-grid">
        //     <div className="swiper-container">
        //         <div className="swiper-wrapper">
        //             <div className="swiper-slide">
        //                 <img className="images-grid" src={image3} alt="Objetivos de ZonaPets"/>
        //             </div>
        //             <div className="swiper-slide">
        //                 <img className="images-grid" src={image4} alt="Objetivos de ZonaPets"/>
        //             </div>
        //             <div className="swiper-slide">
        //                 <img className="images-grid" src={image5} alt="Objetivos de ZonaPets"/>
        //             </div>
        //             <div className="swiper-slide">
        //                 <img className="images-grid" src={image6} alt="Objetivos de ZonaPets"/>
        //             </div>
        //         </div>
        //         <div className="swiper-pagination"></div>
        //         <div className="swiper-button-next"></div>
        //         <div className="swiper-button-prev"></div>
        //     </div>
        // </div>
        <div className="swiper-container">
            <Swiper
                modules={[Autoplay, EffectFade]}
                spaceBetween={50}
                slidesPerView={1}
                effect="fade"
                // className="swiper-container"
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                autoplay
                loop={true}
            >
                <SwiperSlide><img className="imgSwiper" src={image3} alt="Imagen perro feliz"/></SwiperSlide>
                <SwiperSlide><img className="imgSwiper" src={image4} alt="Imagen perro feliz"/></SwiperSlide>
                <SwiperSlide><img className="imgSwiper" src={image5} alt="Imagen perro feliz"/></SwiperSlide>
                <SwiperSlide><img className="imgSwiper" src={image6} alt="Imagen perro feliz"/></SwiperSlide>
                <SwiperSlide><img className="imgSwiper" src={image7} alt="Imagen perro feliz"/></SwiperSlide>
                <SwiperSlide><img className="imgSwiper" src={image8} alt="Imagen perro feliz"/></SwiperSlide>
                <SwiperSlide><img className="imgSwiper" src={image10} alt="Imagen perro feliz"/></SwiperSlide>
                <SwiperSlide><img className="imgSwiper" src={image11} alt="Imagen perro feliz"/></SwiperSlide>


            </Swiper>

            <section className="sectionTextImg">
                <img src={heartIcon} className="iconHeartAcerca" alt="" />
                <h1>¡Disfruta todo tipo de <span>momentos</span> con tu mascota!</h1>
                <div className="buttonsForSwiper">
                    <button>Ir al mapa</button>
                    <button>Registrar</button>
                </div>
            </section>
        </div>
    )
}