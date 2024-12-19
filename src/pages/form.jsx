import '../styles/pages/style.scss'
import '../styles/pages/form.scss'
import '../styles/pages/ticketform.scss'
import Ticketform from '../components/Ticketform';


export default function Form(){

    return (
        <>
        <div id='wrapper'>
        <article className='ticket-container'>
            <img className='ticket-container__img' src="src/assets/ofimg.png" alt="" />
            <Ticketform/>
        </article>
        </div>
        </>
    )
}