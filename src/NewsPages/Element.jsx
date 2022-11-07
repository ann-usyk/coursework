import './element.css'
import React from 'react';
import {NavLink} from "react-router-dom";
import * as moment from "moment";


class Hello extends React.Component {

    render() {
        return <NavLink to={this.props.item.id}>
            <div className="content--news" >
                <img className='content--news_image' src={this.props.item.img} alt=""/>
                <h2 className='truncate'> {this.props.item.title}</h2>
                <h5 className='truncate'> {this.props.item.description}</h5>
                {
                    this.props.item.created_at &&
                    <div className="text-muted">
                        <span>Додано: {moment(this.props.item.created_at).calendar()}</span>,
                        <span>оновлено: {moment(this.props.item.updated_at).calendar()}</span>
                    </div>
                }
            </div>
        </NavLink>
    }
}
export default Hello;