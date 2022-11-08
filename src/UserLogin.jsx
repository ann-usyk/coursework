import React from "react";
import {BigHead} from "@bigheads/core";
import './userLogin.css'
import ModalLogin from "./Auth/ModalLogin";
import {AuthService} from "./Auth/authService";


export default class UserLogin extends React.Component{
    login = true;
    _authService = AuthService.singleton()


    constructor(props) {
        super(props);
        this.state = {
            login: this.login,
        }
    }
    checkLogin(){
        console.log(this._authService.user())
        if (this._authService.user()){
            this.setState({...this.state, login: true});
        }
    }

    componentDidMount() {
        this.checkLogin()
    }

    render() {
        return (
            <div className="nav-right-button" onClick={()=>{
                ModalLogin.singleton().show()
            }}>
                <div className="icon">
                    {this.login ? <BigHead/>:""}
                </div>
                <button className='button-login-user' >Гість</button>
                <div style={{paddingRight: "30px"}}></div>
            </div>
        )
    }
}