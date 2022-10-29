import './header.css'
import React from "react";
import {ReactComponent as Home} from "./img/user.svg";
import {NavLink,Outlet} from "react-router-dom";
import Modal from "./Modal";

export default class Header extends React.Component{
    active=false;
    setActive=false;
    constructor(props) {
        super(props);
        this.state={
            active:this.active,
            setActive:this.setActive
        }
    }
    render() {

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
                            <div className="dropdown ">
                                <button onClick={()=>{
                                    document.getElementById("myDropdown").classList.toggle("show")
                                }} className="dropbtn">Zero waste</button>
                                <div id="myDropdown" className="dropdown-content">
                                    <NavLink to="/alliance" className='button-menu '>Zero Waste Alliance</NavLink>
                                    <NavLink to="/what_we_do" className='button-menu '>Що ми робимо</NavLink>
                                    <NavLink to="/cities" className='button-menu '>Zero Waste Cities</NavLink>
                                </div>
                            </div>
                        </div>
                        <div style={{display:'flex',flexDirection:'row'}}>
                            <div ><Home className='div-svg'/></div>
                            <button className='button-login' onClick={()=>{
                                console.log("OK")
                                this.setState(({
                                    ...this.state,
                                    active:true,
                                    setActive:true
                                    })
                                )
                            }

                            }>Гість</button>
                            <div style={{paddingRight:"30px"}}></div>
                            <Modal active={this.active} setActive={this.setActive}>
                                <input inputMode={"email"}/>
                                <input inputMode={"text"}/>
                            </Modal>
                        </div>
                    </div>
                </nav>
                <div>
                    <Outlet/>
                </div>
            </div>
        )
    }}