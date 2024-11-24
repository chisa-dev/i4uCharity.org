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
    //         slidesPerView: 2,
    //         spaceBetween: 30,
    //     },
    //     991: {
    //         slidesPerView: 3,
    //         spaceBetween: 30,
    //     },
    //     1199: {
    //         slidesPerView: 3,
    //         spaceBetween: 30,
    //     },
    //     1350: {
    //         slidesPerView: 3,
    //         spaceBetween: 30,
    //     },
    // }
}
export default function TestimonialSlider9() {
    return (
        <>

            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="testimonial-block-nine">
                    <div className="inner-box">
                        <div className="rating">
                            <span className="flaticon-star" />
                            <span className="flaticon-star" />
                            <span className="flaticon-star" />
                            <span className="flaticon-star" />
                            <span className="flaticon-star" />
                        </div>
                        <div className="text">
                            <p>From start to finish the whole experience has been easy and stress free this
                                echo’s your company’s commitment to customer satisfaction as stated in your
                                brochure whole experience has been.</p>
                        </div>
                        <h3>Piyush Miranda</h3>
                        <span>/ Manager of Four Season Hotel.</span>
                        <div className="quote-icon">
                            <i className="icon-left-quote" />
                        </div>
                    </div>
                    <div className="img-holder">
                        <img src="/assets/images-3/testimonial-v9-1.png" alt="" />
                    </div>
                </SwiperSlide>
                {/*Testimonial Block Eight*/}
                <SwiperSlide className="testimonial-block-nine">
                    <div className="inner-box">
                        <div className="rating">
                            <span className="flaticon-star" />
                            <span className="flaticon-star" />
                            <span className="flaticon-star" />
                            <span className="flaticon-star" />
                            <span className="flaticon-star" />
                        </div>
                        <div className="text">
                            <p>From start to finish the whole experience has been easy and stress free this
                                echo’s your company’s commitment to customer satisfaction as stated in your
                                brochure whole experience has been.</p>
                        </div>
                        <h3>Piyush Miranda</h3>
                        <span>/ Manager of Four Season Hotel.</span>
                        <div className="quote-icon">
                            <i className="icon-left-quote" />
                        </div>
                    </div>
                    <div className="img-holder">
                        <img src="/assets/images-3/testimonial-v9-1.png" alt="" />
                    </div>
                </SwiperSlide>


            </Swiper>


            <div className="owl-nav">
                <button type="button" className="owl-prev h1p">
                    <span>‹</span>
                </button>
                <button type="button" className="owl-next h1n">
                    <span>›</span>
                </button>
            </div>


        </>
    )
}
