'use client'
import Link from "next/link"

export default function Services() {
    return (
        <>
      
        {/*Feature One Start */}
        <section className="feature-two">
            <div className="container">
                <div className="row">
                    {/*Feature One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="feature-two__single">
                            <div className="feature-two__icon">
                                <span className="icon-love"></span>
                            </div>
                            <div className="feature-two__content">
                                <h3 className="feature-two__title"><Link href="donation">Education Fund</Link></h3>
                                <p className="feature-two__text">Charity and Donation is a category that involves </p>
                                <Link href="donate" className="feature-two__read-more">rEAD mORe<span
                                        className="icon-arrow-right-two"></span></Link>
                            </div>
                        </div>
                    </div>
                    {/*Feature One Single End*/}
                    {/*Feature One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="feature-two__single feature-two__single-2">
                            <div className="feature-two__icon">
                                <span className="icon-dolor"></span>
                            </div>
                            <div className="feature-two__content">
                                <h3 className="feature-two__title"><Link href="donation">Crisis Helping Fund</Link></h3>
                                <p className="feature-two__text">Charity and Donation is a category that involves </p>
                                <Link href="donate" className="feature-two__read-more">rEAD mORe<span
                                        className="icon-arrow-right-two"></span></Link>
                            </div>
                        </div>
                    </div>
                    {/*Feature One Single End*/}
                    {/*Feature One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                        <div className="feature-two__single feature-two__single-3">
                            <div className="feature-two__icon">
                                <span className="icon-hand"></span>
                            </div>
                            <div className="feature-two__content">
                                <h3 className="feature-two__title"><Link href="donation">Children Fund</Link></h3>
                                <p className="feature-two__text">Charity and Donation is a category that involves </p>
                                <Link href="donate" className="feature-two__read-more">rEAD mORe<span
                                        className="icon-arrow-right-two"></span></Link>
                            </div>
                        </div>
                    </div>
                    {/*Feature One Single End*/}
                </div>
            </div>
        </section>
        {/*Feature One End */}
       
        </>
    )
}
