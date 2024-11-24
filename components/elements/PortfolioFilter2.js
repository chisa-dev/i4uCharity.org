
'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

export default function PortfolioFilter2() {
    // Isotope
    const isotope = useRef()
    const [filterKey, setFilterKey] = useState("*")
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".items-container", {
                itemSelector: ".masonry-item",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".masonry-item",
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

            <div className="portfolio-three__filter-box">
                <ul className="portfolio-three__filter style1 post-filter list-unstyled clearfix">
                    <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}><span className="filter-text">All</span></li>
                    <li className={activeBtn("cat-1")} onClick={handleFilterKeyChange("cat-1")}><span className="filter-text">Business Strategy</span></li>
                    <li className={activeBtn("cat-2")} onClick={handleFilterKeyChange("cat-2")}><span className="filter-text">Financial</span></li>
                    <li className={activeBtn("cat-3")} onClick={handleFilterKeyChange("cat-3")}><span className="filter-text">Planning</span></li>
                    <li className={activeBtn("cat-4")} onClick={handleFilterKeyChange("cat-4")}><span className="filter-text">Tax Strategy</span></li>
                    <li className={activeBtn("cat-5")} onClick={handleFilterKeyChange("cat-5")}><span className="filter-text">Investment</span></li>
                </ul>
            </div>
            <div className="items-container row clearfix">
                {/* Case Block */}
                <div className="case-block-one masonry-item all cat-1 col-lg-4 col-md-6 col-sm-12">
                    <div className="portfolio-three__single">
                        <div className="portfolio-three__img-box">
                            <div className="portfolio-three__img">
                                <img src="assets/images/project/portfolio-3-1.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="portfolio-three__content">
                            <p className="portfolio-three__sub-title">Business Audit</p>
                            <h3 className="portfolio-three__title"><a href="portfolio-details">Our Business
                                    Growth</a></h3>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="case-block-one masonry-item all cat-2 col-lg-4 col-md-6 col-sm-12">
                    <div className="portfolio-three__single">
                        <div className="portfolio-three__img-box">
                            <div className="portfolio-three__img">
                                <img src="assets/images/project/portfolio-3-3.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="portfolio-three__content">
                            <p className="portfolio-three__sub-title">Business Audit</p>
                            <h3 className="portfolio-three__title"><a href="portfolio-details">Our Business
                                    Audit</a></h3>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="case-block-one masonry-item all cat-1 cat-2 cat-4 col-lg-4 col-md-6 col-sm-12">
                    <div className="portfolio-three__single">
                        <div className="portfolio-three__img-box">
                            <div className="portfolio-three__img">
                                <img src="assets/images/project/portfolio-3-5.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="portfolio-three__content">
                            <p className="portfolio-three__sub-title">Business Audit</p>
                            <h3 className="portfolio-three__title"><a href="portfolio-details">Our Financial
                                    Advices</a></h3>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="case-block-one masonry-item all cat-5 cat-2 col-lg-4 col-md-6 col-sm-12">
                    <div className="portfolio-three__single">
                        <div className="portfolio-three__img-box">
                            <div className="portfolio-three__img">
                                <img src="assets/images/project/portfolio-3-6.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="portfolio-three__content">
                            <p className="portfolio-three__sub-title">Business Audit</p>
                            <h3 className="portfolio-three__title"><a href="portfolio-details">Our Tax Strategy</a>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="case-block-one masonry-item all cat-3 cat-5 col-lg-4 col-md-6 col-sm-12">
                    <div className="portfolio-three__single">
                        <div className="portfolio-three__img-box">
                            <div className="portfolio-three__img">
                                <img src="assets/images/project/portfolio-3-6.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="portfolio-three__content">
                            <p className="portfolio-three__sub-title">Business Audit</p>
                            <h3 className="portfolio-three__title"><a href="portfolio-details">Our Tax Strategy</a>
                            </h3>
                        </div>
                    </div>
                </div>
                {/* Case Block */}
                <div className="case-block-one masonry-item all cat-1 cat-3 col-lg-4 col-md-6 col-sm-12">
                    <div className="portfolio-three__single">
                        <div className="portfolio-three__img-box">
                            <div className="portfolio-three__img">
                                <img src="assets/images/project/portfolio-3-3.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="portfolio-three__content">
                            <p className="portfolio-three__sub-title">Business Audit</p>
                            <h3 className="portfolio-three__title"><a href="portfolio-details">Our Business
                                    Audit</a></h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
