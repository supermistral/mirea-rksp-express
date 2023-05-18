import React from "react";
import { Form } from "react-bootstrap";


const FormGroups = ({ data, handleChange }) => {
    return (
        <>
            <Form.Group className="mb-3">
                <Form.Label>Имя</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Имя"
                    name="name"
                    value={data.name || ""}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Описание</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Описание"
                    name="description"
                    value={data.description || ""}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Время публикации</Form.Label>
                <Form.Control
                    type="date"
                    placeholder="Время публикации"
                    name="published_at"
                    value={data.published_at || ""}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Кол-во страниц</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Кол-во страниц"
                    name="pages"
                    value={data.pages || ""}
                    onChange={handleChange}
                />
            </Form.Group>
        </>
    )
}

export default FormGroups;