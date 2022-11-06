import './element.css'
import React from 'react';
import {NavLink} from "react-router-dom";


class Hello extends React.Component {

    render() {
        return <NavLink to={this.props.reference}>
            <div className="content--news" >
                <img className='content--news_image' src={this.props.img} alt=""/>
                <h2 className='truncate'> {this.props.name}</h2>
                <h5 className='truncate'> {this.props.desc}</h5>
            </div>
        </NavLink>
    }
}
export default Hello;