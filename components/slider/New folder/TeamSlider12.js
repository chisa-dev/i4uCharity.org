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
export default function TeamSlider12() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide-item">
                    <div className="inner-box">
                        <figure className="image"><img src="/assets/images-2/team/team-4.jpg" alt="" /></figure>
                        <div className="content-box">
                            <ul className="other-option clearfix">
                                <li className="share-option">
                                    <i className="share-icon fas fa-share-alt" />
                                    <ul className="share-links clearfix">
                                        <li><Link href="/index-12"><i className="fab fa-facebook-f" /></Link></li>
                                        <li><Link href="/index-12"><i className="fab fa-twitter" /></Link></li>
                                        <li><Link href="/index-12"><i className="fab fa-google-plus-g" /></Link></li>
                                    </ul>
                                </li>
                                <li className="mail-box"><Link href="mailto:info@example.com"><i className="fas fa-envelope" /></Link></li>
                            </ul>
                            <div className="text">
                                <h3><Link href="/index-12">Zedrew Kowzel</Link></h3>
                                <span className="designation">Founder</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="inner-box">
                        <figure className="image"><img src="/assets/images-2/team/team-5.jpg" alt="" /></figure>
                        <div className="content-box">
                            <ul className="other-option clearfix">
                                <li className="share-option">
                                    <i className="share-icon fas fa-share-alt" />
                                    <ul className="share-links clearfix">
                                        <li><Link href="/index-12"><i className="fab fa-facebook-f" /></Link></li>
                                        <li><Link href="/index-12"><i className="fab fa-twitter" /></Link></li>
                                        <li><Link href="/index-12"><i className="fab fa-google-plus-g" /></Link></li>
                                    </ul>
                                </li>
                                <li className="mail-box"><Link href="mailto:info@example.com"><i className="fas fa-envelope" /></Link></li>
                            </ul>
                            <div className="text">
                                <h3><Link href="/index-12">Peter Fransisco</Link></h3>
                                <span className="designation">Instructor</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="inner-box">
                        <figure className="image"><img src="/assets/images-2/team/team-6.jpg" alt="" /></figure>
                        <div className="content-box">
                            <ul className="other-option clearfix">
                                <li className="share-option">
                                    <i className="share-icon fas fa-share-alt" />
                                    <ul className="share-links clearfix">
                                        <li><Link href="/index-12"><i className="fab fa-facebook-f" /></Link></li>
                                        <li><Link href="/index-12"><i className="fab fa-twitter" /></Link></li>
                                        <li><Link href="/index-12"><i className="fab fa-google-plus-g" /></Link></li>
                                    </ul>
                                </li>
                                <li className="mail-box"><Link href="mailto:info@example.com"><i className="fas fa-envelope" /></Link></li>
                            </ul>
                            <div className="text">
                                <h3><Link href="/index-12">Peshotan Mehta</Link></h3>
                                <span className="designation">Instructor</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="inner-box">
                        <figure className="image"><img src="/assets/images-2/team/team-5.jpg" alt="" /></figure>
                        <div className="content-box">
                            <ul className="other-option clearfix">
                                <li className="share-option">
                                    <i className="share-icon fas fa-share-alt" />
                                    <ul className="share-links clearfix">
                                        <li><Link href="/index-12"><i className="fab fa-facebook-f" /></Link></li>
                                        <li><Link href="/index-12"><i className="fab fa-twitter" /></Link></li>
                                        <li><Link href="/index-12"><i className="fab fa-google-plus-g" /></Link></li>
                                    </ul>
                                </li>
                                <li className="mail-box"><Link href="mailto:info@example.com"><i className="fas fa-envelope" /></Link></li>
                            </ul>
                            <div className="text">
                                <h3><Link href="/index-12">Peter Fransisco</Link></h3>
                                <span className="designation">Instructor</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="inner-box">
                        <figure className="image"><img src="/assets/images-2/team/team-6.jpg" alt="" /></figure>
                        <div className="content-box">
                            <ul className="other-option clearfix">
                                <li className="share-option">
                                    <i className="share-icon fas fa-share-alt" />
                                    <ul className="share-links clearfix">
                                        <li><Link href="/index-12"><i className="fab fa-facebook-f" /></Link></li>
                                        <li><Link href="/index-12"><i className="fab fa-twitter" /></Link></li>
                                        <li><Link href="/index-12"><i className="fab fa-google-plus-g" /></Link></li>
                                    </ul>
                                </li>
                                <li className="mail-box"><Link href="mailto:info@example.com"><i className="fas fa-envelope" /></Link></li>
                            </ul>
                            <div className="text">
                                <h3><Link href="/index-12">Peshotan Mehta</Link></h3>
                                <span className="designation">Instructor</span>
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
