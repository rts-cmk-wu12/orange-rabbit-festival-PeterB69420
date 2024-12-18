import '../styles/pages/style.scss'
import '../styles/pages/form.scss'
import '../styles/pages/ticketform.scss'
import { MdDateRange } from "react-icons/md";
import { CiMap } from "react-icons/ci";
import Ticketform from '../components/Ticketform';

export default function Form(){


    return (
        <>
        <div id='wrapper'>
        <article className='ticket-container'>
            <img className='ticket-container__img' src="src/assets/ofimg.png" alt="" />
            <div className='ticket-container__div'>
                <p className='ticket-container__captxt'>signup for the event</p>
                <h1 className='ticket-container__h'>orange rabbit festival 2023</h1>
                <p className='ticket-container__txt'><MdDateRange style={{width: '20px', height: '19px'}} />24 june 2025 - 1 july 2025
                <CiMap style={{width: '20px', height: '19px'}} />bunny avenue 22, 2300, rabbitkilde</p>
                <Ticketform/>
        </div>
        </article>
        </div>
        </>
    )

}