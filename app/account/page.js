'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"


export default function Home() {
    return (
        <>
        <Layout headerStyle={2} footerStyle={2} breadcrumbTitle="Account">
          {/*Account Start*/}
        <section className="account">
            <div className="container">
                <div className="account__main-tab-box tabs-box">
                    <ul className="tab-buttons clearfix list-unstyled">
                        <li data-tab="#login" className="tab-btn"><span>Login</span></li>
                        <li data-tab="#register" className="tab-btn active-btn"><span>Register</span></li>
                    </ul>
                    <div className="tabs-content">
                        {/*tab*/}
                        <div className="tab" id="login">
                            <div className="account__main-tab-inner">
                                <form className="account__form">
                                    <div className="account__form-input-box">
                                        <input type="text" placeholder="Username" /> 
                                    </div>
                                    <div className="account__form-input-box">
                                        <input type="password" placeholder="Password"/>
                                    </div>
                                    <div className="account__form-btn-box">
                                        <button type="submit" className="thm-btn account__form-btn"> <span></span>Login
                                            now</button>
                                        <div className="checked-box">
                                            <input type="checkbox" name="skipper2" id="skipper2" />
                                            <label ><span></span>Remember me?</label>
                                        </div>
                                    </div>
                                    <div className="account__form-forgot-password">
                                        <Link href="#">Forgot your password?</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/*tab*/}
                        <div className="tab active-tab" id="register">
                            <div className="account__main-tab-inner">
                                <form className="account__form">
                                    <div className="account__form-input-box">
                                        <input type="text" placeholder="Username" />
                                    </div>
                                    <div className="account__form-input-box">
                                        <input type="password" placeholder="Password"/>
                                    </div>
                                    <div className="account__form-btn-box">
                                        <button type="submit" className="thm-btn account__form-btn">Register<span><i
                                                    className="icon-arrow-right"></i></span></button>
                                        <div className="checked-box">
                                            <input type="checkbox" name="skipper3" id="skipper3"/>
                                            <label ><span></span>Remember me?</label>
                                        </div>
                                    </div>
                                    <div className="account__form-forgot-password">
                                        <Link href="#">Forgot your password?</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/*tab*/}
                    </div>
                </div>
            </div>
        </section>
        {/*Account End*/}  
       
        </Layout>
        </>
    )
}


