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
    //         // spaceBetween: 30,
    //     },
    //     575: {
    //         slidesPerView: 2,
    //         // spaceBetween: 30,
    //     },
    //     767: {
    //         slidesPerView: 2,
    //         // spaceBetween: 30,
    //     },
    //     991: {
    //         slidesPerView: 2,
    //         // spaceBetween: 30,
    //     },
    //     1199: {
    //         slidesPerView: 2,
    //         // spaceBetween: 30,
    //     },
    //     1350: {
    //         slidesPerView: 2,
    //         // spaceBetween: 30,
    //     },
    // }
}
export default function TestimonialSlider7() {
    return (
        <>

            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide-item">
                    <div className="inner-box">
                        <figure className="thumb-box"><img src="/assets/images-2/resource/testimonial-4.png" alt="" /></figure>
                        <h3>Nathan Felix</h3>
                        <span className="designation">CEO, High Rise Construction</span>
                        <p>We have been using the securitysystem of blackcats from past 5 years,
                            which is working fine without any issues &amp; good service.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="inner-box">
                        <figure className="thumb-box"><img src="/assets/images-2/resource/testimonial-4.png" alt="" /></figure>
                        <h3>Nathan Felix</h3>
                        <span className="designation">CEO, High Rise Construction</span>
                        <p>We have been using the securitysystem of blackcats from past 5 years,
                            which is working fine without any issues &amp; good service.</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="inner-box">
                        <figure className="thumb-box"><img src="/assets/images-2/resource/testimonial-4.png" alt="" /></figure>
                        <h3>Nathan Felix</h3>
                        <span className="designation">CEO, High Rise Construction</span>
                        <p>We have been using the securitysystem of blackcats from past 5 years,
                            which is working fine without any issues &amp; good service.</p>
                    </div>
                </SwiperSlide>


                <div className="owl-nav">
                    <button type="button" className="owl-prev h1p">
                        <span>‹</span>
                    </button>
                    <button type="button" className="owl-next h1n">
                        <span>›</span>
                    </button>
                </div>
            </Swiper>

        </>
    )
}
