import Link from "next/link"

export default function Footer() {
    return (
        <>
       
        <footer className="site-footer-two">
            <div className="site-footer-two__shape float-bob-y-2">
                <img src="assets/images/shapes/site-footer-two-shape.png" alt=""/>
            </div>
            <div className="site-footer-two__top">
                <div className="container">
                    <div className="site-footer-two__top-inner">
                        <div className="site-footer-two__top-logo">
                            <Link href="#"><img src="assets/images/resources/logo-2.png" alt=""/></Link>
                        </div>
                        <div className="row">
                            <div className="col-xl-5 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                                <div className="footer-widget-two__about">
                                    <h2 className="footer-widget-two__about-title">I For You</h2>
                                    <p className="footer-widget-two__about-text">We're dedicated to sharing the love of Christ with those in need. Through compassion, service, and unity, we aim to make a meaningful impact in the lives of individuals. </p>
                                    <div className="footer-widget-two__btn-box">
                                        <Link href="contact" className="footer-widget-two__btn thm-btn">Contact
                                            Us<span><i className="icon-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                                <div className="footer-widget-two__services">
                                    <h4 className="footer-widget-two__title">Services</h4>
                                    <ul className="footer-widget-two__services-list list-unstyled">
                                        <li><Link href="about">Supporting Families</Link></li>
                                        <li><Link href="about">Academics Program</Link></li>
                                        <li><Link href="about">Cloth Sharing</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                                <div className="footer-widget-two__links">
                                    <h4 className="footer-widget-two__title">Useful Links</h4>
                                    <ul className="footer-widget-two__services-list list-unstyled">
                                        <li><Link href="https://t.me/i4uteam">AASTU Fellowship</Link></li>
                                        <li><Link href="https://t.me/aastuecsf">I4U Telegram</Link></li>
                                        <li><Link href="https://www.evasue.net/">EvaSUE Website</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                                <div className="footer-widget-two__contact">
                                    <h3 className="footer-widget-two__title">Contact Info</h3>
                                    <ul className="footer-widget-two__contact-list list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-call"></span>
                                            </div>
                                            <p><Link href="tel:0882466422710">+251 961099526</Link></p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-envelope"></span>
                                            </div>
                                            <p><Link href="mailto:example@mail.com">+251 994265687</Link></p>
                                        </li>
                                    </ul>
                                    <div className="site-footer-two__social">
                                        <Link href="#"><i className="icon-facebook"></i></Link>
                                        <Link href="#"><i className="icon-twitter"></i></Link>
                                        <Link href="#"><i className="icon-instagram"></i></Link>
                                        <Link href="#"><i className="icon-pintarest"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-footer-two__bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="site-footer-two__bottom-inner">
                                <div className="site-footer-two__copyright">
    <p className="site-footer-two__copyright-text">
        &#169;2025 <Link href="#">AASTU Fellowship</Link>. Designed By{' '}
        <Link href="https://horansoftware.com" target="_blank" rel="noopener noreferrer">
            Horan Software
        </Link>
    </p>
</div>

                                    <div className="site-footer-two__bottom-menu-box">
                                        <ul className="list-unstyled site-footer-two__bottom-menu">
                                            <li><Link href="about">About Us</Link></li>
                                            <li><Link href="about">Cookies Settings</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}
