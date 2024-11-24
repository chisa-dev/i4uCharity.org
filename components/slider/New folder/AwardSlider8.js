'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 30,
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
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
}

export default function AwardSlider8() {
    return (
        <>

            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                {/*Awards Block Eight*/}
                <SwiperSlide className="awards-block-eight">
                    <div className="awards">
                        <img src="/assets/images-3/award-1.png" alt="" />
                    </div>
                    <h3 className="awards_title">International<br /> Humanitarian Award</h3>
                    <h3 className="awards_title awards_title-two">(2006)</h3>
                </SwiperSlide>
                {/*Awards Block Eight*/}
                <SwiperSlide className="awards-block-eight">
                    <div className="awards">
                        <img src="/assets/images-3/award-2.png" alt="" />
                    </div>
                    <h3 className="awards_title">Student<br /> Researcher Award</h3>
                    <h3 className="awards_title awards_title-two">(2008)</h3>
                </SwiperSlide>
                {/*Awards Block Eight*/}
                <SwiperSlide className="awards-block-eight">
                    <div className="awards">
                        <img src="/assets/images-3/award-3.png" alt="" />
                    </div>
                    <h3 className="awards_title"> The Troland<br /> Research Awards</h3>
                    <h3 className="awards_title awards_title-two">(2016)</h3>
                </SwiperSlide>
                {/*Awards Block Eight*/}
                <SwiperSlide className="awards-block-eight">
                    <div className="awards">
                        <img src="/assets/images-3/award-4.png" alt="" />
                    </div>
                    <h3 className="awards_title">Social Justice in<br /> Psychology</h3>
                    <h3 className="awards_title awards_title-two">(2020)</h3>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
