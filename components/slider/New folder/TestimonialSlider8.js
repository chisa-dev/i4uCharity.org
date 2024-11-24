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
export default function TestimonialSlider8() {
    return (
        <>

            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                {/*Testimonial Block Eight*/}
                <SwiperSlide className="testimonial-block-eight">
                    <div className="img-holder">
                        <img src="/assets/images-3/testimonial-v8-1.png" alt="" />
                    </div>
                    <div className="inner-content text-center" style={{ backgroundImage: 'url(assets/images-3/pattern/pattern-bg-1.jpg)' }}>
                        <h3>Raff Leonard</h3>
                        <span>California</span>
                        <div className="text">
                            <p>Envolve service team is very prompt, courteous and professional. They are
                                committed to doing a quality job &amp; the service</p>
                        </div>
                    </div>
                </SwiperSlide>
                {/*Testimonial Block Eight*/}
                <SwiperSlide className="testimonial-block-eight">
                    <div className="img-holder">
                        <img src="/assets/images-3/testimonial-v8-2.png" alt="" />
                    </div>
                    <div className="inner-content text-center" style={{ backgroundImage: 'url(assets/images-3/pattern/pattern-bg-1.jpg)' }}>
                        <h3>Lamont Shaun</h3>
                        <span>Newyork</span>
                        <div className="text">
                            <p>We have been using the security system of envolve from past 5 years, which is
                                working fine without any issues &amp; good service.</p>
                        </div>
                    </div>
                </SwiperSlide>
                {/*Testimonial Block Eight*/}
                <SwiperSlide className="testimonial-block-eight">
                    <div className="img-holder">
                        <img src="/assets/images-3/testimonial-v8-3.png" alt="" />
                    </div>
                    <div className="inner-content text-center" style={{ backgroundImage: 'url(assets/images-3/pattern/pattern-bg-1.jpg)' }}>
                        <h3>Xavier Winston</h3>
                        <span>California</span>
                        <div className="text">
                            <p>I have the pleasure of dealing with envolve team for the past one plus years.
                                The team has been efficient, very knowledgeable.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </>
    )
}
