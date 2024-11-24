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
export default function TestimonialSlider1() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                    <div className="testimonial-block-three">
                        <div className="inner-box">
                            <div className="quote"><span className="flaticon-quote" /></div>
                            <div className="rating">
                                <span className="flaticon-star" />
                                <span className="flaticon-star" />
                                <span className="flaticon-star" />
                                <span className="flaticon-star" />
                                <span className="flaticon-star style-two" />
                            </div>
                            <div className="text">I love Envolve; everyone has been great to work with and you’re all great partner for company, we thank you for Envolve.</div>
                            <div className="author-box">
                                <div className="image"><img src="/assets/images/resource/author-thumb-5.jpg" alt="" /></div>
                                <div className="author-title">Boris Elbert</div>
                                <div className="designation">Green Tech</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-three">
                        <div className="inner-box">
                            <div className="quote"><span className="flaticon-quote" /></div>
                            <div className="rating">
                                <span className="flaticon-star" />
                                <span className="flaticon-star" />
                                <span className="flaticon-star" />
                                <span className="flaticon-star" />
                                <span className="flaticon-star" />
                            </div>
                            <div className="text">You bring tremendous value to company. We have generated more leads in the last 45 days than the last 2 years.</div>
                            <div className="author-box">
                                <div className="image"><img src="/assets/images/resource/author-thumb-6.jpg" alt="" /></div>
                                <div className="author-title">Fleix Everard</div>
                                <div className="designation">HR, Blue Soft Sol</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-three">
                        <div className="inner-box">
                            <div className="quote"><span className="flaticon-quote" /></div>
                            <div className="rating">
                                <span className="flaticon-star" />
                                <span className="flaticon-star" />
                                <span className="flaticon-star" />
                                <span className="flaticon-star" />
                                <span className="flaticon-star style-two" />
                            </div>
                            <div className="text">We hired Envolve to assist us with refining  marketing plans, you truly understands &amp; gave us very good ideas.</div>
                            <div className="author-box">
                                <div className="image"><img src="/assets/images/resource/author-thumb-7.jpg" alt="" /></div>
                                <div className="author-title">Ivor Herbert</div>
                                <div className="designation">Manager, Airlines</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
