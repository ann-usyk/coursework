import React from "react";
import './addnews.css'
import {NewsService} from "./newsService";
import {useNavigate, useParams} from "react-router-dom";
import Toast from "../toast";

class AddNews extends React.Component {
    _newsService = NewsService.singleton();
    _id;

    constructor(props) {
        super(props);
        this._id = props.id
        this.state = {
            data: {
                title: '',
                description: '',
                img: '',
                data: '',
                created_at: null,
                updated_at: null,
            },
            loading: false,
        };
    }

    async componentDidMount() {
        if (this._id) {
            this.setState(({...this.state, loading: true}))
            let data = await this._newsService.getNewsById(this._id)
            this.setState(({
                ...this.state,
                data,
                loading: false,
            }))
        }
    }

    get news() {
        return this.state.data;
    }

    handleNewsChange(key, value) {
        let data = this.state.data;
        this.setState({...this.state, data: {...data, [key]: value}});
    }

    get valid() {
        let news = this.news;
        return news.title.trim().length >= 5 &&
            news.description.trim().length >= 5 &&
            news.img.trim().length &&
            news.data.trim().length;
    }

    async save() {
        this.setState({...this.state, loading: true});
        let news = this.news;
        if (this._id) {
            news.updated_at = new Date().getTime();
            await this._newsService.updateNews(this._id, news);
            Toast.singleton().show({type: 'success', text: 'Оновлено'})
        } else {
            news.created_at = news.updated_at = new Date().getTime();
            await this._newsService.addNews(news);
            Toast.singleton().show({type: 'success', text: 'Додано'})
        }
        this.setState({...this.state, loading: false});

        this.props.navigate('/NewsPages');
    }

    render() {
        return (
            <div className="addnews_container">
               <div className="addnews_container--content">
                   <div>Найменування новини</div>
                   <input
                       value={this.news.title}
                       onChange={ev => this.handleNewsChange('title', ev.target.value)}
                       className="input_name"
                       type="text"
                   />
                   <div>Опис новини</div>
                   <input
                       value={this.news.description}
                       onChange={ev => this.handleNewsChange('description', ev.target.value)}
                       className="input_name"
                       type="text"
                   />
                   <div>Посилання на фото</div>
                   <input
                       value={this.news.img}
                       onChange={ev => this.handleNewsChange('img', ev.target.value)}
                       className="input_img"
                       inputMode="url"
                   />
                   <div>Розмітка новини</div>
                   <textarea
                       value={this.news.data}
                       onChange={ev => this.handleNewsChange('data', ev.target.value)}
                       className="input_marking"
                       rows="6">
                   </textarea>
                   <input
                       type="button"
                       disabled={!this.valid}
                       value="Зберегти"
                       onClick={() => this.save()}
                       style={{display:"block",width:"100%"}}
                   />
               </div>
            </div>
        )
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => <AddNews {...useParams()} navigate={useNavigate()} {...props} />
