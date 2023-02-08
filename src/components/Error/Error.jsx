import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Error.css';
export default function Error() {
    let navigate = useNavigate();
    function Back() {
        navigate('/');
    }
    return (
        <div className="error-center">
            <div className="error">
                Error
                <button onClick={() => Back()} className="btn4">
                    home
                </button>
            </div>
        </div>
    );
}
