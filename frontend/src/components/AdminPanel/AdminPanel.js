import React from "react";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './AdminPanel.css';


const AdminPanel = () => {
    return (
        <div className="admin-panel">
            <Button>
                <Link to='books'>Книги</Link>
            </Button>
            <Button>
                <Link to='users'>Пользователи</Link>
            </Button>
        </div>
    )
}

export default AdminPanel;
