import './news.css'
import React from "react";
import Element from "./Element";
import {NewsService} from "./newsService";
import Footer from "../Footer/Footer";
import {AuthService} from "../Auth/authService";

export default class News extends React.Component {
    _authService = AuthService.singleton();
    _newsService = NewsService.singleton();

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true,
            editor: false,
        };
    }

    async componentDidMount() {
        let data = await this._newsService.loadNews()
        this.setState(({
            ...this.state,
            data,
            loading: false,
        }))

        this._authService.user()
            .subscribe(user => setTimeout(() => this.setState(({...this.state, editor: !!user}))))
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
                            {
                                this.state.editor &&
                                <Element
                                    item={{title: 'Додати новину', img: 'https://static.thenounproject.com/png/1555710-200.png', id: 'new'}}>
                                </Element>
                            }
                        </main>
                    </div>
                }
                <Footer/>
            </div>
        )
    }
}

