import './news.css'
import React from "react";
import Element from "./Element";

export default class News extends React.Component {

    data = [["ph1","name1","text1"],["ph2","name2","text2"],["ph3","name3","text3"],["ph4","name4","text4"],["ph5","name5","text5"],["ph6","name6","text6"],["ph7","name7","text7"],["ph7","name7","text7"]]

    constructor(props) {
        super(props);
        this.state = {
            data: this.data
        }
    }

    get list() {
        // eslint-disable-next-line no-sequences
        return this.state.data.map((_, i) => <Element key={i} img={this.state.data[i][0]} name={this.state.data[i][1]} desc={this.state.data[i][2]}/>);
    }
/*
<Element key={i} >News {_}</Element>
*/
    add(el) {
        // this.data.push(el)
        this.setState(({
            ...this.state,
            data: [...this.state.data, el]
        }))
        // this.data = [...this.data, el]
        // this.data.push(el)
    }

    gen() {
        console.log(this)
        this.add(Math.random())
    }

    render() {
        return (
            <div>
                <main className='main-news'>
                    {this.list}
                </main>

                <button onClick={() => this.gen()}>add</button>
            </div>
        )
    }
}

