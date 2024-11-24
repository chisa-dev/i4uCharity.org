'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
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
            slidesPerView: 2,
            
        },
        1199: {
            slidesPerView: 3,
            
        },
        1350: {
            slidesPerView: 3,
            
        },
    }



}
export default function Home() {

    return (
        <>
        <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Blog & News">
        {/*Blog Carousel Page Start*/}
        <section className="blog-carousel-page">
            <div className="container">
                <Swiper {...swiperOptions} className="blog-carousel-style owl-carousel owl-theme carousel-dot-style">
                    <SwiperSlide>
                    {/*Blog One Single Start*/}
                    <div className="item">
                        <div className="blog-one__single">
                            <div className="blog-one__img-box">
                                <div className="blog-one__img">
                                    <img src="assets/images/blog/blog-1-1.jpg" alt=""/>
                                </div>
                                <div className="blog-one__date">
                                    <p>20<span><br/>feb</span></p>
                                </div>
                            </div>
                            <div className="blog-one__content">
                                <h4 className="blog-one__title"><Link href="blog-details">Caring for the Elderly and
                                        Vulnerable Strategy </Link></h4>
                                <div className="blog-one__btn-box">
                                    <Link href="blog-details" className="blog-one__btn thm-btn">rEAD mORe<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog One Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Blog One Single Start*/}
                    <div className="item">
                        <div className="blog-one__single">
                            <div className="blog-one__img-box">
                                <div className="blog-one__img">
                                    <img src="assets/images/blog/blog-1-2.jpg" alt=""/>
                                </div>
                                <div className="blog-one__date">
                                    <p>15<span><br/>Nov</span></p>
                                </div>
                            </div>
                            <div className="blog-one__content">
                                <h4 className="blog-one__title"><Link href="blog-details">Our Goal Is Help The Poor Child
                                        Around The World</Link></h4>
                                <div className="blog-one__btn-box">
                                    <Link href="blog-details" className="blog-one__btn thm-btn">rEAD mORe<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog One Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Blog One Single Start*/}
                    <div className="item">
                        <div className="blog-one__single">
                            <div className="blog-one__img-box">
                                <div className="blog-one__img">
                                    <img src="assets/images/blog/blog-1-3.jpg" alt=""/>
                                </div>
                                <div className="blog-one__date">
                                    <p>25<span><br/>Jun</span></p>
                                </div>
                            </div>
                            <div className="blog-one__content">
                                <h4 className="blog-one__title"><Link href="blog-details">Education For Poor Children Is A
                                        Must Now</Link></h4>
                                <div className="blog-one__btn-box">
                                    <Link href="blog-details" className="blog-one__btn thm-btn">rEAD mORe<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog One Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Blog One Single Start*/}
                    <div className="item">
                        <div className="blog-one__single">
                            <div className="blog-one__img-box">
                                <div className="blog-one__img">
                                    <img src="assets/images/blog/blog-1-4.jpg" alt=""/>
                                </div>
                                <div className="blog-one__date">
                                    <p>25<span><br/>Jun</span></p>
                                </div>
                            </div>
                            <div className="blog-one__content">
                                <h4 className="blog-one__title"><Link href="blog-details">Education For Poor Children Is A
                                        Must Now</Link></h4>
                                <div className="blog-one__btn-box">
                                    <Link href="blog-details" className="blog-one__btn thm-btn">rEAD mORe<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog One Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Blog One Single Start*/}
                    <div className="item">
                        <div className="blog-one__single">
                            <div className="blog-one__img-box">
                                <div className="blog-one__img">
                                    <img src="assets/images/blog/blog-1-5.jpg" alt=""/>
                                </div>
                                <div className="blog-one__date">
                                    <p>25<span><br/>Jun</span></p>
                                </div>
                            </div>
                            <div className="blog-one__content">
                                <h4 className="blog-one__title"><Link href="blog-details">Our Goal Is Help The Poor Child
                                        Around The World</Link></h4>
                                <div className="blog-one__btn-box">
                                    <Link href="blog-details" className="blog-one__btn thm-btn">rEAD mORe<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog One Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Blog One Single Start*/}
                    <div className="item">
                        <div className="blog-one__single">
                            <div className="blog-one__img-box">
                                <div className="blog-one__img">
                                    <img src="assets/images/blog/blog-1-6.jpg" alt=""/>
                                </div>
                                <div className="blog-one__date">
                                    <p>25<span><br/>Jun</span></p>
                                </div>
                            </div>
                            <div className="blog-one__content">
                                <h4 className="blog-one__title"><Link href="blog-details">Caring for the Elderly and
                                        Vulnerable Strategy</Link></h4>
                                <div className="blog-one__btn-box">
                                    <Link href="blog-details" className="blog-one__btn thm-btn">rEAD mORe<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog One Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Blog One Single Start*/}
                    <div className="item">
                        <div className="blog-one__single">
                            <div className="blog-one__img-box">
                                <div className="blog-one__img">
                                    <img src="assets/images/blog/blog-1-1.jpg" alt=""/>
                                </div>
                                <div className="blog-one__date">
                                    <p>20<span><br/>feb</span></p>
                                </div>
                            </div>
                            <div className="blog-one__content">
                                <h4 className="blog-one__title"><Link href="blog-details">Caring for the Elderly and
                                        Vulnerable Strategy </Link></h4>
                                <div className="blog-one__btn-box">
                                    <Link href="blog-details" className="blog-one__btn thm-btn">rEAD mORe<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog One Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Blog One Single Start*/}
                    <div className="item">
                        <div className="blog-one__single">
                            <div className="blog-one__img-box">
                                <div className="blog-one__img">
                                    <img src="assets/images/blog/blog-1-2.jpg" alt=""/>
                                </div>
                                <div className="blog-one__date">
                                    <p>15<span><br/>Nov</span></p>
                                </div>
                            </div>
                            <div className="blog-one__content">
                                <h4 className="blog-one__title"><Link href="blog-details">Our Goal Is Help The Poor Child
                                        Around The World</Link></h4>
                                <div className="blog-one__btn-box">
                                    <Link href="blog-details" className="blog-one__btn thm-btn">rEAD mORe<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog One Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Blog One Single Start*/}
                    <div className="item">
                        <div className="blog-one__single">
                            <div className="blog-one__img-box">
                                <div className="blog-one__img">
                                    <img src="assets/images/blog/blog-1-3.jpg" alt=""/>
                                </div>
                                <div className="blog-one__date">
                                    <p>25<span><br/>Jun</span></p>
                                </div>
                            </div>
                            <div className="blog-one__content">
                                <h4 className="blog-one__title"><Link href="blog-details">Education For Poor Children Is A
                                        Must Now</Link></h4>
                                <div className="blog-one__btn-box">
                                    <Link href="blog-details" className="blog-one__btn thm-btn">rEAD mORe<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog One Single End*/}
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
        {/*Blog Carousel Page End*/}
            </Layout>
        </>
    )
}