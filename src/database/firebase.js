import app from 'firebase/app'

import 'firebase/firestore'

import config from '../config/firebase'


class Firebase {
  constructor() {
    app.initializeApp(config);
    this.database = app.firestore();
  }
}

const firebase = new Firebase();

export default firebase;