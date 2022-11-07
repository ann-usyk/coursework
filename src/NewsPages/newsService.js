import {ref, query, set, push, onValue, update, remove, limitToLast} from "firebase/database";
import {getFireDatabase} from "../firebase/database";

export class NewsService {
    _db;
    _path = 'news';
    _count = 100;
    static _instance;

    /**
     * @return NewsService
    * */
    static singleton() {
        if (!this._instance) {
            this._instance = new NewsService()
        }

        return this._instance
    }

    constructor() {
        this._db = getFireDatabase();
    }

    loadNews() {
        return new Promise(resolve => {
            onValue(query(ref(this._db, this._path), limitToLast(this._count)), snapshot => {
                const result = []
                snapshot.forEach(item => {
                    result.push({id: item.key, ...item.val()})
                })
                resolve(result)
            })
        });
    }

    getNewsById(id) {
        return new Promise(resolve => {
            onValue(ref(this._db, `${this._path}/${id}`), snapshot => {
                resolve({id: snapshot.key, ...snapshot.val()});
            });
        });
    }

    async addNews(news) {
        delete news.id
        const newRef = ref(this._db, this._path);
        const newNewsRef = push(newRef);
        return await set(newNewsRef, news);
    }

    async updateNews(id, news) {
        const updateRef = ref(this._db, `${this._path}/${id}`);
        delete news.id
        return await update(updateRef, news)
    }

    async destroyNews(id) {
        const removeRef = ref(this._db, `${this._path}/${id}`);
        return await remove(removeRef)
    }
}