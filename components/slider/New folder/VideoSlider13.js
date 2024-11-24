'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    // spaceBetween: 30,
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

    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //         spaceBetween: 30,
    //     },
    //     575: {
    //         slidesPerView: 2,
    //         spaceBetween: 30,
    //     },
    //     767: {
    //         slidesPerView: 3,
    //         spaceBetween: 30,
    //     },
    //     991: {
    //         slidesPerView: 3,
    //         spaceBetween: 30,
    //     },
    //     1199: {
    //         slidesPerView: 4,
    //         spaceBetween: 30,
    //     },
    //     1350: {
    //         slidesPerView: 4,
    //         spaceBetween: 30,
    //     },
    // }
}

export default function VideoSlider13() {
    return (
        <>


            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                    <div className="slider-block">
                        <h2>Successful Projects</h2>
                        <h3>3657<span>+</span></h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="slider-block">
                        <h2>Experienced Staff</h2>
                        <h3>125<span>+</span></h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="slider-block">
                        <h2>Awards Win</h2>
                        <h3>150<span>+</span></h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="slider-block">
                        <h2>Happy Customer</h2>
                        <h3>49150<span>+</span></h3>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
