import './element.css'
import React from 'react';


class Hello extends React.Component {
    render() {
        return <div className="content--news">
            <h5>Тут має бути фото {this.props.img}</h5>
            <h1>Назва {this.props.name}</h1>
            <h5>Короткий опис {this.props.desc}</h5>
        </div>;
    }
}
export default Hello;