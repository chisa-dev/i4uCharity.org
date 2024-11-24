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
            slidesPerView: 4,
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
export default function NewsSlider13() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide">
                    <div className="news-block">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="/assets/images-4/news/news-1.jpg" alt="" /><Link href="/assets/images-4/news/news-1.jpg" className="lightbox-image" data-fancybox="gallery"><i className="far fa-search-plus" /></Link></figure>
                                <div className="category"><Link href="/blog-details">Business</Link></div>
                            </div>
                            <div className="lower-content">
                                <ul className="post-info clearfix">
                                    <li>14 February, 2021</li>
                                    <li><Link href="/blog-details">By Raana irave</Link></li>
                                </ul>
                                <h3><Link href="/blog-details">How Evolve Can Trasform Your Servicing Experience</Link></h3>
                                <h6><Link href="/blog-details"><i className="far fa-long-arrow-right" />Read More</Link></h6>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="news-block">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="/assets/images-4/news/news-2.jpg" alt="" /><Link href="/assets/images-4/news/news-2.jpg" className="lightbox-image" data-fancybox="gallery"><i className="far fa-search-plus" /></Link></figure>
                                <div className="category"><Link href="/blog-details">Projects</Link></div>
                            </div>
                            <div className="lower-content">
                                <ul className="post-info clearfix">
                                    <li>10 February, 2021</li>
                                    <li><Link href="/blog-details">By Brendan Duke</Link></li>
                                </ul>
                                <h3><Link href="/blog-details">How to Extract the Most Life Out of Car Battery?</Link></h3>
                                <h6><Link href="/blog-details"><i className="far fa-long-arrow-right" />Read More</Link></h6>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="news-block">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="/assets/images-4/news/news-3.jpg" alt="" /><Link href="/assets/images-4/news/news-3.jpg" className="lightbox-image" data-fancybox="gallery"><i className="far fa-search-plus" /></Link></figure>
                                <div className="category"><Link href="/blog-details">Marketing</Link></div>
                            </div>
                            <div className="lower-content">
                                <ul className="post-info clearfix">
                                    <li>14 February, 2020</li>
                                    <li><Link href="/blog-details">By Raana irave</Link></li>
                                </ul>
                                <h3><Link href="/blog-details">What is the Right Time to Get Your Car Oil Replaced?</Link></h3>
                                <h6><Link href="/blog-details"><i className="far fa-long-arrow-right" />Read More</Link></h6>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide">
                    <div className="news-block">
                        <div className="inner-box">
                            <div className="image-box">
                                <figure className="image"><img src="/assets/images-4/news/news-3.jpg" alt="" /><Link href="/assets/images-4/news/news-3.jpg" className="lightbox-image" data-fancybox="gallery"><i className="far fa-search-plus" /></Link></figure>
                                <div className="category"><Link href="/blog-details">Marketing</Link></div>
                            </div>
                            <div className="lower-content">
                                <ul className="post-info clearfix">
                                    <li>14 February, 2020</li>
                                    <li><Link href="/blog-details">By Raana irave</Link></li>
                                </ul>
                                <h3><Link href="/blog-details">What is the Right Time to Get Your Car Oil Replaced?</Link></h3>
                                <h6><Link href="/blog-details"><i className="far fa-long-arrow-right" />Read More</Link></h6>
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
