import React from "react";
import './modal.css';
const Modal =({active,setActive})=>{
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => (setActive(false))}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <h1>Зовсім не складно, чи не так?</h1>
                <h4 align="center">Дякуємо, що прибрав усе сміття та зробив вагомий внесок у чистоту довкілля.<br/> Ти молодець, роби так завжди!</h4>
            </div>
        </div>
    )
}

export default Modal;