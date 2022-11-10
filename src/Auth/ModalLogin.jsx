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
            loading: false,
            type: 'login', // register
            login: '',
            password: '',
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

    changeType(type) {
        this.setState({...this.state, type})
    }

    get valid() {
        return this.state.login.trim().length >= 5 && this.state.password.length >= 4
    }

    async loginByGoogle() {
        let user = await this._authService.loginByGoogle()
        if (user) {
            this.hide()
            return
        }

        this.setState({...this.state, status: "Шось пошло не так"})
    }

    async login() {
        this.setState({...this.state, loading: true})
        let user = await this._authService.loginByUserPassword(this.state.login, this.state.password)
        this.setState({...this.state, loading: false})

        if (user) {
            this.hide()
            return
        }

        this.setState({...this.state, status: "Логін або пароль не співпадають"})
    }

    async register() {
        this.setState({...this.state, loading: true})
        let user = await this._authService.register(this.state.login, this.state.password)
        this.setState({...this.state, loading: false})

        if (user) {
            this.hide()
            return
        }

        this.setState({...this.state, status: "Шось пошло не так"})
    }

    render() {
        return (
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog"
                 aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Увійти</h5>
                            <button type="button" onClick={()=>this.hide()} className="btn close" data-dismiss="modal" aria-label="Close">
                                <i className="fa fa-close" aria-hidden="true"></i>
                            </button>
                        </div>

                        <div className="modal-body d-flex flex-column align-content-center" >
                            <label htmlFor="exampleInputEmail1" className="form-label">Логін</label>
                            <input type="email" className="form-control" value={this.state.login} onChange={ev => this.setState({...this.state, login: ev.target.value})} id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
                            <input type="password" className="form-control" value={this.state.password} onChange={ev => this.setState({...this.state, password: ev.target.value})} id="exampleInputPassword1" />
                            <span className="text-danger">{this.state.status}</span>
                        </div>

                        {
                            this.state.type === 'login' &&
                            <div className="row" style={{margin: '0 5px 16px'}}>
                                <div className="col-12 d-flex justify-content-between">
                                    <button type="button" className="btn btn-light" onClick={()=>this.loginByGoogle()} data-dismiss="modal" style={{marginRight: '8px'}}>
                                        <FcGoogle/> Увійти за допомогою Google
                                    </button>
                                    <button type="button" onClick={() => this.login()} disabled={!this.valid} className="btn btn-primary">Увійти</button>
                                </div>
                            </div>
                        }

                        {
                            this.state.type === 'register' &&
                            <div className="row" style={{margin: '0 5px 16px'}}>
                                <div className="col-12 d-flex justify-content-between">
                                    <div></div>
                                    <button type="button" onClick={() => this.register()} disabled={!this.valid} className="btn btn-primary">рееструвався</button>
                                </div>
                            </div>
                        }

                        <div className="modal-footer">
                            <div className="row" style={{width: '100%'}}>
                                <div className="col-12 d-flex justify-content-center">
                                    {
                                        this.state.type === 'login' &&
                                        <span>Немає аккаунта? - <button type="button" className="btn btn-link" onClick={() => this.changeType('register')}>Зареєструватися</button></span>
                                    }
                                    {
                                        this.state.type === 'register' &&
                                        <span>Я маю обліковий запис - <button type="button" className="btn btn-link" onClick={() => this.changeType('login')}>Увійти</button></span>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
