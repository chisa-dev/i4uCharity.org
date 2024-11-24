
'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioFilter5() {
    // Isotope
    const isotope = useRef()
    const [filterKey, setFilterKey] = useState("*")
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".isotope-block", {
                itemSelector: ".project-block-three",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".project-block-three",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            })
        }, 1000)
    }, [])
    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` })
        }
    }, [filterKey])
    const handleFilterKeyChange = useCallback((key) => () => {
        setFilterKey(key)
    },
        []
    )

    const activeBtn = (value) => (value === filterKey ? "filter active" : "filter")



    return (
        <>

            <div className="row isotope-block">
                <div className="project-block-three col-lg-3 col-md-6">
                    <div className="inner-box">
                        <div className="image"><img src="/assets/images/gallery/gallery-3-1.jpg" alt="" /></div>
                        <div className="overlay-content">
                            <div className="content">
                                <div className="category">Technical</div>
                                <div className="text">Market Expansion</div>
                            </div>
                            <div className="link-btn"><Link href="#" className="theme-btn"><span className="flaticon-right-arrow" /></Link></div>
                        </div>
                    </div>
                </div>
                <div className="project-block-three col-lg-3 col-md-6">
                    <div className="inner-box">
                        <div className="image"><img src="/assets/images/gallery/gallery-3-2.jpg" alt="" /></div>
                        <div className="overlay-content">
                            <div className="content">
                                <div className="category">Technical</div>
                                <div className="text">Market Expansion</div>
                            </div>
                            <div className="link-btn"><Link href="#" className="theme-btn"><span className="flaticon-right-arrow" /></Link></div>
                        </div>
                    </div>
                </div>
                <div className="project-block-three col-lg-3 col-md-6">
                    <div className="inner-box">
                        <div className="image"><img src="/assets/images/gallery/gallery-3-3.jpg" alt="" /></div>
                        <div className="overlay-content">
                            <div className="content">
                                <div className="category">Technical</div>
                                <div className="text">Market Expansion</div>
                            </div>
                            <div className="link-btn"><Link href="#" className="theme-btn"><span className="flaticon-right-arrow" /></Link></div>
                        </div>
                    </div>
                </div>
                <div className="project-block-three col-lg-3 col-md-6">
                    <div className="inner-box">
                        <div className="image"><img src="/assets/images/gallery/gallery-3-4.jpg" alt="" /></div>
                        <div className="overlay-content">
                            <div className="content">
                                <div className="category">Technical</div>
                                <div className="text">Market Expansion</div>
                            </div>
                            <div className="link-btn"><Link href="#" className="theme-btn"><span className="flaticon-right-arrow" /></Link></div>
                        </div>
                    </div>
                </div>
                <div className="project-block-three col-lg-3 col-md-6">
                    <div className="inner-box">
                        <div className="image"><img src="/assets/images/gallery/gallery-3-5.jpg" alt="" /></div>
                        <div className="overlay-content">
                            <div className="content">
                                <div className="category">Technical</div>
                                <div className="text">Market Expansion</div>
                            </div>
                            <div className="link-btn"><Link href="#" className="theme-btn"><span className="flaticon-right-arrow" /></Link></div>
                        </div>
                    </div>
                </div>
                <div className="project-block-seven project-block-three col-lg-3 col-md-6">
                    <div className="inner-box">
                        <h2>1.6k </h2>
                        <h4>projects Completed</h4>
                        <Link href="#" className="read-more-link">View All Projects <i className="fa fa-caret-right" /></Link>
                    </div>
                </div>
            </div>

        </>
    )
}
