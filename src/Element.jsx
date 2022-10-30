import './element.css'
import React from 'react';


class Hello extends React.Component {
    render() {
        return <div className="content--news" onClick={()=>{window.open(this.props.reference)}}>
            <img className='content--news_image' src={this.props.img} alt=""/>
            <h2 className='truncate'> {this.props.name}</h2>
            <h5 className='truncate'> {this.props.desc}</h5>
        </div>;
    }
}
export default Hello;