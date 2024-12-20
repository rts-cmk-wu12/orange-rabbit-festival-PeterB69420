import React, { useState } from 'react';
import { FaTrashCan } from "react-icons/fa6";
import Submitbutton from "./Submit";

export default function Participant({ formData }) {
    const [participantData, setParticipantData] = useState(formData);
    const [isButtonVisible, setIsButtonVisible] = useState(true);

    const handleRemove = () => {
        setParticipantData({
            name: 'No participants added...',
            email: '',
            pnumber: '',
            birthdate: ''
        });
        setIsButtonVisible(false);
    };

    return (
        <div>
            <div className="participant-container">
                <p className="participant-container__title">your participants</p>
                <h1 className="participant-container__h">participants</h1>
                <div className='participant-container__info'>
                    {participantData.name === 'No participants added...' ? (
                        <p className="participant-container__none">No participants added...</p>
                    ) : (
                        <div className='participant-container__indi'>
                            <p className='participant-container__name'>
                                {participantData.name}
                            </p>
                            {isButtonVisible && (
                                <button className='participant-container__button' onClick={handleRemove}><FaTrashCan/></button>
                            )}
                        </div>
                    )}
                    {participantData.email && (
                        <div className='participant-container__indi'>
                            <p className='participant-container__txt'>Email: </p>
                            <p className='participant-container__txt'>{participantData.email}</p>
                        </div>
                    )}
                    {participantData.pnumber && (
                        <div className='participant-container__indi'>
                            <p className='participant-container__txt'>Phone Number:</p>
                            <p className='participant-container__txt'>{participantData.pnumber}</p>
                        </div>
                    )}
                    {participantData.birthdate && (
                        <div className='participant-container__indi'>
                            <p className='participant-container__txt'>Birthdate: </p>
                            <p className='participant-container__txt'>{participantData.birthdate}</p>
                        </div>
                    )}
                </div>
            </div>
             <Submitbutton />
        </div>
    );
}
