import React from "react";
import { Link } from "react-router-dom";
import { getBooksData } from "../../data/handlers";
import "./BookList.css";


const MAX_DESCRIPTION_LENGTH = 80


const BookListItem = ({ data }) => {
    const { slug, name, image, description } = data;
    const formattedDescription = (description.length > MAX_DESCRIPTION_LENGTH)
        ? description.slice(0, MAX_DESCRIPTION_LENGTH - 1) + '...'
        : description;

    return (
        <div className="book">
            <div className="book-image">
                <img alt={name} src={image} />
            </div>
            <div className="book-content">
                <div className="name">{name}</div>
                <div className="description">{formattedDescription}</div>
                <Link to={`${slug}`} className="slug">GO</Link>
            </div>
        </div>
    )
}


const BookList = () => {
    const data = getBooksData();

    return (
        <div className="book-list">
            {data.map(item => (
                <BookListItem key={item.slug} data={item} />
            ))}
        </div>
    )
}

export default BookList;
