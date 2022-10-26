import React from "react";
import './modal.css';
const Modal =({active,setActive})=>{
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => (setActive(false))}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <h1>Не тяжко правда?</h1>
                <h5 align="center">Ну от так, потому шо так, понімаєш?</h5>
            </div>
        </div>
    )
}

export default Modal;