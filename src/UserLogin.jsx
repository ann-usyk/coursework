import React from "react";
import {BigHead} from "@bigheads/core";
import './userLogin.css'
import ModalLogin from "./Auth/ModalLogin";
import {AuthService} from "./Auth/authService";


export default class UserLogin extends React.Component{
    _authService = AuthService.singleton()

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            user: null,
        }
    }

    componentDidMount() {
        this._authService.user()
            .subscribe(user => {
                this.setState({...this.state, user, loading: false});
            })
    }

    login() {
        ModalLogin.singleton().show()
    }

    logout() {
        this.setState({...this.state, loading: true})
        this._authService.logout()
    }

    render() {
        let user = this.state.user;

        return (
            <div>
                {
                    this.state.loading &&
                    <div className="spinner-grow text-primary" style={{marginRight: '30px'}} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                }
                {
                    !user && !this.state.loading &&
                    <div className="nav-right-button" onClick={() => this.login()}>
                        <div className="icon">
                            <p>Увійти|</p>
                        </div>
                        <button className="button-login-user" style={{marginRight: '16px'}}>Гість</button>
                    </div>
                }
                {
                    user && !this.state.loading &&
                    <div className="nav-right-button">
                        <div className="icon">
                            {
                                user.photoURL &&
                                <div style={{width: '52px',
                                    height: '52px',
                                    position: 'relative',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    margin: '4px auto auto'}}>
                                    <img src={user.photoURL} alt="" style={{width: '52px', height: '52px'}} />
                                </div>
                            }
                            {
                                !user.photoURL && <BigHead/>
                            }
                        </div>
                        <button className="button-login-user">{user.displayName || user.email}</button>
                        <button className="btn btn-sm" onClick={() => this.logout()}>
                            <i className="fa fa-sign-out fs-3" ></i>
                        </button>
                    </div>
                }
            </div>
        )
    }
}