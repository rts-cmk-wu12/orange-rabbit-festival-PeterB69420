import React, { useState } from 'react';

export default function Participant({ formData }) {
    
    return (
        <>
        <div>
            <div className="participant-container">
            <p className="participant-container__title">your participants</p>
            <h1 className="participant-container__h">participants</h1>
            <div className='participant-container__info'>
            <p className='participant-container__name'>{formData.name}</p>
            <div className='participant-container__indi'>
            <p className='participant-container__txt'>Email: </p>
            <p className='participant-container__txt'>{formData.email}</p>
            </div>
            <div className='participant-container__indi'>
            <p className='participant-container__txt'>Phone Number:
            </p>
            <p className='participant-container__txt'>{formData.pnumber}</p>
            </div>
            <div className='participant-container__indi'>
            <p className='participant-container__txt'>Birthdate: </p>
             <p className='participant-container__txt'>{formData.birthdate}</p>
            </div>
            </div>
            </div>
            <button className='submit-button'>Submit</button>
        </div>
        </>
    );
}