'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"


export default function Home() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
        <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="About Us" image="assets/images/slider/photo_2025-01-04_12-21-27.jpg">
            
       {/*About One Start */}
       <section className="about-One">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="about-One__left  wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                            <div className="about-One__img-box">
                                <div className="about-One__img">
                                <img 
  src="assets/images/carnival/photo_2023-01-04_21-02-51.jpg" 
  alt="" 
  style={{ width: '376px', height: '371px', objectFit: 'cover' }} 
/>


                                </div>
                                <div className="about-One__img-2">
                                <img 
  src="assets/images/slider/photo_2025-01-04_12-21-37.jpg" 
  alt="" 
  style={{ width: '376px', height: '420px', objectFit: 'cover' }} 
/>

                                </div>
                              
                                <div className="about-One__shape-1"></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="about-One__right wow fadeInRight" data-wow-delay="300ms">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">About Us</span>
                                </div>
                                <h2 className="section-title__title title-animation">Caring Hearts,
                                Sharing Hands</h2>
                            </div>
                            <div className="about-One__vission-mission">
                                <div className="about-One__tab-box tabs-box">
                                    <ul className="tab-buttons clearfix list-unstyled">
                                        <li className={activeIndex == 1 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(1)}><span>Our Mission</span></li>
                                        <li className={activeIndex == 2 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(2)}><span>Our Vision</span></li>
                                        <li className={activeIndex == 3 ? "tab-btn active-btn" : "tab-btn"} onClick={() => handleOnClick(3)}><span>Our Goal</span></li>
                                    </ul>
                                    <div className="tabs-content">
                                        {/*tab*/}
                                        <div className={activeIndex == 1 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                            <div className="tabs-content__inner">
                                                <p>I4U Charity Team are dedicated to sharing the love of Christ with those in need. Through compassion, service, and unity, we aim to make a meaningful impact in the lives of individuals, reflecting Jesus' teachings in our actions. Our mission is to be a source of hope, healing, and transformation for those we serve.</p>
                                            </div>
                                        </div>
                                        {/*tab*/}
                                        {/*tab*/}
                                        <div className={activeIndex == 2 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                            <div className="tabs-content__inner">
                                                <p>We envision a world where communities are united in love and service, and the transformative power of Christ is experienced by all. Our vision is to foster a culture of generosity, compassion, and spiritual growth, bringing people together to create lasting change. Through faith and action, we aim to spread hope and demonstrate God's love to those who need it most.</p>
                                            </div>
                                        </div>
                                        {/*tab*/}
                                        {/*tab*/}
                                        <div className={activeIndex == 3 ? "tab fadeInUp animated show active-tab" : "tab fadeInUp animated"}>
                                            <div className="tabs-content__inner">
                                                <p>Our goal is to expand our reach and deepen our impact by serving those in need and building strong, supportive communities. We aim to inspire others to embrace generosity, practice kindness, and live out their faith in practical ways. Together, we strive to create a future where every individual experiences the warmth and love of Christ.</p>
                                            </div>
                                        </div>
                                        {/*tab*/}
                                    </div>
                                </div>
                            </div>
                            <div className="about-One__btn-and-need-help">
                                <div className="about-One__btn-box">
                                    <Link href="donation-details" className="about-One__btn thm-btn">Donate Now<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                                <div className="about-One__need-help">
                                    <div className="icon">
                                        <span className="icon-phone-call"></span>
                                    </div>
                                    <div className="content">
                                        <p>Contact Us</p>
                                        <h4><Link href="tel:3195550115"> (+251) 961099526</Link></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About One End */}

        {/*Found One Start */}
        <section className="found-one">
            <div className="found-one__bg">
                <div className="found-one__shape-1 float-bob-y">
                    <img src="assets/images/shapes/found-one-shape-1.png" alt=""/>
                </div>
            </div>
            <div className="container">
                <div className="section-title text-center sec-title-animation animation-style1">
                    <div className="section-title__tagline-box">
                        <span className="section-title__tagline">I For You</span>
                    </div>
                    <h2 className="section-title__title title-animation">What We do
                    </h2>
                </div>
                <div className="row">
                    {/*Found One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="found-one__single">
                            <div className="found-one__img-box">
                                <div className="found-one__img">
                                <img src="assets/images/family-visit/photo_2022-11-19_20-36-43.jpg" alt="" style={{ width: '370px', height: '250px', objectFit: 'cover' }} />
                                <img src="assets/images/family-visit/photo_2025-01-04_12-42-38.jpg" alt="" style={{ width: '370px', height: '250px', objectFit: 'cover' }} />
                                </div>
                            </div>
                            <div className="found-one__content">
                                <h4 className="found-one__title"><Link href="donation-details">Supporting Families</Link></h4>
                                <p className="found-one__text">Our family visits ministry is a reflection of Christ’s love and compassion in action. Every two weeks, we visit three single mothers, each raising three children under difficult financial circumstances.<br/><br/></p>
                               
                                <div className="found-one__btn-box">
                                    <Link href="family-visits" className="found-one__btn thm-btn">Learn More<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Found One Single End*/}
                    {/*Found One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="found-one__single">
                            <div className="found-one__img-box">
                                <div className="found-one__img">
                                <img src="assets/images/academics/photo_2022-12-17_13-20-52.jpg" alt="" style={{ width: '370px', height: '250px', objectFit: 'cover' }} />
                                <img src="assets/images/academics/photo_2022-12-17_13-20-53.jpg" alt="" style={{ width: '370px', height: '250px', objectFit: 'cover' }} />
                                </div>
                            </div>
                            <div className="found-one__content">
                                <h4 className="found-one__title"><Link href="donation-details">Academics Program</Link></h4>
                                <p className="found-one__text">We are passionate about the power of education to uplift and transform lives. Through our Academics Program, we aim to reflect Christ’s love by providing free tutoring for students at Kilinto Primary School who are unable to afford other tutoring services.  </p>
                               
                                <div className="found-one__btn-box">
                                    <Link href="academics" className="found-one__btn thm-btn">Learn More<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Found One Single End*/}
                    {/*Found One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="found-one__single">
                            <div className="found-one__img-box">
                                <div className="found-one__img">
                                <img src="assets/images/cloth-sharing/photo_2025-01-04_11-59-41 (8).jpg" alt="" style={{ width: '370px', height: '250px', objectFit: 'cover' }} />
                                <img src="assets/images/cloth-sharing/photo_2025-01-04_11-59-41 (6).jpg" alt="" style={{ width: '370px', height: '250px', objectFit: 'cover' }} />
                                </div>
                            </div>
                            <div className="found-one__content">
                                <h4 className="found-one__title"><Link href="donation-details">Cloth Sharing</Link></h4>
                                <p className="found-one__text">We believe that the love of Christ is not just shown through words, but also through tangible acts of kindness. Our Cloth Sharing event, held annually at the end of the academic year, is a special time when we come together to serve those in need.</p>
                               
                                <div className="found-one__btn-box">
                                    <Link href="cloth-sharing" className="found-one__btn thm-btn">Learn More<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Found One Single End*/}
                </div>
            </div>
        </section>
        {/*Found One End */}

 
        </Layout>
        </>
    )
}


