import Rebase from "re-base";
import firebase from "firebase";

const app = firebase.initializeApp({
  apiKey: "",
  authDomain: "tunousoul.firebaseapp.com",
  databaseURL: "https://tunousoul.firebaseio.com"
});

const base = Rebase.createClass(app.database());

export default base;