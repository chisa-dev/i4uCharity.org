'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
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
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}
export default function TeamSlider8() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme team8-carousel">
                {/*Team Block Eight*/}
                <SwiperSlide className="team-block-eight">
                    <div className="img-holder">
                        <img src="/assets/images-3/team/team-v8-1.jpg" alt="" />
                        <div className="overlay-content">
                            <div className="inner">
                                <div className="top">
                                    <span>Psychologist</span>
                                    <h3>Jerome Hobert</h3>
                                </div>
                                <div className="bottom-content">
                                    <div className="icon">
                                        <span className="icon-speech-bubble clr8" />
                                    </div>
                                    <div className="text">
                                        <p><Link href="tel:+18005554400">+44 555 66 789</Link></p>
                                        <p><Link href="mailto:support@envolvepsyco.com">alphonso@envolve.com</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/*Team Block Eight*/}
                <SwiperSlide className="team-block-eight">
                    <div className="img-holder">
                        <img src="/assets/images-3/team/team-v8-2.jpg" alt="" />
                        <div className="overlay-content">
                            <div className="inner">
                                <div className="top">
                                    <span>Psychologist</span>
                                    <h3>Jerome Hobert</h3>
                                </div>
                                <div className="bottom-content">
                                    <div className="icon">
                                        <span className="icon-speech-bubble clr8" />
                                    </div>
                                    <div className="text">
                                        <p><Link href="tel:+18005554400">+44 555 66 789</Link></p>
                                        <p><Link href="mailto:support@envolvepsyco.com">alphonso@envolve.com</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/*Team Block Eight*/}
                <SwiperSlide className="team-block-eight">
                    <div className="img-holder">
                        <img src="/assets/images-3/team/team-v8-3.jpg" alt="" />
                        <div className="overlay-content">
                            <div className="inner">
                                <div className="top">
                                    <span>Psychologist</span>
                                    <h3>Jerome Hobert</h3>
                                </div>
                                <div className="bottom-content">
                                    <div className="icon">
                                        <span className="icon-speech-bubble clr8" />
                                    </div>
                                    <div className="text">
                                        <p><Link href="tel:+18005554400">+44 555 66 789</Link></p>
                                        <p><Link href="mailto:support@envolvepsyco.com">alphonso@envolve.com</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/*Team Block Eight*/}
                <SwiperSlide className="team-block-eight">
                    <div className="img-holder">
                        <img src="/assets/images-3/team/team-v8-1.jpg" alt="" />
                        <div className="overlay-content">
                            <div className="inner">
                                <div className="top">
                                    <span>Psychologist</span>
                                    <h3>Jerome Hobert</h3>
                                </div>
                                <div className="bottom-content">
                                    <div className="icon">
                                        <span className="icon-speech-bubble clr8" />
                                    </div>
                                    <div className="text">
                                        <p><Link href="tel:+18005554400">+44 555 66 789</Link></p>
                                        <p><Link href="mailto:support@envolvepsyco.com">alphonso@envolve.com</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/*Team Block Eight*/}
                <SwiperSlide className="team-block-eight">
                    <div className="img-holder">
                        <img src="/assets/images-3/team/team-v8-2.jpg" alt="" />
                        <div className="overlay-content">
                            <div className="inner">
                                <div className="top">
                                    <span>Psychologist</span>
                                    <h3>Jerome Hobert</h3>
                                </div>
                                <div className="bottom-content">
                                    <div className="icon">
                                        <span className="icon-speech-bubble clr8" />
                                    </div>
                                    <div className="text">
                                        <p><Link href="tel:+18005554400">+44 555 66 789</Link></p>
                                        <p><Link href="mailto:support@envolvepsyco.com">alphonso@envolve.com</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/*Team Block Eight*/}
                <SwiperSlide className="team-block-eight">
                    <div className="img-holder">
                        <img src="/assets/images-3/team/team-v8-3.jpg" alt="" />
                        <div className="overlay-content">
                            <div className="inner">
                                <div className="top">
                                    <span>Psychologist</span>
                                    <h3>Jerome Hobert</h3>
                                </div>
                                <div className="bottom-content">
                                    <div className="icon">
                                        <span className="icon-speech-bubble clr8" />
                                    </div>
                                    <div className="text">
                                        <p><Link href="tel:+18005554400">+44 555 66 789</Link></p>
                                        <p><Link href="mailto:support@envolvepsyco.com">alphonso@envolve.com</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/*Team Block Eight*/}
                <SwiperSlide className="team-block-eight">
                    <div className="img-holder">
                        <img src="/assets/images-3/team/team-v8-1.jpg" alt="" />
                        <div className="overlay-content">
                            <div className="inner">
                                <div className="top">
                                    <span>Psychologist</span>
                                    <h3>Jerome Hobert</h3>
                                </div>
                                <div className="bottom-content">
                                    <div className="icon">
                                        <span className="icon-speech-bubble clr8" />
                                    </div>
                                    <div className="text">
                                        <p><Link href="tel:+18005554400">+44 555 66 789</Link></p>
                                        <p><Link href="mailto:support@envolvepsyco.com">alphonso@envolve.com</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/*Team Block Eight*/}
                <SwiperSlide className="team-block-eight">
                    <div className="img-holder">
                        <img src="/assets/images-3/team/team-v8-2.jpg" alt="" />
                        <div className="overlay-content">
                            <div className="inner">
                                <div className="top">
                                    <span>Psychologist</span>
                                    <h3>Jerome Hobert</h3>
                                </div>
                                <div className="bottom-content">
                                    <div className="icon">
                                        <span className="icon-speech-bubble clr8" />
                                    </div>
                                    <div className="text">
                                        <p><Link href="tel:+18005554400">+44 555 66 789</Link></p>
                                        <p><Link href="mailto:support@envolvepsyco.com">alphonso@envolve.com</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/*Team Block Eight*/}
                <SwiperSlide className="team-block-eight">
                    <div className="img-holder">
                        <img src="/assets/images-3/team/team-v8-3.jpg" alt="" />
                        <div className="overlay-content">
                            <div className="inner">
                                <div className="top">
                                    <span>Psychologist</span>
                                    <h3>Jerome Hobert</h3>
                                </div>
                                <div className="bottom-content">
                                    <div className="icon">
                                        <span className="icon-speech-bubble clr8" />
                                    </div>
                                    <div className="text">
                                        <p><Link href="tel:+18005554400">+44 555 66 789</Link></p>
                                        <p><Link href="mailto:support@envolvepsyco.com">alphonso@envolve.com</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </>
    )
}
