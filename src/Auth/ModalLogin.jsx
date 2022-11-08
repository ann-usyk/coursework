import React from "react";
import * as bootstrap from 'bootstrap'
import {AuthService} from "./authService";
import {FcGoogle} from "react-icons/fc"

export default class ModalLogin extends React.Component {
    static _instance;
    _el;
    _authService = AuthService.singleton();

    static singleton() {
        return this._instance
    }

    constructor(props) {
        super(props);
        ModalLogin._instance = this
        this.state = {
            show: false,
            type: 'primary',
            text: '...',
            status: "",
        }
    }
    componentDidMount() {
        this._el = new bootstrap.Modal('#exampleModalCenter')
    }

    show(options) {
        this.setState({...this.state, ...options, show: true})
        setTimeout(() => this._el.show())
    }

    hide() {
        this.setState({...this.state, show: false})
        setTimeout(() => this._el.hide())
    }

    gg() {
        this._authService.loginByGoogle()
    }

    lo() {
        // this._authService.logout()
    }

    render() {
        return (
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Увійти</h5>
                            <button type="button" onClick={()=>this.hide()} className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body d-flex flex-column align-content-center">
                                Логін
                                <input type="text"></input>
                                Пароль
                                <input type="text"></input>
                            {this.state.status}
                        </div>

                        <button type="button" className="btn btn-light" onClick={()=>this.gg()} data-dismiss="modal">
                            <FcGoogle/>Увійти за допомогою Google
                        </button>
                        <button type="button" onClick={()=>{
                            this.setState({...this.state, status: "Логін або пароль не співпадають"})
                        }} className="btn btn-primary">Увійти</button>
{/*
                        <button type="button" className="btn btn-secondary" onClick={()=>this.lo()} data-dismiss="modal">LO</button>
*/}

                        <div className="modal-footer">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
