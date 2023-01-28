import React from "react";
import BrowseButtons from "../Components/BrowseButtons"
import ListingsSection from "../Components/ListingsSection";
import PageToggleButton from "../Components/PageToggleButton";
import "./Home.css"

const Home = () => {
    return (
        <>
        <h1>Find your dream car</h1>
        <div className="hero-section">
            <BrowseButtons />
            <ListingsSection />
            <PageToggleButton />
        </div>
        </>
    )
}

export default Home