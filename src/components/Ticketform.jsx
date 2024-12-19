import { MdDateRange } from "react-icons/md";
import { CiMap } from "react-icons/ci";
import Button from "./Button";
import { useState } from "react";
import Participant from "./Participants";

export default function Ticketform() {
    const [formData, setFormData] = useState(() => {
        const savedData = localStorage.getItem('formData');
        return savedData ? JSON.parse(savedData) : { name: '', email: '', pnumber: '', birthdate: '' };
    });

    const [showParticipant, setShowParticipant] = useState(false); // State to manage visibility
    const [participantData, setParticipantData] = useState(null); // State to store data for Participant

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('formData', JSON.stringify(formData));
    };

    const showParticipantComponent = () => {
        if (!showParticipant) {
            setParticipantData(formData); // Update participant data
            setShowParticipant(true);
        }
    };

    return (
        <>
            <div className="placeholder">
                <div className='ticket-container__div'>
                    <p className='ticket-container__captxt'>signup for the event</p>
                    <h1 className='ticket-container__h'>orange rabbit festival 2023</h1>
                    <p className='ticket-container__txt'>
                        <MdDateRange style={{ width: '20px', height: '19px' }} />24 june 2025 - 1 july 2025
                        <CiMap style={{ width: '20px', height: '19px' }} />bunny avenue 22, 2300, rabbitkilde
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="ticket-form">
                    <p className="ticket-form__txt">Your name</p>
                    <input className="ticket-form__input" type="text" placeholder="Full name" id="name"
                        name="name" value={formData.name}
                        onChange={handleInputChange} />
                    <p className="ticket-form__txt">Email Address</p>
                    <input className="ticket-form__input" type="email" placeholder="Email" id="email"
                        name="email" value={formData.email}
                        onChange={handleInputChange} />
                    <p className="ticket-form__txt">Phone number</p>
                    <input className="ticket-form__input" type="tel" placeholder="Phone" id="pnumber"
                        name="pnumber" value={formData.pnumber}
                        onChange={handleInputChange} />
                    <p className="ticket-form__txt">Your birthdate</p>
                    <input className="ticket-form__input" type="date" placeholder="Birthdate" name="birthdate" id="birthdate" value={formData.birthdate}
                        onChange={handleInputChange} />
                    <Button onClick={showParticipantComponent} /> {/* Pass the show function to Button */}
                </form>
            </div>
            {showParticipant && <Participant formData={participantData} />} {/* Conditionally render Participant */}
        </>
    );
}