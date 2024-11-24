'use client'
import Link from "next/link"
export default function Country() {
    return (
        <>

        {/*Country Four Start */}
        <section className="contact-four">
            <div className="contact-four__bg" style={{ backgroundImage: ' url(assets/images/shapes/pattern-1.jpg)' }} ></div>
            <div className="container">
                <div className="row">
                    <div className="section-title text-center sec-title-animation animation-style1">
                        <h2 className="section-title__title title-animation">Drop a Line, Stay in Touch</h2>
                    </div>
                </div>

                {/*Contact Info One Start*/}
                <div className="contact-info-one">
                    <div className="row">

                        <div className="info-column col-lg-4">
                            <div className="inner-box">
                                <div className="icon"><span className="icon-pin-two"></span></div>
                                <h4>Address</h4>
                                <p>4700 Millenia Blvd # 175,<br/> Orlando, FL 32839, USA</p>
                            </div>
                        </div>

                        <div className="info-column col-lg-4">
                            <div className="inner-box">
                                <div className="icon">
                                    <span className="icon-call"></span>
                                </div>
                                <h4>Phone</h4>
                                <p>
                                    <Link href="tel:732803-0103">9878 990,</Link>
                                    <Link href="tel:7328060104">9998776777,</Link><br/>
                                    <Link href="tel:7865789990">8927728998</Link>
                                </p>
                            </div>
                        </div>

                        <div className="info-column col-lg-4">
                            <div className="inner-box">
                                <div className="icon">
                                    <span className="icon-envelope"></span>
                                </div>
                                <h4>Email</h4>
                                <p>
                                    <Link href="mailto:info@companyname.com">info@companyname.com,</Link><br/>
                                    <Link href="mailto:otheremail@gmail.com">otheremail@gmail.com</Link>
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-xl-12">
                            <div className="contact-info-one__form">
                                <form id="contact-info-one-form" name="contact-info-one_form" className="default-form2"
                                    action="#" method="post">

                                    <div className="row">
                                        <div className="col-xl-6">
                                            <div className="form-group">
                                                <div className="input-box">
                                                    <input type="text" name="form_name" id="formName"
                                                        placeholder="Name...." required=""/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-box">
                                                    <input type="email" name="form_email" id="formEmail"
                                                        placeholder="Email...." required=""/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-box">
                                                    <input type="text" name="form_name" id="formName"
                                                        placeholder="Phone...." required=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-6">
                                            <div className="form-group">
                                                <div className="input-box">
                                                    <textarea name="form_message" id="formMessage"
                                                        placeholder="Write here..." ></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group form-group--1 text-center">
                                            <button href="contact" className="thm-btn">
                                                Send Message
                                                <span><i className="icon-arrow-right"></i></span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>




                </div>
                {/*Contact Info One End*/}

            </div>
        </section>
        {/*Country Four End */}
            

        </>
    )
}
