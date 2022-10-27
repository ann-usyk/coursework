import React from "react";
import './modal.css';
const Modal =({active,setActive})=>{
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => (setActive(false))}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <h1>Зовсім не складно, чи не так?</h1>
                <h5 align="center">Дякуюємо, що прибрав усе сміття та зробив вагомий внесок у чистоту довкілля. Ти молодець, роби так завжди!</h5>
            </div>
        </div>
    )
}

export default Modal;