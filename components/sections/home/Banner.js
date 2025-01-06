
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 6000,
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


export default function Banner() {
    return (
        <>

        {/* Main Slider Four */}
        <section className="main-slider-four">
            <div className="swiper-container banner-slider">
                <Swiper {...swiperOptions} className="swiper-wrapper">
                    <SwiperSlide>
                    {/* Slide Item */}
                    <div className="swiper-slide">
                        <div className="bg1"></div>
                        <div className="image-layer"
                            style={{ backgroundImage: ' url(assets/images/slider/photo_2025-01-04_11-58-34.jpg)' }} >
                        </div>
                        <div className="main-slider-four__inner">
                            <div className="main-slider-four__inner-bg"></div>
                            <div className="container">
                                <div className="content-box">
                                    <div className="big-title">
                                        <h2>
                                            Together We Can Make<br/> a Difference
                                        </h2>
                                    </div>
                                    <div className="text-box">
                                        <p>
                                            Youth Empowerment, Community Enrichment, Brightening Childhoods,
                                            Strengthening Futures. Love, Support for Every Child
                                        </p>
                                    </div>
                                    <div className="btn-box">
                                        <Link href="donate" className="thm-btn">
                                            Donate Now
                                            <span>
                                                <i className="icon-arrow-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    {/* Slide Item */}
                    <div className="swiper-slide">
                        <div className="bg1"></div>
                        <div className="image-layer"
                            style={{ backgroundImage: ' url(assets/images/slider/slider-v4-img-2.jpg)' }} >
                        </div>
                        <div className="main-slider-four__inner">
                            <div className="main-slider-four__inner-bg"></div>
                            <div className="container">
                                <div className="content-box">
                                    <div className="big-title">
                                        <h2>
                                            Together We Can Make<br/> a Difference
                                        </h2>
                                    </div>
                                    <div className="text-box">
                                        <p>
                                            Youth Empowerment, Community Enrichment, Brightening Childhoods,
                                            Strengthening Futures. Love, Support for Every Child
                                        </p>
                                    </div>
                                    <div className="btn-box">
                                        <Link href="donate" className="thm-btn">
                                            Donate Now
                                            <span>
                                                <i className="icon-arrow-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <ul className="banner-slider-nav-four">
                <li className="banner-slider-control-four banner-slider-button-prev">
                    <span><i className="icon-arrow-right-two" aria-hidden="true"></i></span>
                </li>
                <li className="banner-slider-control-four banner-slider-button-next">
                    <span><i className="icon-arrow-right-two" aria-hidden="true"></i></span>
                </li>
            </ul>
        </section>
        {/* End Main Slider Four */}

        
        
            
        </>
    )
}
