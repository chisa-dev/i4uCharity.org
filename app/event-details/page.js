'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Home() {
    
    return (
        <>
        <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Event Details">
        {/**Event Details Start*/}
        <section className="event-details">
            <div className="container">
                <div className="event-details__inner">
                    <div className="event-details__img">
                        <img src="assets/images/event/event-details-img-1.jpg" alt=""/>
                    </div>
                    <p className="event-details__text-1">Southern grayling trout-perch. Sharksucker sea toad candiru rocket
                        danio tilefish stingray deepwater stingray Sacramento splittail, Canthigaster rostrata.</p>
                    <p className="event-details__text-2">Minnow snoek icefish velvet-belly shark, California halibut round
                        stingray northern sea robin. Southern grayling trout-perch. Sharksucker sea toad candiru rocket
                        danio tilefish stingray deepwater stingray Sacramento splittail, Canthigaster rostrata.
                        Midshipman dartfish Modoc sucker, yellowtail kingfish basslet. Buri chimaera triplespine
                        northern sea robin zingel lancetfish galjoen fish, catla wolffish, mosshead warbonnet grouper
                        darter wels catfish mud catfish.</p>
                    <div className="event-details__text-box">
                        <p>Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere vive rra
                            .Aliquam eros justo, posuere lobortis, viverra laoreet augue mattis fermentu m ul amcorper
                            viverra laoreet.flounder European minnow black dragonfish orbicular batfish stingray
                            tenpounder. Sucker lionfish garibaldi surgeonfish</p>
                    </div>
                    <p className="event-details__text-3">Web designing in a powerful way of just not an only professions,
                        however, in a passion for our Company. We have to a tendency to believe the idea that smart
                        looking of any website is the first impression on visitors.Web designing in a powerful way of
                        just not an only professions, however, in a passion for our Company. We have</p>
                    <p className="event-details__text-4">Web designing in a powerful way of just not an only professions,
                        however, in a passion for our Company. We have to a tendency to believe the idea that smart</p>
                    <ul className="event-details__points list-unstyled">
                        <li>
                            <div className="event-details__points-shape"></div>
                            <p className="event-details__points-text">Grayling Mexican golden trout; Chinook salmon bramble
                                shark</p>
                        </li>
                        <li>
                            <div className="event-details__points-shape"></div>
                            <p className="event-details__points-text">Scat zebra pleco graveldiver river shark tripod fish;
                                flagtail bala</p>
                        </li>
                        <li>
                            <div className="event-details__points-shape"></div>
                            <p className="event-details__points-text">Hatchetfish pricklefish sixgill ray sawfish scaly
                                dragonfish! Grayling Mexican</p>
                        </li>
                        <li>
                            <div className="event-details__points-shape"></div>
                            <p className="event-details__points-text">Grayling Mexican golden trout; Chinook salmon bramble
                                shark sand stargazer Steve fish</p>
                        </li>
                        <li>
                            <div className="event-details__points-shape"></div>
                            <p className="event-details__points-text">Scat zebra pleco graveldiver river shark tripod fish;
                                flagtail bala shark</p>
                        </li>
                        <li>
                            <div className="event-details__points-shape"></div>
                            <p className="event-details__points-text">Burma danio black bass straptail southern Dolly Varden
                                orbicular velvetfish</p>
                        </li>
                    </ul>
                    <p className="event-details__text-5">Web designing in a powerful way of just not an only professions,
                        however, in a passion for our Company. We have to a tendency to believe the idea that smart
                        looking of any website is the first impression on visitors.Web designing in a powerful way of
                        just not an only professions, however, in a passion for our Company. We have Burma danio black
                        bass straptail southern Dolly Varden orbicular velvetfish trumpetfish; bluntnose minnow.
                        Hatchetfish pricklefish sixgill ray sawfish scaly dragonfish! Grayling Mexican golden trout;
                        Chinook salmon bramble shark sand stargazer Steve fish</p>
                </div>
                <div className="event-details__events-box">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="event-details__event-single">
                                <h3>Details</h3>
                                <ul className="event-details__event-list list-unstyled">
                                    <li>
                                        <p><span>Start:</span>September 11’ 24</p>
                                    </li>
                                    <li>
                                        <p><span>Finish:</span>October 03’ 24</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="event-details__event-single">
                                <h3>Organizer</h3>
                                <ul className="event-details__event-list list-unstyled">
                                    <li>
                                        <p><span>Phone:</span><Link href="tel:31859644725">+31 85 964 47 25</Link></p>
                                    </li>
                                    <li>
                                        <p><span>E-mail:</span><Link href="mailto:helpo@gmail.com">helpo@gmail.com</Link></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4">
                            <div className="event-details__event-single">
                                <h3>Venue</h3>
                                <ul className="event-details__event-list list-unstyled">
                                    <li>
                                        <p><span>Location:</span>Dark Spurt,</p>
                                    </li>
                                    <li>
                                        <p>San Francisco, CA 94528</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/**Event Details End*/}

        {/*Two Section Start*/}
        <section className="additional-event">
            <div className="additional-event__wrapper">
                <div className="additional-event__left">
                    <div className="additional-event__bg"
                        style={{ backgroundImage: ' url(assets/images/backgrounds/additional-event-left-bg.jpg)' }} ></div>
                    <div className="additional-event__content-box">
                        <p className="additional-event__sub-title">The Culture of</p>
                        <h2 className="additional-event__title">USA Volunteer</h2>
                    </div>
                </div>
                <div className="additional-event__right">
                    <div className="additional-event__bg"
                        style={{ backgroundImage: ' url(assets/images/backgrounds/additional-event-right-bg.jpg)' }} ></div>
                    <div className="additional-event__content-box">
                        <p className="additional-event__sub-title">Trinity</p>
                        <h2 className="additional-event__title">trash Bash</h2>
                    </div>
                </div>
            </div>
        </section>
        {/*Two Section Start*/}

            </Layout>
        </>
    )
}