import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function Submitbutton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/confirmation');
    };

    return (
        <button className="checkout-button" onClick={handleClick}>
            Submit <FaArrowRightLong />
        </button>
    );
}