import firebase from 'firebase';
import config from '../config/firebase';

const app = firebase.initializeApp(config);

const db = app.database();

export default db;
