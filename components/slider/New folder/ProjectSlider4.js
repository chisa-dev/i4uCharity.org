'use client'
import { Autoplay, Navigation, Pagination,FreeMode } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation,FreeMode],
    slidesPerView: 1,
    spaceBetween: 30,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,
    freeMode: true,
    centeredSlides: true,

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
            slidesPerView: 2,
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
export default function ProjectSlider4() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="project-block-two">
                    <div className="inner-box">
                        <div className="image"><img src="/assets/images/gallery/gallery-2-1.jpg" alt="" /></div>
                        <div className="content">
                            <div className="left-box">
                                <div className="category">Marketing</div>
                                <h3>Business Leadership</h3>
                            </div>
                            <div className="text">Rejects pleasures secure other simple and well work <br /> greater occur endures project. </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="project-block-two">
                    <div className="inner-box">
                        <div className="image"><img src="/assets/images/gallery/gallery-2-2.jpg" alt="" /></div>
                        <div className="content">
                            <div className="left-box">
                                <div className="category">Marketing</div>
                                <h3>Business Leadership</h3>
                            </div>
                            <div className="text">Rejects pleasures secure other simple and well work <br /> greater occur endures project. </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="project-block-two">
                    <div className="inner-box">
                        <div className="image"><img src="/assets/images/gallery/gallery-2-3.jpg" alt="" /></div>
                        <div className="content">
                            <div className="left-box">
                                <div className="category">Marketing</div>
                                <h3>Business Leadership</h3>
                            </div>
                            <div className="text">Rejects pleasures secure other simple and well work <br /> greater occur endures project. </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="project-block-two">
                    <div className="inner-box">
                        <div className="image"><img src="/assets/images/gallery/gallery-2-1.jpg" alt="" /></div>
                        <div className="content">
                            <div className="left-box">
                                <div className="category">Marketing</div>
                                <h3>Business Leadership</h3>
                            </div>
                            <div className="text">Rejects pleasures secure other simple and well work <br /> greater occur endures project. </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="project-block-two">
                    <div className="inner-box">
                        <div className="image"><img src="/assets/images/gallery/gallery-2-2.jpg" alt="" /></div>
                        <div className="content">
                            <div className="left-box">
                                <div className="category">Marketing</div>
                                <h3>Business Leadership</h3>
                            </div>
                            <div className="text">Rejects pleasures secure other simple and well work <br /> greater occur endures project. </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="project-block-two">
                    <div className="inner-box">
                        <div className="image"><img src="/assets/images/gallery/gallery-2-3.jpg" alt="" /></div>
                        <div className="content">
                            <div className="left-box">
                                <div className="category">Marketing</div>
                                <h3>Business Leadership</h3>
                            </div>
                            <div className="text">Rejects pleasures secure other simple and well work <br /> greater occur endures project. </div>
                        </div>
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
