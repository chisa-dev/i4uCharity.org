'use client'
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };
    return (
        <>
            <div className="mobile-nav__wrapper">
                <div className="mobile-nav__overlay mobile-nav__toggler" onClick={handleMobileMenu} ></div>
                <div className="mobile-nav__content">
                    <span className="mobile-nav__close mobile-nav__toggler" onClick={handleMobileMenu} ><i className="fa fa-times"></i></span>

                    <div className="logo-box">
                        <Link href="/" aria-label="logo image"><img src="assets/images/resources/logo-2.png" width="150" alt="" /></Link>
                    </div>

                    <div className="mobile-nav__container">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="main-menu__list">
                                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}><Link href="/">Home</Link>
                                     
                                </li>
                                <li><Link href="/about/">About</Link></li>
                                <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}><Link href="/#">Events</Link>
                                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>                                 
                                        <li className={isActive.subMenuKey == 3 ? "dropdown current" : "dropdown"}>
                                            <Link href="/">Volunteer</Link>
                                            <ul style={{ display: `${isActive.subMenuKey == 3 ? "block" : "none"}` }}>
                                                <li><Link href="volunteer">Volunteer</Link></li>
                                                <li><Link href="volunteer-carousel">Volunteer Carousel</Link>
                                                </li>
                                                <li><Link href="become-volunteer">Become Volunteer</Link></li>
                                                <li><Link href="volunteer-details">Volunteer Details</Link></li>
                                            </ul>
                                            <button className={isActive.subMenuKey == 3 ? "expanded open" : "expanded"} onClick={() => handleToggle(2, 3)}><span className="fa fa-angle-right" /></button>
                                        </li>
                                        <li className={isActive.subMenuKey == 4 ? "dropdown current" : "dropdown"}>
                                            <Link href="/">Events</Link>
                                            <ul style={{ display: `${isActive.subMenuKey == 4 ? "block" : "none"}` }}>
                                                <li><Link href="events">Events</Link></li>
                                                <li><Link href="events-carousel">Events Carousel</Link></li>
                                                <li><Link href="events-list">Events List</Link></li>
                                                <li><Link href="event-details">Event Details</Link></li>
                                            </ul>
                                            <button className={isActive.subMenuKey == 4 ? "expanded open" : "expanded"} onClick={() => handleToggle(2, 4)}><span className="fa fa-angle-right" /></button>
                                        </li>
                                        <li><Link href="projects">Projects</Link></li>
                                        <li><Link href="project-details">Project Details</Link></li>
                                        <li><Link href="cause-details">Cause Details</Link></li>
                                        <li><Link href="testimonials">Testimonials</Link></li>
                                        <li><Link href="faq">FAQs</Link></li>
                                        <li><Link href="404">404 Error</Link></li>
                                    </ul>
                                    <button className={isActive.key == 2 ? "expanded open" : ""} onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></button>
                                </li>
                                <li className={isActive.key == 5 ? "dropdown current" : "dropdown"}><Link href="/donation-details">Donation</Link>
                              
                                </li>
                                
                                <li className={isActive.key == 7 ? "dropdown current" : "dropdown"}><Link href="/#">Stories</Link>
                                    <ul style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>                                 
                                        <li><Link href="blog">Blog</Link></li>
                                        <li><Link href="blog-carousel">Blog Carousel</Link></li>
                                        <li><Link href="blog-list">Blog List</Link></li>
                                        <li><Link href="blog-details">Blog Details</Link></li>
                                    </ul>
                                    <button className={isActive.key == 7 ? "expanded open" : ""} onClick={() => handleToggle(7)}><span className="fa fa-angle-right" /></button>
                                </li>
                                <li><Link href="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <ul className="mobile-nav__contact list-unstyled">
                        <li>
                            <i className="fa fa-envelope"></i>
                            <Link href="mailto:needhelp@elitecons.com">needhelp@elitecons.com</Link>
                        </li>
                        <li>
                            <i className="fa fa-phone-alt"></i>
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
    )
}
export default MobileMenu;
