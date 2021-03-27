import { Component, OnInit,Inject } from '@angular/core';
import { MessageService } from '../message.service';
import { DOCUMENT } from '@angular/common';
import { FormBuilder , FormGroup } from '@angular/forms';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  messages = [];
  selectedMessage : Event;
  result = false;
  InsertedMessageData : any = {}

  MessageDataForm : FormGroup;
  submitted = false;
  success = false;
  isShow = true;

  constructor( private _messageService : MessageService , @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
  }

  postMessage(){
    this._messageService.postMessages(this.InsertedMessageData)
    .subscribe(
      res => {
        this.messages.push(res)
        this.selectedMessage = res
      },
      err =>{
        console.log(err)
      }
    )

  }

  
  refreshPage() {
    this._document.defaultView.location.reload();
  }




}
