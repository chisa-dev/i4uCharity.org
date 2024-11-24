'use client'
import Link from "next/link"
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
            slidesPerView: 3,
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
export default function ProjectSlider2() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide-item">
                    <div className="project-block">
                        <div className="image"><img src="/assets/images/resource/project-1.jpg" alt="" className="w-100" /></div>
                        <div className="lower-content">
                            <div className="count">01.</div>
                            <div className="category">Marketing</div>
                            <div className="text">Business Leadership</div>
                        </div>
                        <div className="overlay-content">
                            <div>
                                <div className="count">01.</div>
                                <div className="category">Marketing</div>
                                <div className="text">Business Leadership</div>
                            </div>
                            <div className="link-btn"><Link href="#" className="theme-btn"><span className="flaticon-right-arrow" /></Link></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="project-block">
                        <div className="image"><img src="/assets/images/resource/project-2.jpg" alt="" className="w-100" /></div>
                        <div className="lower-content">
                            <div className="count">02.</div>
                            <div className="category">Financial</div>
                            <div className="text">Capital Management</div>
                        </div>
                        <div className="overlay-content">
                            <div>
                                <div className="count">02.</div>
                                <div className="category">Financial</div>
                                <div className="text">Capital Management</div>
                            </div>
                            <div className="link-btn"><Link href="#" className="theme-btn"><span className="flaticon-right-arrow" /></Link></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="project-block">
                        <div className="image"><img src="/assets/images/resource/project-3.jpg" alt="" className="w-100" /></div>
                        <div className="lower-content">
                            <div className="count">03.</div>
                            <div className="category">Technical</div>
                            <div className="text">Market Expansion</div>
                        </div>
                        <div className="overlay-content">
                            <div>
                                <div className="count">03.</div>
                                <div className="category">Technical</div>
                                <div className="text">Market Expansion</div>
                            </div>
                            <div className="link-btn"><Link href="#" className="theme-btn"><span className="flaticon-right-arrow" /></Link></div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </>
    )
}
