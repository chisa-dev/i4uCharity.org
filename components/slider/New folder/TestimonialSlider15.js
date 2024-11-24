'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
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
            slidesPerView: 2,
            spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider15() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide-item">
                    <div className="inner-box">
                        <div className="icon-box"><i className="fas fa-quote-left" /></div>
                        <figure className="thumb-box"><img src="/assets/images-4/resource/testimonial-4.jpg" alt="" /></figure>
                        <h3>Thank you Envolve Consultants</h3>
                        <ul className="rating-box clearfix">
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                        </ul>
                        <p>I am happy to be a student of Envolve consultants as I am very much satisfied with their services. I am very much thankful to the staff for counseling me.</p>
                        <h3>Nathan Felix, <span>Student Visa Canada</span></h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="inner-box">
                        <div className="icon-box"><i className="fas fa-quote-left" /></div>
                        <figure className="thumb-box"><img src="/assets/images-4/resource/testimonial-5.jpg" alt="" /></figure>
                        <h3>I had a Very Good Experience</h3>
                        <ul className="rating-box clearfix">
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                        </ul>
                        <p>My whole journey in the consultancy was wonderful, thanks to the staff especially Sadar Team as that helped me everytime. From finding the university.</p>
                        <h3>Austin Jacob, <span>PR Visa United States</span></h3>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
