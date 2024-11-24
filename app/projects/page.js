import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Project">
            {/*Projects Page Start*/}
        <section className="projects-page">
            <div className="container">
                <div className="row">
                    {/*Projects Page Single Start*/}
                    <div className="col-xl-7 col-lg-6 col-md-6">
                        <div className="projects-page__single">
                            <div className="projects-page__img">
                                <img src="assets/images/project/projects-page-1-1.jpg" alt=""/>
                                <div className="projects-page__icon">
                                    <Link className="img-popup" href="assets/images/project/projects-page-1-1.jpg"><span
                                            className="fas fa-plus"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Projects Page Single Start*/}
                    {/*Projects Page Single Start*/}
                    <div className="col-xl-5 col-lg-6 col-md-6">
                        <div className="projects-page__single">
                            <div className="projects-page__img">
                                <img src="assets/images/project/projects-page-1-2.jpg" alt=""/>
                                <div className="projects-page__icon">
                                    <Link className="img-popup" href="assets/images/project/projects-page-1-2.jpg"><span
                                            className="fas fa-plus"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Projects Page Single Start*/}
                    {/*Projects Page Single Start*/}
                    <div className="col-xl-5 col-lg-6 col-md-6">
                        <div className="projects-page__single">
                            <div className="projects-page__img">
                                <img src="assets/images/project/projects-page-1-3.jpg" alt=""/>
                                <div className="projects-page__icon">
                                    <Link className="img-popup" href="assets/images/project/projects-page-1-3.jpg"><span
                                            className="fas fa-plus"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Projects Page Single Start*/}
                    {/*Projects Page Single Start*/}
                    <div className="col-xl-7 col-lg-6 col-md-6">
                        <div className="projects-page__single">
                            <div className="projects-page__img">
                                <img src="assets/images/project/projects-page-1-4.jpg" alt=""/>
                                <div className="projects-page__icon">
                                    <Link className="img-popup" href="assets/images/project/projects-page-1-4.jpg"><span
                                            className="fas fa-plus"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Projects Page Single Start*/}
                    {/*Projects Page Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="projects-page__single">
                            <div className="projects-page__img">
                                <img src="assets/images/project/projects-page-1-5.jpg" alt=""/>
                                <div className="projects-page__icon">
                                    <Link className="img-popup" href="assets/images/project/projects-page-1-5.jpg"><span
                                            className="fas fa-plus"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Projects Page Single Start*/}
                    {/*Projects Page Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="projects-page__single">
                            <div className="projects-page__img">
                                <img src="assets/images/project/projects-page-1-6.jpg" alt=""/>
                                <div className="projects-page__icon">
                                    <Link className="img-popup" href="assets/images/project/projects-page-1-6.jpg"><span
                                            className="fas fa-plus"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Projects Page Single Start*/}
                    {/*Projects Page Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="projects-page__single">
                            <div className="projects-page__img">
                                <img src="assets/images/project/projects-page-1-7.jpg" alt=""/>
                                <div className="projects-page__icon">
                                    <Link className="img-popup" href="assets/images/project/projects-page-1-7.jpg"><span
                                            className="fas fa-plus"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Projects Page Single Start*/}
                </div>
            </div>
        </section>
        {/*Projects Page End*/}

            </Layout>
        </>
    )
}