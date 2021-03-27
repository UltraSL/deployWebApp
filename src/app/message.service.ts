import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {


  private _messagesGetUrl = "https://eschoolserver.herokuapp.com/api/messages";
  private _messagesPostUrl = "https://eschoolserver.herokuapp.com/api/message";
  private deleteurl  = 'https://eschoolserver.herokuapp.com/api/deletemessage/';
  constructor(private http : HttpClient) {  }

  getMessages(){
    return this.http.get<any>(this._messagesGetUrl);
  }

  postMessages(message){
    return this.http.post<any>(this._messagesPostUrl, message);
  }

  deletemessage(_id :any){
    return this.http.delete<any>(this.deleteurl + _id )
  }
}
