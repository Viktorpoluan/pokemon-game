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

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const Firebase = {
  getPokemonsSoket: (cb) =>
    database.ref("pokemons").on("value", (snapshot) => {
      cb(snapshot.val());
    }),
  offPokemonsSoket: () => database.ref("pokemons").off(),
  getPokemonsOnce: async () =>
    await database
      .ref("pokemons")
      .once("value")
      .then((snapshot) => snapshot.val()),

  postPokemon: (key, pokemon) => {
    database.ref(`pokemons/${key}`).update(pokemon);
  },

  addPokemon: (pokemon, cb) => {
    const newKey = database.ref().child("pokemons").push().key;
    database.ref(`pokemons/${newKey}`).set(pokemon);
  },
};

export default Firebase;
