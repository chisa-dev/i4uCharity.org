'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"

export default function Home() {
    
    return (
        <>
        <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Wishlist">
        {/*Start Cart Page*/}
        <section className="wishlist-page">
            <div className="container">
                <div className="table-responsive-box">
                    <table className="wishlist-table">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="product-box">
                                        <div className="img-box">
                                            <img src="assets/images/shop/wishlist-page-img-1.jpg" alt=""/>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="product-name-select-box">
                                        <div className="product-name">
                                            <h4>Classy chair</h4>
                                            <p>$50.00</p>
                                        </div>
                                        <div className="product-select">
                                            <Link href="wishlist" className="thm-btn wishlist-page__btn">Select
                                                Product<span><i className="icon-arrow-right"></i></span></Link>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="cross-icon">
                                        <i className="fas fa-times remove-icon"></i>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="product-box">
                                        <div className="img-box">
                                            <img src="assets/images/shop/wishlist-page-img-2.jpg" alt=""/>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="product-name-select-box">
                                        <div className="product-name">
                                            <h4>Comfy chair</h4>
                                            <p>$90.00</p>
                                        </div>
                                        <div className="product-select">
                                            <div className="product-select">
                                                <Link href="wishlist" className="thm-btn wishlist-page__btn">Select
                                                    Product<span><i className="icon-arrow-right"></i></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="cross-icon">
                                        <i className="fas fa-times remove-icon"></i>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="product-box">
                                        <div className="img-box">
                                            <img src="assets/images/shop/wishlist-page-img-3.jpg" alt=""/>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="product-name-select-box">
                                        <div className="product-name">
                                            <h4>Boss chair</h4>
                                            <p>$60.00</p>
                                        </div>
                                        <div className="product-select">
                                            <div className="product-select">
                                                <Link href="wishlist" className="thm-btn wishlist-page__btn">Select
                                                    Product<span><i className="icon-arrow-right"></i></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="cross-icon">
                                        <i className="fas fa-times remove-icon"></i>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="product-box">
                                        <div className="img-box">
                                            <img src="assets/images/shop/wishlist-page-img-4.jpg" alt=""/>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="product-name-select-box">
                                        <div className="product-name">
                                            <h4>Sofa chair</h4>
                                            <p>$170.00</p>
                                        </div>
                                        <div className="product-select">
                                            <div className="product-select">
                                                <Link href="wishlist" className="thm-btn wishlist-page__btn">Select
                                                    Product<span><i className="icon-arrow-right"></i></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="cross-icon">
                                        <i className="fas fa-times remove-icon"></i>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
        {/*End Cart Page*/}

            </Layout>
        </>
    )
}