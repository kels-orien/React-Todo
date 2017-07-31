import firebase from 'firebase';

try {
  var config = {
      apiKey: "AIzaSyDRfIpzjR8Qqr4ICdOQB7MdL4lpIQb0qCc",
      authDomain: "todo-app-b0468.firebaseapp.com",
      databaseURL: "https://todo-app-b0468.firebaseio.com",
      projectId: "todo-app-b0468",
      storageBucket: "",
      messagingSenderId: "773410644700"
    };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
