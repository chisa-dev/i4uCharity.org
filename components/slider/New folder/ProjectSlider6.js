'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
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
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    }
}
export default function ProjectSlider6() {
    return (
        <>

            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="single-item">
                    <div className="inner-box">
                        <figure className="image-box"><img src="/assets/images-2/project/project-1.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="text">
                                <p>Traffic Law</p>
                                <h3><Link href="/product-details">Accident With Syndrome</Link></h3>
                            </div>
                            <ul className="other-links clearfix">
                                <li><Link href="/assets/images-2/project/project-1.jpg" className="lightbox-image" data-fancybox="gallery"><i className="far fa-search-plus" /></Link></li>
                                <li><Link href="/product-details"><i className="far fa-link" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-item">
                    <div className="inner-box">
                        <figure className="image-box"><img src="/assets/images-2/project/project-2.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="text">
                                <p>Traffic Law</p>
                                <h3><Link href="/product-details">Accident With Syndrome</Link></h3>
                            </div>
                            <ul className="other-links clearfix">
                                <li><Link href="/assets/images-2/project/project-2.jpg" className="lightbox-image" data-fancybox="gallery"><i className="far fa-search-plus" /></Link></li>
                                <li><Link href="/product-details"><i className="far fa-link" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-item">
                    <div className="inner-box">
                        <figure className="image-box"><img src="/assets/images-2/project/project-3.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="text">
                                <p>Traffic Law</p>
                                <h3><Link href="/product-details">Accident With Syndrome</Link></h3>
                            </div>
                            <ul className="other-links clearfix">
                                <li><Link href="/assets/images-2/project/project-3.jpg" className="lightbox-image" data-fancybox="gallery"><i className="far fa-search-plus" /></Link></li>
                                <li><Link href="/product-details"><i className="far fa-link" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-item">
                    <div className="inner-box">
                        <figure className="image-box"><img src="/assets/images-2/project/project-4.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="text">
                                <p>Traffic Law</p>
                                <h3><Link href="/product-details">Accident With Syndrome</Link></h3>
                            </div>
                            <ul className="other-links clearfix">
                                <li><Link href="/assets/images-2/project/project-4.jpg" className="lightbox-image" data-fancybox="gallery"><i className="far fa-search-plus" /></Link></li>
                                <li><Link href="/product-details"><i className="far fa-link" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-item">
                    <div className="inner-box">
                        <figure className="image-box"><img src="/assets/images-2/project/project-5.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="text">
                                <p>Traffic Law</p>
                                <h3><Link href="/product-details">Accident With Syndrome</Link></h3>
                            </div>
                            <ul className="other-links clearfix">
                                <li><Link href="/assets/images-2/project/project-5.jpg" className="lightbox-image" data-fancybox="gallery"><i className="far fa-search-plus" /></Link></li>
                                <li><Link href="/product-details"><i className="far fa-link" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-item">
                    <div className="inner-box">
                        <figure className="image-box"><img src="/assets/images-2/project/project-1.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="text">
                                <p>Traffic Law</p>
                                <h3><Link href="/product-details">Accident With Syndrome</Link></h3>
                            </div>
                            <ul className="other-links clearfix">
                                <li><Link href="/assets/images-2/project/project-1.jpg" className="lightbox-image" data-fancybox="gallery"><i className="far fa-search-plus" /></Link></li>
                                <li><Link href="/product-details"><i className="far fa-link" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-item">
                    <div className="inner-box">
                        <figure className="image-box"><img src="/assets/images-2/project/project-2.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="text">
                                <p>Traffic Law</p>
                                <h3><Link href="/product-details">Accident With Syndrome</Link></h3>
                            </div>
                            <ul className="other-links clearfix">
                                <li><Link href="/assets/images-2/project/project-2.jpg" className="lightbox-image" data-fancybox="gallery"><i className="far fa-search-plus" /></Link></li>
                                <li><Link href="/product-details"><i className="far fa-link" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-item">
                    <div className="inner-box">
                        <figure className="image-box"><img src="/assets/images-2/project/project-3.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="text">
                                <p>Traffic Law</p>
                                <h3><Link href="/product-details">Accident With Syndrome</Link></h3>
                            </div>
                            <ul className="other-links clearfix">
                                <li><Link href="/assets/images-2/project/project-3.jpg" className="lightbox-image" data-fancybox="gallery"><i className="far fa-search-plus" /></Link></li>
                                <li><Link href="/product-details"><i className="far fa-link" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-item">
                    <div className="inner-box">
                        <figure className="image-box"><img src="/assets/images-2/project/project-4.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="text">
                                <p>Traffic Law</p>
                                <h3><Link href="/product-details">Accident With Syndrome</Link></h3>
                            </div>
                            <ul className="other-links clearfix">
                                <li><Link href="/assets/images-2/project/project-4.jpg" className="lightbox-image" data-fancybox="gallery"><i className="far fa-search-plus" /></Link></li>
                                <li><Link href="/product-details"><i className="far fa-link" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-item">
                    <div className="inner-box">
                        <figure className="image-box"><img src="/assets/images-2/project/project-5.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="text">
                                <p>Traffic Law</p>
                                <h3><Link href="/product-details">Accident With Syndrome</Link></h3>
                            </div>
                            <ul className="other-links clearfix">
                                <li><Link href="/assets/images-2/project/project-5.jpg" className="lightbox-image" data-fancybox="gallery"><i className="far fa-search-plus" /></Link></li>
                                <li><Link href="/product-details"><i className="far fa-link" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-item">
                    <div className="inner-box">
                        <figure className="image-box"><img src="/assets/images-2/project/project-1.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="text">
                                <p>Traffic Law</p>
                                <h3><Link href="/product-details">Accident With Syndrome</Link></h3>
                            </div>
                            <ul className="other-links clearfix">
                                <li><Link href="/assets/images-2/project/project-1.jpg" className="lightbox-image" data-fancybox="gallery"><i className="far fa-search-plus" /></Link></li>
                                <li><Link href="/product-details"><i className="far fa-link" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-item">
                    <div className="inner-box">
                        <figure className="image-box"><img src="/assets/images-2/project/project-2.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="text">
                                <p>Traffic Law</p>
                                <h3><Link href="/product-details">Accident With Syndrome</Link></h3>
                            </div>
                            <ul className="other-links clearfix">
                                <li><Link href="/assets/images-2/project/project-2.jpg" className="lightbox-image" data-fancybox="gallery"><i className="far fa-search-plus" /></Link></li>
                                <li><Link href="/product-details"><i className="far fa-link" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-item">
                    <div className="inner-box">
                        <figure className="image-box"><img src="/assets/images-2/project/project-3.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="text">
                                <p>Traffic Law</p>
                                <h3><Link href="/product-details">Accident With Syndrome</Link></h3>
                            </div>
                            <ul className="other-links clearfix">
                                <li><Link href="/assets/images-2/project/project-3.jpg" className="lightbox-image" data-fancybox="gallery"><i className="far fa-search-plus" /></Link></li>
                                <li><Link href="/product-details"><i className="far fa-link" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-item">
                    <div className="inner-box">
                        <figure className="image-box"><img src="/assets/images-2/project/project-4.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="text">
                                <p>Traffic Law</p>
                                <h3><Link href="/product-details">Accident With Syndrome</Link></h3>
                            </div>
                            <ul className="other-links clearfix">
                                <li><Link href="/assets/images-2/project/project-4.jpg" className="lightbox-image" data-fancybox="gallery"><i className="far fa-search-plus" /></Link></li>
                                <li><Link href="/product-details"><i className="far fa-link" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-item">
                    <div className="inner-box">
                        <figure className="image-box"><img src="/assets/images-2/project/project-5.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="text">
                                <p>Traffic Law</p>
                                <h3><Link href="/product-details">Accident With Syndrome</Link></h3>
                            </div>
                            <ul className="other-links clearfix">
                                <li><Link href="/assets/images-2/project/project-5.jpg" className="lightbox-image" data-fancybox="gallery"><i className="far fa-search-plus" /></Link></li>
                                <li><Link href="/product-details"><i className="far fa-link" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-item">
                    <div className="inner-box">
                        <figure className="image-box"><img src="/assets/images-2/project/project-1.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="text">
                                <p>Traffic Law</p>
                                <h3><Link href="/product-details">Accident With Syndrome</Link></h3>
                            </div>
                            <ul className="other-links clearfix">
                                <li><Link href="/assets/images-2/project/project-1.jpg" className="lightbox-image" data-fancybox="gallery"><i className="far fa-search-plus" /></Link></li>
                                <li><Link href="/product-details"><i className="far fa-link" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-item">
                    <div className="inner-box">
                        <figure className="image-box"><img src="/assets/images-2/project/project-2.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="text">
                                <p>Traffic Law</p>
                                <h3><Link href="/product-details">Accident With Syndrome</Link></h3>
                            </div>
                            <ul className="other-links clearfix">
                                <li><Link href="/assets/images-2/project/project-2.jpg" className="lightbox-image" data-fancybox="gallery"><i className="far fa-search-plus" /></Link></li>
                                <li><Link href="/product-details"><i className="far fa-link" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-item">
                    <div className="inner-box">
                        <figure className="image-box"><img src="/assets/images-2/project/project-3.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="text">
                                <p>Traffic Law</p>
                                <h3><Link href="/product-details">Accident With Syndrome</Link></h3>
                            </div>
                            <ul className="other-links clearfix">
                                <li><Link href="/assets/images-2/project/project-3.jpg" className="lightbox-image" data-fancybox="gallery"><i className="far fa-search-plus" /></Link></li>
                                <li><Link href="/product-details"><i className="far fa-link" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-item">
                    <div className="inner-box">
                        <figure className="image-box"><img src="/assets/images-2/project/project-4.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="text">
                                <p>Traffic Law</p>
                                <h3><Link href="/product-details">Accident With Syndrome</Link></h3>
                            </div>
                            <ul className="other-links clearfix">
                                <li><Link href="/assets/images-2/project/project-4.jpg" className="lightbox-image" data-fancybox="gallery"><i className="far fa-search-plus" /></Link></li>
                                <li><Link href="/product-details"><i className="far fa-link" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-item">
                    <div className="inner-box">
                        <figure className="image-box"><img src="/assets/images-2/project/project-5.jpg" alt="" /></figure>
                        <div className="content-box">
                            <div className="text">
                                <p>Traffic Law</p>
                                <h3><Link href="/product-details">Accident With Syndrome</Link></h3>
                            </div>
                            <ul className="other-links clearfix">
                                <li><Link href="/assets/images-2/project/project-5.jpg" className="lightbox-image" data-fancybox="gallery"><i className="far fa-search-plus" /></Link></li>
                                <li><Link href="/product-details"><i className="far fa-link" /></Link></li>
                            </ul>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
