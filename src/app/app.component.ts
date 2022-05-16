import { Component } from '@angular/core';
import { addDoc, setDoc, doc, collection, Firestore, collectionData, collectionChanges, query, where } from '@angular/fire/firestore';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut, authState } from '@angular/fire/auth'
import { getDoc } from '@firebase/firestore';
import { async } from '@firebase/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyAppChat';

  constructor(public firestore: Firestore, private auth: Auth){

  }

  
}
