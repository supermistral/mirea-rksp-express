import BaseService from "../service";
import Book from "./models";


class BookService extends BaseService {
    constructor() {
        super(Book);
    }
}


export default BookService;
