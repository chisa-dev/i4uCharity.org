'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}
export default function AuditSlider1() {
    return (
        <>

            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                    <div className="image-slide">
                        <img src="/assets/images/resource/single-service-5.jpg" alt="" />
                        <div className="content">
                            <h4>We approach your audit with a deep understanding <br /> of your business.</h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="image-slide">
                        <img src="/assets/images/resource/single-service-2.jpg" alt="" />
                        <div className="content">
                            <h4>We approach your audit with a deep understanding <br /> of your business.</h4>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="image-slide">
                        <img src="/assets/images/resource/single-service-3.jpg" alt="" />
                        <div className="content">
                            <h4>We approach your audit with a deep understanding <br /> of your business.</h4>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
