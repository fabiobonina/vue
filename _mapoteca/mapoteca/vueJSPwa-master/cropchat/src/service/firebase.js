import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyDM3zYwPd8IgdiZd7lSmBA2jbrds87JCdo',
  authDomain: 'listador-de-tarefas-c0fcd.firebaseapp.com',
  databaseURL: 'https://listador-de-tarefas-c0fcd.firebaseio.com',
  projectId: 'listador-de-tarefas-c0fcd',
  storageBucket: 'listador-de-tarefas-c0fcd.appspot.com',
  messagingSenderId: '71856623515'
}

firebase.initializeApp(config)

export default {
  database: firebase.database()
}
