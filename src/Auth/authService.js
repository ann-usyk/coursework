import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import {ReplaySubject} from "rxjs";
import {getFireAuth} from "../firebase/auth";

export class AuthService {
    _auth;
    _user;
    $user = new ReplaySubject(1);
    static _instance;

    /**
     * @return AuthService
     * */
    static singleton() {
        if (!this._instance) {
            this._instance = new AuthService()
        }

        return this._instance
    }

    constructor() {
        this._auth = getFireAuth();
        this._auth.onAuthStateChanged(user => this._setUser(user), err => {})
    }

    _setUser(user) {
        this.$user.next(this._user = user)
    }

    user() {
        return this.$user.asObservable()
    }

    async register(email, password) {
        try {
            let userCredential = await createUserWithEmailAndPassword(this._auth, email, password)
            return userCredential.user
        } catch (e) {
            return null
        }
    }

    async loginByUserPassword(email, password) {
        try {
            let userCredential = await signInWithEmailAndPassword(this._auth, email, password)
            return userCredential.user
        } catch (e) {
            return null
        }
    }

    async loginByGoogle() {
        const provider = new GoogleAuthProvider();

        try {
            let result = await signInWithPopup(this._auth, provider)
            return result.user;
        } catch (e) {
            return null
        }
    }

    logout() {
        signOut(this._auth)
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
            });
    }
}