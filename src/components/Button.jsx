import React from 'react';
import { IoMdClose } from "react-icons/io";

export default function Button({ onClick }) {
    return (
        <button className="add-button" onClick={onClick}>Add participant +</button>
    );
}