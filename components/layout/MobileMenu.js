'use client'
import Link from "next/link";

const MobileMenu = ({ handleMobileMenu }) => {
    return (
        <>
            <div className="mobile-nav__wrapper">
                <div className="mobile-nav__overlay mobile-nav__toggler" onClick={handleMobileMenu}></div>
                <div className="mobile-nav__content">
                    <span className="mobile-nav__close mobile-nav__toggler" onClick={handleMobileMenu}>
                        <i className="fa fa-times"></i>
                    </span>

                    <div className="logo-box">
                        <Link href="/" aria-label="logo image">
                            <img src="assets/images/resources/logo-2.png" width="150" alt="Logo" />
                        </Link>
                    </div>

                    <div className="mobile-nav__container">
                        <ul className="main-menu__list">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/family-visits">Family Visits Ministry</Link></li>
                            <li><Link href="/christmas-carnival">Christmas Carnival</Link></li>
                            <li><Link href="/cloth-sharing">Cloth Sharing</Link></li>
                            <li><Link href="/donation-details">Donation</Link></li>
                            <li><Link href="/stories">Stories</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    <ul className="mobile-nav__contact list-unstyled">
                        <li><i className="fa fa-envelope"></i>
                            <Link href="mailto:needhelp@elitecons.com">needhelp@elitecons.com</Link>
                        </li>
                        <li><i className="fa fa-phone-alt"></i>
                            <Link href="tel:666-888-0000">666 888 0000</Link>
                        </li>
                    </ul>

                    <div className="mobile-nav__top">
                        <div className="mobile-nav__social">
                            <Link href="#" className="fab fa-twitter"></Link>
                            <Link href="#" className="fab fa-facebook-square"></Link>
                            <Link href="#" className="fab fa-pinterest-p"></Link>
                            <Link href="#" className="fab fa-instagram"></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MobileMenu;
