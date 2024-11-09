import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'


// CRUD - create read update delete 

const firebaseConfig = {
    apiKey: "AIzaSyDt35NiWyk_oSwR9HlDp5U1GfV4-Y-A7vg",
    authDomain: "crown-clothing-d9064.firebaseapp.com",
    projectId: "crown-clothing-d9064",
    storageBucket: "crown-clothing-d9064.firebasestorage.app",
    messagingSenderId: "886257652649",
    appId: "1:886257652649:web:8f3f431707c0f9faa82ab8"
  };
  

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth()
  export const signInwithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();
  console.log(db)

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'user', userAuth.uid)

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)// snapshot allows to check if there is an instance of the userdoc reference exists in the database and acess the data 
    console.log(userSnapshot)
    console.log(userSnapshot.exists());

    // if user does not exists in the database, create a new data and store it in the database

    if(!userSnapshot.exists()){
      const {displayName, email} = userAuth
      const createdAt = new Date();

      try{
        await setDoc(userDocRef, {
          displayName, email, createdAt
        })
      }

      catch (error){
        console.log('error', error.message)
      }
    }
    return userDocRef

  };