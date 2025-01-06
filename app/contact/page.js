
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Contact" image="assets/images/backgrounds/photo_2025-01-04_12-21-34.jpg">
      <br/>   <br/>   <br/>
        {/*Contact Two Start*/}
        <section className="contact-two">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="contact-two__left">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1258.1874873520128!2d38.80407643576607!3d8.900201459062256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2set!4v1736187116143!5m2!1sen!2set"
                                className="contact-two__google-map"></iframe>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="contact-two__right">
                            <ul className="contact-two__contact-list list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-pin-two"></span>
                                    </div>
                                    <div className="content">
                                        <h4>Address</h4>
                                        <p>Addis Ababa Science and Technology University </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-envelope"></span>
                                    </div>
                                    <div className="content">
                                        <h4>Email Address</h4>
                                        <p><Link href="mailto:nevaeh.sons@example.com">-</Link></p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-call"></span>
                                    </div>
                                    <div className="content">
                                        <h4>Phone number</h4>
                                        <p><Link href="tel:7045550127">+251 961099526</Link></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Contact Two End*/}

        </Layout>
        </>
    )
}