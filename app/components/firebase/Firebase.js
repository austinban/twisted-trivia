import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyB83vEgfMfGDmADLMFWccZCZBC9C5DPUhc',
    authDomain: 'momento-mori-59d24.firebaseapp.com',
    databaseURL: 'https://momento-mori-59d24.firebaseio.com',
    projectId: 'momento-mori-59d24',
    storageBucket: 'momento-mori-59d24.appspot.com',
    messagingSenderId: '513622674880'
};

firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
