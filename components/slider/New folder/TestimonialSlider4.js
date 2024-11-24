'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
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
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider4() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                {/*Start single review box*/}
                <SwiperSlide className="column">
                    <div className="single-review-box">
                        <div className="image-holder">
                            <img src="assets/images/shop/review-1.png" alt="Awesome Image" />
                        </div>
                        <div className="text-holder">
                            <div className="top">
                                <div className="name">
                                    <h3>Steven Rich <span>, April 10, 2019</span></h3>
                                </div>
                                <div className="review-box">
                                    <ul>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="text">
                                <p>Value for money , I use it from long time and it is very useful and good product.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/*End single review box*/}
                {/*Start single review box*/}
                <SwiperSlide className="column">
                    <div className="single-review-box">
                        <div className="image-holder">
                            <img src="assets/images/shop/review-2.png" alt="Awesome Image" />
                        </div>
                        <div className="text-holder">
                            <div className="top">
                                <div className="name">
                                    <h3>William Cobus <span>, April 09, 2019:</span></h3>
                                </div>
                                <div className="review-box">
                                    <ul>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="text">
                                <p>We denounce with righteous indignation and dislike men who are so beguiled &amp; demoralized.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/*End single review box*/}
                {/*Start single review box*/}
                <SwiperSlide className="column">
                    <div className="single-review-box">
                        <div className="image-holder">
                            <img src="assets/images/shop/review-1.png" alt="Awesome Image" />
                        </div>
                        <div className="text-holder">
                            <div className="top">
                                <div className="name">
                                    <h3>Steven Rich <span>, April 09, 2019:</span></h3>
                                </div>
                                <div className="review-box">
                                    <ul>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="text">
                                <p>Value for money , I use it from long time and it is very useful and good product.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/*End single review box*/}
                {/*Start single review box*/}
                <SwiperSlide className="column">
                    <div className="single-review-box">
                        <div className="image-holder">
                            <img src="assets/images/shop/review-2.png" alt="Awesome Image" />
                        </div>
                        <div className="text-holder">
                            <div className="top">
                                <div className="name">
                                    <h3>William Cobus <span>, April 09, 2019:</span></h3>
                                </div>
                                <div className="review-box">
                                    <ul>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                        <li><i className="fas fa-star" /></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="text">
                                <p>We denounce with righteous indignation and dislike men who are so beguiled &amp; demoralized.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/*End single review box*/}
            </Swiper>

        </>
    )
}
