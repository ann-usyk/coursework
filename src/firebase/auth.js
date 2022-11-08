import { getAuth } from "firebase/auth";
import {checkApp} from "./firebase";

let auth;

export function getFireAuth(app) {
    app = checkApp(app)
    if (!auth) {
        auth = getAuth(app);
    }

    return auth;
}
