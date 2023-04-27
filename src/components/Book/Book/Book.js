import React from "react";
import { useParams } from "react-router-dom";
import { getBookBySlug } from "../../../data/handlers";
import "./Book.css";


const ATTRIBUTES_NAMES = {
    publication_date: "Published in",
    page_amount: "Pages",
    description: "Description",
};


const Book = () => {
    const { slug } = useParams();

    const data = getBookBySlug(slug);
    const { image, name } = data;

    return (
        <div className="book-container">
            <div className="book">
                <div className="book-image">
                    <img alt={name} src={image} />
                </div>
                <div className="book-content">
                    <div className="name">{name}</div>
                    <div className="attribute-list">
                        {Object.keys(ATTRIBUTES_NAMES).map((item, i) => (
                            <div key={i} className="attribute">
                                <div className="key">{ATTRIBUTES_NAMES[item]}</div>
                                <div className="value">{data[item]}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Book;
