import React from "react";
import './newstemplate.css';
import Footer from "../Footer/Footer";


const NewsTemplate =({children})=>{
    return (
        <div className="new_stemplate__container">
            <div className="news_template__content">
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default NewsTemplate;