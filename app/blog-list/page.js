import Link from "next/link"
import Layout from "@/components/layout/Layout"
export default function Home() {

    return (
        <>
        <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Blog List">
        {/*Blog List Start*/}
        <section className="blog-list">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="blog-list__left">
                            {/*Blog List Single Start*/}
                            <div className="blog-list__single">
                                <div className="blog-list__img">
                                    <img src="assets/images/blog/blog-list-1-1.jpg" alt=""/>
                                    <Link href="blog-details">
                                        <span className="blog-list__plus"></span>
                                    </Link>
                                </div>
                                <div className="blog-list__content">
                                    <ul className="blog-list__meta list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-user"></span>
                                            </div>
                                            <Link href="#">By admin</Link>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-file"></span>
                                            </div>
                                            <Link href="#">Category</Link>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-comment"></span>
                                            </div>
                                            <Link href="#">Comments (05)</Link>
                                        </li>
                                    </ul>
                                    <h3 className="blog-list__title"><Link href="blog-details">Together We Can Make a
                                            Difference</Link></h3>
                                    <p className="blog-list__text-1">Web designing in a powerful way of just not an only
                                        professions, however, in a passion for our Company. We have to a tendency to
                                        believe the idea that smart looking of any website is the first impression on
                                        visitors.Web designing in a powerful way of just not an only professions,
                                        however, in a passion for our Company. We have</p>
                                    <div className="blog-list__btn-box">
                                        <Link href="blog-details" className="blog-list__btn thm-btn">Read More<span><i
                                                    className="icon-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/*Blog List Single End*/}
                            {/*Blog List Single Start*/}
                            <div className="blog-list__single">
                                <div className="blog-list__img">
                                    <img src="assets/images/blog/blog-list-1-2.jpg" alt=""/>
                                    <Link href="blog-details">
                                        <span className="blog-list__plus"></span>
                                    </Link>
                                </div>
                                <div className="blog-list__content">
                                    <ul className="blog-list__meta list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-user"></span>
                                            </div>
                                            <Link href="#">By admin</Link>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-file"></span>
                                            </div>
                                            <Link href="#">Category</Link>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-comment"></span>
                                            </div>
                                            <Link href="#">Comments (05)</Link>
                                        </li>
                                    </ul>
                                    <h3 className="blog-list__title"><Link href="blog-details">Supporting Dreams Changing
                                            Lives</Link></h3>
                                    <p className="blog-list__text-1">Web designing in a powerful way of just not an only
                                        professions, however, in a passion for our Company. We have to a tendency to
                                        believe the idea that smart looking of any website is the first impression on
                                        visitors.Web designing in a powerful way of just not an only professions,
                                        however, in a passion for our Company. We have</p>
                                    <div className="blog-list__btn-box">
                                        <Link href="blog-details" className="blog-list__btn thm-btn">Read More<span><i
                                                    className="icon-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/*Blog List Single End*/}
                            {/*Blog List Single Start*/}
                            <div className="blog-list__single">
                                <div className="blog-list__img">
                                    <img src="assets/images/blog/blog-list-1-3.jpg" alt=""/>
                                    <Link href="blog-details">
                                        <span className="blog-list__plus"></span>
                                    </Link>
                                </div>
                                <div className="blog-list__content">
                                    <ul className="blog-list__meta list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-user"></span>
                                            </div>
                                            <Link href="#">By admin</Link>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-file"></span>
                                            </div>
                                            <Link href="#">Category</Link>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-comment"></span>
                                            </div>
                                            <Link href="#">Comments (05)</Link>
                                        </li>
                                    </ul>
                                    <h3 className="blog-list__title"><Link href="blog-details">Unite for a Cause Change
                                            the World</Link></h3>
                                    <p className="blog-list__text-1">Web designing in a powerful way of just not an only
                                        professions, however, in a passion for our Company. We have to a tendency to
                                        believe the idea that smart looking of any website is the first impression on
                                        visitors.Web designing in a powerful way of just not an only professions,
                                        however, in a passion for our Company. We have</p>
                                    <div className="blog-list__btn-box">
                                        <Link href="blog-details" className="blog-list__btn thm-btn">Read More<span><i
                                                    className="icon-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                            </div>
                            {/*Blog List Single End*/}
                            <div className="blog-list__pagination">
                                <ul className="pg-pagination list-unstyled">
                                    <li className="count active"><Link href="#">1</Link></li>
                                    <li className="count"><Link href="#">2</Link></li>
                                    <li className="count"><Link href="#">3</Link></li>
                                    <li className="next">
                                        <Link href="#" aria-label="Next"><i className="fas fa-angle-right"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="sidebar">
                            <div className="sidebar__single sidebar__search">
                                <div className="sidebar__title-box">
                                    <h3 className="sidebar__title">Search Here </h3>
                                </div>
                                <form action="#" className="sidebar__search-form">
                                    <input type="search" placeholder="Search.." />
                                    <button type="submit"><i className="icon-search"></i></button>
                                </form>
                            </div>
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
                            <div className="sidebar__single sidebar__post">
                                <div className="sidebar__title-box">
                                    <h3 className="sidebar__title">Recent Post</h3>
                                </div>
                                <ul className="sidebar__post-list list-unstyled">
                                    <li>
                                        <div className="sidebar__post-image">
                                            <img src="assets/images/blog/blog-lp-1.jpg" alt=""/>
                                        </div>
                                        <div className="sidebar__post-content">
                                            <p className="sidebar__post-date"><span className="icon-calender"></span>October 19,
                                                2022</p>
                                            <h3 className="sidebar__post-title"><Link href="blog-details">Funding Research
                                                    for a Cure Charity</Link></h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar__post-image">
                                            <img src="assets/images/blog/blog-lp-2.jpg" alt=""/>
                                        </div>
                                        <div className="sidebar__post-content">
                                            <p className="sidebar__post-date"><span className="icon-calender"></span>October 19,
                                                2022</p>
                                            <h3 className="sidebar__post-title"><Link href="blog-details">Supporting
                                                    Mental Health Initiatives Donations</Link></h3>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="sidebar__post-image">
                                            <img src="assets/images/blog/blog-lp-3.jpg" alt=""/>
                                        </div>
                                        <div className="sidebar__post-content">
                                            <p className="sidebar__post-date"><span className="icon-calender"></span>October 19,
                                                2022</p>
                                            <h3 className="sidebar__post-title"><Link href="blog-details">Caring for the
                                                    Elderly and Vulnerable at a Time</Link></h3>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="sidebar__single sidebar__tag">
                                <div className="sidebar__title-box">
                                    <h3 className="sidebar__title">Popular Tags</h3>
                                </div>
                                <div className="sidebar__tag-list">
                                    <Link href="blog-details">Giving Back</Link>
                                    <Link href="blog-details">Relief Effort</Link>
                                    <Link href="blog-details">Positive Impact</Link>
                                    <Link href="blog-details">Kindness</Link>
                                    <Link href="blog-details">Care</Link>
                                    <Link href="blog-details">Helping</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Blog List End*/}

            </Layout>
        </>
    )
}