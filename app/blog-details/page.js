
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Blog Details">
            {/*Blog Details Start*/}
        <section className="blog-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="blog-details__left">
                            <div className="blog-details__img">
                                <img src="assets/images/blog/blog-details-img-1.jpg" alt=""/>
                            </div>
                            <div className="blog-details__content">
                                <ul className="blog-details__meta list-unstyled">
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
                                <h3 className="blog-details__title">Explore the world like never before travel
                                    experience</h3>
                                <p className="blog-details__text-1">Web designing in a powerful way of just not an only
                                    professions, however, in a passion for our Company. We have to a tendency to believe
                                    the idea that smart looking of any website is the first impression on visitors.Web
                                    designing in a powerful way of just not an only professions, however, in a passion
                                    for our Company. We have</p>
                                <p className="blog-details__text-2">Web designing in a powerful way of just not an only
                                    professions, however, in a passion for our Company. We have to a tendency to believe
                                    the idea that smart looking of any website is the first impression on visitors.Web
                                    designing in a powerful way </p>
                                <div className="blog-details__author-box">
                                    <p className="blog-details__author-text">Aliquam eros justo, posuere loborti viverra
                                        laoreet matti ullamcorper posuere vive rra .Aliquam eros justo, posuere
                                        lobortis, viverra laoreet augue mattis fermentu m ul amcorper viverra laoreet.
                                    </p>
                                    <span className="blog-details__author-name">Mark wood</span>
                                    <div className="blog-details__author-quote">
                                        <span className="icon-quote"></span>
                                    </div>
                                </div>
                                <p className="blog-details__text-3">Web designing in a powerful way of just not an only
                                    professions, however, in a passion for our Company. We have to a tendency to believe
                                    the idea that smart looking of any website is the first impression on visitors.Web
                                    designing in a powerful way of just not an only professions, however, in a passion
                                    for our Company. We have</p>
                            </div>
                            <div className="blog-details__keyword-and-tag">
                                <div className="blog-details__keyword">
                                    <span>Keyword:</span>
                                    <div className="blog-details__keyword-list">
                                        <Link href="#">Relief Effort</Link>
                                        <Link href="#">Kindness</Link>
                                        <Link href="#">Helping</Link>
                                    </div>
                                </div>
                                <div className="blog-details__tag">
                                    <span>Tags:</span>
                                    <div className="blog-details__tag-list">
                                        <Link href="#">Donation</Link>
                                        <Link href="#">Charity</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-one">
                                <div className="comment-one__single">
                                    <div className="comment-one__image">
                                        <img src="assets/images/blog/comment-1-1.jpg" alt=""/>
                                    </div>
                                    <div className="comment-one__content">
                                        <h4>Stanio lainton</h4>
                                        <span>September 16, 2024</span>
                                        <p>Ished fact that a reader will be distrol acted bioii the.ished fact that a
                                            reader will be distrol acted laoreet Aliquam fact that a reader will be
                                            distrol acted Aliquam eros justo. Ished fact that a reader will be distrol
                                            acted bioii the.i</p>
                                        <div className="comment-one__btn-box">
                                            <Link href="blog-details" className="comment-one__btn">reply</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-one__single">
                                    <div className="comment-one__image">
                                        <img src="assets/images/blog/comment-1-2.jpg" alt=""/>
                                    </div>
                                    <div className="comment-one__content">
                                        <h4>Junal Alex</h4>
                                        <span>September 16, 2024</span>
                                        <p>Ished fact that a reader will be distrol acted bioii the.ished fact that a
                                            reader will be distrol acted laoreet Aliquam fact that a reader will be
                                            distrol acted Aliquam eros justo. Ished fact that a reader will be distrol
                                            acted bioii the.i</p>
                                        <div className="comment-one__btn-box">
                                            <Link href="blog-details" className="comment-one__btn">reply</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="comment-form">
                                <h3 className="comment-form__title">Add a comment</h3>
                                <p className="comment-form__text">By using form u agree with the message sorage, you can
                                    contact us directly now</p>
                                <form
                                    className="comment-form__form contact-form-validated" >
                                    <div className="row">
                                        <div className="col-xl-4">
                                            <div className="comment-form__input-box">
                                                <input type="text" placeholder="Your Name" name="name" />
                                            </div>
                                        </div>
                                        <div className="col-xl-4">
                                            <div className="comment-form__input-box">
                                                <input type="email" placeholder="Your Email" name="email"/>
                                            </div>
                                        </div>
                                        <div className="col-xl-4">
                                            <div className="comment-form__input-box">
                                                <input type="text" placeholder="Your Website" name="website" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="comment-form__input-box text-message-box">
                                                <textarea name="message" placeholder="Write your messege"></textarea>
                                            </div>
                                            <div className="comment-form__check-and-btn">
                                                <div className="checked-box">
                                                    <input type="checkbox" name="skipper1" id="skipper" />
                                                    <label ><span></span>Save my name email and
                                                        website</label>
                                                </div>
                                                <div className="comment-form__btn-box">
                                                    <button type="submit" className="comment-form__btn thm-btn">Send
                                                        Messege<span><i className="icon-arrow-right"></i></span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <div className="result"></div>
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
        {/*Blog Details End*/}

            </Layout>
        </>
    )
}