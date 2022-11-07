import React from "react";
import * as bootstrap from 'bootstrap'

export default class Toast extends React.Component {
    static _instance;
    _el;

    /**
     * @return Toast
     * */
    static singleton() {
        return this._instance
    }

    constructor(props) {
        super(props);
        Toast._instance = this
        this.state = {
            show: false,
            type: 'primary',
            text: '...',
        }
    }

    componentDidMount() {
        this._el = new bootstrap.Toast('#liveToast')
    }

    show(options) {
        this.setState({...this.state, ...options, show: true})
        setTimeout(() => this._el.show())
    }

    hide() {
        this.setState({...this.state, show: false})
        setTimeout(() => this._el.hide())
    }

    render() {
        return (
            <div className="toast-container position-fixed bottom-0 end-0 p-3">
                <div id="liveToast" className={'toast text-bg-' + this.state.type} role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="d-flex">
                        <div className="toast-body">
                            {this.state.text}
                        </div>
                        <button
                            type="button"
                            className="btn-close btn-close-white me-2 m-auto"
                            data-bs-dismiss="toast"
                            aria-label="Close">
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
