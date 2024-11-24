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
        <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Events Carousel">
        {/*Events Carousel Page Start*/}
        <section className="events-carousel-page">
            <div className="container">
                <Swiper {...swiperOptions} className="events-carousel-style owl-carousel owl-theme carousel-dot-style">
                    <SwiperSlide>
                    {/*Event One Single Start*/}
                    <div className="item">
                        <div className="event-one__single">
                            <div className="event-one__img-box">
                                <div className="event-one__img">
                                    <img src="assets/images/event/event-1-1.jpg" alt=""/>
                                </div>
                                <div className="event-one__date">
                                    <p><span className="icon-clock"></span>20th Dec, 2024</p>
                                </div>
                            </div>
                            <div className="event-one__content">
                                <h4 className="event-one__title"><Link href="cause-details">Donation Drive</Link></h4>
                                <p className="event-one__text">Lorem Ipsum is simply dummy a of the printing and type
                                    setting industry Loreaim Ipsum has</p>
                                <p className="event-one__location"><span className="icon-pin"></span>6391 Elgin St. Celina,
                                    10299</p>
                                <div className="event-one__btn-box">
                                    <Link href="donation-details" className="event-one__btn thm-btn">Donate Now<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Event One Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Event One Single Start*/}
                    <div className="item">
                        <div className="event-one__single">
                            <div className="event-one__img-box">
                                <div className="event-one__img">
                                    <img src="assets/images/event/event-1-2.jpg" alt=""/>
                                </div>
                                <div className="event-one__date">
                                    <p><span className="icon-clock"></span>15th nov, 2023</p>
                                </div>
                            </div>
                            <div className="event-one__content">
                                <h4 className="event-one__title"><Link href="cause-details">win-win survival</Link></h4>
                                <p className="event-one__text">Lorem Ipsum is simply dummy a of the printing and type
                                    setting industry Loreaim Ipsum has</p>
                                <p className="event-one__location"><span className="icon-pin"></span>6391 Elgin St. Celina,
                                    10299</p>
                                <div className="event-one__btn-box">
                                    <Link href="donation-details" className="event-one__btn thm-btn">Donate Now<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Event One Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Event One Single Start*/}
                    <div className="item">
                        <div className="event-one__single">
                            <div className="event-one__img-box">
                                <div className="event-one__img">
                                    <img src="assets/images/event/event-1-3.jpg" alt=""/>
                                </div>
                                <div className="event-one__date">
                                    <p><span className="icon-clock"></span>19th Feb, 2024</p>
                                </div>
                            </div>
                            <div className="event-one__content">
                                <h4 className="event-one__title"><Link href="cause-details">Children Education.</Link></h4>
                                <p className="event-one__text">Lorem Ipsum is simply dummy a of the printing and type
                                    setting industry Loreaim Ipsum has</p>
                                <p className="event-one__location"><span className="icon-pin"></span>6391 Elgin St. Celina,
                                    10299</p>
                                <div className="event-one__btn-box">
                                    <Link href="donation-details" className="event-one__btn thm-btn">Donate Now<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Event One Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Event One Single Start*/}
                    <div className="item">
                        <div className="event-one__single">
                            <div className="event-one__img-box">
                                <div className="event-one__img">
                                    <img src="assets/images/event/event-1-4.jpg" alt=""/>
                                </div>
                                <div className="event-one__date">
                                    <p><span className="icon-clock"></span>19th Feb, 2024</p>
                                </div>
                            </div>
                            <div className="event-one__content">
                                <h4 className="event-one__title"><Link href="cause-details">win-win survival</Link></h4>
                                <p className="event-one__text">Lorem Ipsum is simply dummy a of the printing and type
                                    setting industry Loreaim Ipsum has</p>
                                <p className="event-one__location"><span className="icon-pin"></span>6391 Elgin St. Celina,
                                    10299</p>
                                <div className="event-one__btn-box">
                                    <Link href="donation-details" className="event-one__btn thm-btn">Donate Now<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Event One Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Event One Single Start*/}
                    <div className="item">
                        <div className="event-one__single">
                            <div className="event-one__img-box">
                                <div className="event-one__img">
                                    <img src="assets/images/event/event-1-5.jpg" alt=""/>
                                </div>
                                <div className="event-one__date">
                                    <p><span className="icon-clock"></span>19th Feb, 2024</p>
                                </div>
                            </div>
                            <div className="event-one__content">
                                <h4 className="event-one__title"><Link href="cause-details">Children Education.</Link></h4>
                                <p className="event-one__text">Lorem Ipsum is simply dummy a of the printing and type
                                    setting industry Loreaim Ipsum has</p>
                                <p className="event-one__location"><span className="icon-pin"></span>6391 Elgin St. Celina,
                                    10299</p>
                                <div className="event-one__btn-box">
                                    <Link href="donation-details" className="event-one__btn thm-btn">Donate Now<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Event One Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Event One Single Start*/}
                    <div className="item">
                        <div className="event-one__single">
                            <div className="event-one__img-box">
                                <div className="event-one__img">
                                    <img src="assets/images/event/event-1-6.jpg" alt=""/>
                                </div>
                                <div className="event-one__date">
                                    <p><span className="icon-clock"></span>19th Feb, 2024</p>
                                </div>
                            </div>
                            <div className="event-one__content">
                                <h4 className="event-one__title"><Link href="cause-details">Donation Drive</Link></h4>
                                <p className="event-one__text">Lorem Ipsum is simply dummy a of the printing and type
                                    setting industry Loreaim Ipsum has</p>
                                <p className="event-one__location"><span className="icon-pin"></span>6391 Elgin St. Celina,
                                    10299</p>
                                <div className="event-one__btn-box">
                                    <Link href="donation-details" className="event-one__btn thm-btn">Donate Now<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Event One Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Event One Single Start*/}
                    <div className="item">
                        <div className="event-one__single">
                            <div className="event-one__img-box">
                                <div className="event-one__img">
                                    <img src="assets/images/event/event-1-1.jpg" alt=""/>
                                </div>
                                <div className="event-one__date">
                                    <p><span className="icon-clock"></span>20th Dec, 2024</p>
                                </div>
                            </div>
                            <div className="event-one__content">
                                <h4 className="event-one__title"><Link href="cause-details">Donation Drive</Link></h4>
                                <p className="event-one__text">Lorem Ipsum is simply dummy a of the printing and type
                                    setting industry Loreaim Ipsum has</p>
                                <p className="event-one__location"><span className="icon-pin"></span>6391 Elgin St. Celina,
                                    10299</p>
                                <div className="event-one__btn-box">
                                    <Link href="donation-details" className="event-one__btn thm-btn">Donate Now<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Event One Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Event One Single Start*/}
                    <div className="item">
                        <div className="event-one__single">
                            <div className="event-one__img-box">
                                <div className="event-one__img">
                                    <img src="assets/images/event/event-1-2.jpg" alt=""/>
                                </div>
                                <div className="event-one__date">
                                    <p><span className="icon-clock"></span>15th nov, 2023</p>
                                </div>
                            </div>
                            <div className="event-one__content">
                                <h4 className="event-one__title"><Link href="cause-details">win-win survival</Link></h4>
                                <p className="event-one__text">Lorem Ipsum is simply dummy a of the printing and type
                                    setting industry Loreaim Ipsum has</p>
                                <p className="event-one__location"><span className="icon-pin"></span>6391 Elgin St. Celina,
                                    10299</p>
                                <div className="event-one__btn-box">
                                    <Link href="donation-details" className="event-one__btn thm-btn">Donate Now<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Event One Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Event One Single Start*/}
                    <div className="item">
                        <div className="event-one__single">
                            <div className="event-one__img-box">
                                <div className="event-one__img">
                                    <img src="assets/images/event/event-1-3.jpg" alt=""/>
                                </div>
                                <div className="event-one__date">
                                    <p><span className="icon-clock"></span>19th Feb, 2024</p>
                                </div>
                            </div>
                            <div className="event-one__content">
                                <h4 className="event-one__title"><Link href="cause-details">Children Education.</Link></h4>
                                <p className="event-one__text">Lorem Ipsum is simply dummy a of the printing and type
                                    setting industry Loreaim Ipsum has</p>
                                <p className="event-one__location"><span className="icon-pin"></span>6391 Elgin St. Celina,
                                    10299</p>
                                <div className="event-one__btn-box">
                                    <Link href="donation-details" className="event-one__btn thm-btn">Donate Now<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Event One Single End*/}
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
        {/*Events Carousel Page End*/}

            </Layout>
        </>
    )
}