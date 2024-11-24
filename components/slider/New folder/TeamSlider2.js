'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
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
            slidesPerView: 4,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 4,
            // spaceBetween: 30,
        },
    }
}
export default function TeamSlider2() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="team-block-one">
                    <div className="inner-box">
                        <div className="image"><img src="/assets/images/resource/team-1.jpg" alt="" /></div>
                        <div className="lower-content">
                            <div className="designation">Ceo &amp; Founder</div>
                            <h4>Adam Clinton</h4>
                            <ul className="list">
                                <li><Link href="#"><span className="flaticon-call" />+44 555 66 789</Link></li>
                                <li><Link href="#"><span className="flaticon-bag" />theodore@Envolve.com</Link></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="team-block-one">
                    <div className="inner-box">
                        <div className="image"><img src="/assets/images/resource/team-2.jpg" alt="" /></div>
                        <div className="lower-content">
                            <div className="designation">Managing Director</div>
                            <h4>Homer Donnie</h4>
                            <ul className="list">
                                <li><Link href="#"><span className="flaticon-call" />+44 555 66 123</Link></li>
                                <li><Link href="#"><span className="flaticon-bag" />donnie@Envolve.com</Link></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="team-block-one">
                    <div className="inner-box">
                        <div className="image"><img src="/assets/images/resource/team-3.jpg" alt="" /></div>
                        <div className="lower-content">
                            <div className="designation">donnie@Envolve.com</div>
                            <h4>Jerome Hobert</h4>
                            <ul className="list">
                                <li><Link href="#"><span className="flaticon-call" />+44 555 66 456</Link></li>
                                <li><Link href="#"><span className="flaticon-bag" />hobert@Envolve.com</Link></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="team-block-one">
                    <div className="inner-box">
                        <div className="image"><img src="/assets/images/resource/team-4.jpg" alt="" /></div>
                        <div className="lower-content">
                            <div className="designation">Marketing Officer</div>
                            <h4>Leonard Melvin</h4>
                            <ul className="list">
                                <li><Link href="#"><span className="flaticon-call" />+44 555 66 000</Link></li>
                                <li><Link href="#"><span className="flaticon-bag" />melvin@Envolve.com</Link></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </>
    )
}
