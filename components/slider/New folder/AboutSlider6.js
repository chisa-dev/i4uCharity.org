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

}

export default function AboutSlider6() {
    return (
        <>

            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide-item">
                    <div className="testimonial-block-two">
                        <div className="inner-box">
                            <div className="quote"><span className="flaticon-quote" /></div>
                            <div className="text">When men are pure, laws are useless; when men are corrupt, laws are broken</div>
                            <div className="author-box">
                                <div className="image"><img src="/assets/images/resource/author-thumb-4.jpg" alt="" /></div>
                                <div className="author-title">George Oliver</div>
                                <div className="designation">Founder</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="testimonial-block-two">
                        <div className="inner-box">
                            <div className="quote"><span className="flaticon-quote" /></div>
                            <div className="text">When men are pure, laws are useless; when men are corrupt, laws are broken</div>
                            <div className="author-box">
                                <div className="image"><img src="/assets/images/resource/author-thumb-4.jpg" alt="" /></div>
                                <div className="author-title">George Oliver</div>
                                <div className="designation">Founder</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
