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

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider1() {
    return (
        <>
            <Swiper {...swiperOptions} className="testimonial-one__carousel owl-carousel owl-theme">
                <SwiperSlide>
                {/*Start Testimonial One Single*/}
                <div className="testimonial-one__single">
                    <div className="icon">
                        <span className="icon-quote1"></span>
                    </div>
                    <div className="testimonial-one__single-inner">
                        <div className="shape1"><img src="assets/images/shapes/testimonial-v1-shape1.png"
                                alt=""/></div>
                        <div className="author-box">
                            <div className="img-box">
                                <img src="assets/images/testimonial/testimonial-v1-img1.png" alt=""/>
                            </div>
                            <div className="author-info">
                                <h2>Ronald Richards</h2>
                                <div className="bottom-text">
                                    <p>MANAGER</p>
                                    <div className="rating-box">
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-box">
                            <p>A logistic service provider company plays a pivotal role in the global
                                supply chain A logistic service provider companyA logistic service
                                provider company plays a pivotal role in the global supply chain A
                                logistic service provider company</p>
                        </div>
                    </div>
                </div>
                {/*End Testimonial One Single*/}
                </SwiperSlide>
                <SwiperSlide>
                {/*Start Testimonial One Single*/}
                <div className="testimonial-one__single">
                    <div className="icon">
                        <span className="icon-quote1"></span>
                    </div>
                    <div className="testimonial-one__single-inner">
                        <div className="shape1"><img src="assets/images/shapes/testimonial-v1-shape1.png"
                                alt=""/></div>
                        <div className="author-box">
                            <div className="img-box">
                                <img src="assets/images/testimonial/testimonial-v1-img1.png" alt=""/>
                            </div>
                            <div className="author-info">
                                <h2>Ronald Richards</h2>
                                <div className="bottom-text">
                                    <p>MANAGER</p>
                                    <div className="rating-box">
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-box">
                            <p>A logistic service provider company plays a pivotal role in the global
                                supply chain A logistic service provider companyA logistic service
                                provider company plays a pivotal role in the global supply chain A
                                logistic service provider company</p>
                        </div>
                    </div>
                </div>
                {/*End Testimonial One Single*/}
                </SwiperSlide>
                <SwiperSlide>
                {/*Start Testimonial One Single*/}
                <div className="testimonial-one__single">
                    <div className="icon">
                        <span className="icon-quote1"></span>
                    </div>
                    <div className="testimonial-one__single-inner">
                        <div className="shape1"><img src="assets/images/shapes/testimonial-v1-shape1.png"
                                alt=""/></div>
                        <div className="author-box">
                            <div className="img-box">
                                <img src="assets/images/testimonial/testimonial-v1-img1.png" alt=""/>
                            </div>
                            <div className="author-info">
                                <h2>Ronald Richards</h2>
                                <div className="bottom-text">
                                    <p>MANAGER</p>
                                    <div className="rating-box">
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                        <i className="icon-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-box">
                            <p>A logistic service provider company plays a pivotal role in the global
                                supply chain A logistic service provider companyA logistic service
                                provider company plays a pivotal role in the global supply chain A
                                logistic service provider company</p>
                        </div>
                    </div>
                </div>
                {/*End Testimonial One Single*/}
                </SwiperSlide>
            </Swiper>
        </>
    )
}
