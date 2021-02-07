import firebase from 'firebase/app'
import 'firebase/database'


const firebaseConfig = {
    apiKey: "AIzaSyA26smX_ZNIwc9sQR2-6ukomBbYoEzCufs",
    authDomain: "pokemon-game-55fb3.firebaseapp.com",
    databaseURL: "https://pokemon-game-55fb3-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-55fb3",
    storageBucket: "pokemon-game-55fb3.appspot.com",
    messagingSenderId: "108466556691",
    appId: "1:108466556691:web:bc5e70372c2db2d70914e6"
};
firebase.initializeApp(firebaseConfig)
export const fire = firebase
export const database = fire.database()
export default database
