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
export default function NewsSlider10() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide-item">
                    <div className="news-block-one style-two">
                        <div className="row m-0">
                            <div className="col-md-6 p-0">
                                <div className="image"><Link href="/blog-details"><img className="lazy-image owl-lazy loaded" src="/assets/images-2/news/news-1.jpg" data-bg="/assets/images-2/news/news-1.jpg" alt="" data-was-processed="true" /></Link></div>
                            </div>
                            <div className="col-md-6 p-0">
                                <div className="inner-box">
                                    <div className="row m-0 justify-content-between">
                                        <div className="date"><strong>14</strong>February <br />2020</div>
                                        <div className="author">
                                            <div className="title">Brendan Duke </div><img src="/assets/images/resource/author-thumb-1.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="category">Business</div>
                                    <h4><Link href="/blog-details">How to Manage Business’s <br /> Online
                                        Reputation</Link></h4>
                                    <div className="read-more-btn"><Link href="/blog-details"><i className="flaticon-right" />Read More</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="news-block-one style-two">
                        <div className="row m-0">
                            <div className="col-md-6 p-0">
                                <div className="image"><Link href="/blog-details"><img className="lazy-image owl-lazy loaded" src="/assets/images-2/news/news-2.jpg" data-bg="/assets/images-2/news/news-2.jpg" alt="" data-was-processed="true" /></Link></div>
                            </div>
                            <div className="col-md-6 p-0">
                                <div className="inner-box">
                                    <div className="row m-0 justify-content-between">
                                        <div className="date"><strong>21</strong>January <br />2020</div>
                                        <div className="author">
                                            <div className="title">Raana irave </div><img src="/assets/images/resource/author-thumb-2.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="category">Projects</div>
                                    <h4><Link href="/blog-details">Is Your Business Ready For <br /> Integration?</Link>
                                    </h4>
                                    <div className="read-more-btn"><Link href="/blog-details"><i className="flaticon-right" />Read More</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="news-block-one style-two">
                        <div className="row m-0">
                            <div className="col-md-6 p-0">
                                <div className="image"><Link href="/blog-details"><img className="lazy-image owl-lazy loaded" src="/assets/images-2/news/news-3.jpg" data-bg="/assets/images-2/news/news-3.jpg" alt="" data-was-processed="true" /></Link></div>
                            </div>
                            <div className="col-md-6 p-0">
                                <div className="inner-box">
                                    <div className="row m-0 justify-content-between">
                                        <div className="date"><strong>08</strong>January <br />2020</div>
                                        <div className="author">
                                            <div className="title">Raana irave </div><img src="/assets/images/resource/author-thumb-3.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="category">Marketing</div>
                                    <h4><Link href="/blog-details">That Should You Include In <br />Your Marketing
                                        Plan</Link></h4>
                                    <div className="read-more-btn"><Link href="/blog-details"><i className="flaticon-right" />Read More</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="news-block-one style-two">
                        <div className="row m-0">
                            <div className="col-md-6 p-0">
                                <div className="image"><Link href="/blog-details"><img className="lazy-image owl-lazy loaded" src="/assets/images-2/news/news-1.jpg" data-bg="/assets/images-2/news/news-1.jpg" alt="" data-was-processed="true" /></Link></div>
                            </div>
                            <div className="col-md-6 p-0">
                                <div className="inner-box">
                                    <div className="row m-0 justify-content-between">
                                        <div className="date"><strong>14</strong>February <br />2020</div>
                                        <div className="author">
                                            <div className="title">Brendan Duke </div><img src="/assets/images/resource/author-thumb-1.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="category">Business</div>
                                    <h4><Link href="/blog-details">How to Manage Business’s <br /> Online
                                        Reputation</Link></h4>
                                    <div className="read-more-btn"><Link href="/blog-details"><i className="flaticon-right" />Read More</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="news-block-one style-two">
                        <div className="row m-0">
                            <div className="col-md-6 p-0">
                                <div className="image"><Link href="/blog-details"><img className="lazy-image owl-lazy loaded" src="/assets/images-2/news/news-2.jpg" data-bg="/assets/images-2/news/news-2.jpg" alt="" data-was-processed="true" /></Link></div>
                            </div>
                            <div className="col-md-6 p-0">
                                <div className="inner-box">
                                    <div className="row m-0 justify-content-between">
                                        <div className="date"><strong>21</strong>January <br />2020</div>
                                        <div className="author">
                                            <div className="title">Raana irave </div><img src="/assets/images/resource/author-thumb-2.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="category">Projects</div>
                                    <h4><Link href="/blog-details">Is Your Business Ready For <br /> Integration?</Link>
                                    </h4>
                                    <div className="read-more-btn"><Link href="/blog-details"><i className="flaticon-right" />Read More</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="news-block-one style-two">
                        <div className="row m-0">
                            <div className="col-md-6 p-0">
                                <div className="image"><Link href="/blog-details"><img className="lazy-image owl-lazy loaded" src="/assets/images-2/news/news-3.jpg" data-bg="/assets/images-2/news/news-3.jpg" alt="" data-was-processed="true" /></Link></div>
                            </div>
                            <div className="col-md-6 p-0">
                                <div className="inner-box">
                                    <div className="row m-0 justify-content-between">
                                        <div className="date"><strong>08</strong>January <br />2020</div>
                                        <div className="author">
                                            <div className="title">Raana irave </div><img src="/assets/images/resource/author-thumb-3.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="category">Marketing</div>
                                    <h4><Link href="/blog-details">That Should You Include In <br />Your Marketing
                                        Plan</Link></h4>
                                    <div className="read-more-btn"><Link href="/blog-details"><i className="flaticon-right" />Read More</Link></div>
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
