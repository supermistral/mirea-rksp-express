import React, { useState } from "react";
import { Button, OverlayTrigger, Tooltip, Modal } from "react-bootstrap";
import bookService from "../../../../services/book";
import EditForm from "../Form/EditForm";


const BookRow = ({ book, updateCallback, deleteCallback }) => {
    const [show, setShow] = useState(false);

    const handleEditClick = () => setShow(true);
    const handleCloseClick = () => setShow(false);

    const updateBook = (id, data) => {
        console.log(id, data);
        bookService.update(id, data)
            .then(res => {
                handleCloseClick();
                updateCallback(id, res);
            })
            .catch(err => alert(err));
    }

    const deleteBook = () => {
        bookService.delete(book.id)
            .then(res => {
                handleCloseClick();
                deleteCallback(book.id, book);
            })
            .catch(err => alert(err));
    }

    return (
        <>
            <td>{book.name}</td>
            <td>{book.description}</td>
            <td>{book.published_at}</td>
            <td>{book.pages}</td>
            <td className="actions">
                <OverlayTrigger overlay={
                    <Tooltip id={'tooldtip-edit'}>Изменить</Tooltip>
                }>
                    <Button onClick={handleEditClick} className="btn btn-act text-warning" data-toggle="modal">
                        <i className="material-icons">&#xE254;</i>
                    </Button>    
                </OverlayTrigger>
                <OverlayTrigger overlay={
                    <Tooltip id={'tooldtip-edit'}>Удалить</Tooltip>
                }>
                    <Button onClick={deleteBook} className="btn btn-act text-danger" data-toggle="modal">
                        <i className="material-icons">&#xE872;</i>
                    </Button>    
                </OverlayTrigger>
            </td>

            <Modal show={show} onHide={handleCloseClick}>
                <Modal.Header closeButton>
                    Редактировать книгу
                </Modal.Header>
                <Modal.Body>
                    <EditForm id={book.id} book={book} updateCallback={updateBook} />
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

export default BookRow;