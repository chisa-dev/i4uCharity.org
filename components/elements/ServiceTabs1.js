'use client'
import { useState } from "react"

export default function ServiceTabs1() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <ul className="nav nav-tabs tab-btn-style-one mr-md-4" role="tablist">
                        <li className="nav-item" onClick={() => handleOnClick(1)}>
                            <a className={activeIndex == 1 ? "nav-link active" : "nav-link"}>01. Workflow &amp; Process
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(2)}>
                            <a className={activeIndex == 2 ? "nav-link active" : "nav-link"}>
                                02. Research analysis
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(3)}>
                            <a className={activeIndex == 3 ? "nav-link active" : "nav-link"}>
                                03. Financial statement
                            </a>
                        </li>
                        <li className="nav-item" onClick={() => handleOnClick(4)}>
                            <a className={activeIndex == 4 ? "nav-link active" : "nav-link"}>
                                04. Risk assuarance
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-6">
                    {/* Tab panes */}
                    <div className="tab-content wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                        <div className={activeIndex == 1 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4>Workflow and <br />our successive work process</h4>
                            <div className="text">Blinded by desire that they cannot forese the pain and trouble that are bound to ensue and equal blame belongs to those who fail in their through weakness shrinking.</div>
                            <img src="/assets/images/resource/single-service-4.jpg" alt="" />
                        </div>
                        <div className={activeIndex == 2 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4>Workflow and <br />our successive work process</h4>
                            <div className="text">Blinded by desire that they cannot forese the pain and trouble that are bound to ensue and equal blame belongs to those who fail in their through weakness shrinking.</div>
                            <img src="/assets/images/resource/single-service-4.jpg" alt="" />
                        </div>
                        <div className={activeIndex == 3 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4>Workflow and <br />our successive work process</h4>
                            <div className="text">Blinded by desire that they cannot forese the pain and trouble that are bound to ensue and equal blame belongs to those who fail in their through weakness shrinking.</div>
                            <img src="/assets/images/resource/single-service-4.jpg" alt="" />
                        </div>
                        <div className={activeIndex == 4 ? "tab-pane fadeInUp animated show active" : "tab-pane fadeInUp animated"}>
                            <h4>Workflow and <br />our successive work process</h4>
                            <div className="text">Blinded by desire that they cannot forese the pain and trouble that are bound to ensue and equal blame belongs to those who fail in their through weakness shrinking.</div>
                            <img src="/assets/images/resource/single-service-4.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
