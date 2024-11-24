'use client'
import Link from "next/link"
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
export default function ServiceSlider9() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme service9-carousel">
                {/*Start Service Block Eight*/}
                <SwiperSlide className="service-block-nine">
                    <div className="inner-box">
                        <div className="img-holder">
                            <div className="inner">
                                <img src="/assets/images-3/services/service-v9-1.jpg" alt="" />
                            </div>
                            <div className="overlay-static-content">
                                <div className="icon">
                                    <span className="icon-car" />
                                </div>
                            </div>
                            <div className="overlay-content">
                                <div className="button">
                                    <Link href="#"><span className="icon-right-arrow" /></Link>
                                </div>
                            </div>
                            <div className="title-box">
                                <h3><Link href="#">Inspection</Link></h3>
                                <p>Eco Car Inspection Services</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/*End Service Block Eight*/}
                {/*Start Service Block Eight*/}
                <SwiperSlide className="service-block-nine">
                    <div className="inner-box">
                        <div className="img-holder">
                            <div className="inner">
                                <img src="/assets/images-3/services/service-v9-2.jpg" alt="" />
                            </div>
                            <div className="overlay-static-content">
                                <div className="icon">
                                    <span className="icon-car" />
                                </div>
                            </div>
                            <div className="overlay-content">
                                <div className="button">
                                    <Link href="#"><span className="icon-car-repair" /></Link>
                                </div>
                            </div>
                            <div className="title-box">
                                <h3><Link href="#">Diagnostics</Link></h3>
                                <p>Addition to Expert Diagnostic Testing</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/*End Service Block Eight*/}
                {/*Start Service Block Eight*/}
                <SwiperSlide className="service-block-nine">
                    <div className="inner-box">
                        <div className="img-holder">
                            <div className="inner">
                                <img src="/assets/images-3/services/service-v9-3.jpg" alt="" />
                            </div>
                            <div className="overlay-static-content">
                                <div className="icon">
                                    <span className="icon-support-1" />
                                </div>
                            </div>
                            <div className="overlay-content">
                                <div className="button">
                                    <Link href="#"><span className="icon-right-arrow" /></Link>
                                </div>
                            </div>
                            <div className="title-box">
                                <h3><Link href="#">Upgrades</Link></h3>
                                <p>Simple Modifications to Your Car</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/*End Service Block Eight*/}
                {/*Start Service Block Eight*/}
                <SwiperSlide className="service-block-nine">
                    <div className="inner-box">
                        <div className="img-holder">
                            <div className="inner">
                                <img src="/assets/images-3/services/service-v9-1.jpg" alt="" />
                            </div>
                            <div className="overlay-static-content">
                                <div className="icon">
                                    <span className="icon-car" />
                                </div>
                            </div>
                            <div className="overlay-content">
                                <div className="button">
                                    <Link href="#"><span className="icon-right-arrow" /></Link>
                                </div>
                            </div>
                            <div className="title-box">
                                <h3><Link href="#">Inspection</Link></h3>
                                <p>Eco Car Inspection Services</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/*End Service Block Eight*/}
                {/*Start Service Block Eight*/}
                <SwiperSlide className="service-block-nine">
                    <div className="inner-box">
                        <div className="img-holder">
                            <div className="inner">
                                <img src="/assets/images-3/services/service-v9-2.jpg" alt="" />
                            </div>
                            <div className="overlay-static-content">
                                <div className="icon">
                                    <span className="icon-car" />
                                </div>
                            </div>
                            <div className="overlay-content">
                                <div className="button">
                                    <Link href="#"><span className="icon-car-repair" /></Link>
                                </div>
                            </div>
                            <div className="title-box">
                                <h3><Link href="#">Diagnostics</Link></h3>
                                <p>Addition to Expert Diagnostic Testing</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/*End Service Block Eight*/}
                {/*Start Service Block Eight*/}
                <SwiperSlide className="service-block-nine">
                    <div className="inner-box">
                        <div className="img-holder">
                            <div className="inner">
                                <img src="/assets/images-3/services/service-v9-3.jpg" alt="" />
                            </div>
                            <div className="overlay-static-content">
                                <div className="icon">
                                    <span className="icon-support-1" />
                                </div>
                            </div>
                            <div className="overlay-content">
                                <div className="button">
                                    <Link href="#"><span className="icon-right-arrow" /></Link>
                                </div>
                            </div>
                            <div className="title-box">
                                <h3><Link href="#">Upgrades</Link></h3>
                                <p>Simple Modifications to Your Car</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/*End Service Block Eight*/}
                {/*Start Service Block Eight*/}
                <SwiperSlide className="service-block-nine">
                    <div className="inner-box">
                        <div className="img-holder">
                            <div className="inner">
                                <img src="/assets/images-3/services/service-v9-1.jpg" alt="" />
                            </div>
                            <div className="overlay-static-content">
                                <div className="icon">
                                    <span className="icon-car" />
                                </div>
                            </div>
                            <div className="overlay-content">
                                <div className="button">
                                    <Link href="#"><span className="icon-right-arrow" /></Link>
                                </div>
                            </div>
                            <div className="title-box">
                                <h3><Link href="#">Inspection</Link></h3>
                                <p>Eco Car Inspection Services</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/*End Service Block Eight*/}
                {/*Start Service Block Eight*/}
                <SwiperSlide className="service-block-nine">
                    <div className="inner-box">
                        <div className="img-holder">
                            <div className="inner">
                                <img src="/assets/images-3/services/service-v9-2.jpg" alt="" />
                            </div>
                            <div className="overlay-static-content">
                                <div className="icon">
                                    <span className="icon-car" />
                                </div>
                            </div>
                            <div className="overlay-content">
                                <div className="button">
                                    <Link href="#"><span className="icon-car-repair" /></Link>
                                </div>
                            </div>
                            <div className="title-box">
                                <h3><Link href="#">Diagnostics</Link></h3>
                                <p>Addition to Expert Diagnostic Testing</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/*End Service Block Eight*/}
                {/*Start Service Block Eight*/}
                <SwiperSlide className="service-block-nine">
                    <div className="inner-box">
                        <div className="img-holder">
                            <div className="inner">
                                <img src="/assets/images-3/services/service-v9-3.jpg" alt="" />
                            </div>
                            <div className="overlay-static-content">
                                <div className="icon">
                                    <span className="icon-support-1" />
                                </div>
                            </div>
                            <div className="overlay-content">
                                <div className="button">
                                    <Link href="#"><span className="icon-right-arrow" /></Link>
                                </div>
                            </div>
                            <div className="title-box">
                                <h3><Link href="#">Upgrades</Link></h3>
                                <p>Simple Modifications to Your Car</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/*End Service Block Eight*/}
            </Swiper>

        </>
    )
}
