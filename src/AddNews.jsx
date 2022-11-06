import React from "react";
import './addnews.css'

export default class AddNews extends React.Component {


    constructor(props) {
        super(props);
    }
       render() {
        return (
            <div className="addnews_container">
               <div className="addnews_container--content">
                   <div>Головний надпис новини</div>
                   <input className="input_name" type="text"/>
                   <div>Посилання на фото</div>
                   <input className="input_img" inputMode="url"/>
                   <div>Розмітка новини</div>
                   <input className="input_marking" type="text"/>
                   <input type="button" value="Text" style={{display:"block",width:"100%"}}></input>
               </div>
            </div>
        )
    }
}

