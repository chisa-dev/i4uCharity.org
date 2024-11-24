import Link from "next/link"
export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>
         
        <section className="page-header">
            <div className="page-header__shape-1 float-bob-y">
                <img src="assets/images/shapes/page-header-shape-1.png" alt=""/>
            </div>
            <div className="page-header__shape-2 float-bob-x">
                <img src="assets/images/shapes/page-header-shape-2.png" alt=""/>
            </div>
            <div className="page-header__bg" style={{ backgroundImage: ' url(assets/images/backgrounds/page-header-bg.jpg)' }} >
            </div>
            <div className="container">
                <div className="page-header__inner">
                    <h2>{breadcrumbTitle}</h2>
                    <div className="thm-breadcrumb__box">
                        <ul className="thm-breadcrumb list-unstyled">
                            <li><Link href="/">Home</Link></li>
                            <li><span className="fas fa-angle-right"></span></li>
                            <li>{breadcrumbTitle}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
      

        </>
    )
}
