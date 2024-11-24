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
export default function TestimonialSlider16() {
    return (
        <>

            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide-item">
                    <div className="testimonial-block-seven">
                        <div className="inner-box">
                            <div className="image"><img src="/assets/images/resource/image-47.jpg" alt="" /></div>
                            <div className="content">
                                <div className="logo">
                                    <img src="/assets/images/resource/client-37.png" alt="" />
                                </div>
                                <div className="text">“I love Envolve; everyone has been great to <br /> work with and you’re all great partner for <br /> company, we thank you.”</div>
                                <div className="author-box">
                                    <div className="author-title">Boris Elbert, <span>Managing Director</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="testimonial-block-seven">
                        <div className="inner-box">
                            <div className="image"><img src="/assets/images/resource/image-47.jpg" alt="" /></div>
                            <div className="content">
                                <div className="logo">
                                    <img src="/assets/images/resource/client-37.png" alt="" />
                                </div>
                                <div className="text">“I love Envolve; everyone has been great to <br /> work with and you’re all great partner for <br /> company, we thank you.”</div>
                                <div className="author-box">
                                    <div className="author-title">Boris Elbert, <span>Managing Director</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
