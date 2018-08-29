// import { debugFactory } from '@/common/debug';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
// import 'firebase/storage';

// const debug = debugFactory('@/common/firebase');

global.firebase = firebase;

const config = {
  apiKey: 'AIzaSyARzHvxkE2OltzCipFR311uemD8dOdnq3U',
  authDomain: 'sitema-tercnico.firebaseapp.com',
  databaseURL: 'https://sitema-tercnico.firebaseio.com',
  projectId: 'sitema-tercnico',
  storageBucket: 'sitema-tercnico.appspot.com',
  messagingSenderId: '915897620611',
};
firebase.initializeApp(config);

export default firebase;

export { firebase };

export const FIREBASE_TO_LANG = {

  'auth/invalid-email': 'InvalidEmail',
  'auth/user-not-found': 'UserNotFound',
  'auth/email-already-in-use': 'ExistingEmail',
  'auth/weak-password': 'InvalidPassword',
  'auth/wrong-password': 'LoginFailure',

};
