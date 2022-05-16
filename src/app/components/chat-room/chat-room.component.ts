import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {

  constructor(private chatSv: ChatService) { }

  message = "";

  ngOnInit() {
    this.chatSv.getAllMessages();
  }

  public sendMessages() {
    this.chatSv.sendMessages(this.message);
  }
}
