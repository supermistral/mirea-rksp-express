import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import bookService from "../../../../services/book";
import { getNameAndValue } from "../../../../utils/dom";
import FormGroups from "./FormGroups";


const AddForm = ({ addCallback }) => {
    const [data, setData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        bookService.create(data)
            .then(res => addCallback(res.data))
            .catch(err => alert(err));
    }

    const handleChange = (e) => {
        const { name, value } = getNameAndValue(e.target);
        setData(prev => ({...prev, [name]: value}));
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroups
                data={data}
                handleChange={handleChange}
            />
            <Button variant="success" type="submit">
                Добавить
            </Button>
        </Form>
    )
}

export default AddForm;