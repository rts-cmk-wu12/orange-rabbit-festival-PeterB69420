import { IoIosCheckmarkCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import '../styles/pages/style.scss'
import '../styles/pages/confirmation.scss'

export default function Confirmation() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/form'); 
    };

    return (
        <>
        <div className="complete-container">
            <div className="complete-container__checkm"><IoIosCheckmarkCircle /></div>
            <p className="complete-container__title">confirmation</p>
            <h1 className="complete-container__h">Signup complete</h1>
            <p className="complete-container__txt">We look forward seeing you at the event</p>
            <button className="complete-container__button" onClick={handleButtonClick}>Order more tickets</button>
        </div>
        </>
    )
}