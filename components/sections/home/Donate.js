
export default function Donate() {
    return (
        <>

        {/*Donate Three Start */}
        <section className="donate-three">
            <div className="container">
                <div className="donate-three__top">
                    <div className="section-title text-left sec-title-animation animation-style2">
                        <div className="section-title__tagline-box">
                            <span className="section-title__tagline">Featured Causes</span>
                        </div>
                        <h2 className="section-title__title title-animation">Popular Causes Now</h2>
                    </div>
                    <div className="donate-three__btn-box">
                        <Link href="donation-details" className="donate-three__btn thm-btn">Discover more<span><i
                                    className="icon-arrow-right"></i></span></Link>
                    </div>
                </div>
                <div className="row">
                    {/*Donate Three Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
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
                                        <div className="bar-inner count-bar" data-percent="75%">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Donate Three Single End*/}
                    {/*Donate Three Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
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
                                        <div className="bar-inner count-bar" data-percent="75%">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Donate Three Single End*/}
                    {/*Donate Three Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
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
                                        <div className="bar-inner count-bar" data-percent="75%">
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
        {/*Donate Three End */}
        </>
    )
}
