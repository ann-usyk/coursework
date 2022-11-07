import {getDatabase} from "firebase/database";
import {checkApp} from "./firebase";

let database;

export function getFireDatabase(app) {
    app = checkApp(app)
    if (!database) {
        database = getDatabase(app);
    }

    return database;
}
