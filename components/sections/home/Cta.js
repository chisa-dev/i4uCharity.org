'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    spaceBetween: 30,
    
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            
        },
        575: {
            slidesPerView: 2,
            
        },
        767: {
            slidesPerView: 2,
            
        },
        991: {
            slidesPerView: 2,
            
        },
        1199: {
            slidesPerView: 3,
            
        },
        1350: {
            slidesPerView: 3,
            
        },
    }



}
export default function Cta() {
    return (
        <>
        
        
        {/*CTA One Start */}
        <section className="cta-one">
            <div className="cta-one__bg" style={{ backgroundImage: ' url(assets/images/backgrounds/cta-one-bg.jpg)' }} ></div>
            <div className="container">
                <div className="cta-one__inner">
                    <div className="cta-one__title-box sec-title-animation animation-style1">
                        <h2 className="cta-one__title title-animation">Creating Lasting Change in <br/>Communities Worldwide
                        </h2>
                    </div>
                    <div className="cta-one__btn-box">
                        <Link href="donate" className="cta-one__btn-1 thm-btn">Donate Now<span><i
                                    className="icon-arrow-right"></i></span></Link>
                        <Link href="become-volunteer" className="cta-one__btn-2 thm-btn">Become A volunteer<span><i
                                    className="icon-arrow-right"></i></span></Link>
                    </div>
                </div>
            </div>
        </section>
        {/*CTA One End */}
        
      
        </>
    )
}
