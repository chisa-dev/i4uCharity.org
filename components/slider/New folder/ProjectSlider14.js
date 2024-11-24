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
            slidesPerView: 2,
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
export default function ProjectSlider14() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                    <div className="project-block">
                        <figure className="image-box"><img src="/assets/images-4/project/project-4.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="view-btn"><Link href="#" className="lightbox-image">+</Link></div>
                            <div className="text">
                                <p>Business</p>
                                <h3><Link href="/project-details">Axelborg Towers</Link></h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="project-block">
                        <figure className="image-box"><img src="/assets/images-4/project/project-5.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="view-btn"><Link href="#" className="lightbox-image">+</Link></div>
                            <div className="text">
                                <p>Business</p>
                                <h3><Link href="/project-details">Axelborg Towers</Link></h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="project-block">
                        <figure className="image-box"><img src="/assets/images-4/project/project-6.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="view-btn"><Link href="#" className="lightbox-image">+</Link></div>
                            <div className="text">
                                <p>Business</p>
                                <h3><Link href="/project-details">Axelborg Towers</Link></h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="project-block">
                        <figure className="image-box"><img src="/assets/images-4/project/project-4.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="view-btn"><Link href="#" className="lightbox-image">+</Link></div>
                            <div className="text">
                                <p>Business</p>
                                <h3><Link href="/project-details">Axelborg Towers</Link></h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="project-block">
                        <figure className="image-box"><img src="/assets/images-4/project/project-5.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="view-btn"><Link href="#" className="lightbox-image">+</Link></div>
                            <div className="text">
                                <p>Business</p>
                                <h3><Link href="/project-details">Axelborg Towers</Link></h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="project-block">
                        <figure className="image-box"><img src="/assets/images-4/project/project-6.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="view-btn"><Link href="#" className="lightbox-image">+</Link></div>
                            <div className="text">
                                <p>Business</p>
                                <h3><Link href="/project-details">Axelborg Towers</Link></h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="project-block">
                        <figure className="image-box"><img src="/assets/images-4/project/project-4.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="view-btn"><Link href="#" className="lightbox-image">+</Link></div>
                            <div className="text">
                                <p>Business</p>
                                <h3><Link href="/project-details">Axelborg Towers</Link></h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="project-block">
                        <figure className="image-box"><img src="/assets/images-4/project/project-5.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="view-btn"><Link href="#" className="lightbox-image">+</Link></div>
                            <div className="text">
                                <p>Business</p>
                                <h3><Link href="/project-details">Axelborg Towers</Link></h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="project-block">
                        <figure className="image-box"><img src="/assets/images-4/project/project-6.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="view-btn"><Link href="#" className="lightbox-image">+</Link></div>
                            <div className="text">
                                <p>Business</p>
                                <h3><Link href="/project-details">Axelborg Towers</Link></h3>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </>
    )
}
