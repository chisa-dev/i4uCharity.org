'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
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
            slidesPerView: 3,
            
        },
        991: {
            slidesPerView: 3,
            
        },
        1199: {
            slidesPerView: 5,
            
        },
        1350: {
            slidesPerView: 5,
            
        },
    }
}

export default function AwardSlider1() {
    return (
        <>


            <Swiper {...swiperOptions} className="brand-one__carousel thm-owl__carousel owl-theme owl-carousel">
                {/*Brand One Single*/}
                <SwiperSlide>
                <div className="brand-one__single">
                    <div className="brand-one__img">
                        <img src="assets/images/brand/brand-3-1.png" alt=""/>
                    </div>
                </div>
                </SwiperSlide>
                {/*Brand One Single*/}
                {/*Brand One Single*/}
                <SwiperSlide>
                <div className="brand-one__single">
                    <div className="brand-one__img">
                        <img src="assets/images/brand/brand-3-2.png" alt=""/>
                    </div>
                </div>
                </SwiperSlide>
                {/*Brand One Single*/}
                {/*Brand One Single*/}
                <SwiperSlide>
                <div className="brand-one__single">
                    <div className="brand-one__img">
                        <img src="assets/images/brand/brand-3-3.png" alt=""/>
                    </div>
                </div>
                </SwiperSlide>
                {/*Brand One Single*/}
                {/*Brand One Single*/}
                <SwiperSlide> 
                <div className="brand-one__single">
                    <div className="brand-one__img">
                        <img src="assets/images/brand/brand-3-4.png" alt=""/>
                    </div>
                </div>
                </SwiperSlide> 
                {/*Brand One Single*/}
                {/*Brand One Single*/}
                <SwiperSlide> 
                <div className="brand-one__single">
                    <div className="brand-one__img">
                        <img src="assets/images/brand/brand-3-5.png" alt=""/>
                    </div>
                </div>
                </SwiperSlide> 
                {/*Brand One Single*/}
                {/*Brand One Single*/}
                <SwiperSlide>
                <div className="brand-one__single">
                    <div className="brand-one__img">
                        <img src="assets/images/brand/brand-3-3.png" alt=""/>
                    </div>
                </div>
                </SwiperSlide>
                {/*Brand One Single*/}
                {/*Brand One Single*/}
                <SwiperSlide> 
                <div className="brand-one__single">
                    <div className="brand-one__img">
                        <img src="assets/images/brand/brand-3-4.png" alt=""/>
                    </div>
                </div>
                </SwiperSlide> 
                {/*Brand One Single*/}
                {/*Brand One Single*/}
                <SwiperSlide> 
                <div className="brand-one__single">
                    <div className="brand-one__img">
                        <img src="assets/images/brand/brand-3-5.png" alt=""/>
                    </div>
                </div>
                </SwiperSlide> 
                {/*Brand One Single*/}
            </Swiper> 
            {/* If we need navigation buttons */}
        </>
    )
}
