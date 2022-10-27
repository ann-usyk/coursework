import './header.css'
import React from "react";
import {ReactComponent as Home} from "./img/user.svg";
import {NavLink,Outlet} from "react-router-dom";


const Header = ()=>{
    return(
        <div>
            <nav>
                <div className='div-header'>
                    <div className='div-link' style={{display:'flex',flexDirection:'row', justifyContent:'space-around'}}>
                        <button className='button-menu button-logo'>ECO-Army</button>
                        <NavLink end className='button-menu ' to={'/'}>Головна</NavLink>
                        <NavLink to="/clearTrash" className='button-menu  '>Інтерактив</NavLink>
                        <NavLink to="/news" className='button-menu '>Новини</NavLink>
                        <NavLink to="/carousel" className='button-menu '>Фотогалерея</NavLink>
                        <NavLink to="/activism" className='button-menu '>Zero waste</NavLink>
                    </div>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        <div ><Home className='div-svg'/></div>
                        <button className='button-login'>Гість</button>
                        <div style={{paddingRight:"30px"}}></div>
                    </div>
                </div>
            </nav>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}

export default Header;