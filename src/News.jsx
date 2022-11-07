import './news.css'
import React from "react";
import Element from "./Element";
import {NewsService} from "./newsService";

export default class News extends React.Component {
    _newsService = NewsService.singleton();

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true,
        };
    }

    async componentDidMount() {
        let data = await this._newsService.loadNews()
        this.setState(({
            ...this.state,
            data,
            loading: false,
        }))
    }

    get list() {
        return this.state.data.map(item => <Element item={item} key={item.id}/>);
    }

    render() {
        return (
            <div>
                {this.state.loading && <div>12345678</div>}
                {
                    !this.state.loading &&
                    <div>
                        <main className='main-news'>
                            {this.list}
                            <Element item={{title: 'Додати новину', img: 'https://static.thenounproject.com/png/1555710-200.png', id: 'new'}}>
                            </Element>
                        </main>
                    </div>
                }
            </div>
        )
    }
}

