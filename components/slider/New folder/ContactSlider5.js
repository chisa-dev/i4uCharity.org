'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
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

    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //         spaceBetween: 30,
    //     },
    //     575: {
    //         slidesPerView: 2,
    //         spaceBetween: 30,
    //     },
    //     767: {
    //         slidesPerView: 3,
    //         spaceBetween: 30,
    //     },
    //     991: {
    //         slidesPerView: 3,
    //         spaceBetween: 30,
    //     },
    //     1199: {
    //         slidesPerView: 4,
    //         spaceBetween: 30,
    //     },
    //     1350: {
    //         slidesPerView: 4,
    //         spaceBetween: 30,
    //     },
    // }
}

export default function ContactSlider5() {
    return (
        <>

            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide-item">
                    <div className="contact-info">
                        <div className="logo"><img src="/assets/images/logo-v5.png" alt="" /></div>
                        <h4>Head Office</h4>
                        <ul>
                            <li>33/2 Korur Ap. Beyoglu, 34420</li>
                            <li>Mon - Sat: 09.00 to 06.00 Sun:Closed</li>
                            <li>+1 800 555 44 00 &amp; 55</li>
                            <li>supportteam@Envolve.com</li>
                        </ul>
                        <Link href="#" className="read-more-link">Get Direction <i className="fa fa-caret-right" /></Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="contact-info">
                        <div className="logo"><img src="/assets/images/logo-v5.png" alt="" /></div>
                        <h4>Head Office</h4>
                        <ul>
                            <li>33/2 Korur Ap. Beyoglu, 34420</li>
                            <li>Mon - Sat: 09.00 to 06.00 Sun:Closed</li>
                            <li>+1 800 555 44 00 &amp; 55</li>
                            <li>supportteam@Envolve.com</li>
                        </ul>
                        <Link href="#" className="read-more-link">Get Direction <i className="fa fa-caret-right" /></Link>
                    </div>
                </SwiperSlide>


                <div className="owl-nav">
                    <button type="button" className="owl-prev h1p">
                        <span>‹</span>
                    </button>
                    <button type="button" className="owl-next h1n">
                        <span>›</span>
                    </button>
                </div>
            </Swiper>
        </>
    )
}
