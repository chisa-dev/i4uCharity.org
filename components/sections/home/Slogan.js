'use client'
import Link from "next/link"


export default function Slogan() {
    return (
        <>
        {/*Slogan One Start */}
        <section className="slogan-one">
            <div className="slogan-one__bg jarallax" data-jarallax data-speed="0.3" data-imgposition="100% 100%"
                style={{ backgroundImage: ' url(assets/images/resources/slogan-v1-1.jpg)' }} ></div>
            <div className="container">
                <div className="slogan-one__content text-center">
                    <div className="qoute-box">
                        <h2> እንዲሁ እየደከማችሁ ድውዮችን ልትረዱና እርሱ ራሱ ከሚቀበል ይልቅ የሚሰጥ ብፁዕ ነው እንዳለ የጌታን የኢየሱስን ቃል ልታስቡ ይገባችሁ ዘንድ በሁሉ አሳየኋችሁ።  የሐዋርያት ሥራ 20፡35</h2>
                    </div>
                    {/* <div className="text-box">
                        <p>
                            Supporting the underprivileged, empowering possibilities, Bringing light to the<br/> darkest
                            corners of our world
                        </p>
                    </div> */}
                    <div className="btn-box">
                        <Link href="index4" className="thm-btn">
                            Donate Now
                            <span>
                                <i className="icon-arrow-right"></i>
                            </span>
                        </Link>
                        <Link href="index4" className="thm-btn">
                            larn More
                            <span>
                                <i className="icon-arrow-right"></i>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        {/*Slogan One End */}
        
      
        </>
    )
}
