import React, { useEffect, useState } from "react"
import { Button, Modal } from "react-bootstrap";
import bookService from "../../../../services/book";
import AddForm from "../Form/AddForm";
import BookRow from "./BookRow";


const BookList = () => {
    const [books, setBooks] = useState([]);
    const [showEdit, setShowEdit] = useState(false);

    useEffect(() => {
        bookService.getAll()
            .then(res => setBooks(res.data))
            .catch(err => alert(err));
    }, []);

    const handleAddClick = () => setShowEdit(true);
    const handleCloseClick = () => setShowEdit(false);

    const updateBook = (book) => setBooks(prev =>
        prev.map(item => item.id === book.id ? book : item)
    );
    const addBook = (book) => setBooks(prev => [...prev, book]);
    const deleteBook = (book) => setBooks(prev =>
        prev.filter(item => item.id !== book.id)
    );

    return (
        <>
            <div className="table-title">
                <div className="row">
                    <div className="col sm-6">
                        <h2>Книги</h2>
                    </div>
                    <div className="col sm-6">
                        <Button onClick={handleAddClick} className="btn btn-success" data-toggle="modal">
                            <i className="material-icons">&#xE147;</i> <span>Создать книгу</span>
                        </Button>
                    </div>
                </div>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Описание</th>
                        <th>Дата публикации</th>
                        <th>Кол-во страниц</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book => (
                        <tr key={book.id}>
                            <BookRow
                                book={book}
                                updateCallback={updateBook}
                                deleteCallback={deleteBook}
                            />
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal show={showEdit} onHide={handleCloseClick}>
                <Modal.Header closeButton>
                    <Modal.Title>Добавить книгу</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm addCallback={addBook} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseClick}>
                        Закрыть
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default BookList;