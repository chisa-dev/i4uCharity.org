'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 20,
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
            spaceBetween: 20,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1199: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1350: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    }
}
export default function TeamSlider13() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                    <div className="team-block">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="/assets/images-4/team/team-1.jpg" alt="" /></figure>
                            </div>
                            <div className="lower-content">
                                <h3><Link href="/team-details">David Luponis</Link></h3>
                                <span className="designation">Founder</span>
                                <div className="other-links clearfix">
                                    <div className="info-box">
                                        <Link href="/index-13"><i className="fas fa-envelope" />Email</Link>
                                    </div>
                                    <div className="info-box share-box">
                                        <Link href="/index-13"><i className="fas fa-share-alt" />Share</Link>
                                        <ul className="share-link clearfix">
                                            <li><Link href="/index-13"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="/index-13"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="/index-13"><i className="fab fa-linkedin-in" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="team-block">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="/assets/images-4/team/team-2.jpg" alt="" /></figure>
                            </div>
                            <div className="lower-content">
                                <h3><Link href="/team-details">Peshotan Mehta</Link></h3>
                                <span className="designation">President</span>
                                <div className="other-links clearfix">
                                    <div className="info-box">
                                        <Link href="/index-13"><i className="fas fa-envelope" />Email</Link>
                                    </div>
                                    <div className="info-box share-box">
                                        <Link href="/index-13"><i className="fas fa-share-alt" />Share</Link>
                                        <ul className="share-link clearfix">
                                            <li><Link href="/index-13"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="/index-13"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="/index-13"><i className="fab fa-linkedin-in" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="team-block">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="/assets/images-4/team/team-3.jpg" alt="" /></figure>
                            </div>
                            <div className="lower-content">
                                <h3><Link href="/team-details">Philip Jones</Link></h3>
                                <span className="designation">Excutive Director</span>
                                <div className="other-links clearfix">
                                    <div className="info-box">
                                        <Link href="/index-13"><i className="fas fa-envelope" />Email</Link>
                                    </div>
                                    <div className="info-box share-box">
                                        <Link href="/index-13"><i className="fas fa-share-alt" />Share</Link>
                                        <ul className="share-link clearfix">
                                            <li><Link href="/index-13"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="/index-13"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="/index-13"><i className="fab fa-linkedin-in" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="team-block">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="/assets/images-4/team/team-4.jpg" alt="" /></figure>
                            </div>
                            <div className="lower-content">
                                <h3><Link href="/team-details">Peter Fransisco</Link></h3>
                                <span className="designation">Manager</span>
                                <div className="other-links clearfix">
                                    <div className="info-box">
                                        <Link href="/index-13"><i className="fas fa-envelope" />Email</Link>
                                    </div>
                                    <div className="info-box share-box">
                                        <Link href="/index-13"><i className="fas fa-share-alt" />Share</Link>
                                        <ul className="share-link clearfix">
                                            <li><Link href="/index-13"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="/index-13"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="/index-13"><i className="fab fa-linkedin-in" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="team-block">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="/assets/images-4/team/team-3.jpg" alt="" /></figure>
                            </div>
                            <div className="lower-content">
                                <h3><Link href="/team-details">Philip Jones</Link></h3>
                                <span className="designation">Excutive Director</span>
                                <div className="other-links clearfix">
                                    <div className="info-box">
                                        <Link href="/index-13"><i className="fas fa-envelope" />Email</Link>
                                    </div>
                                    <div className="info-box share-box">
                                        <Link href="/index-13"><i className="fas fa-share-alt" />Share</Link>
                                        <ul className="share-link clearfix">
                                            <li><Link href="/index-13"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="/index-13"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="/index-13"><i className="fab fa-linkedin-in" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="team-block">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="/assets/images-4/team/team-4.jpg" alt="" /></figure>
                            </div>
                            <div className="lower-content">
                                <h3><Link href="/team-details">Peter Fransisco</Link></h3>
                                <span className="designation">Manager</span>
                                <div className="other-links clearfix">
                                    <div className="info-box">
                                        <Link href="/index-13"><i className="fas fa-envelope" />Email</Link>
                                    </div>
                                    <div className="info-box share-box">
                                        <Link href="/index-13"><i className="fas fa-share-alt" />Share</Link>
                                        <ul className="share-link clearfix">
                                            <li><Link href="/index-13"><i className="fab fa-facebook-f" /></Link></li>
                                            <li><Link href="/index-13"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="/index-13"><i className="fab fa-linkedin-in" /></Link></li>
                                        </ul>
                                    </div>
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
