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
        <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Volunteer Carousel">
        {/*Volunteer Carousel Page Start*/}
        <section className="volunteer-carousel-page">
            <div className="container">
                <Swiper {...swiperOptions} className="volunteer-carousel-style owl-carousel owl-theme carousel-dot-style">
                    <SwiperSlide>
                    {/*Volunteer Page Single Start*/}
                    <div className="item">
                        <div className="team-one__single">
                            <div className="team-one__img-box">
                                <div className="team-one__img">
                                    <img src="assets/images/team/volunteer-page-1-1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="team-one__content">
                                <div className="team-one__name-box">
                                    <h4 className="team-one__name"><Link href="volunteer-details">Arlene McCoy</Link>
                                    </h4>
                                    <p className="team-one__sub-title">Nursing Assistant</p>
                                </div>
                                <div className="team-one__share-and-social">
                                    <div className="team-one__social">
                                        <Link href="volunteer-details"><span className="icon-facebook"></span></Link>
                                        <Link href="volunteer-details"><span className="icon-instagram"></span></Link>
                                        <Link href="volunteer-details"><span className="icon-twitter"></span></Link>
                                        <Link href="volunteer-details"><span className="icon-link-in"></span></Link>
                                    </div>
                                    <div className="team-one__share">
                                        <Link href="volunteer-details"><span className="icon-share"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Volunteer Page Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Volunteer Page Single Start*/}
                    <div className="item">
                        <div className="team-one__single">
                            <div className="team-one__img-box">
                                <div className="team-one__img">
                                    <img src="assets/images/team/volunteer-page-1-2.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="team-one__content">
                                <div className="team-one__name-box">
                                    <h4 className="team-one__name"><Link href="volunteer-details">Jenny Wilson</Link>
                                    </h4>
                                    <p className="team-one__sub-title">Web Designer</p>
                                </div>
                                <div className="team-one__share-and-social">
                                    <div className="team-one__social">
                                        <Link href="volunteer-details"><span className="icon-facebook"></span></Link>
                                        <Link href="volunteer-details"><span className="icon-instagram"></span></Link>
                                        <Link href="volunteer-details"><span className="icon-twitter"></span></Link>
                                        <Link href="volunteer-details"><span className="icon-link-in"></span></Link>
                                    </div>
                                    <div className="team-one__share">
                                        <Link href="volunteer-details"><span className="icon-share"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Volunteer Page Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Volunteer Page Single Start*/}
                    <div className="item">
                        <div className="team-one__single">
                            <div className="team-one__img-box">
                                <div className="team-one__img">
                                    <img src="assets/images/team/volunteer-page-1-3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="team-one__content">
                                <div className="team-one__name-box">
                                    <h4 className="team-one__name"><Link href="volunteer-details">Robert Fox</Link>
                                    </h4>
                                    <p className="team-one__sub-title">Marketing Coordinator</p>
                                </div>
                                <div className="team-one__share-and-social">
                                    <div className="team-one__social">
                                        <Link href="volunteer-details"><span className="icon-facebook"></span></Link>
                                        <Link href="volunteer-details"><span className="icon-instagram"></span></Link>
                                        <Link href="volunteer-details"><span className="icon-twitter"></span></Link>
                                        <Link href="volunteer-details"><span className="icon-link-in"></span></Link>
                                    </div>
                                    <div className="team-one__share">
                                        <Link href="volunteer-details"><span className="icon-share"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Volunteer Page Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Volunteer Page Single Start*/}
                    <div className="item">
                        <div className="team-one__single">
                            <div className="team-one__img-box">
                                <div className="team-one__img">
                                    <img src="assets/images/team/volunteer-page-1-4.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="team-one__content">
                                <div className="team-one__name-box">
                                    <h4 className="team-one__name"><Link href="volunteer-details">Marvin McKinney</Link>
                                    </h4>
                                    <p className="team-one__sub-title">Dog Trainer</p>
                                </div>
                                <div className="team-one__share-and-social">
                                    <div className="team-one__social">
                                        <Link href="volunteer-details"><span className="icon-facebook"></span></Link>
                                        <Link href="volunteer-details"><span className="icon-instagram"></span></Link>
                                        <Link href="volunteer-details"><span className="icon-twitter"></span></Link>
                                        <Link href="volunteer-details"><span className="icon-link-in"></span></Link>
                                    </div>
                                    <div className="team-one__share">
                                        <Link href="volunteer-details"><span className="icon-share"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Volunteer Page Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Volunteer Page Single Start*/}
                    <div className="item">
                        <div className="team-one__single">
                            <div className="team-one__img-box">
                                <div className="team-one__img">
                                    <img src="assets/images/team/volunteer-page-1-5.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="team-one__content">
                                <div className="team-one__name-box">
                                    <h4 className="team-one__name"><Link href="volunteer-details">Ronald Richards</Link>
                                    </h4>
                                    <p className="team-one__sub-title">President of Sales</p>
                                </div>
                                <div className="team-one__share-and-social">
                                    <div className="team-one__social">
                                        <Link href="volunteer-details"><span className="icon-facebook"></span></Link>
                                        <Link href="volunteer-details"><span className="icon-instagram"></span></Link>
                                        <Link href="volunteer-details"><span className="icon-twitter"></span></Link>
                                        <Link href="volunteer-details"><span className="icon-link-in"></span></Link>
                                    </div>
                                    <div className="team-one__share">
                                        <Link href="volunteer-details"><span className="icon-share"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Volunteer Page Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Volunteer Page Single Start*/}
                    <div className="item">
                        <div className="team-one__single">
                            <div className="team-one__img-box">
                                <div className="team-one__img">
                                    <img src="assets/images/team/volunteer-page-1-6.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="team-one__content">
                                <div className="team-one__name-box">
                                    <h4 className="team-one__name"><Link href="volunteer-details">Kathryn Murphy</Link>
                                    </h4>
                                    <p className="team-one__sub-title">Medical Assistant</p>
                                </div>
                                <div className="team-one__share-and-social">
                                    <div className="team-one__social">
                                        <Link href="volunteer-details"><span className="icon-facebook"></span></Link>
                                        <Link href="volunteer-details"><span className="icon-instagram"></span></Link>
                                        <Link href="volunteer-details"><span className="icon-twitter"></span></Link>
                                        <Link href="volunteer-details"><span className="icon-link-in"></span></Link>
                                    </div>
                                    <div className="team-one__share">
                                        <Link href="volunteer-details"><span className="icon-share"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Volunteer Page Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Volunteer Page Single Start*/}
                    <div className="item">
                        <div className="team-one__single">
                            <div className="team-one__img-box">
                                <div className="team-one__img">
                                    <img src="assets/images/team/volunteer-page-1-1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="team-one__content">
                                <div className="team-one__name-box">
                                    <h4 className="team-one__name"><Link href="volunteer-details">Arlene McCoy</Link>
                                    </h4>
                                    <p className="team-one__sub-title">Nursing Assistant</p>
                                </div>
                                <div className="team-one__share-and-social">
                                    <div className="team-one__social">
                                        <Link href="volunteer-details"><span className="icon-facebook"></span></Link>
                                        <Link href="volunteer-details"><span className="icon-instagram"></span></Link>
                                        <Link href="volunteer-details"><span className="icon-twitter"></span></Link>
                                        <Link href="volunteer-details"><span className="icon-link-in"></span></Link>
                                    </div>
                                    <div className="team-one__share">
                                        <Link href="volunteer-details"><span className="icon-share"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Volunteer Page Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Volunteer Page Single Start*/}
                    <div className="item">
                        <div className="team-one__single">
                            <div className="team-one__img-box">
                                <div className="team-one__img">
                                    <img src="assets/images/team/volunteer-page-1-2.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="team-one__content">
                                <div className="team-one__name-box">
                                    <h4 className="team-one__name"><Link href="volunteer-details">Jenny Wilson</Link>
                                    </h4>
                                    <p className="team-one__sub-title">Web Designer</p>
                                </div>
                                <div className="team-one__share-and-social">
                                    <div className="team-one__social">
                                        <Link href="volunteer-details"><span className="icon-facebook"></span></Link>
                                        <Link href="volunteer-details"><span className="icon-instagram"></span></Link>
                                        <Link href="volunteer-details"><span className="icon-twitter"></span></Link>
                                        <Link href="volunteer-details"><span className="icon-link-in"></span></Link>
                                    </div>
                                    <div className="team-one__share">
                                        <Link href="volunteer-details"><span className="icon-share"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Volunteer Page Single End*/}
                    </SwiperSlide>
                    <SwiperSlide>
                    {/*Volunteer Page Single Start*/}
                    <div className="item">
                        <div className="team-one__single">
                            <div className="team-one__img-box">
                                <div className="team-one__img">
                                    <img src="assets/images/team/volunteer-page-1-3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="team-one__content">
                                <div className="team-one__name-box">
                                    <h4 className="team-one__name"><Link href="volunteer-details">Robert Fox</Link>
                                    </h4>
                                    <p className="team-one__sub-title">Marketing Coordinator</p>
                                </div>
                                <div className="team-one__share-and-social">
                                    <div className="team-one__social">
                                        <Link href="volunteer-details"><span className="icon-facebook"></span></Link>
                                        <Link href="volunteer-details"><span className="icon-instagram"></span></Link>
                                        <Link href="volunteer-details"><span className="icon-twitter"></span></Link>
                                        <Link href="volunteer-details"><span className="icon-link-in"></span></Link>
                                    </div>
                                    <div className="team-one__share">
                                        <Link href="volunteer-details"><span className="icon-share"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Volunteer Page Single End*/}
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
        {/*Volunteer Carousel Page End*/}

        </Layout>
        </>
    )
}