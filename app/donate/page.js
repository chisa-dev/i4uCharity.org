'use client'
import Layout from "@/components/layout/Layout";
import { useState } from "react";

export default function Home() {
    const [activeIndex, setActiveIndex] = useState(1)

    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    return (
        <>
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Donate Now" image="assets/images/backgrounds/photo_2025-01-04_12-08-01.jpg">
                {/* Donation Details Start */}
                <section className="donation-details">
                    <div className="container">
                        <div className="donation-details__inner">
                            <div className="donation-details__personal-info">
                                <form className="contact-form-validated donation-details__form" method="post" onSubmit={(e) => e.preventDefault()}>
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12">
                                            <div className="donation-details__donate-box-outer">
                                                <div className="donation-details__donate-box" style={{ display: 'flex', alignItems: 'center' }}>
                                                <div className="donation-details__image-box" style={{ marginRight: '20px' }}>
    {activeIndex == 1 && 
        <img 
            src="/assets/images/pay_500_qr_code.jpg" 
            alt="$5000 QR Code" 
            style={{ height: '400px', borderRadius: '10px' }}  
        />
    }
    {activeIndex == 2 && 
        <img 
            src="/assets/images/pay_1000_qr_code.jpg" 
            alt="$3000 QR Code" 
            style={{ height: '400px', borderRadius: '10px' }}  
        />
    }
    {activeIndex == 3 && 
        <img 
            src="/assets/images/pay_5000_qr_code.jpg" 
            alt="$1000 QR Code" 
            style={{ height: '400px', borderRadius: '10px' }} 
        />
    }
</div>

                                                    <div className="donate-amount" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                                        <p className="donation-details__input-box-title">Select Amount & Scan QR</p>
                                                        <div className="donation-details__input-wrapper" style={{ display: 'flex', gap: '30px' }}>
                                                            <button type="button" className={activeIndex == 1 ? "active amount-btn" : "amount-btn"} onClick={() => handleOnClick(1)}>ETB 500</button>
                                                            <button type="button" className={activeIndex == 2 ? "active amount-btn" : "amount-btn"} onClick={() => handleOnClick(2)}>ETB 1000</button>
                                                            <button type="button" className={activeIndex == 3 ? "active amount-btn" : "amount-btn"} onClick={() => handleOnClick(3)}>ETB 5000</button>
                                                        </div>
                                                        <div className="donation-details__input-box" style={{ marginTop: '20px' }}>
                                                            <br/>
                                                            <p className="donation-details__input-box-title">Or Directly Donate to our Account</p>
                                                            <div className="donation-details__input-field" style={{ position: 'relative', color: '#000' }}>
                                                                <input type="text" value="1000194434085" readOnly style={{ color: '#000' }}/>
                                                                <button 
                                                                    type="button" 
                                                                    onClick={() => navigator.clipboard.writeText('1000194434085')} 
                                                                    style={{
                                                                        position: 'absolute', 
                                                                        right: '10px', 
                                                                        top: '50%', 
                                                                        transform: 'translateY(-50%)',
                                                                        border: 'none', 
                                                                        background: 'transparent',
                                                                        color : '#000'
                                                                        

                                                                    }}
                                                                >
                                                                    <i class="fa fa-copy"  aria-hidden="true" style={{ color: '#747070FF' }}>
                                                                        </i> 
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Donation Details End */}
            </Layout>
        </>
    )
}
