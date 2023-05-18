import React from "react";
import "./TextBlock.css";


const TextBlock = ({ content, image, design }) => {
    return (
        <div className={`text-block ${design}`}>
            <div className="text">
                {content}
            </div>
            <div className="image">
                <img alt="text block" src={image} />
            </div>
        </div>
    )
}

export default TextBlock;
