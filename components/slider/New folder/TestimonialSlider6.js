'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
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

    // breakpoints: {
    //     320: {
    //         slidesPerView: 1,
    //         // spaceBetween: 30,
    //     },
    //     575: {
    //         slidesPerView: 2,
    //         // spaceBetween: 30,
    //     },
    //     767: {
    //         slidesPerView: 2,
    //         // spaceBetween: 30,
    //     },
    //     991: {
    //         slidesPerView: 2,
    //         // spaceBetween: 30,
    //     },
    //     1199: {
    //         slidesPerView: 2,
    //         // spaceBetween: 30,
    //     },
    //     1350: {
    //         slidesPerView: 2,
    //         // spaceBetween: 30,
    //     },
    // }
}
export default function TestimonialSlider6() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide-item">
                    <div className="inner-box">
                        <figure className="thumb-box"><img src="/assets/images-2/resource/testimonial-1.png" alt="" /></figure>
                        <ul className="rating clearfix">
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                        </ul>
                        <div className="text">
                            <p>I am very pleased by the way you addressed the <br />court. Your presence and presentation in court today was very important and decisive.</p>
                            <h3>Nathan Felix</h3>
                            <span className="designation">CEO, High Rise Construction</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="inner-box">
                        <figure className="thumb-box"><img src="/assets/images-2/resource/testimonial-2.png" alt="" /></figure>
                        <ul className="rating clearfix">
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                        </ul>
                        <div className="text">
                            <p>I am very pleased by the way you addressed the <br />court. Your presence and presentation in court today was very important and decisive.</p>
                            <h3>Nathan Felix</h3>
                            <span className="designation">CEO, High Rise Construction</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="inner-box">
                        <figure className="thumb-box"><img src="/assets/images-2/resource/testimonial-3.png" alt="" /></figure>
                        <ul className="rating clearfix">
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                            <li><i className="fas fa-star" /></li>
                        </ul>
                        <div className="text">
                            <p>I am very pleased by the way you addressed the <br />court. Your presence and presentation in court today was very important and decisive.</p>
                            <h3>Nathan Felix</h3>
                            <span className="designation">CEO, High Rise Construction</span>
                        </div>
                    </div>
                </SwiperSlide>

                <div className="owl-nav">
                    <button type="button" role="presentation" className="owl-prev h1p">
                        <span aria-label="Previous">‹</span>
                    </button>
                    <button type="button" role="presentation" className="owl-next h1n">
                        <span aria-label="Next">›</span>
                    </button>
                </div>

            </Swiper>

        </>
    )
}
