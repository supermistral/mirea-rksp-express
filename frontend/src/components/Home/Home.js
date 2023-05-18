import React from "react";
import Logo from "./Logo/Logo";
import TextBlock from "./TextBlock/TextBlock";
import "./Home.css";
import { getTextBlocksData } from "../../data/handlers";


const Home = () => {
    const textBlocksData = getTextBlocksData();

    return (
        <div className="home-content">
            <div className="home-content-item">
                <Logo />
            </div>
            <div className="home-content-item text-block-container">
                {textBlocksData.map((item, i) => (
                    <TextBlock
                        key={i}
                        content={item.text}
                        image={item.image} 
                        design={item.design}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home;
