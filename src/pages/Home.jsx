import React from "react";
import jardinImage from "../assets/cover.png";

const Home = () => {
    return (
        <div>
            <h1>Le Jardin</h1>
            <div className="home-image-container">
            <img className="home-image" src={jardinImage} alt="" />

            </div>
        </div>
    )
}

export default Home;