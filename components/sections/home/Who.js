'use client'
import Link from "next/link"

export default function Who() {
    return (
        <>

        {/*Who We Are Start */}
        <section className="who-we-are">
            <div className="who-we-are__shape-3 float-bob-y">
                <img src="assets/images/shapes/who-we-are-shape-3.png" alt=""/>
            </div>
            <div className="who-we-are__shape-4 float-bob-x">
                <img src="assets/images/shapes/who-we-are-shape-4.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 wow fadeInLeft" data-wow-delay="300ms">
                        <div className="who-we-are__left">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">Who We Are</span>
                                </div>
                                <h2 className="section-title__title title-animation">Supporting Dreams Changing
                                    Lives</h2>
                            </div>
                            <p className="who-we-are__text">Lorem Ipsum is simply dummy a of the printing and type setting
                                industry Loreaim Ipsum has been the industry's standard dummy</p>
                            <div className="who-we-are__progress-box">
                                <ul className="who-we-are__progress-list list-unstyled">
                                    <li>
                                        <div className="who-we-are__progress-single">
                                            <p>Total Fund Worth: <span>450,896,070$</span></p>
                                            <div className="who-we-are__progress">
                                                <div className="bar">
                                                    <div className="bar-inner count-bar" data-percent="75%" style={{ width: '75%' }}>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="who-we-are__progress-single">
                                            <p>Total Cases Helped: <span>200+</span></p>
                                            <div className="who-we-are__progress">
                                                <div className="bar">
                                                    <div className="bar-inner count-bar" data-percent="80%" style={{ width: '80%' }}>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="who-we-are__btn-box">
                                <Link href="donation-details" className="who-we-are__btn thm-btn">Donate Now<span><i
                                            className="icon-arrow-right"></i></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
                        <div className="who-we-are__right">
                            <div className="who-we-are__img-box">
                                <div className="who-we-are__img">
                                    <img src="assets/images/resources/who-we-are-img-1.jpg" alt=""/>
                                </div>
                                <div className="who-we-are__img-2">
                                    <img src="assets/images/resources/who-we-are-img-2.jpg" alt=""/>
                                </div>
                                <div className="who-we-are__shape-1 img-bounce"></div>
                                <div className="who-we-are__shape-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Who We Are End */}
            
        </>
    )
}
