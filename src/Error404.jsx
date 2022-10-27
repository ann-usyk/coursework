import {Link} from "react-router-dom";
import './error404.css'

export const Error404 = () =>{
    return(
        <div className="main_error">
            <h1 className="main_error-error">Error 404</h1>
            <h5 className="main_error-content">Цієї сторінки не існує. Поверніться на <Link to="/">Головну</Link></h5>
        </div>
    )
}