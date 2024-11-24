'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            
        },
        575: {
            slidesPerView: 1,
            
        },
        767: {
            slidesPerView: 1,
            
        },
        991: {
            slidesPerView: 1,
            
        },
        1199: {
            slidesPerView: 1,
            
        },
        1350: {
            slidesPerView: 1,
            
        },
    }



}


export default function Testimonial() {
    return (
        <>

        {/*Testimonial One Start */}
        <section className="testimonial-one testimonial-two">
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">Testimonial</span>
                    </div>
                    <h2 className="section-title__title title-animation">Hope What They <br/> <span>Say</span> About Us</h2>
                </div>
                <Swiper {...swiperOptions} className="testimonial-one__carousel owl-theme owl-carousel">
                    <SwiperSlide>
                    {/*Testimonial One Single Start */}
                    <div className="item">
                        <div className="testimonial-one__single">
                            <div className="testimonial-one__rating">
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                            </div>
                            <p className="testimonial-one__text">Listened carefully to Lisa's needs and translated them into
                                a stunning is a website. The design is modern and to calming, with beautiful imagery
                                that captures the essence of Blooming</p>
                            <div className="testimonial-one__client-info">
                                <div className="testimonial-one__client-img">
                                    <img src="assets/images/testimonial/testimonial-1-1.jpg" alt=""/>
                                </div>
                                <div className="testimonial-one__client-content">
                                    <h3 className="testimonial-one__client-name"><Link href="testimonials">Darlene
                                            Robertson</Link></h3>
                                    <p className="testimonial-one__client-sub-title">Web Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Testimonial One Single End */}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Testimonial One Single Start */}
                    <div className="item">
                        <div className="testimonial-one__single">
                            <div className="testimonial-one__rating">
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                            </div>
                            <p className="testimonial-one__text">Listened carefully to Lisa's needs and translated them into
                                a stunning is a website. The design is modern and to calming, with beautiful imagery
                                that captures the essence of Blooming</p>
                            <div className="testimonial-one__client-info">
                                <div className="testimonial-one__client-img">
                                    <img src="assets/images/testimonial/testimonial-1-2.jpg" alt=""/>
                                </div>
                                <div className="testimonial-one__client-content">
                                    <h3 className="testimonial-one__client-name"><Link href="testimonials">Floyd Miles</Link>
                                    </h3>
                                    <p className="testimonial-one__client-sub-title">Medical Assistant</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Testimonial One Single End */}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Testimonial One Single Start */}
                    <div className="item">
                        <div className="testimonial-one__single">
                            <div className="testimonial-one__rating">
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                            </div>
                            <p className="testimonial-one__text">Listened carefully to Lisa's needs and translated them into
                                a stunning is a website. The design is modern and to calming, with beautiful imagery
                                that captures the essence of Blooming</p>
                            <div className="testimonial-one__client-info">
                                <div className="testimonial-one__client-img">
                                    <img src="assets/images/testimonial/testimonial-1-3.jpg" alt=""/>
                                </div>
                                <div className="testimonial-one__client-content">
                                    <h3 className="testimonial-one__client-name"><Link href="testimonials">Leslie
                                            Alexander</Link></h3>
                                    <p className="testimonial-one__client-sub-title">Web Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Testimonial One Single End */}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Testimonial One Single Start */}
                    <div className="item">
                        <div className="testimonial-one__single">
                            <div className="testimonial-one__rating">
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                                <span className="fas fa-star"></span>
                            </div>
                            <p className="testimonial-one__text">Listened carefully to Lisa's needs and translated them into
                                a stunning is a website. The design is modern and to calming, with beautiful imagery
                                that captures the essence of Blooming</p>
                            <div className="testimonial-one__client-info">
                                <div className="testimonial-one__client-img">
                                    <img src="assets/images/testimonial/testimonial-1-4.jpg" alt=""/>
                                </div>
                                <div className="testimonial-one__client-content">
                                    <h3 className="testimonial-one__client-name"><Link href="testimonials">Cameron
                                            Williamson</Link></h3>
                                    <p className="testimonial-one__client-sub-title">Medical Assistant</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Testimonial One Single End */}
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
        {/*Testimonial One End */}
        

            
        </>
    )
}
