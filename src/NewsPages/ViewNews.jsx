import { useParams, NavLink, useNavigate } from "react-router-dom";
import * as moment from 'moment'
import './news.css'
import React from "react";
import {NewsService} from "./newsService";
import NewsTemplate from "./NewsTemplate";
import Toast from "../toast";
import {AuthService} from "../Auth/authService";

class ViewNews extends React.Component {
    _authService = AuthService.singleton();
    _newsService = NewsService.singleton();
    _id;

    constructor(props) {
        super(props);
        this._id = props.id
        this.state = {
            data: null,
            loading: true,
            editor: false,
        };
    }

    async componentDidMount() {
        let data = await this._newsService.getNewsById(this._id)
        this.setState(({
            ...this.state,
            data,
            loading: false,
        }))

        this._authService.user()
            .subscribe(user => setTimeout(() => this.setState(({...this.state, editor: !!user}))))
    }

    async remove() {
        await this._newsService.destroyNews(this._id)
        Toast.singleton().show({type: 'warning', text: 'Видалено'})
        this.props.navigate('/news');
    }

    render() {
        let news = this.state.data
        return (
            <div>
                {this.state.loading && <div>12345678</div>}
                {
                    !this.state.loading &&
                    <div>
                        <NewsTemplate>
                            {
                                this.state.editor &&
                                <div>
                                    <NavLink to="edit">
                                        <button type="button" className="btn btn-primary">Редагувати</button>
                                    </NavLink>
                                    <button type="button" onDoubleClick={() => this.remove()} className="btn btn-danger">Видалити</button>
                                </div>
                            }

                            <div className="text-muted">
                                <span>added: {moment(news.created_at).calendar()}</span>,
                                <span>updated: {moment(news.updated_at).calendar()}</span>
                            </div>

                            <h1>{news.title}</h1>
                            <img src={news.img} alt={news.title} />
                            <div dangerouslySetInnerHTML={{__html: news.data}}></div>
                        </NewsTemplate>
                    </div>
                }
            </div>
        )
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => <ViewNews {...useParams()} navigate={useNavigate()} {...props} />
