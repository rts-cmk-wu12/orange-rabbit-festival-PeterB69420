import { FaPlus } from "react-icons/fa6";

export default function Ticketform(){

    return (
        <>
        <div className="placeholder">
        <form className="ticket-form">
            <p className="ticket-form__txt">Your name</p>
            <input className="ticket-form__input" placeholder="Full name" />
            <p className="ticket-form__txt">Email Address</p>
            <input className="ticket-form__input" placeholder="Email" />
            <p className="ticket-form__txt">Phone number</p>
            <input className="ticket-form__input" placeholder="Phone" />
            <p className="ticket-form__txt">Your birthdate</p>
            <input className="ticket-form__input" placeholder="Birthdate" />
        </form>
        <button className="add-button">Add participant +</button>
        </div>
        </>
    )

}