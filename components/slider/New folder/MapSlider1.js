'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
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

export default function MapSlider1() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="inner-box">
                    <div className="icon-box">
                        <div className="icon"><span className="flaticon-discussion" /></div>
                        <h4>Turkey</h4>
                        <h5>Branches over 6 cities</h5>
                    </div>
                    <h3>01. Istanbul</h3>
                    <ul>
                        <li>33/2 Korur Ap. Beyoglu, 34420</li>
                        <li>Mon - Sat: 09.00 to 06.00 Sun:Closed</li>
                        <li><Link href="tel:+1800555440055">+1 800 555 44 00 &amp; 55</Link></li>
                        <li><Link href="mailto:supportteam@Envolve.com">supportteam@Envolve.com</Link></li>
                    </ul>
                    <Link href="#" className="link-btn">Get Direction</Link>
                </SwiperSlide>
                <SwiperSlide className="inner-box">
                    <div className="icon-box">
                        <div className="icon"><span className="flaticon-discussion" /></div>
                        <h4>Turkey</h4>
                        <h5>Branches over 6 cities</h5>
                    </div>
                    <h3>01. Istanbul</h3>
                    <ul>
                        <li>33/2 Korur Ap. Beyoglu, 34420</li>
                        <li>Mon - Sat: 09.00 to 06.00 Sun:Closed</li>
                        <li><Link href="tel:+1800555440055">+1 800 555 44 00 &amp; 55</Link></li>
                        <li><Link href="mailto:supportteam@Envolve.com">supportteam@Envolve.com</Link></li>
                    </ul>
                    <Link href="#" className="link-btn">Get Direction</Link>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
