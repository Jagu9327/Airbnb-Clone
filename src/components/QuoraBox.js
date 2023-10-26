import React from 'react';
import "../css/QuoraBox.css";
import { Avatar } from '@mui/material';

function QuoraBox() {
    return (
        <div className='quoraBox'>
            <div className='quoraBox__info'>
                <Avatar />
                <h5>Username</h5>
            </div>
            <div className='quoraBox__Quora'>
                <p>What is your question or link ?</p>
            </div>
        </div>
    )
}

export default QuoraBox
