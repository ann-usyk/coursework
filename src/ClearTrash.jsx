import React, {useState} from "react";
import './clearTrash.css';
import stack from "./img/stakan.png";
import koserv from "./img/konserva.png";
import bottle from "./img/plasticBootle.png";
import Modal from "./Modal";


export let counterTrash=0;

const ClearTrash =({active,setActive})=>{
    const [modalActive,setModalActive] = useState(false)

    function clearChaff(ev)
    {
        ev.target.style = "visibility:hidden;"
        counterTrash++;
        if(counterTrash === 3){
            setModalActive(true);
            counterTrash=0;
        }
    }
    return (
        <div className="main">
            <div className="collectChaff">
                <img className="stack chaff" src={stack} onClick={clearChaff}  alt=""/>
                <img className="koserv chaff" src={koserv} onClick={clearChaff} alt=""/>
                <img className="bottle chaff" src={bottle} onClick={clearChaff} alt=""/>
                <Modal active={modalActive} setActive={setModalActive} />
            </div>
        </div>
    )
}

export function loaded(){
    let img = document.querySelectorAll('img'),
        i = 0,
        max = img.length,
        left,
        top;

    for (; i < max; i += 1) {
        left = Math.round(Math.random() * (document.body.offsetWidth - 100))  + 'px';
        top = Math.round(Math.random() * (document.body.offsetHeight - 100))  + 'px';
        img[i].style.left = left;
        img[i].style.top = top;
    }

} //Генерація випадкового розташування компонентів на сторінці


export default ClearTrash;