import { Injectable } from '@angular/core';
import { getAuth, GoogleAuthProvider, authState, onAuthStateChanged, user, User, Auth } from '@angular/fire/auth';
import { doc, getDoc, setDoc, collection, collectionData, collectionChanges, Firestore, where } from '@angular/fire/firestore';
import { signInWithPopup, signOut } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public firestore: Firestore, private auth: Auth) { }

  checkUser = false;
  _user: User | null = null;

  userName: any;
  userImg: any;
  email = "";

  ngOnInit() {
    authState(this.auth).subscribe(async (data) => {
      if (data) {
        this.userName = data;
        this.userImg = data.photoURL;
        this.checkUser = true;
        console.log(data);
        let hasProfile = await this.checkFirstLogin();

        if (!hasProfile) {
          setDoc(doc(this.firestore, 'users/' + data.uid), {
            displayName: data.displayName,
            id: data.uid,
            photo: data.photoURL,
            email: data.email,
          })
        }
      } else {
        this.userName = null;
        this.checkUser = false;
        console.log("None")
      }
    })
  }


  public async login() {
    let provider = new GoogleAuthProvider();
    await signInWithPopup(this.auth, provider);
  }

  public async logout() {
    await signOut(this.auth);
    console.log("Logged out");
  }

  public async checkFirstLogin() {
    if (!this._user) {
      return false;
    }
    else {
      let userProfile = await getDoc(doc(this.firestore, 'users/' + this.userName.uid));
      console.log(userProfile);
      return userProfile.exists();
    }
  }

  async createUser() {
    setDoc(doc(this.firestore, 'users/' + this._user?.uid), {
      uid: this._user?.uid,
      displayName: this._user?.displayName,
      email: this._user?.email,
      avatar: this._user?.photoURL
    })
  }
}
