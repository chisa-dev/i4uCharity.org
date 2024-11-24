'use client'
import Link from "next/link"
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
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 4,
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
export default function ServiceSlider6() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="service-block">
                    <div className="inner-box">
                        <div className="content-box">
                            <figure className="image-box"><img src="/assets/images-2/service/service-1.jpg" alt="" /></figure>
                            <div className="lower-content">
                                <div className="icon-box"><i className="flaticon-up" /></div>
                                <span>Traffic Law</span>
                                <h3>Auto Accidents</h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                        <div className="overlay-content">
                            <figure className="image-box">
                                <img src="/assets/images-2/service/service-5.jpg" alt="" />
                                <div className="text">
                                    <p>Avoided owing to the duty the obligations of business will occur.</p>
                                </div>
                            </figure>
                            <div className="lower-content">
                                <span>Traffic Law</span>
                                <h3><Link href="/audit-assurance">Auto Accidents</Link></h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block">
                    <div className="inner-box">
                        <div className="content-box">
                            <figure className="image-box"><img src="/assets/images-2/service/service-2.jpg" alt="" /></figure>
                            <div className="lower-content">
                                <div className="icon-box"><i className="flaticon-chart" /></div>
                                <span>Family Law</span>
                                <h3>Child Welfare</h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                        <div className="overlay-content">
                            <figure className="image-box">
                                <img src="/assets/images-2/service/service-6.jpg" alt="" />
                                <div className="text">
                                    <p>Avoided owing to the duty the obligations of business will occur.</p>
                                </div>
                            </figure>
                            <div className="lower-content">
                                <span>Family Law</span>
                                <h3><Link href="/audit-assurance">Child Welfare</Link></h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block">
                    <div className="inner-box">
                        <div className="content-box">
                            <figure className="image-box"><img src="/assets/images-2/service/service-3.jpg" alt="" /></figure>
                            <div className="lower-content">
                                <div className="icon-box"><i className="flaticon-business-and-finance" /></div>
                                <span>Business Law</span>
                                <h3>Tax &amp; Insurance</h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                        <div className="overlay-content">
                            <figure className="image-box">
                                <img src="/assets/images-2/service/service-7.jpg" alt="" />
                                <div className="text">
                                    <p>Avoided owing to the duty the obligations of business will occur.</p>
                                </div>
                            </figure>
                            <div className="lower-content">
                                <span>Business Law</span>
                                <h3><Link href="/audit-assurance">Tax &amp; Insurance</Link></h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block">
                    <div className="inner-box">
                        <div className="content-box">
                            <figure className="image-box"><img src="/assets/images-2/service/service-4.jpg" alt="" /></figure>
                            <div className="lower-content">
                                <div className="icon-box"><i className="flaticon-bot" /></div>
                                <span>Family Law</span>
                                <h3>Divorce &amp; Alimony</h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                        <div className="overlay-content">
                            <figure className="image-box">
                                <img src="/assets/images-2/service/service-8.jpg" alt="" />
                                <div className="text">
                                    <p>Avoided owing to the duty the obligations of business will occur.</p>
                                </div>
                            </figure>
                            <div className="lower-content">
                                <span>Family Law</span>
                                <h3><Link href="/audit-assurance">Divorce &amp; Alimony</Link></h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block">
                    <div className="inner-box">
                        <div className="content-box">
                            <figure className="image-box"><img src="/assets/images-2/service/service-1.jpg" alt="" /></figure>
                            <div className="lower-content">
                                <div className="icon-box"><i className="flaticon-up" /></div>
                                <span>Traffic Law</span>
                                <h3>Auto Accidents</h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                        <div className="overlay-content">
                            <figure className="image-box">
                                <img src="/assets/images-2/service/service-5.jpg" alt="" />
                                <div className="text">
                                    <p>Avoided owing to the duty the obligations of business will occur.</p>
                                </div>
                            </figure>
                            <div className="lower-content">
                                <span>Traffic Law</span>
                                <h3><Link href="/audit-assurance">Auto Accidents</Link></h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block">
                    <div className="inner-box">
                        <div className="content-box">
                            <figure className="image-box"><img src="/assets/images-2/service/service-2.jpg" alt="" /></figure>
                            <div className="lower-content">
                                <div className="icon-box"><i className="flaticon-chart" /></div>
                                <span>Family Law</span>
                                <h3>Child Welfare</h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                        <div className="overlay-content">
                            <figure className="image-box">
                                <img src="/assets/images-2/service/service-6.jpg" alt="" />
                                <div className="text">
                                    <p>Avoided owing to the duty the obligations of business will occur.</p>
                                </div>
                            </figure>
                            <div className="lower-content">
                                <span>Family Law</span>
                                <h3><Link href="/audit-assurance">Child Welfare</Link></h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block">
                    <div className="inner-box">
                        <div className="content-box">
                            <figure className="image-box"><img src="/assets/images-2/service/service-3.jpg" alt="" /></figure>
                            <div className="lower-content">
                                <div className="icon-box"><i className="flaticon-business-and-finance" /></div>
                                <span>Business Law</span>
                                <h3>Tax &amp; Insurance</h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                        <div className="overlay-content">
                            <figure className="image-box">
                                <img src="/assets/images-2/service/service-7.jpg" alt="" />
                                <div className="text">
                                    <p>Avoided owing to the duty the obligations of business will occur.</p>
                                </div>
                            </figure>
                            <div className="lower-content">
                                <span>Business Law</span>
                                <h3><Link href="/audit-assurance">Tax &amp; Insurance</Link></h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block">
                    <div className="inner-box">
                        <div className="content-box">
                            <figure className="image-box"><img src="/assets/images-2/service/service-4.jpg" alt="" /></figure>
                            <div className="lower-content">
                                <div className="icon-box"><i className="flaticon-bot" /></div>
                                <span>Family Law</span>
                                <h3>Divorce &amp; Alimony</h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                        <div className="overlay-content">
                            <figure className="image-box">
                                <img src="/assets/images-2/service/service-8.jpg" alt="" />
                                <div className="text">
                                    <p>Avoided owing to the duty the obligations of business will occur.</p>
                                </div>
                            </figure>
                            <div className="lower-content">
                                <span>Family Law</span>
                                <h3><Link href="/audit-assurance">Divorce &amp; Alimony</Link></h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block">
                    <div className="inner-box">
                        <div className="content-box">
                            <figure className="image-box"><img src="/assets/images-2/service/service-1.jpg" alt="" /></figure>
                            <div className="lower-content">
                                <div className="icon-box"><i className="flaticon-up" /></div>
                                <span>Traffic Law</span>
                                <h3>Auto Accidents</h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                        <div className="overlay-content">
                            <figure className="image-box">
                                <img src="/assets/images-2/service/service-5.jpg" alt="" />
                                <div className="text">
                                    <p>Avoided owing to the duty the obligations of business will occur.</p>
                                </div>
                            </figure>
                            <div className="lower-content">
                                <span>Traffic Law</span>
                                <h3><Link href="/audit-assurance">Auto Accidents</Link></h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block">
                    <div className="inner-box">
                        <div className="content-box">
                            <figure className="image-box"><img src="/assets/images-2/service/service-2.jpg" alt="" /></figure>
                            <div className="lower-content">
                                <div className="icon-box"><i className="flaticon-chart" /></div>
                                <span>Family Law</span>
                                <h3>Child Welfare</h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                        <div className="overlay-content">
                            <figure className="image-box">
                                <img src="/assets/images-2/service/service-6.jpg" alt="" />
                                <div className="text">
                                    <p>Avoided owing to the duty the obligations of business will occur.</p>
                                </div>
                            </figure>
                            <div className="lower-content">
                                <span>Family Law</span>
                                <h3><Link href="/audit-assurance">Child Welfare</Link></h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block">
                    <div className="inner-box">
                        <div className="content-box">
                            <figure className="image-box"><img src="/assets/images-2/service/service-3.jpg" alt="" /></figure>
                            <div className="lower-content">
                                <div className="icon-box"><i className="flaticon-business-and-finance" /></div>
                                <span>Business Law</span>
                                <h3>Tax &amp; Insurance</h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                        <div className="overlay-content">
                            <figure className="image-box">
                                <img src="/assets/images-2/service/service-7.jpg" alt="" />
                                <div className="text">
                                    <p>Avoided owing to the duty the obligations of business will occur.</p>
                                </div>
                            </figure>
                            <div className="lower-content">
                                <span>Business Law</span>
                                <h3><Link href="/audit-assurance">Tax &amp; Insurance</Link></h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block">
                    <div className="inner-box">
                        <div className="content-box">
                            <figure className="image-box"><img src="/assets/images-2/service/service-4.jpg" alt="" /></figure>
                            <div className="lower-content">
                                <div className="icon-box"><i className="flaticon-bot" /></div>
                                <span>Family Law</span>
                                <h3>Divorce &amp; Alimony</h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                        <div className="overlay-content">
                            <figure className="image-box">
                                <img src="/assets/images-2/service/service-8.jpg" alt="" />
                                <div className="text">
                                    <p>Avoided owing to the duty the obligations of business will occur.</p>
                                </div>
                            </figure>
                            <div className="lower-content">
                                <span>Family Law</span>
                                <h3><Link href="/audit-assurance">Divorce &amp; Alimony</Link></h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block">
                    <div className="inner-box">
                        <div className="content-box">
                            <figure className="image-box"><img src="/assets/images-2/service/service-1.jpg" alt="" /></figure>
                            <div className="lower-content">
                                <div className="icon-box"><i className="flaticon-up" /></div>
                                <span>Traffic Law</span>
                                <h3>Auto Accidents</h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                        <div className="overlay-content">
                            <figure className="image-box">
                                <img src="/assets/images-2/service/service-5.jpg" alt="" />
                                <div className="text">
                                    <p>Avoided owing to the duty the obligations of business will occur.</p>
                                </div>
                            </figure>
                            <div className="lower-content">
                                <span>Traffic Law</span>
                                <h3><Link href="/audit-assurance">Auto Accidents</Link></h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block">
                    <div className="inner-box">
                        <div className="content-box">
                            <figure className="image-box"><img src="/assets/images-2/service/service-2.jpg" alt="" /></figure>
                            <div className="lower-content">
                                <div className="icon-box"><i className="flaticon-chart" /></div>
                                <span>Family Law</span>
                                <h3>Child Welfare</h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                        <div className="overlay-content">
                            <figure className="image-box">
                                <img src="/assets/images-2/service/service-6.jpg" alt="" />
                                <div className="text">
                                    <p>Avoided owing to the duty the obligations of business will occur.</p>
                                </div>
                            </figure>
                            <div className="lower-content">
                                <span>Family Law</span>
                                <h3><Link href="/audit-assurance">Child Welfare</Link></h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block">
                    <div className="inner-box">
                        <div className="content-box">
                            <figure className="image-box"><img src="/assets/images-2/service/service-3.jpg" alt="" /></figure>
                            <div className="lower-content">
                                <div className="icon-box"><i className="flaticon-business-and-finance" /></div>
                                <span>Business Law</span>
                                <h3>Tax &amp; Insurance</h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                        <div className="overlay-content">
                            <figure className="image-box">
                                <img src="/assets/images-2/service/service-7.jpg" alt="" />
                                <div className="text">
                                    <p>Avoided owing to the duty the obligations of business will occur.</p>
                                </div>
                            </figure>
                            <div className="lower-content">
                                <span>Business Law</span>
                                <h3><Link href="/audit-assurance">Tax &amp; Insurance</Link></h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block">
                    <div className="inner-box">
                        <div className="content-box">
                            <figure className="image-box"><img src="/assets/images-2/service/service-4.jpg" alt="" /></figure>
                            <div className="lower-content">
                                <div className="icon-box"><i className="flaticon-bot" /></div>
                                <span>Family Law</span>
                                <h3>Divorce &amp; Alimony</h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                        <div className="overlay-content">
                            <figure className="image-box">
                                <img src="/assets/images-2/service/service-8.jpg" alt="" />
                                <div className="text">
                                    <p>Avoided owing to the duty the obligations of business will occur.</p>
                                </div>
                            </figure>
                            <div className="lower-content">
                                <span>Family Law</span>
                                <h3><Link href="/audit-assurance">Divorce &amp; Alimony</Link></h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block">
                    <div className="inner-box">
                        <div className="content-box">
                            <figure className="image-box"><img src="/assets/images-2/service/service-1.jpg" alt="" /></figure>
                            <div className="lower-content">
                                <div className="icon-box"><i className="flaticon-up" /></div>
                                <span>Traffic Law</span>
                                <h3>Auto Accidents</h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                        <div className="overlay-content">
                            <figure className="image-box">
                                <img src="/assets/images-2/service/service-5.jpg" alt="" />
                                <div className="text">
                                    <p>Avoided owing to the duty the obligations of business will occur.</p>
                                </div>
                            </figure>
                            <div className="lower-content">
                                <span>Traffic Law</span>
                                <h3><Link href="/audit-assurance">Auto Accidents</Link></h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block">
                    <div className="inner-box">
                        <div className="content-box">
                            <figure className="image-box"><img src="/assets/images-2/service/service-2.jpg" alt="" /></figure>
                            <div className="lower-content">
                                <div className="icon-box"><i className="flaticon-chart" /></div>
                                <span>Family Law</span>
                                <h3>Child Welfare</h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                        <div className="overlay-content">
                            <figure className="image-box">
                                <img src="/assets/images-2/service/service-6.jpg" alt="" />
                                <div className="text">
                                    <p>Avoided owing to the duty the obligations of business will occur.</p>
                                </div>
                            </figure>
                            <div className="lower-content">
                                <span>Family Law</span>
                                <h3><Link href="/audit-assurance">Child Welfare</Link></h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block">
                    <div className="inner-box">
                        <div className="content-box">
                            <figure className="image-box"><img src="/assets/images-2/service/service-3.jpg" alt="" /></figure>
                            <div className="lower-content">
                                <div className="icon-box"><i className="flaticon-business-and-finance" /></div>
                                <span>Business Law</span>
                                <h3>Tax &amp; Insurance</h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                        <div className="overlay-content">
                            <figure className="image-box">
                                <img src="/assets/images-2/service/service-7.jpg" alt="" />
                                <div className="text">
                                    <p>Avoided owing to the duty the obligations of business will occur.</p>
                                </div>
                            </figure>
                            <div className="lower-content">
                                <span>Business Law</span>
                                <h3><Link href="/audit-assurance">Tax &amp; Insurance</Link></h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block">
                    <div className="inner-box">
                        <div className="content-box">
                            <figure className="image-box"><img src="/assets/images-2/service/service-4.jpg" alt="" /></figure>
                            <div className="lower-content">
                                <div className="icon-box"><i className="flaticon-bot" /></div>
                                <span>Family Law</span>
                                <h3>Divorce &amp; Alimony</h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                        <div className="overlay-content">
                            <figure className="image-box">
                                <img src="/assets/images-2/service/service-8.jpg" alt="" />
                                <div className="text">
                                    <p>Avoided owing to the duty the obligations of business will occur.</p>
                                </div>
                            </figure>
                            <div className="lower-content">
                                <span>Family Law</span>
                                <h3><Link href="/audit-assurance">Divorce &amp; Alimony</Link></h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </>
    )
}
