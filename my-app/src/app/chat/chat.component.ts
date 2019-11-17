import { Component, OnInit, Input } from '@angular/core';
import { ChatService} from '../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  messages:any[];
  newMessage = {status:"",
                sender:"us",
                date: new Date(),
                class:'right'
                };
  @Input() inputMessage:string;


  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.messages = this.chatService.messages;
  }

  // var element = document.getElementByID("moveDown");
  // element.scrollTop = element.scrollHeight;

  onEnterPressed() {

    let txt = this.inputMessage;

    this.newMessage.status = txt;
    this.newMessage.date = new Date();


    this.chatService.messages.push(this.newMessage);
    this.inputMessage="";
  }
}
