'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function Faq() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Faq">
            {/*Faq Page Start*/}
            <section className="faq-page">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="faq-page__left">
                                <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-1">
                                    <div className={isActive.key == 1 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(1)}>
                                        <div className="accrodion-title">
                                            <h4>Maecenas facilisis erat id odio</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis
                                                    cras
                                                    sed
                                                    eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis
                                                    sollicitudin dignissim habitant</p>
                                            </div>{/*.inner */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 2 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(2)}>
                                        <div className="accrodion-title">
                                            <h4>Phasellus et vehicula nulla</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis
                                                    cras
                                                    sed
                                                    eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis
                                                    sollicitudin dignissim habitant</p>
                                            </div>{/**.inner */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 3 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(3)}>
                                        <div className="accrodion-title">
                                            <h4>Maecenas malesuada</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis
                                                    cras
                                                    sed
                                                    eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis
                                                    sollicitudin dignissim habitant</p>
                                            </div>{/**.inner */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 4 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(4)}>
                                        <div className="accrodion-title">
                                            <h4>Why you join our team</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis
                                                    cras
                                                    sed
                                                    eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis
                                                    sollicitudin dignissim habitant</p>
                                            </div>{/**.inner */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="faq-page__right">
                                <div className="accrodion-grp faq-one-accrodion" data-grp-name="faq-one-accrodion-2">
                                    <div className={isActive.key == 5 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(5)}>
                                        <div className="accrodion-title">
                                            <h4>Why you join our team</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis
                                                    cras
                                                    sed
                                                    eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis
                                                    sollicitudin dignissim habitant</p>
                                            </div>{/**.inner */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 6 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(6)}>
                                        <div className="accrodion-title">
                                            <h4>Maecenas malesuada</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis
                                                    cras
                                                    sed
                                                    eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis
                                                    sollicitudin dignissim habitant</p>
                                            </div>{/**.inner */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 7 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(7)}>
                                        <div className="accrodion-title">
                                            <h4>Phasellus et vehicula nulla</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis
                                                    cras
                                                    sed
                                                    eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis
                                                    sollicitudin dignissim habitant</p>
                                            </div>{/**.inner */}
                                        </div>
                                    </div>
                                    <div className={isActive.key == 8 ? "accrodion active" : "accrodion"} onClick={() => handleToggle(8)}>
                                        <div className="accrodion-title">
                                            <h4>Maecenas facilisis erat id odio</h4>
                                        </div>
                                        <div className="accrodion-content">
                                            <div className="inner">
                                                <p>Et purus duis sollicitudin dignissim ha. Egest nulla quis venenatis
                                                    cras
                                                    sed
                                                    eu massa eu faucibus. Urna fusce aenea tortor pretium Et purus duis
                                                    sollicitudin dignissim habitant</p>
                                            </div>{/**.inner */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Faq Page End*/}

            </Layout>
        </>
    )
}