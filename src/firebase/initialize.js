import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import config from 'firebase/config';

firebase.initializeApp(config);

export const storage = firebase.storage();
export const firestore = firebase.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;