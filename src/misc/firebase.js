import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyC61aw4XPih8Fi7T7FzUk8pzSG28G_uW8s',
  authDomain: 'my-chat-app-d4855.firebaseapp.com',
  projectId: 'my-chat-app-d4855',
  storageBucket: 'my-chat-app-d4855.appspot.com',
  messagingSenderId: '180655239894',
  appId: '1:180655239894:web:f0d79e9c2c6025d7464f77',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
