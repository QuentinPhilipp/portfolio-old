import { Component, OnInit,Input } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-msg-chat',
  templateUrl: './msg-chat.component.html',
  styleUrls: ['./msg-chat.component.scss']
})
export class MsgChatComponent implements OnInit {

  @Input() messageTxt:string;
  @Input() messageHour:Date;
  @Input() messageAuthor: string;
  @Input() messageClass : string;

  constructor(private chatService:ChatService) { }

  ngOnInit() {
  }

}
