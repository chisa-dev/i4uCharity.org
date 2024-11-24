
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Cause details">
        {/*Cause Details Start*/}
        <section className="cause-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="cause-details__left">
                            <div className="cause-details__img-box">
                                <div className="cause-details__img">
                                    <img src="assets/images/project/cause-details-img-1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="cause-details__meta list-unstyled">
                                <Link href="#"><span className="fas fa-heart"></span>water</Link>
                            </div>
                            <h2 className="cause-details__title">African People Need Pure Water</h2>
                            <div className="cause-details__progress-box">
                                <div className="cause-details__progress">
                                    <div className="bar">
                                        <div className="bar-inner count-bar" data-percent="75%" style={{ width: '75%' }}>
                                        </div>
                                    </div>
                                </div>
                                <div className="cause-details__goals">
                                    <div className="cause-details__raised">
                                        <p><i className="fal fa-donate"></i>70% <span>Raised</span></p>
                                    </div>
                                    <div className="cause-details__raised">
                                        <p><i className="far fa-analytics"></i> 100,000$<span>Goal</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="cause-details__donation-amout-list">
                                <span>5</span>
                                <span>10</span>
                                <span>20</span>
                                <span>50</span>
                                <span>10</span>
                                <span>custom</span>
                            </div>
                            <div className="cause-details__pament-box">
                                <h2 className="cause-details__pament-title">Select Payment Method</h2>
                                <div className="cause-details__quote-radio">
                                    <label className="custom-radio">
                                        <input type="radio" name="myRadios" checked />
                                        <span className="radio-dot"></span>
                                        <span className="radio-text">Test Donation
                                        </span>
                                    </label>
                                    <label className="custom-radio">
                                        <input type="radio" name="myRadios" />
                                        <span className="radio-dot"></span>
                                        <span className="radio-text">Offline Donation
                                        </span>
                                    </label>
                                    <label className="custom-radio">
                                        <input type="radio" name="myRadios" />
                                        <span className="radio-dot"></span>
                                        <span className="radio-text">Credit Card</span>
                                    </label>
                                </div>
                            </div>
                            <div className="cause-details__form-box">
                                <form className="contact-form-validated cause-details__form"
                                    method="post" >
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6">
                                            <h4 className="cause-details__input-title">First Name</h4>
                                            <div className="cause-details__input-box">
                                                <input type="text" name="name" placeholder="Name" required=""/>
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6">
                                            <h4 className="cause-details__input-title">Last Name</h4>
                                            <div className="cause-details__input-box">
                                                <input type="text" name="name" placeholder="Name" required=""/>
                                            </div>
                                        </div>
                                        <div className="col-xl-12">
                                            <h4 className="cause-details__input-title">Email Address</h4>
                                            <div className="cause-details__input-box">
                                                <input type="email" name="email" placeholder="Email Address"
                                                    required=""/>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="result"></div>
                            </div>
                            <div className="cause-details__donate-and-btn">
                                <h4 className="cause-details__donate-title">Donation Total:</h4>
                                <div className="cause-details__donate-box">
                                    <div className="cause-details__donate">
                                        <p>$10</p>
                                    </div>
                                    <div className="cause-details__donate-btn">
                                        <button type="submit"><span className="fas fa-heart"></span>Donate Now</button>
                                    </div>
                                </div>
                            </div>
                            <p className="cause-details__text-1">Web designing in a powerful way of just not an only
                                professions, however, in a passion for our Company. We have to a tendency to believe the
                                idea that smart looking of any website is the first impression on visitors.Web designing
                                in a powerful way of just not an only professions, however, in a passion for our
                                Company. We have</p>
                            <p className="cause-details__text-2">ut many people around the world don’t have that luxury.
                                Every day, about 1,400 children die from diseases caused by unsafe water and poor
                                sanitation. But it doesn’t have to be that way.</p>
                            <p className="cause-details__text-3">Web designing in a powerful way of just not an only
                                professions, however, in a passion for our Company. We have to a tendency to believe the
                                idea that smart looking of any website is the first impression on visitors.Web designing
                                in a powerful way of just not an only professions, however, in a passion for our
                                Company.We have to a tendency to believe the idea that smart looking of any website is
                                the first impression on visitors</p>
                            <div className="cause-details__img-box-2">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className="cause-details__img-box-img">
                                            <img src="assets/images/project/cause-details-img-box-img-1.jpg" alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="cause-details__img-box-img">
                                            <img src="assets/images/project/cause-details-img-box-img-2.jpg" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h2 className="cause-details__title-1">Our Goals</h2>
                            <p className="cause-details__text-4">Surely access to clean water should be a basic human right
                                in the <span className="color-black">19th century.</span> If you can only give <span
                                    className="color-base">£10</span> just this one time, it will still make a difference.
                            </p>
                            <p className="cause-details__text-5">There are simple solutions like drilled wells, spring
                                protections and BioSand filters that help provide clean water to communities around the
                                world.ut many people around the world don’t have that luxury. Every day, about 1,400
                                children die from diseases caused by unsafe water and poor sanitation. But it doesn’t
                                have to be that way. There are simple solutions like drilled wells, spring protections
                                and BioSand filters</p>
                            <div className="cause-details__points-box">
                                <ul className="cause-details__points-list list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="fas fa-check"></span>
                                        </div>
                                        <p>A place in history</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="fas fa-check"></span>
                                        </div>
                                        <p>More goodness in the world</p>
                                    </li>
                                </ul>
                                <ul className="cause-details__points-list list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="fas fa-check"></span>
                                        </div>
                                        <p>It’s about impact, goodness</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="fas fa-check"></span>
                                        </div>
                                        <p>The world we live in right now</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="sidebar">
                            <div className="sidebar__single sidebar__category">
                                <div className="sidebar__title-box">
                                    <h3 className="sidebar__title">Categories</h3>
                                </div>
                                <ul className="sidebar__category-list list-unstyled">
                                    <li>
                                        <Link href="blog-details">Donation Drive<span>59</span></Link>
                                    </li>
                                    <li>
                                        <Link href="blog-details">Community Outreach<span>35</span></Link>
                                    </li>
                                    <li>
                                        <Link href="blog-details">Volunteer Assistance<span>12</span></Link>
                                    </li>
                                    <li>
                                        <Link href="blog-details">Fundraising Event<span>46</span></Link>
                                    </li>
                                    <li>
                                        <Link href="blog-details">Support Network<span>78</span></Link>
                                    </li>
                                    <li>
                                        <Link href="blog-details">Philanthropic Initiative<span>89</span></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="sidebar__single sidebar__gallery">
                                <div className="sidebar__title-box">
                                    <h3 className="sidebar__title">Gallery</h3>
                                </div>
                                <div className="sidebar__gallery-img">
                                    <img src="assets/images/project/sidebar-gallery-img-1.jpg" alt=""/>
                                </div>
                                <div className="sidebar__gallery-img">
                                    <img src="assets/images/project/sidebar-gallery-img-2.jpg" alt=""/>
                                </div>
                                <div className="sidebar__gallery-img">
                                    <img src="assets/images/project/sidebar-gallery-img-3.jpg" alt=""/>
                                </div>
                                <div className="sidebar__gallery-img">
                                    <img src="assets/images/project/sidebar-gallery-img-4.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="sidebar__single sidebar__call-to-action">
                                <div className="sidebar__call-to-action-bg"
                                    style={{ backgroundImage: ' url(assets/images/project/sidebar-call-to-action-bg.jpg)' }} >
                                </div>
                                <span className="sidebar__call-to-action-sub-title">Call To Action</span>
                                <h3 className="sidebar__call-to-action-title">There are no secrets to success</h3>
                                <div className="sidebar__call-to-action-btn-box">
                                    <Link href="#" className="sidebar__call-to-action-btn thm-btn">Get in touch<span><i
                                                className="icon-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Cause Details End*/}

            </Layout>
        </>
    )
}