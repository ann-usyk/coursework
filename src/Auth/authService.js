import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import {getFireAuth} from "../firebase/auth";

export class AuthService {
    _auth;
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
    }

    user() {
        this._auth.onAuthStateChanged(user => {
            console.log(5, user)
        }, err => {

        })
        console.log(3, this._auth.currentUser)
        setTimeout(() => console.log(2, this._auth.currentUser), 2000)
        return this._auth.currentUser
    }

    register(email, password) {
        createUserWithEmailAndPassword(this._auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    loginByUserPassword(email, password) {
        signInWithEmailAndPassword(this._auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    loginByGoogle() {
        const provider = new GoogleAuthProvider();

        signInWithPopup(this._auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...

                console.log(1, user)
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
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