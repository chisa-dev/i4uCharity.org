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
        <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Donation Carousel">
        {/*Donation Carousel Page Start*/}
        <section className="donation-carousel-page">
            <div className="container">
                <Swiper {...swiperOptions} className="donation-carousel-style owl-carousel owl-theme carousel-dot-style">
                    <SwiperSlide>
                    {/*Donate Three Single Start*/}
                    <div className="item">
                        <div className="donate-three__single">
                            <div className="donate-three__img-box">
                                <div className="donate-three__img">
                                    <img src="assets/images/donate/donate-3-1.jpg" alt=""/>
                                    <img src="assets/images/donate/donate-3-1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="donate-three__content">
                                <h3 className="donate-three__title"><Link href="donation-details">Children Cancer Help
                                        Fund</Link></h3>
                                <p className="donate-three__text">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                    voluptas sit asuraut</p>
                                <div className="donate-three__goals">
                                    <div className="donate-three__raised">
                                        <p>Raised:</p>
                                        <span>$5,090</span>
                                    </div>
                                    <div className="donate-three__raised">
                                        <p>Goal:</p>
                                        <span>$9,090</span>
                                    </div>
                                </div>
                                <div className="donate-three__progress">
                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="75%" style={{ width: '75%' }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Donate Three Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Donate Three Single Start*/}
                    <div className="item">
                        <div className="donate-three__single donate-three__single-2">
                            <div className="donate-three__img-box">
                                <div className="donate-three__img">
                                    <img src="assets/images/donate/donate-3-2.jpg" alt=""/>
                                    <img src="assets/images/donate/donate-3-2.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="donate-three__content">
                                <h3 className="donate-three__title"><Link href="donation-details">Clean Water & Health
                                        Food</Link></h3>
                                <p className="donate-three__text">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                    voluptas sit asuraut</p>
                                <div className="donate-three__goals">
                                    <div className="donate-three__raised">
                                        <p>Raised:</p>
                                        <span>$4,090</span>
                                    </div>
                                    <div className="donate-three__raised">
                                        <p>Goal:</p>
                                        <span>$6,090</span>
                                    </div>
                                </div>
                                <div className="donate-three__progress">
                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="75%" style={{ width: '75%' }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Donate Three Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Donate Three Single Start*/}
                    <div className="item">
                        <div className="donate-three__single donate-three__single-3">
                            <div className="donate-three__img-box">
                                <div className="donate-three__img">
                                    <img src="assets/images/donate/donate-3-3.jpg" alt=""/>
                                    <img src="assets/images/donate/donate-3-3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="donate-three__content">
                                <h3 className="donate-three__title"><Link href="donation-details">Medicine For
                                        Africans</Link></h3>
                                <p className="donate-three__text">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                    voluptas sit asuraut</p>
                                <div className="donate-three__goals">
                                    <div className="donate-three__raised">
                                        <p>Raised:</p>
                                        <span>$9,090</span>
                                    </div>
                                    <div className="donate-three__raised">
                                        <p>Goal:</p>
                                        <span>$11,090</span>
                                    </div>
                                </div>
                                <div className="donate-three__progress">
                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="75%" style={{ width: '75%' }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Donate Three Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Donate Three Single Start*/}
                    <div className="item">
                        <div className="donate-three__single donate-three__single-1">
                            <div className="donate-three__img-box">
                                <div className="donate-three__img">
                                    <img src="assets/images/donate/donate-3-4.jpg" alt=""/>
                                    <img src="assets/images/donate/donate-3-4.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="donate-three__content">
                                <h3 className="donate-three__title"><Link href="donation-details">Poverty Help Fund</Link>
                                </h3>
                                <p className="donate-three__text">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                    voluptas sit asuraut</p>
                                <div className="donate-three__goals">
                                    <div className="donate-three__raised">
                                        <p>Raised:</p>
                                        <span>$9,090</span>
                                    </div>
                                    <div className="donate-three__raised">
                                        <p>Goal:</p>
                                        <span>$11,090</span>
                                    </div>
                                </div>
                                <div className="donate-three__progress">
                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="75%" style={{ width: '75%' }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Donate Three Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Donate Three Single Start*/}
                    <div className="item">
                        <div className="donate-three__single donate-three__single-2">
                            <div className="donate-three__img-box">
                                <div className="donate-three__img">
                                    <img src="assets/images/donate/donate-3-5.jpg" alt=""/>
                                    <img src="assets/images/donate/donate-3-5.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="donate-three__content">
                                <h3 className="donate-three__title"><Link href="donation-details">Rights Of Poor
                                        Children</Link></h3>
                                <p className="donate-three__text">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                    voluptas sit asuraut</p>
                                <div className="donate-three__goals">
                                    <div className="donate-three__raised">
                                        <p>Raised:</p>
                                        <span>$9,090</span>
                                    </div>
                                    <div className="donate-three__raised">
                                        <p>Goal:</p>
                                        <span>$11,090</span>
                                    </div>
                                </div>
                                <div className="donate-three__progress">
                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="75%" style={{ width: '75%' }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Donate Three Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Donate Three Single Start*/}
                    <div className="item">
                        <div className="donate-three__single donate-three__single-3">
                            <div className="donate-three__img-box">
                                <div className="donate-three__img">
                                    <img src="assets/images/donate/donate-3-6.jpg" alt=""/>
                                    <img src="assets/images/donate/donate-3-6.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="donate-three__content">
                                <h3 className="donate-three__title"><Link href="donation-details">Africans Ecosystem</Link>
                                </h3>
                                <p className="donate-three__text">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                    voluptas sit asuraut</p>
                                <div className="donate-three__goals">
                                    <div className="donate-three__raised">
                                        <p>Raised:</p>
                                        <span>$9,090</span>
                                    </div>
                                    <div className="donate-three__raised">
                                        <p>Goal:</p>
                                        <span>$11,090</span>
                                    </div>
                                </div>
                                <div className="donate-three__progress">
                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="75%" style={{ width: '75%' }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Donate Three Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Donate Three Single Start*/}
                    <div className="item">
                        <div className="donate-three__single">
                            <div className="donate-three__img-box">
                                <div className="donate-three__img">
                                    <img src="assets/images/donate/donate-3-1.jpg" alt=""/>
                                    <img src="assets/images/donate/donate-3-1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="donate-three__content">
                                <h3 className="donate-three__title"><Link href="donation-details">Children Cancer Help
                                        Fund</Link></h3>
                                <p className="donate-three__text">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                    voluptas sit asuraut</p>
                                <div className="donate-three__goals">
                                    <div className="donate-three__raised">
                                        <p>Raised:</p>
                                        <span>$5,090</span>
                                    </div>
                                    <div className="donate-three__raised">
                                        <p>Goal:</p>
                                        <span>$9,090</span>
                                    </div>
                                </div>
                                <div className="donate-three__progress">
                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="75%" style={{ width: '75%' }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Donate Three Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Donate Three Single Start*/}
                    <div className="item">
                        <div className="donate-three__single donate-three__single-2">
                            <div className="donate-three__img-box">
                                <div className="donate-three__img">
                                    <img src="assets/images/donate/donate-3-2.jpg" alt=""/>
                                    <img src="assets/images/donate/donate-3-2.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="donate-three__content">
                                <h3 className="donate-three__title"><Link href="donation-details">Clean Water & Health
                                        Food</Link></h3>
                                <p className="donate-three__text">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                    voluptas sit asuraut</p>
                                <div className="donate-three__goals">
                                    <div className="donate-three__raised">
                                        <p>Raised:</p>
                                        <span>$4,090</span>
                                    </div>
                                    <div className="donate-three__raised">
                                        <p>Goal:</p>
                                        <span>$6,090</span>
                                    </div>
                                </div>
                                <div className="donate-three__progress">
                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="75%" style={{ width: '75%' }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Donate Three Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Donate Three Single Start*/}
                    <div className="item">
                        <div className="donate-three__single donate-three__single-3">
                            <div className="donate-three__img-box">
                                <div className="donate-three__img">
                                    <img src="assets/images/donate/donate-3-3.jpg" alt=""/>
                                    <img src="assets/images/donate/donate-3-3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="donate-three__content">
                                <h3 className="donate-three__title"><Link href="donation-details">Medicine For
                                        Africans</Link></h3>
                                <p className="donate-three__text">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                    voluptas sit asuraut</p>
                                <div className="donate-three__goals">
                                    <div className="donate-three__raised">
                                        <p>Raised:</p>
                                        <span>$9,090</span>
                                    </div>
                                    <div className="donate-three__raised">
                                        <p>Goal:</p>
                                        <span>$11,090</span>
                                    </div>
                                </div>
                                <div className="donate-three__progress">
                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="75%" style={{ width: '75%' }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Donate Three Single End*/}
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
        {/*Donation Carousel Page End*/}

            </Layout>
        </>
    )
}