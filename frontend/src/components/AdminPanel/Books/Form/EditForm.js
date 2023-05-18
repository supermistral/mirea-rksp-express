import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import bookService from "../../../../services/book";
import { getNameAndValue } from "../../../../utils/dom";
import FormGroups from "./FormGroups";


const EditForm = ({ id, book, updateCallback }) => {
    const [data, setData] = useState(book);

    const handleChange = (e) => {
        const { name, value } = getNameAndValue(e.target);
        setData(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        bookService.update(id, data)
            .then(res => updateCallback(data))
            .catch(err => alert(err));
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroups
                data={data}
                handleChange={handleChange}
            />
            <Button variant="success" type="submit">
                Принять
            </Button>
        </Form>
    )
}

export default EditForm;