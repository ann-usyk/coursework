import stack from './stakan.png'
import koserv from './konserva.png'
import bottle from './plasticBootle.png'

import './App.css';
import Modal from "./popup";
import {useState} from "react";

let counterTrash=0


function App() {
    const [modalActive,setModalActive] = useState(false)

    function clearChaff(ev)
    {
        ev.target.style = "visibility:hidden;"
        counterTrash++;
        if(counterTrash === 3){
            setModalActive(true);
        }
    }

  return (
    <div className="App" onLoad={loaded}>
      <header className="App-header">
          <div className="main">
              <div className="collectChaff">
                  <img className="stack chaff" src={stack} onClick={clearChaff}  alt=""/>
                  <img className="koserv chaff" src={koserv} onClick={clearChaff} alt=""/>
                  <img className="bottle chaff" src={bottle} onClick={clearChaff} alt=""/>

                  <Modal active={modalActive} setActive={setModalActive} />
              </div>
          </div>
      </header>
    </div>
  );
}


function loaded(){
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

export default App;
