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
export default function TestimonialSlider5() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                    <div className="testimonial-block-six">
                        <div className="inner-box">
                            <div className="top-content">
                                <div className="logo">
                                    <div className="default"><img src="/assets/images/resource/client-36.png" alt="" /></div>
                                    <div className="hover"><img src="/assets/images/resource/client-37.png" alt="" /></div>
                                </div>
                                <div className="quote"><span className="flaticon-quote" /></div>
                                <div className="text">“Envolve’s analysts have done an excellent job presenting the analysis &amp; insights. we are confident that they have helped move our business forward.”</div>
                                <div className="rating">
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star style-two" />
                                </div>
                            </div>
                            <div className="author-box">
                                <div className="image"><img src="/assets/images/resource/author-thumb-5.jpg" alt="" /></div>
                                <div className="author-title">Boris Elbert</div>
                                <div className="designation">Green Tech</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-six">
                        <div className="inner-box">
                            <div className="top-content">
                                <div className="logo">
                                    <div className="default"><img src="/assets/images/resource/client-38.png" alt="" /></div>
                                    <div className="hover"><img src="/assets/images/resource/client-39.png" alt="" /></div>
                                </div>
                                <div className="quote"><span className="flaticon-quote" /></div>
                                <div className="text">“Envolve’s analysts have done an excellent job presenting the analysis &amp; insights. we are confident that they have helped move our business forward.”</div>
                                <div className="rating">
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star" />
                                </div>
                            </div>
                            <div className="author-box">
                                <div className="image"><img src="/assets/images/resource/author-thumb-6.jpg" alt="" /></div>
                                <div className="author-title">Fleix Everard</div>
                                <div className="designation">HR, Blue Soft Sol</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-six">
                        <div className="inner-box">
                            <div className="top-content">
                                <div className="logo">
                                    <div className="default"><img src="/assets/images/resource/client-36.png" alt="" /></div>
                                    <div className="hover"><img src="/assets/images/resource/client-37.png" alt="" /></div>
                                </div>
                                <div className="quote"><span className="flaticon-quote" /></div>
                                <div className="text">“Envolve’s analysts have done an excellent job presenting the analysis &amp; insights. we are confident that they have helped move our business forward.”</div>
                                <div className="rating">
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star style-two" />
                                </div>
                            </div>
                            <div className="author-box">
                                <div className="image"><img src="/assets/images/resource/author-thumb-5.jpg" alt="" /></div>
                                <div className="author-title">Boris Elbert</div>
                                <div className="designation">Green Tech</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-six">
                        <div className="inner-box">
                            <div className="top-content">
                                <div className="logo">
                                    <div className="default"><img src="/assets/images/resource/client-38.png" alt="" /></div>
                                    <div className="hover"><img src="/assets/images/resource/client-39.png" alt="" /></div>
                                </div>
                                <div className="quote"><span className="flaticon-quote" /></div>
                                <div className="text">“Envolve’s analysts have done an excellent job presenting the analysis &amp; insights. we are confident that they have helped move our business forward.”</div>
                                <div className="rating">
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star" />
                                </div>
                            </div>
                            <div className="author-box">
                                <div className="image"><img src="/assets/images/resource/author-thumb-6.jpg" alt="" /></div>
                                <div className="author-title">Fleix Everard</div>
                                <div className="designation">HR, Blue Soft Sol</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-six">
                        <div className="inner-box">
                            <div className="top-content">
                                <div className="logo">
                                    <div className="default"><img src="/assets/images/resource/client-36.png" alt="" /></div>
                                    <div className="hover"><img src="/assets/images/resource/client-37.png" alt="" /></div>
                                </div>
                                <div className="quote"><span className="flaticon-quote" /></div>
                                <div className="text">“Envolve’s analysts have done an excellent job presenting the analysis &amp; insights. we are confident that they have helped move our business forward.”</div>
                                <div className="rating">
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star style-two" />
                                </div>
                            </div>
                            <div className="author-box">
                                <div className="image"><img src="/assets/images/resource/author-thumb-5.jpg" alt="" /></div>
                                <div className="author-title">Boris Elbert</div>
                                <div className="designation">Green Tech</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="testimonial-block-six">
                        <div className="inner-box">
                            <div className="top-content">
                                <div className="logo">
                                    <div className="default"><img src="/assets/images/resource/client-38.png" alt="" /></div>
                                    <div className="hover"><img src="/assets/images/resource/client-39.png" alt="" /></div>
                                </div>
                                <div className="quote"><span className="flaticon-quote" /></div>
                                <div className="text">“Envolve’s analysts have done an excellent job presenting the analysis &amp; insights. we are confident that they have helped move our business forward.”</div>
                                <div className="rating">
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star" />
                                    <span className="flaticon-star" />
                                </div>
                            </div>
                            <div className="author-box">
                                <div className="image"><img src="/assets/images/resource/author-thumb-6.jpg" alt="" /></div>
                                <div className="author-title">Fleix Everard</div>
                                <div className="designation">HR, Blue Soft Sol</div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </>
    )
}
