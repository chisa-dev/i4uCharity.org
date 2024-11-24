'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Home() {
    
    return (
        <>
        <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Donation">
        {/*Donation Page Start*/}
        <section className="donation-page">
            <div className="container">
                <div className="row">
                    {/*Donate Three Single Start*/}
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
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
                    {/*Donate Three Single Start*/}
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
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
                    {/*Donate Three Single Start*/}
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInRight" data-wow-delay="300ms">
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
                    {/*Donate Three Single Start*/}
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="400ms">
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
                    {/*Donate Three Single Start*/}
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="500ms">
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
                    {/*Donate Three Single Start*/}
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInRight" data-wow-delay="600ms">
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
                </div>
            </div>
        </section>
        {/*Donation Page End*/}

            </Layout>
        </>
    )
}