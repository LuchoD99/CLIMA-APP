import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Error.css';
export default function Error() {
    let navigate = useNavigate();
    useEffect(() => {
        setTimeout(navigate('/'), 4000);
    }, [navigate]);
    return (
        <div className="error-center">
            <div className="error">Error</div>
        </div>
    );
}
