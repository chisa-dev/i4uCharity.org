'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
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
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
}
export default function TeamSlider15() {
    return (
        <>

            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                    <div className="team-block">
                        <div className="inner-box">
                            <figure className="image-box"><img src="/assets/images-4/team/team-9.jpg" alt="" /></figure>
                            <h3><Link href="/team-details">Noah Harry</Link></h3>
                            <span className="designation">Director</span>
                            <ul className="other-option clearfix">
                                <li className="mail-box"><Link href="mailto:info@example.com"><i className="fas fa-envelope" /></Link></li>
                                <li className="share-option">
                                    <i className="share-icon fas fa-share-alt" />
                                    <ul className="share-links clearfix">
                                        <li><Link href="/index-15"><i className="fab fa-facebook-f" /></Link></li>
                                        <li><Link href="/index-15"><i className="fab fa-twitter" /></Link></li>
                                        <li><Link href="/index-15"><i className="fab fa-google-plus-g" /></Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="team-block">
                        <div className="inner-box">
                            <figure className="image-box"><img src="/assets/images-4/team/team-10.jpg" alt="" /></figure>
                            <h3><Link href="/team-details">Issac Mason</Link></h3>
                            <span className="designation">Founder</span>
                            <ul className="other-option clearfix">
                                <li className="mail-box"><Link href="mailto:info@example.com"><i className="fas fa-envelope" /></Link></li>
                                <li className="share-option">
                                    <i className="share-icon fas fa-share-alt" />
                                    <ul className="share-links clearfix">
                                        <li><Link href="/index-14"><i className="fab fa-facebook-f" /></Link></li>
                                        <li><Link href="/index-14"><i className="fab fa-twitter" /></Link></li>
                                        <li><Link href="/index-14"><i className="fab fa-google-plus-g" /></Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="team-block">
                        <div className="inner-box">
                            <figure className="image-box"><img src="/assets/images-4/team/team-11.jpg" alt="" /></figure>
                            <h3><Link href="/team-details">Teddy Dylan</Link></h3>
                            <span className="designation">Manager</span>
                            <ul className="other-option clearfix">
                                <li className="mail-box"><Link href="mailto:info@example.com"><i className="fas fa-envelope" /></Link></li>
                                <li className="share-option">
                                    <i className="share-icon fas fa-share-alt" />
                                    <ul className="share-links clearfix">
                                        <li><Link href="/index-14"><i className="fab fa-facebook-f" /></Link></li>
                                        <li><Link href="/index-14"><i className="fab fa-twitter" /></Link></li>
                                        <li><Link href="/index-14"><i className="fab fa-google-plus-g" /></Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="team-block">
                        <div className="inner-box">
                            <figure className="image-box"><img src="/assets/images-4/team/team-12.jpg" alt="" /></figure>
                            <h3><Link href="/team-details">Harley Jude</Link></h3>
                            <span className="designation">HR</span>
                            <ul className="other-option clearfix">
                                <li className="mail-box"><Link href="mailto:info@example.com"><i className="fas fa-envelope" /></Link></li>
                                <li className="share-option">
                                    <i className="share-icon fas fa-share-alt" />
                                    <ul className="share-links clearfix">
                                        <li><Link href="/index-14"><i className="fab fa-facebook-f" /></Link></li>
                                        <li><Link href="/index-14"><i className="fab fa-twitter" /></Link></li>
                                        <li><Link href="/index-14"><i className="fab fa-google-plus-g" /></Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="team-block">
                        <div className="inner-box">
                            <figure className="image-box"><img src="/assets/images-4/team/team-12.jpg" alt="" /></figure>
                            <h3><Link href="/team-details">Harley Jude</Link></h3>
                            <span className="designation">HR</span>
                            <ul className="other-option clearfix">
                                <li className="mail-box"><Link href="mailto:info@example.com"><i className="fas fa-envelope" /></Link></li>
                                <li className="share-option">
                                    <i className="share-icon fas fa-share-alt" />
                                    <ul className="share-links clearfix">
                                        <li><Link href="/index-14"><i className="fab fa-facebook-f" /></Link></li>
                                        <li><Link href="/index-14"><i className="fab fa-twitter" /></Link></li>
                                        <li><Link href="/index-14"><i className="fab fa-google-plus-g" /></Link></li>
                                    </ul>
                                </li>
                            </ul>
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
