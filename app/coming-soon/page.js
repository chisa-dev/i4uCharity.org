
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Blog Standard">
        {/*Start Coming Soon page*/}
        <section className="coming-soon-page full-height">
            <div className="coming-soon-page__bg"
                style={{ backgroundImage: ' url(assets/images/backgrounds/coming-soon-page-bg.jpg)' }} ></div>
            <div className="coming-soon-page__content">
                <div className="inner">
                    <div className="big-title">We're Coming Soon...</div>
                    <div className="timer-box clearfix">
                        <div className="countdown-timer">
                            <div className="default-coundown">
                                <div className="box">
                                    <div className="countdown coming-soon-countdown" data-countdown-time="2025/11/28">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text">
                        <p>
                            Website is under construction. We'll be here soon with new<br/>
                            awesome site, Subscribe to be notified.
                        </p>
                    </div>
                    <div className="coming-soon-page__subscribe-box">
                        <form className="subscribe-form" action="#">
                            <input placeholder="Enter your email address" type="email" />
                            <button type="submit" className="thm-btn coming-soon-page__btn">send massage <span><i
                                        className="icon-arrow-right"></i></span></button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        {/*End Coming Soon page*/}

            </Layout>
        </>
    )
}