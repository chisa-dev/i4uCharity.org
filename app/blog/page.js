
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Blog">
        {/*Blog Page Start*/}
        <section className="blog-page">
            <div className="container">
                <div className="row">
                    {/*Blog One Single Start*/}
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
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
                    {/*Blog One Single Start*/}
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="200ms">
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
                    {/*Blog One Single Start*/}
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInRight" data-wow-delay="300ms">
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
                    {/*Blog One Single Start*/}
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInLeft" data-wow-delay="400ms">
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
                    {/*Blog One Single Start*/}
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="500ms">
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
                    {/*Blog One Single Start*/}
                    <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInRight" data-wow-delay="600ms">
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
                </div>
            </div>
        </section>
        {/*Blog Page End*/}
            </Layout>
        </>
    )
}