import { Component, OnInit } from '@angular/core';
import { ShareModuleModule } from '../share-module/share-module.module';
import { doc, getDoc, setDoc, collection, collectionData, collectionChanges, Firestore, where } from '@angular/fire/firestore';
import { User, Auth } from '@angular/fire/auth';
import { updateDoc } from 'firebase/firestore';

@Component({
  selector: 'app-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.scss']
})
export class InvitationsComponent implements OnInit {

  constructor(public sharedMd: ShareModuleModule, public firestore: Firestore) { }

  ngOnInit(): void {
  }

  email: string = "";
  _user: User | null = null;

  public async sendRequest() {
    let isExists = await this.findUser();
    if (isExists) {
      console.log(isExists);
      this.addRequest(this._user, isExists)
    }
    else {
      return;
    }
  }

  public findUser() {
    return new Promise((resolve, reject) => {
      collectionData(collection(this.firestore, 'users')).subscribe((res) => {
        for (let i = 0; i < res.length; i++) {
          if (res[i]['email'] == this.email) {
            resolve(res[i]);
            return;
          }
          else {
            resolve(false);
          }
        }
      })
    })
  }

  public async findUserId(userId: string) {
    let user = await getDoc(doc(this.firestore, 'users/' + userId));
    return user;
  }

  public request: any[] = [];
  getAllRequest(id: string) {
    collectionData(collection(this.firestore, 'users/' + id + '/request')).subscribe(async (res: any) => {
      res.map(async (value: any) => {
        let _user = (await this.findUserId(value.userSendId)).data();
        console.log({
          ..._user,
          ...value
        })
      })
    })
  }

  public async doSomethingWithRequest(check: boolean, friendId: string) {
    if (check) {
      await updateDoc(doc(this.firestore, 'users/' + this._user?.uid + '/request/' + friendId), {
        isFriend: true
      })

      await setDoc(doc(this.firestore, 'users/' + this._user?.uid + '/friends/' + friendId), {
        test: 'Friend'
      })
    }
    else {
      await setDoc(doc(this.firestore, 'users/' + this._user?.uid + '/request/' + friendId), {
        isFriend: false
      })
    }
  }

  public async addRequest(user: any, userFriend: any) {
    await setDoc(doc(this.firestore, 'users/' + userFriend.uid + '/request/' + user.uid), {
      userSendId: user.uid,
      activve: true,
      isFriend: false
    })
  }
}
