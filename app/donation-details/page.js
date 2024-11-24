'use client'
import Layout from "@/components/layout/Layout"
import { useState } from "react"

export default function Home() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    
    return (
        <>
        <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Donation details">
        {/*Donation Details Start */}
        <section className="donation-details">
            <div className="container">
                <div className="donation-details__inner">
                    <div className="donation-details__payment-method-box">
                        <h3 className="donation-details__payment-method-title">Select Payment Method</h3>
                        <div className="donation-details__quote-radio">
                            <label className="custom-radio">
                                <input type="radio" name="myRadios" checked />
                                <span className="radio-dot"></span>
                                <span className="radio-text">Visa</span>
                            </label>
                            <label className="custom-radio">
                                <input type="radio" name="myRadios" />
                                <span className="radio-dot"></span>
                                <span className="radio-text">Paypal</span>
                            </label>
                        </div>
                    </div>
                    <div className="donation-details__personal-info">
                        <h3 className="donation-details__personal-info-title">Personal Information</h3>
                        <form className="contact-form-validated donation-details__form"
                            method="post" >
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="donation-details__input-box">
                                        <p className="donation-details__input-box-title">Your First Name*</p>
                                        <input type="text" name="name" placeholder="First Name..." required=""/>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="donation-details__input-box">
                                        <p className="donation-details__input-box-title">Your Last Name*</p>
                                        <input type="text" name="Last Name" placeholder="Last Name..." required=""/>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12">
                                    <div className="donation-details__input-box">
                                        <p className="donation-details__input-box-title">Your E-mail Address*</p>
                                        <input type="email" name="Email" placeholder="E-mail Address..." required=""/>
                                    </div>
                                </div>
                                <div className="col-xl-12 col-lg-12">
                                    <div className="donation-details__donate-box-outer">
                                        <div className="donation-details__donate-box">
                                            <div className="donate-now">
                                                <p className="donation-details__input-box-title">Enter Donation Amount*</p>
                                                <input type="text" className="addAmount-value"
                                                    placeholder="$ Costume Amount" />
                                            </div>
                                            <h4 className="donation-details__donate-box-divider">Or</h4>
                                            <div className="donate-amount">
                                                <p className="donation-details__input-box-title">Select Amount*</p>
                                                <button className={activeIndex == 1 ? "active amount-btn" : "amount-btn"} onClick={() => handleOnClick(1)}>$5,000</button>
                                                <button className={activeIndex == 2 ? "active amount-btn" : "amount-btn"} onClick={() => handleOnClick(2)}>$3,000</button>
                                                <button className={activeIndex == 3 ? "active amount-btn" : "amount-btn"} onClick={() => handleOnClick(3)}>$1,000</button>
                                            </div>
                                        </div>
                                        <h3 className="donation-details__donate-amout"><span>Total Amount: </span>$587987
                                        </h3>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="donation-details__btn-box">
                                        <button type="submit" className="thm-btn donation-details__btn">Donate Now<span><i
                                                    className="icon-arrow-right"></i></span></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        {/*Donation Details End */}

            </Layout>
        </>
    )
}