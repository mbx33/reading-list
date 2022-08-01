import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBjmtFtajGYhZAf8Cj0ZCSIvChWBsM-UvA',
	authDomain: 'library-1668a.firebaseapp.com',
	projectId: 'library-1668a',
	storageBucket: 'library-1668a.appspot.com',
	messagingSenderId: '67106443646',
	appId: '1:67106443646:web:9d2b95e1df886fddef632f',
};

//initialize Firebase
initializeApp(firebaseConfig);

// initializing the the db
const db = getFirestore();

// init firebase Auth
const auth = getAuth();

export { db, auth };
