import React from "react";
import './newstemplate.css';


const NewsTemplate =({children})=>{
    return (
        <div className="new_stemplate__container">
            <div className="news_template__content">
                {children}
            </div>
        </div>
    )
}

export default NewsTemplate;