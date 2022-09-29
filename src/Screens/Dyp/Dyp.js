import React from "react";
import DypMainHero from "./DypMainHero/DypMainHero";
import Solutions from "./Solutions/Solutions";
import WhyDypius from "./WhyDypius/WhyDypius";

const Dyp = () => {
    return (
    <div className="main-wrapper container-fluid p-0 d-flex flex-column align-items-center">
        <DypMainHero />
        <WhyDypius />
        <Solutions />
        </div>
    )
}

export default Dyp