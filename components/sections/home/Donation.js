'use client'
import Link from "next/link"
import { useState } from "react"

export default function Donation() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
        {/*Donation One Start */}
        <section className="donation-one">
            <div className="donation-one__wrapper">
                <div className="donation-one__left">
                    <div className="donation-one__left-bg"
                        style={{ backgroundImage: ' url(assets/images/backgrounds/donation-one-left-bg.jpg)' }} ></div>
                </div>
                <div className="donation-one__right">
                    <div className="donation-one__content-box">
                        <div className="section-title-two text-left sec-title-animation animation-style2">
                            <div className="section-title-two__tagline-box">
                                <span className="section-title-two__tagline">Join Us Now</span>
                            </div>
                            <h2 className="section-title-two__title title-animation">Helping To Make Our <br/> World
                                <span>Better</span> Living </h2>
                        </div>
                        <div className="donation-one__donate-box">
                            <div className="donate-amount wow fadeInUp" data-wow-delay=".5s">
                                <button className={activeIndex == 1 ? "active amount-btn" : "amount-btn"} onClick={() => handleOnClick(1)}>$10</button>
                                <button className={activeIndex == 2 ? "active amount-btn" : "amount-btn"} onClick={() => handleOnClick(2)}>$30</button>
                                <button className={activeIndex == 3 ? "active amount-btn" : "amount-btn"} onClick={() => handleOnClick(3)}>$50</button>
                                <button className={activeIndex == 4 ? "active amount-btn" : "amount-btn"} onClick={() => handleOnClick(4)}>$100</button>
                                <button className={activeIndex == 5 ? "active amount-btn" : "amount-btn"} onClick={() => handleOnClick(5)}>$200</button>
                            </div>
                            <div className="donate-now wow fadeInUp" data-wow-delay=".7s">
                                <input type="text" className="addAmount-value" placeholder="$ Costume Amount" />
                                <div className="donation-one__btn-box">
                                    <Link href="#" className="donation-one__btn thm-btn">Donate Now<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Donation One End */}
        </>
    )
}
