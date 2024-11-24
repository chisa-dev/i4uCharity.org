'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Home() {
    
    return (
        <>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Events List">
            {/*Event List Start*/}
        <section className="events-list">
            <div className="container">
                <div className="events-list__inner">
                    {/*Event List Single Start*/}
                    <div className="events-list__single-and-date">
                        <div className="events-list__single">
                            <div className="events-list__img">
                                <img src="assets/images/event/event-list--1-1.jpg" alt=""/>
                            </div>
                            <div className="events-list__content">
                                <h3 className="events-list__title"><Link href="event-details">Donation Drive</Link></h3>
                                <p className="events-list__text">Lorem Ipsum is simply dummy a of the printing and
                                    type setting industry Loreaim Ipsum has Southern grayling trout-perch. printing and
                                    type setting industry Loreaim Ipsum has</p>
                                <ul className="events-list__date list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="far fa-clock"></span>
                                        </div>
                                        <p><span>September 30,</span> 10:00 AM - <span>October 31,</span> 18:00
                                            PM</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="fas fa-map-marker-alt"></span>
                                        </div>
                                        <p>6391 Elgin St. Celina, 10299</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="events-list__date-box">
                            <p>22
                                <br/> <span>Jan, 24</span></p>
                        </div>
                    </div>
                    {/*Event List Single End*/}
                    {/*Event List Single Start*/}
                    <div className="events-list__single-and-date">
                        <div className="events-list__single">
                            <div className="events-list__img">
                                <img src="assets/images/event/event-list--1-2.jpg" alt=""/>
                            </div>
                            <div className="events-list__content">
                                <h3 className="events-list__title"><Link href="event-details">win-win survival</Link></h3>
                                <p className="events-list__text">Lorem Ipsum is simply dummy a of the printing and
                                    type setting industry Loreaim Ipsum has Southern grayling trout-perch. printing and
                                    type setting industry Loreaim Ipsum has</p>
                                <ul className="events-list__date list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="far fa-clock"></span>
                                        </div>
                                        <p><span>September 30,</span> 10:00 AM - <span>October 31,</span> 18:00
                                            PM</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="fas fa-map-marker-alt"></span>
                                        </div>
                                        <p>6391 Elgin St. Celina, 10299</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="events-list__date-box">
                            <p>22
                                <br/> <span>Feb, 24</span></p>
                        </div>
                    </div>
                    {/*Event List Single End*/}
                    {/*Event List Single Start*/}
                    <div className="events-list__single-and-date">
                        <div className="events-list__single">
                            <div className="events-list__img">
                                <img src="assets/images/event/event-list--1-3.jpg" alt=""/>
                            </div>
                            <div className="events-list__content">
                                <h3 className="events-list__title"><Link href="event-details">Children Education.</Link></h3>
                                <p className="events-list__text">Lorem Ipsum is simply dummy a of the printing and
                                    type setting industry Loreaim Ipsum has Southern grayling trout-perch. printing and
                                    type setting industry Loreaim Ipsum has</p>
                                <ul className="events-list__date list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="far fa-clock"></span>
                                        </div>
                                        <p><span>September 30,</span> 10:00 AM - <span>October 31,</span> 18:00
                                            PM</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="fas fa-map-marker-alt"></span>
                                        </div>
                                        <p>6391 Elgin St. Celina, 10299</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="events-list__date-box">
                            <p>22
                                <br/> <span>Mar, 24</span></p>
                        </div>
                    </div>
                    {/*Event List Single End*/}
                    {/*Event List Single Start*/}
                    <div className="events-list__single-and-date">
                        <div className="events-list__single">
                            <div className="events-list__img">
                                <img src="assets/images/event/event-list--1-4.jpg" alt=""/>
                            </div>
                            <div className="events-list__content">
                                <h3 className="events-list__title"><Link href="event-details">Help For Ecosystem</Link></h3>
                                <p className="events-list__text">Lorem Ipsum is simply dummy a of the printing and
                                    type setting industry Loreaim Ipsum has Southern grayling trout-perch. printing and
                                    type setting industry Loreaim Ipsum has</p>
                                <ul className="events-list__date list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="far fa-clock"></span>
                                        </div>
                                        <p><span>September 30,</span> 10:00 AM - <span>October 31,</span> 18:00
                                            PM</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="fas fa-map-marker-alt"></span>
                                        </div>
                                        <p>6391 Elgin St. Celina, 10299</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="events-list__date-box">
                            <p>22
                                <br/> <span>Apr, 24</span></p>
                        </div>
                    </div>
                    {/*Event List Single End*/}
                    {/*Event List Single Start*/}
                    <div className="events-list__single-and-date">
                        <div className="events-list__single">
                            <div className="events-list__img">
                                <img src="assets/images/event/event-list--1-5.jpg" alt=""/>
                            </div>
                            <div className="events-list__content">
                                <h3 className="events-list__title"><Link href="event-details">Water For All</Link></h3>
                                <p className="events-list__text">Lorem Ipsum is simply dummy a of the printing and
                                    type setting industry Loreaim Ipsum has Southern grayling trout-perch. printing and
                                    type setting industry Loreaim Ipsum has</p>
                                <ul className="events-list__date list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="far fa-clock"></span>
                                        </div>
                                        <p><span>September 30,</span> 10:00 AM - <span>October 31,</span> 18:00
                                            PM</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="fas fa-map-marker-alt"></span>
                                        </div>
                                        <p>6391 Elgin St. Celina, 10299</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="events-list__date-box">
                            <p>22
                                <br/> <span>May, 24</span></p>
                        </div>
                    </div>
                    {/*Event List Single End*/}
                    {/*Event List Single Start*/}
                    <div className="events-list__single-and-date">
                        <div className="events-list__single">
                            <div className="events-list__img">
                                <img src="assets/images/event/event-list--1-6.jpg" alt=""/>
                            </div>
                            <div className="events-list__content">
                                <h3 className="events-list__title"><Link href="event-details">Vaccine Aid Camp</Link></h3>
                                <p className="events-list__text">Lorem Ipsum is simply dummy a of the printing and
                                    type setting industry Loreaim Ipsum has Southern grayling trout-perch. printing and
                                    type setting industry Loreaim Ipsum has</p>
                                <ul className="events-list__date list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="far fa-clock"></span>
                                        </div>
                                        <p><span>September 30,</span> 10:00 AM - <span>October 31,</span> 18:00
                                            PM</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="fas fa-map-marker-alt"></span>
                                        </div>
                                        <p>6391 Elgin St. Celina, 10299</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="events-list__date-box">
                            <p>22
                                <br/> <span>Jun, 24</span></p>
                        </div>
                    </div>
                    {/*Event List Single End*/}
                </div>
            </div>
        </section>
        {/*Event Page End*/}

            </Layout>
        </>
    )
}