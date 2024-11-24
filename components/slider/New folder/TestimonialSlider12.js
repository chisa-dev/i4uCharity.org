'use client'
import { Autoplay, Navigation, Pagination,FreeMode } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation,FreeMode],
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    freeMode: true,

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
export default function TestimonialSlider12() {
    return (
        <>

            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide-item">
                    <div className="inner-box">
                        <figure className="quote"><img src="/assets/images-2/icons/quote-1.png" alt="" /></figure>
                        <figure className="thumb-box"><img src="/assets/images-2/resource/testimonial-1.png" alt="" /></figure>
                        <ul className="rating-box clearfix">
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                        </ul>
                        <p>I am happy to be a student of Envolve consultants as I am very much satisfied <br />with their services. I am very much thankful to <br />the staff for counseling me.</p>
                        <h3>Lamont Shaun, <span>Student Visa Canada</span></h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="inner-box">
                        <figure className="quote"><img src="/assets/images-2/icons/quote-1.png" alt="" /></figure>
                        <figure className="thumb-box"><img src="/assets/images-2/resource/testimonial-2.png" alt="" /></figure>
                        <ul className="rating-box clearfix">
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                        </ul>
                        <p>I am happy to be a student of Envolve consultants as I am very much satisfied <br />with their services. I am very much thankful to <br />the staff for counseling me.</p>
                        <h3>Raff Leonard, <span>Student Visa Canada</span></h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="inner-box">
                        <figure className="quote"><img src="/assets/images-2/icons/quote-1.png" alt="" /></figure>
                        <figure className="thumb-box"><img src="/assets/images-2/resource/testimonial-3.png" alt="" /></figure>
                        <ul className="rating-box clearfix">
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                        </ul>
                        <p>I am happy to be a student of Envolve consultants as I am very much satisfied <br />with their services. I am very much thankful to <br />the staff for counseling me.</p>
                        <h3>Xavier Winston, <span>Student Visa Canada</span></h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="inner-box">
                        <figure className="quote"><img src="/assets/images-2/icons/quote-1.png" alt="" /></figure>
                        <figure className="thumb-box"><img src="/assets/images-2/resource/testimonial-3.png" alt="" /></figure>
                        <ul className="rating-box clearfix">
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                        </ul>
                        <p>I am happy to be a student of Envolve consultants as I am very much satisfied <br />with their services. I am very much thankful to <br />the staff for counseling me.</p>
                        <h3>Xavier Winston, <span>Student Visa Canada</span></h3>
                    </div>
                </SwiperSlide>
            </Swiper>


        </>
    )
}
