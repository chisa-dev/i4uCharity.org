
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
        <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Cart">
        {/**Start Cart Page*/}
        <section className="cart-page">
            <div className="container">
                <div className="table-responsive">
                    <table className="table cart-table">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>
                                    <div className="product-box">
                                        <div className="img-box">
                                            <img src="assets/images/shop/cart-page-img-1.jpg" alt=""/>
                                        </div>
                                        <h3><Link href="product-details">Comfy chair</Link></h3>
                                    </div>
                                </td>
                                <td>$10.99</td>
                                <td>
                                    <div className="quantity-box">
                                        <button type="button" className="sub"><i className="fa fa-minus"></i></button>
                                        <input type="number" id="product-1" />
                                        <button type="button" className="add"><i className="fa fa-plus"></i></button>
                                    </div>
                                </td>
                                <td>
                                    $10.99
                                </td>
                                <td>
                                    <div className="cross-icon">
                                        <i className="fas fa-times"></i>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <div className="product-box">
                                        <div className="img-box">
                                            <img src="assets/images/shop/cart-page-img-2.jpg" alt=""/>
                                        </div>
                                        <h3><Link href="product-details">Classic chair</Link></h3>
                                    </div>
                                </td>
                                <td>$10.99</td>
                                <td>
                                    <div className="quantity-box">
                                        <button type="button" className="sub"><i className="fa fa-minus"></i></button>
                                        <input type="number" id="product-2" />
                                        <button type="button" className="add"><i className="fa fa-plus"></i></button>
                                    </div>
                                </td>
                                <td>
                                    $10.99
                                </td>
                                <td>
                                    <div className="cross-icon">
                                        <i className="fas fa-times"></i>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <form action="#" className="default-form cart-cupon__form">
                            <input type="text" placeholder="Enter Coupon Code" className="cart-cupon__input" />
                            <button className="thm-btn" type="submit">
                                Apply Coupon
                            </button>
                        </form>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <ul className="cart-total list-unstyled">
                            <li>
                                <span>Subtotal</span>
                                <span>$20.98 USD </span>
                            </li>
                            <li>
                                <span>Shipping Cost</span>
                                <span>$0.00 USD</span>
                            </li>
                            <li>
                                <span>Total</span>
                                <span className="cart-total-amount">$20.98 USD</span>
                            </li>
                        </ul>
                        <div className="cart-page__buttons">
                            <div className="cart-page__buttons-1">
                                <Link href="#" className="thm-btn">Update</Link>
                            </div>
                            <div className="cart-page__buttons-2">
                                <Link href="checkout" className="thm-btn">Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/**End Cart Page*/}

            </Layout>
        </>
    )
}