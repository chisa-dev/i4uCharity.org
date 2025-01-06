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
    <div 
        className="donation-one__left-bg" 
        style={{ 
            backgroundImage: 'url(assets/images/backgrounds/photo_2025-01-04_11-58-35.jpg)', 
            width: '960px', 
            height: '575px',
            backgroundSize: 'cover',  
            backgroundPosition: 'center',  
        }}
    ></div>
</div>

                <div className="donation-one__right">
                    <div className="donation-one__content-box">
                        <div className="section-title-two text-left sec-title-animation animation-style2">
                            <div className="section-title-two__tagline-box">
                                <span className="section-title-two__tagline">Join Us Now</span>
                            </div>
                            <h2 className="section-title-two__title title-animation">Give a helping hand to those in need </h2>
                        </div>
                        <div className="donation-one__donate-box">
                            <div className="donate-amount wow fadeInUp" data-wow-delay=".5s">
                              <br/>  <br/>  
                            </div>
                            <div className="donate-now wow fadeInUp" data-wow-delay=".7s">
                                {/* <input type="text" className="addAmount-value" placeholder="" /> */}
                                <div className="donation-one__btn-box">
                                    <Link href="donate" className="donation-one__btn thm-btn">Donate Now<span><i
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
