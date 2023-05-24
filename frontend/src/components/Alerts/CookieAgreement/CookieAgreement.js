import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { agreementClicked, checkboxClicked, selectCheckbox } from '../../../redux/slices/cookieAgreement';
import './CookieAgreement.css';


const CookieAgreement = () => {
    const dispatch = useDispatch();
    const checkbox = useSelector(selectCheckbox);

    const handleChange = (e) => {
        dispatch(checkboxClicked(e.target.checked));
    }

    const handleClick = (e) => {
        dispatch(agreementClicked());
    }

    return (
        <div className="cookie-agreement">
            <div className="content">
                <div className="title">
                    Политика соглашения с использованием cookie
                </div>
                <div className="checkbox">
                    <Form.Check 
                        type="checkbox"
                        id="cookie-agreement-checkbox"
                        label="Использование cookie"
                        onChange={handleChange}
                    />
                </div>
                <div className="button">
                    <Button
                        variant="secondary"
                        disabled={!checkbox}
                        onClick={handleClick}
                    >
                        Подтвердить
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CookieAgreement;