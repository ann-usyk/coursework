import React from "react";
import './newspage.css.css';
const NewsPage =(children)=>{
    return (
        <div className="newspage--main" >
            <div className="newspage__content">
                {children}
            </div>
        </div>
    )
}

export default NewsPage;