'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
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

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
    }
}
export default function ServiceSlider1() {
    return (
        <>



            <Swiper {...swiperOptions} className="theme_carousel owl-theme mb-4">
                <SwiperSlide className="slide">
                    <div className="service-block-seven">
                        <div className="inner-box">
                            <div className="icon" style={{ lineHeight: "0" }}><img src="/assets/images/icons/icon-19.png" alt="" /></div>
                            <h4>Quick Response</h4>
                            <div className="text">In free hour when power prove all prevent. </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="service-block-seven">
                        <div className="inner-box">
                            <div className="icon" style={{ lineHeight: "0" }}><img src="/assets/images/icons/icon-20.png" alt="" /></div>
                            <h4>Experience Team</h4>
                            <div className="text">Rejects pleasures secure  great it endures.</div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="service-block-seven">
                        <div className="inner-box">
                            <div className="icon" style={{ lineHeight: "0" }}><img src="/assets/images/icons/icon-21.png" alt="" /></div>
                            <h4>Flexible Payment</h4>
                            <div className="text">Cases are perfect sample easy to distinguish.</div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </>
    )
}
