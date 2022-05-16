import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShareModuleModule } from 'src/app/pages/share-module/share-module.module';
import { ChatRoomComponent } from './components/chat-room/chat-room.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChatRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    ShareModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
