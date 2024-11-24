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
            slidesPerView: 3,
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

export default function ImigrationSlider11() {
    return (
        <>



            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide-item">
                    <div className="inner-box">
                        <figure className="flag"><img src="/assets/images-2/icons/flag-2.png" alt="" /></figure>
                        <figure className="image-box"><img src="/assets/images-2/resource/immigration-1.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="text">
                                <h3>United States</h3>
                                <h6>A Hub For Professionals</h6>
                                <p>Indignation and dislike men who beguiled and demoralized the charms of pleasure</p>
                            </div>
                            <div className="btn-box"><Link href="/index-11">Read More</Link></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="inner-box">
                        <figure className="flag"><img src="/assets/images-2/icons/flag-3.png" alt="" /></figure>
                        <figure className="image-box"><img src="/assets/images-2/resource/immigration-2.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="text">
                                <h3>Australia</h3>
                                <h6>A Fast Track Visa Process</h6>
                                <p>Indignation and dislike men who beguiled and demoralized the charms of pleasure</p>
                            </div>
                            <div className="btn-box"><Link href="/index-11">Read More</Link></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="inner-box">
                        <figure className="flag"><img src="/assets/images-2/icons/flag-4.png" alt="" /></figure>
                        <figure className="image-box"><img src="/assets/images-2/resource/immigration-3.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="text">
                                <h3>United Kingdom</h3>
                                <h6>A new Destination</h6>
                                <p>Indignation and dislike men who beguiled and demoralized the charms of pleasure</p>
                            </div>
                            <div className="btn-box"><Link href="/index-11">Read More</Link></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="inner-box">
                        <figure className="flag"><img src="/assets/images-2/icons/flag-2.png" alt="" /></figure>
                        <figure className="image-box"><img src="/assets/images-2/resource/immigration-1.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="text">
                                <h3>United States</h3>
                                <h6>A Hub For Professionals</h6>
                                <p>Indignation and dislike men who beguiled and demoralized the charms of pleasure</p>
                            </div>
                            <div className="btn-box"><Link href="/index-11">Read More</Link></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="inner-box">
                        <figure className="flag"><img src="/assets/images-2/icons/flag-3.png" alt="" /></figure>
                        <figure className="image-box"><img src="/assets/images-2/resource/immigration-2.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="text">
                                <h3>Australia</h3>
                                <h6>A Fast Track Visa Process</h6>
                                <p>Indignation and dislike men who beguiled and demoralized the charms of pleasure</p>
                            </div>
                            <div className="btn-box"><Link href="/index-11">Read More</Link></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="inner-box">
                        <figure className="flag"><img src="/assets/images-2/icons/flag-4.png" alt="" /></figure>
                        <figure className="image-box"><img src="/assets/images-2/resource/immigration-3.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="text">
                                <h3>United Kingdom</h3>
                                <h6>A new Destination</h6>
                                <p>Indignation and dislike men who beguiled and demoralized the charms of pleasure</p>
                            </div>
                            <div className="btn-box"><Link href="/index-11">Read More</Link></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="inner-box">
                        <figure className="flag"><img src="/assets/images-2/icons/flag-2.png" alt="" /></figure>
                        <figure className="image-box"><img src="/assets/images-2/resource/immigration-1.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="text">
                                <h3>United States</h3>
                                <h6>A Hub For Professionals</h6>
                                <p>Indignation and dislike men who beguiled and demoralized the charms of pleasure</p>
                            </div>
                            <div className="btn-box"><Link href="/index-11">Read More</Link></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="inner-box">
                        <figure className="flag"><img src="/assets/images-2/icons/flag-3.png" alt="" /></figure>
                        <figure className="image-box"><img src="/assets/images-2/resource/immigration-2.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="text">
                                <h3>Australia</h3>
                                <h6>A Fast Track Visa Process</h6>
                                <p>Indignation and dislike men who beguiled and demoralized the charms of pleasure</p>
                            </div>
                            <div className="btn-box"><Link href="/index-11">Read More</Link></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="inner-box">
                        <figure className="flag"><img src="/assets/images-2/icons/flag-4.png" alt="" /></figure>
                        <figure className="image-box"><img src="/assets/images-2/resource/immigration-3.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="text">
                                <h3>United Kingdom</h3>
                                <h6>A new Destination</h6>
                                <p>Indignation and dislike men who beguiled and demoralized the charms of pleasure</p>
                            </div>
                            <div className="btn-box"><Link href="/index-11">Read More</Link></div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
