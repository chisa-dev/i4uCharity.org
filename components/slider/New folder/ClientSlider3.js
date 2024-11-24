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
            slidesPerView: 3,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
}

export default function ClientSlider3() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                    <figure className="clients-logo"><Link href="/index-14"><img src="/assets/images-4/clients/clients-9.png" alt="" /></Link></figure>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <figure className="clients-logo"><Link href="/index-14"><img src="/assets/images-4/clients/clients-10.png" alt="" /></Link></figure>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <figure className="clients-logo"><Link href="/index-14"><img src="/assets/images-4/clients/clients-11.png" alt="" /></Link></figure>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <figure className="clients-logo"><Link href="/index-14"><img src="/assets/images-4/clients/clients-12.png" alt="" /></Link></figure>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
