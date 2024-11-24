'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
export default function Home() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="volunteer Details">
        {/*volunteer Details Start*/}
        <section className="volunteer-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="volunteer-details__left">
                            <div className="volunteer-details__img">
                                <img src="assets/images/team/volinteer-details-img-1.jpg" alt=""/>
                                <div className="volunteer-details__social">
                                    <Link href="#"><span className="icon-facebook"></span></Link>
                                    <Link href="#"><span className="icon-instagram"></span></Link>
                                    <Link href="#"><span className="icon-twitter"></span></Link>
                                    <Link href="#"><span className="icon-pintarest"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="volunteer-details__right">
                            <div className="volunteer-details__name-and-video">
                                <div className="volunteer-details__name-box">
                                    <h3 className="volunteer-details__name">Cody Fisher</h3>
                                    <p className="volunteer-details__sub-title">Boys Trainer</p>
                                </div>
                                <div className="volunteer-details__video-link">
                                    <a className="video-popup" onClick={() => setOpen(true)}>
                                        <div className="volunteer-details__video-icon">
                                            <span className="fa fa-play"></span>
                                            <i className="ripple"></i>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <p className="volunteer-details__text">Nam ultrices odio a felis lobortis convallis. In ex nunc,
                                ornare non condimentum et, egestas vel massa. Nullam hendrerit felis quis pellentesqu
                                porttitor. Aenean lobortis bibendum turpis et auctor.</p>
                            <div className="volunteer-details__progress-box">
                                <div className="volunteer-details__progress">
                                    <p className="volunteer-details__progress-title">Donation collect</p>
                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="100%" style={{ width: '100%' }}>
                                            <div className="count-text">100%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="volunteer-details__progress">
                                    <p className="volunteer-details__progress-title">volunteer building</p>
                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="50%" style={{ width: '50%' }}>
                                            <div className="count-text">50%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="volunteer-details__progress">
                                    <p className="volunteer-details__progress-title">Successful events</p>
                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="80%" style={{ width: '80%' }}>
                                            <div className="count-text">80%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="volunteer-profile">
                                <div className="volunteer-profile__inner">
                                    <div className="volunteer-profile__img">
                                        <img src="assets/images/team/volunteer-profile-img-1.jpg" alt=""/>
                                    </div>
                                    <div className="volunteer-profile__info">
                                        <h4 className="volunteer-profile__name"><Link href="volunteer-details">Robert Joe
                                                Kerry</Link></h4>
                                        <p className="volunteer-profile__designation">country manager</p>
                                    </div>
                                </div>
                                <div className="volunteer-profile__signature">
                                    <img src="assets/images/team/volunteer-d-signature.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*volunteer Details End*/}

        {/*volunteer Details background Start*/}
        <section className="volunteer-details__background">
            <div className="container">
                <div className="volunteer-details__background__Inner">
                    <h4 className="volunteer-details__background__heading">skills and education background</h4>
                    <div className="volunteer-details__background__content wow fadeInUp" data-wow-duration="1500ms"
                        data-wow-delay="00ms">
                        <h3 className="volunteer-details__background__title">Bachelor's Degree <span
                                className="volunteer-details__background__year">2012</span></h3>
                        <div className="volunteer-details__background__content__inner">
                            <p className="volunteer-details__background__text">
                                Help Them With Donation
                                Dicta sunt explicabo. Nemo enim ipsam voluptatem
                                quia voluptas sit aspernaturaut odit aut fugit, sed
                                quia consequuntur. Dicta sunt explicabo. Nemo Praesent faucibus sem
                                id massa semper ornare. Nam eu magna at mi pellentesque mattis. Morbi at condimentum
                                velit. Phasellus aliquet, leo auctor volutpat ultrices, metus dolor dictum enim, sed
                                convallis lacus urna nec erat.</p>
                        </div>
                    </div>
                    <div className="volunteer-details__background__content wow fadeInUp" data-wow-duration="1500ms"
                        data-wow-delay="100ms">
                        <h4 className="volunteer-details__background__title">P.H.D in communiction building <span
                                className="volunteer-details__background__year">2016</span></h4>
                        <div className="volunteer-details__background__content__inner">
                            <p className="volunteer-details__background__text">
                                Help Them With Donation
                                Dicta sunt explicabo. Nemo enim ipsam voluptatem
                                quia voluptas sit aspernaturaut odit aut fugit, sed
                                quia consequuntur. Dicta sunt explicabo. Praesent faucibus sem
                                id massa semper ornare. Nam eu magna at mi pellentesque mattis. Morbi at condimentum
                                velit. Phasellus aliquet, leo auctor volutpat ultrices, metus dolor dictum enim, sed
                                convallis lacus urna nec erat.</p>
                            <p className="volunteer-details__background__text">
                                Help Them With Donation
                                Dicta sunt explicabo. Nemo enim ipsam voluptatem
                                quia voluptas sit aspernaturaut odit aut fugit, sed
                                quia consequuntur. Dicta sunt explicabo. Nemo Praesent faucibus sem
                                id massa semper ornare. Nam eu magna at mi pellentesque mattis. Morbi at condimentum
                                velit. Phasellus aliquet, leo auctor volutpat ultrices, metus dolor dictum enim, sed
                                convallis lacus urna nec erat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*volunteer Details background End*/}

        {/*Contact Three Start*/}
        <section className="contact-three">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="contact-three__left">
                            <div className="contact-three__google-map-inner">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                                    className="contact-three__google-map"></iframe>
                                <div className="contact-three__contact-info">
                                    <ul className="contact-three__contact-info-list list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-pin"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Mailing Address</h5>
                                                <p>901 N Pitt Str., Suite 170 Alexandria, USA</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-call"></span>
                                            </div>
                                            <div className="content">
                                                <h5>Phone Number</h5>
                                                <p><Link href="tel:4065550120">(406) 555-0120</Link></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-envelope"></span>
                                            </div>
                                            <div className="content">
                                                <h5>support email</h5>
                                                <p><Link href="mailto:info@cleanheart.com">info@cleanheart.com</Link></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="contact-three__right">
                            <h3 className="contact-three__right-title">Leave us a Message</h3>
                            <form className="contact-form-validated contact-three__form"
                                method="post" >
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="contact-three__input-box">
                                            <input type="text" name="name" placeholder="Name" required=""/>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="contact-three__input-box">
                                            <input type="email" name="email" placeholder="Email Address" required=""/>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="contact-three__input-box">
                                            <input type="text" name="Phone" placeholder="Phone Number" required=""/>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="contact-three__input-box">
                                            <div className="select-box">
                                                <select className="selectmenu wide">
                                                    <option >Choose a Option</option>
                                                    <option>Type Of Service 01</option>
                                                    <option>Type Of Service 02</option>
                                                    <option>Type Of Service 03</option>
                                                    <option>Type Of Service 04</option>
                                                    <option>Type Of Service 05</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="contact-three__input-box text-message-box">
                                            <textarea name="message" placeholder="Message here.."></textarea>
                                        </div>
                                        <div className="contact-three__btn-box">
                                            <button type="submit" className="thm-btn contact-three__btn">Send
                                                message<span><i className="icon-arrow-right"></i></span></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="result"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Contact Three End*/}
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />

            </Layout>
        </>
    )
}