'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
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
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 4,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 5,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 5,
            // spaceBetween: 30,
        },
    }
}

export default function ServiceSlider10() {
    return (
        <>


            <Swiper {...swiperOptions} className="theme_carousel owl-theme service10-carousel">
                {/*Start Service Block Ten*/}
                <SwiperSlide className="service-block-ten text-center">
                    <div className="service-block-ten_bg" style={{ backgroundImage: 'url(assets/images-3/choose-block-nine-bg.jpg)' }} />
                    <div className="icon">
                        <span className="icon-schedule" />
                    </div>
                    <div className="title-holder">
                        <h3>Periodic Services</h3>
                        <p>1000 kms or 1 Month Warranty</p>
                    </div>
                    <div className="button">
                        <Link href="#" className="theme-btn btn-style-nine"><span className="btn-title">Read
                            More</span></Link>
                    </div>
                </SwiperSlide>
                {/*End Service Block Ten*/}
                {/*Start Service Block Ten*/}
                <SwiperSlide className="service-block-ten text-center">
                    <div className="service-block-ten_bg" style={{ backgroundImage: 'url(assets/images-3/choose-block-nine-bg.jpg)' }} />
                    <div className="icon">
                        <span className="icon-battery" />
                    </div>
                    <div className="title-holder">
                        <h3>Batteries</h3>
                        <p>Minimum 2 Years Warranty</p>
                    </div>
                    <div className="button">
                        <Link href="#" className="theme-btn btn-style-nine"><span className="btn-title">Read
                            More</span></Link>
                    </div>
                </SwiperSlide>
                {/*End Service Block Ten*/}
                {/*Start Service Block Ten*/}
                <SwiperSlide className="service-block-ten text-center">
                    <div className="service-block-ten_bg" style={{ backgroundImage: 'url(assets/images-3/choose-block-nine-bg.jpg)' }} />
                    <div className="icon">
                        <span className="icon-air-conditioner" />
                    </div>
                    <div className="title-holder">
                        <h3>AC Service</h3>
                        <p>500 kms or 1 Month Warranty</p>
                    </div>
                    <div className="button">
                        <Link href="#" className="theme-btn btn-style-nine"><span className="btn-title">Read
                            More</span></Link>
                    </div>
                </SwiperSlide>
                {/*End Service Block Ten*/}
                {/*Start Service Block Ten*/}
                <SwiperSlide className="service-block-ten text-center">
                    <div className="service-block-ten_bg" style={{ backgroundImage: 'url(assets/images-3/choose-block-nine-bg.jpg)' }} />
                    <div className="icon">
                        <span className="icon-tire" />
                    </div>
                    <div className="title-holder">
                        <h3>Tyres &amp; Wheel</h3>
                        <p>Inspection, Replacement ...</p>
                    </div>
                    <div className="button">
                        <Link href="#" className="theme-btn btn-style-nine"><span className="btn-title">Read
                            More</span></Link>
                    </div>
                </SwiperSlide>
                {/*End Service Block Ten*/}
                {/*Start Service Block Ten*/}
                <SwiperSlide className="service-block-ten text-center">
                    <div className="service-block-ten_bg" style={{ backgroundImage: 'url(assets/images-3/choose-block-nine-bg.jpg)' }} />
                    <div className="icon">
                        <span className="icon-painting" />
                    </div>
                    <div className="title-holder">
                        <h3>Denting &amp; Painting</h3>
                        <p>Will be the leading provider don</p>
                    </div>
                    <div className="button">
                        <Link href="#" className="theme-btn btn-style-nine"><span className="btn-title">Read
                            More</span></Link>
                    </div>
                </SwiperSlide>
                {/*End Service Block Ten*/}
            </Swiper>
        </>
    )
}
