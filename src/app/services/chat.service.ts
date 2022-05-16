import { Injectable } from '@angular/core';
import { addDoc, setDoc, doc, collection, Firestore, collectionData, collectionChanges, query, where } from '@angular/fire/firestore';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut, authState } from '@angular/fire/auth'
import { getDoc, updateDoc } from '@firebase/firestore';
import { async } from '@firebase/util';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(public firestore: Firestore) { }

  chats: Array<any> = [];
  

  collectionMess = collection(this.firestore, 'messages');

  public sendMessages(message:string) {
    console.log(message);
    let now = Date.now();
    addDoc(collection(this.firestore, 'messages'), {
      mess: message,
      timestamp: now 
    })
  }

  public getAllMessages() {
    collectionData(collection(this.firestore, 'messages')).subscribe((value) => {
      this.chats = value;
    })
  }
}
