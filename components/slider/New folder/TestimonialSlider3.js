'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
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
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider3() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide-item">
                    <div className="testimonial-block-four">
                        <div className="inner-box">
                            <div className="row m-0">
                                <div className="image"><img src="/assets/images/resource/image-20.jpg" alt="" /></div>
                                <div className="content">
                                    <div className="icon-box">
                                        <div className="icon"><img src="/assets/images/icons/icon-32.png" alt="" /></div>
                                        <h4>Best Service Ever, We <br />Highly Recommend!</h4>
                                    </div>
                                    <div className="text">“Envolve’s analysts have done an excellent job presenting the analysis &amp; insights. we are confident that they have helped move our business forward.”</div>
                                    <div className="rating">
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star" />
                                    </div>
                                    <div className="author-title">Boris Elbert, <span className="designation">Developer Blue Soft.</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="testimonial-block-four">
                        <div className="inner-box">
                            <div className="row m-0">
                                <div className="image"><img src="/assets/images/resource/image-21.jpg" alt="" /></div>
                                <div className="content">
                                    <div className="icon-box">
                                        <div className="icon"><img src="/assets/images/icons/icon-32.png" alt="" /></div>
                                        <h4>Best Service Ever, We <br />Highly Recommend!</h4>
                                    </div>
                                    <div className="text">“Envolve’s analysts have done an excellent job presenting the analysis &amp; insights. we are confident that they have helped move our business forward.”</div>
                                    <div className="rating">
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star" />
                                    </div>
                                    <div className="author-title">Fleix Everard <span className="designation">HR, Blue Soft Sol</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="testimonial-block-four">
                        <div className="inner-box">
                            <div className="row m-0">
                                <div className="image"><img src="/assets/images/resource/image-20.jpg" alt="" /></div>
                                <div className="content">
                                    <div className="icon-box">
                                        <div className="icon"><img src="/assets/images/icons/icon-32.png" alt="" /></div>
                                        <h4>Best Service Ever, We <br />Highly Recommend!</h4>
                                    </div>
                                    <div className="text">“Envolve’s analysts have done an excellent job presenting the analysis &amp; insights. we are confident that they have helped move our business forward.”</div>
                                    <div className="rating">
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star" />
                                    </div>
                                    <div className="author-title">Boris Elbert, <span className="designation">Developer Blue Soft.</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="testimonial-block-four">
                        <div className="inner-box">
                            <div className="row m-0">
                                <div className="image"><img src="/assets/images/resource/image-21.jpg" alt="" /></div>
                                <div className="content">
                                    <div className="icon-box">
                                        <div className="icon"><img src="/assets/images/icons/icon-32.png" alt="" /></div>
                                        <h4>Best Service Ever, We <br />Highly Recommend!</h4>
                                    </div>
                                    <div className="text">“Envolve’s analysts have done an excellent job presenting the analysis &amp; insights. we are confident that they have helped move our business forward.”</div>
                                    <div className="rating">
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star" />
                                        <span className="flaticon-star" />
                                    </div>
                                    <div className="author-title">Fleix Everard <span className="designation">HR, Blue Soft Sol</span></div>
                                </div>
                            </div>
                        </div>
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
