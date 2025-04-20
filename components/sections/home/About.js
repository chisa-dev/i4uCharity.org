'use client';
import CounterUp from "@/components/elements/CounterUp";
import Link from "next/link";
import { useState } from 'react';

export default function About() {
    const [isPlaying, setPlaying] = useState(false);

    return (
        <>
        {/*About Four Start */}
        <section className="about-four">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4">
                        <div className="about-four__left">
                            <div className="section-title text-left sec-title-animation animation-style2">
                                <div className="section-title__tagline-box">
                                    <span className="section-title__tagline">About Us</span>
                                </div>
                                <h2 className="section-title__title title-animation">Caring Hearts,<br/> Sharing Hands</h2>
                            </div>
                            <div className="about-four-img" style={{ position: 'relative' }}>
                                <video
                                    src="assets/images/i4u_video.mp4"
                                    controls={isPlaying}
                                    style={{ width: '100%' }}
                                />
                                {!isPlaying && (
                                    <div 
                                        className="about-four-video" 
                                        onClick={() => setPlaying(true)}
                                        style={{
                                            position: 'absolute', 
                                            top: '50%', 
                                            left: '50%', 
                                            transform: 'translate(-50%, -50%)',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <span className="icon-play"></span>
                                    </div>
                                )}
                            </div>
                            <div className="btn-box">
                                <Link href="about" className="thm-btn">
                                    About More
                                    <span>
                                        <i className="icon-arrow-right"></i>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-8">
                        <div className="about-four__right">
                            <div className="text1">
                                <p>
                                We are a dedicated nonprofit group formed within the Christian Students Fellowship at Addis Ababa Science and Technology University (AASTU). Our mission is to share the love of Christ with the world by reaching out to those in need and uniting individuals who are passionate about making a meaningful impact.
                                </p>
                            </div>
                            <div className="text2">
                                <p>
Guided by the life, teachings, and character of Jesus, we are committed to demonstrating His love through compassionate actions, respect for communities, and unwavering faith. Together, we aim to be a source of hope, healing, and transformation, creating lasting change in the lives of those we serve. 
                                </p>
                            </div>

                            <div className="about-four__right-counter">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4">
                                        <div className="about-four__right-counter-single text-center">
                                            <div className="icon-box">
                                                <span className="icon-help"></span>
                                            </div>
                                            <div className="count-box count-box">
                                                <h2><CounterUp end={6} /></h2>
                                                <span></span>
                                            </div>
                                            <div className="title-box">
                                                <h3>Families We Helped since 2021</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4">
                                        <div className="about-four__right-counter-single text-center">
                                            <div className="icon-box">
                                                <span className="icon-dolor"></span>
                                            </div>
                                            <div className="count-box count-box">
                                                <h2><CounterUp end={2} /></h2>
                                                <span>K</span>
                                            </div>
                                            <div className="title-box">
                                                <h3>Total Clothes We Collected</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4">
                                        <div className="about-four__right-counter-single text-center">
                                            <div className="icon-box">
                                                <span className="icon-support"></span>
                                            </div>
                                            <div className="count-box count-box">
                                                <h2><CounterUp end={10} /></h2>
                                                <span className="plus">+</span>
                                            </div>
                                            <div className="title-box">
                                                <h3>Events Organized this year</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
