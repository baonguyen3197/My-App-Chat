import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';

const routes: Routes = [
  {path: 'ChatRoomComponent', component: ChatRoomComponent},
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'invitations', loadChildren: () => import('./pages/invitations/invitations.module').then(m => m.InvitationsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
