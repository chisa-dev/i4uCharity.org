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
                                    <span className="section-title__tagline">Join Us</span>
                                </div>
                                <h2 className="section-title__title title-animation">Supporting Dreams Changing
                                    Lives</h2>
                            </div>
                            <p className="who-we-are__text">Make a meaningful impact by donating essential items for children and families in need. From clothing and school supplies to hygiene products and toys, your contribution provides the resources necessary for their growth, learning, and happiness. </p>
                            <br/>
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
                                    <img src="assets/images/backgrounds/photo_2025-01-04_12-37-47.jpg" alt=""  style={{ width: '490px', height: '492px', objectFit: 'cover' }}/>
                                </div>
                                <div className="who-we-are__img-2">
                                    <img src="assets/images/backgrounds/photo_2025-01-04_12-42-38.jpg" alt=""  style={{ width: '300px', height: '308px', objectFit: 'cover' }}/>
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
