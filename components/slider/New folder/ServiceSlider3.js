'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
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
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 4,
            // spaceBetween: 30,
        },
    }
}
export default function ServiceSlider3() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="service-block-two">
                    <div className="inner-box">
                        <div className="image"><img src="/assets/images/resource/image-17.jpg" alt="" /></div>
                        <div className="icon"><span className="flaticon-bank" /></div>
                        <h4>Banking &amp; <br />capital market</h4>
                        <div className="link-btn"><Link href="#" className="theme-btn btn-style-two"><span className="btn-title">Read More <i className="flaticon-right" /></span></Link></div>
                        <div className="overlay" style={{ backgroundImage: 'url(assets/images/resource/image-17.jpg)' }}>
                            <div className="text">In a free hour when our <br />power choices when proven <br /> best distinguish. </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block-two">
                    <div className="inner-box">
                        <div className="image"><img src="/assets/images/resource/image-18.jpg" alt="" /></div>
                        <div className="icon"><span className="flaticon-insurance" /></div>
                        <h4>Finance &amp; <br />insurance market</h4>
                        <div className="link-btn"><Link href="#" className="theme-btn btn-style-two"><span className="btn-title">Read More <i className="flaticon-right" /></span></Link></div>
                        <div className="overlay" style={{ backgroundImage: 'url(assets/images/resource/image-18.jpg)' }}>
                            <div className="text">In a free hour when our <br />power choices when proven <br /> best distinguish. </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block-two">
                    <div className="inner-box">
                        <div className="image"><img src="/assets/images/resource/image-19.jpg" alt="" /></div>
                        <div className="icon"><span className="flaticon-trolley" /></div>
                        <h4>logistic &amp; <br /> trasportation</h4>
                        <div className="link-btn"><Link href="#" className="theme-btn btn-style-two"><span className="btn-title">Read More <i className="flaticon-right" /></span></Link></div>
                        <div className="overlay" style={{ backgroundImage: 'url(assets/images/resource/image-19.jpg)' }}>
                            <div className="text">In a free hour when our <br />power choices when proven <br /> best distinguish. </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block-two">
                    <div className="inner-box">
                        <div className="image"><img src="/assets/images/resource/image-30.jpg" alt="" /></div>
                        <div className="icon"><span className="flaticon-null-1" /></div>
                        <h4>Justice &amp; <br /> defence security</h4>
                        <div className="link-btn"><Link href="#" className="theme-btn btn-style-two"><span className="btn-title">Read More <i className="flaticon-right" /></span></Link></div>
                        <div className="overlay" style={{ backgroundImage: 'url(assets/images/resource/image-30.jpg)' }}>
                            <div className="text">In a free hour when our <br />power choices when proven <br /> best distinguish. </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block-two">
                    <div className="inner-box">
                        <div className="image"><img src="/assets/images/resource/image-17.jpg" alt="" /></div>
                        <div className="icon"><span className="flaticon-bank" /></div>
                        <h4>Banking &amp; <br />capital market</h4>
                        <div className="link-btn"><Link href="#" className="theme-btn btn-style-two"><span className="btn-title">Read More <i className="flaticon-right" /></span></Link></div>
                        <div className="overlay" style={{ backgroundImage: 'url(assets/images/resource/image-17.jpg)' }}>
                            <div className="text">In a free hour when our <br />power choices when proven <br /> best distinguish. </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block-two">
                    <div className="inner-box">
                        <div className="image"><img src="/assets/images/resource/image-18.jpg" alt="" /></div>
                        <div className="icon"><span className="flaticon-insurance" /></div>
                        <h4>Finance &amp; <br />insurance market</h4>
                        <div className="link-btn"><Link href="#" className="theme-btn btn-style-two"><span className="btn-title">Read More <i className="flaticon-right" /></span></Link></div>
                        <div className="overlay" style={{ backgroundImage: 'url(assets/images/resource/image-18.jpg)' }}>
                            <div className="text">In a free hour when our <br />power choices when proven <br /> best distinguish. </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block-two">
                    <div className="inner-box">
                        <div className="image"><img src="/assets/images/resource/image-19.jpg" alt="" /></div>
                        <div className="icon"><span className="flaticon-trolley" /></div>
                        <h4>logistic &amp; <br /> trasportation</h4>
                        <div className="link-btn"><Link href="#" className="theme-btn btn-style-two"><span className="btn-title">Read More <i className="flaticon-right" /></span></Link></div>
                        <div className="overlay" style={{ backgroundImage: 'url(assets/images/resource/image-19.jpg)' }}>
                            <div className="text">In a free hour when our <br />power choices when proven <br /> best distinguish. </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block-two">
                    <div className="inner-box">
                        <div className="image"><img src="/assets/images/resource/image-30.jpg" alt="" /></div>
                        <div className="icon"><span className="flaticon-null-1" /></div>
                        <h4>Justice &amp; <br /> defence security</h4>
                        <div className="link-btn"><Link href="#" className="theme-btn btn-style-two"><span className="btn-title">Read More <i className="flaticon-right" /></span></Link></div>
                        <div className="overlay" style={{ backgroundImage: 'url(assets/images/resource/image-30.jpg)' }}>
                            <div className="text">In a free hour when our <br />power choices when proven <br /> best distinguish. </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block-two">
                    <div className="inner-box">
                        <div className="image"><img src="/assets/images/resource/image-17.jpg" alt="" /></div>
                        <div className="icon"><span className="flaticon-bank" /></div>
                        <h4>Banking &amp; <br />capital market</h4>
                        <div className="link-btn"><Link href="#" className="theme-btn btn-style-two"><span className="btn-title">Read More <i className="flaticon-right" /></span></Link></div>
                        <div className="overlay" style={{ backgroundImage: 'url(assets/images/resource/image-17.jpg)' }}>
                            <div className="text">In a free hour when our <br />power choices when proven <br /> best distinguish. </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block-two">
                    <div className="inner-box">
                        <div className="image"><img src="/assets/images/resource/image-18.jpg" alt="" /></div>
                        <div className="icon"><span className="flaticon-insurance" /></div>
                        <h4>Finance &amp; <br />insurance market</h4>
                        <div className="link-btn"><Link href="#" className="theme-btn btn-style-two"><span className="btn-title">Read More <i className="flaticon-right" /></span></Link></div>
                        <div className="overlay" style={{ backgroundImage: 'url(assets/images/resource/image-18.jpg)' }}>
                            <div className="text">In a free hour when our <br />power choices when proven <br /> best distinguish. </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block-two">
                    <div className="inner-box">
                        <div className="image"><img src="/assets/images/resource/image-19.jpg" alt="" /></div>
                        <div className="icon"><span className="flaticon-trolley" /></div>
                        <h4>logistic &amp; <br /> trasportation</h4>
                        <div className="link-btn"><Link href="#" className="theme-btn btn-style-two"><span className="btn-title">Read More <i className="flaticon-right" /></span></Link></div>
                        <div className="overlay" style={{ backgroundImage: 'url(assets/images/resource/image-19.jpg)' }}>
                            <div className="text">In a free hour when our <br />power choices when proven <br /> best distinguish. </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block-two">
                    <div className="inner-box">
                        <div className="image"><img src="/assets/images/resource/image-30.jpg" alt="" /></div>
                        <div className="icon"><span className="flaticon-null-1" /></div>
                        <h4>Justice &amp; <br /> defence security</h4>
                        <div className="link-btn"><Link href="#" className="theme-btn btn-style-two"><span className="btn-title">Read More <i className="flaticon-right" /></span></Link></div>
                        <div className="overlay" style={{ backgroundImage: 'url(assets/images/resource/image-30.jpg)' }}>
                            <div className="text">In a free hour when our <br />power choices when proven <br /> best distinguish. </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </>
    )
}
