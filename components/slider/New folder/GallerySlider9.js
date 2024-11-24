'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination, FreeMode } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation, FreeMode],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    freemode: true,
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

export default function GallerySlider9() {
    return (
        <>

            <Swiper {...swiperOptions} className="theme_carousel owl-theme gallery-nine-carousel owl-nav-style-one">
                {/*Start Single Gallery Item*/}
                <SwiperSlide className="single-gallery-item">
                    <div className="img-holder">
                        <div className="inner">
                            <img src="/assets/images-3/gallery/gallery-v9-1.jpg" alt="" />
                        </div>
                        <div className="overlay-content">
                            <div className="title-box">
                                <p>Engine Work</p>
                                <h3><Link href="#">Business Leadership</Link></h3>
                            </div>
                            <div className="button">
                                <Link className="lightbox-image" data-fancybox="gallery" href="#">
                                    <span className="icon-plus" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/*End Single Gallery Item*/}
                {/*Start Single Gallery Item*/}
                <SwiperSlide className="single-gallery-item">
                    <div className="img-holder">
                        <div className="inner">
                            <img src="/assets/images-3/gallery/gallery-v9-2.jpg" alt="" />
                        </div>
                        <div className="overlay-content">
                            <div className="title-box">
                                <p>Engine Work</p>
                                <h3><Link href="#">Business Leadership</Link></h3>
                            </div>
                            <div className="button">
                                <Link className="lightbox-image" data-fancybox="gallery" href="#">
                                    <span className="icon-plus" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/*End Single Gallery Item*/}
                {/*Start Single Gallery Item*/}
                <SwiperSlide className="single-gallery-item">
                    <div className="img-holder">
                        <div className="inner">
                            <img src="/assets/images-3/gallery/gallery-v9-3.jpg" alt="" />
                        </div>
                        <div className="overlay-content">
                            <div className="title-box">
                                <p>Engine Work</p>
                                <h3><Link href="#">Business Leadership</Link></h3>
                            </div>
                            <div className="button">
                                <Link className="lightbox-image" data-fancybox="gallery" href="#">
                                    <span className="icon-plus" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="single-gallery-item">
                    <div className="img-holder">
                        <div className="inner">
                            <img src="/assets/images-3/gallery/gallery-v9-3.jpg" alt="" />
                        </div>
                        <div className="overlay-content">
                            <div className="title-box">
                                <p>Engine Work</p>
                                <h3><Link href="#">Business Leadership</Link></h3>
                            </div>
                            <div className="button">
                                <Link className="lightbox-image" data-fancybox="gallery" href="#">
                                    <span className="icon-plus" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/*End Single Gallery Item*/}
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
