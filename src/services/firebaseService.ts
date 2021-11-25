/****************************************************************/
/*  Firestore service - login and create account                */
/****************************************************************/
import { FirebaseApp, initializeApp } from "firebase/app";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  User, 
  updateCurrentUser,
  signInWithEmailAndPassword,
  UserCredential,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy8vX9Ngh2QxnUgChmSwCQ0Dc5htk_HGo",
  authDomain: "ithsexpoauth.firebaseapp.com",
  projectId: "ithsexpoauth",
  storageBucket: "ithsexpoauth.appspot.com",
  messagingSenderId: "712952376950",
  appId: "1:712952376950:web:51343624725e6958fa7957"
};

// Initialize Firebase
let app: FirebaseApp;

export const initFirebase = () => {
  app = initializeApp(firebaseConfig);
};

export const fbRegister = async (
  firstName: string, 
  lastName: string,
  email: string,
  password: string
): Promise<UserCredential> => {
  const auth = getAuth();
  const createUserResponse = await createUserWithEmailAndPassword(auth, email, password);
  const newUser: User = {
    ...createUserResponse.user, 
    displayName: firstName + ' ' + lastName}
    await updateCurrentUser(auth, newUser);
    return createUserResponse;
};

export const fbLogin = async (email: string, password: string):Promise<UserCredential> => {
  const auth = getAuth();
  return await signInWithEmailAndPassword(auth, email, password)
};