import React from "react";
import './newspage.css.css';
import Footer from "../Footer/Footer";
const NewsPage =(children)=>{
    return (
        <div className="newspage--main" >
            <div className="newspage__content">
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default NewsPage;