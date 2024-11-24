'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
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

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider13() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                    <div className="testimonial-block">
                        <div className="inner-box">
                            <div className="icon-box"><i className="customicon-right-quote" /></div>
                            <h3>Nathan Felix</h3>
                            <span className="designation">CEO, High Rise Construction</span>
                            <p>Envolve service team is very prompt, courteous and professional. They are committed to doing a quality job &amp; the service</p>
                            <figure className="testimonial-thumb"><img src="/assets/images-4/resource/testimonial-1.jpg" alt="" /></figure>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block">
                        <div className="inner-box">
                            <div className="icon-box"><i className="customicon-right-quote" /></div>
                            <h3>Lamont Shaun</h3>
                            <span className="designation">Newyork City, Houe Wife</span>
                            <p>We have been using the security system of envolve from past 5 years, which is working fine without any issues &amp; good service.</p>
                            <figure className="testimonial-thumb"><img src="/assets/images-4/resource/testimonial-2.jpg" alt="" /></figure>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block">
                        <div className="inner-box">
                            <div className="icon-box"><i className="customicon-right-quote" /></div>
                            <h3>Xavier Winston</h3>
                            <span className="designation">Regional Manager, XL Park</span>
                            <p>I have the pleasure of dealing with envolve team for the past one plus years. The team has been efficient, very knowledgeable.</p>
                            <figure className="testimonial-thumb"><img src="/assets/images-4/resource/testimonial-3.jpg" alt="" /></figure>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
