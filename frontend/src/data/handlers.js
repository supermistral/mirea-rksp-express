import textBlockData from "./textBlocksData.json";
import booksData from "./booksData.json";


export const getTextBlocksData = () => textBlockData;

export const getBooksData = () => booksData;

export const getBookBySlug = (slug) => booksData.find(data => data.slug === slug);
