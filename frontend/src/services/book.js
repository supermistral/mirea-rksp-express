import BaseService from "./base";


class BookService extends BaseService {
    constructor() {
        super("books");
    }
}


const bookService = new BookService();

export default bookService;