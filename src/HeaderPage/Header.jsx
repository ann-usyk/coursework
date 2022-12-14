import './header.css'
import React from "react";
import {NavLink, Outlet} from "react-router-dom";
import UserLogin from "../UserLogin";

export default class Header extends React.Component {


    render() {
        return (
            <div>
                <div className="burger-button-container">
                    <div id="burger-button " className="button-logo-burger" onClick={() => {
                        document.getElementById("burger-panel").classList.toggle("show-panel")
                    }}>ECO-Army
                    </div>
                </div>
                <nav id="burger-panel">
                    <div className='div-header' onClick={() => {
                        window.onclick = function (event) {
                            if (!event.target.matches('.dropbtn')) {
                                let dropdowns = document.getElementsByClassName("dropdown-content");
                                let i;
                                for (i = 0; i < dropdowns.length; i++) {
                                    let openDropdown = dropdowns[i];
                                    if (openDropdown.classList.contains('show')) {
                                        openDropdown.classList.remove('show');
                                    }
                                }
                            }
                        }
                    }}>
                        <div className='div-link' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
                            <button
                                className='button-menu button-logo'>
                                ECO-Army
                            </button>
                            <NavLink end className='button-menu ' to={'/'}>
                                Головна
                            </NavLink>
                            <NavLink to="/clearTrash" className='button-menu'>
                                Інтерактив
                            </NavLink>
                            <NavLink to="/news" className='button-menu '>
                                Новини
                            </NavLink>
                            <NavLink to="/carousel" className='button-menu '>
                                Фотогалерея
                            </NavLink>
                            <div className="dropdown ">
                                <button onClick={() => {
                                    document.getElementById("myDropdown").classList.toggle("show")
                                    }
                                } className="dropbtn">
                                    Zero waste
                                </button>
                                <div id="myDropdown" className="dropdown-content">
                                    <NavLink to="/alliance" className='button-menu '>
                                        Zero Waste Alliance
                                    </NavLink>
                                    <NavLink to="/what_we_do" className='button-menu '>
                                        Що ми робимо
                                    </NavLink>
                                    <NavLink to="/cities" className='button-menu '>
                                        Zero Waste Cities
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <UserLogin/>
                    </div>
                </nav>
                <div>
                    <Outlet/>
                </div>
            </div>
        )
    }
}