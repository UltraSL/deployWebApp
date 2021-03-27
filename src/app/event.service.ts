import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _eventsUrl = "https://eschoolserver.herokuapp.com/api/teachers";
  private _specialEventsUrl = "https://eschoolserver.herokuapp.com/api/special";
  private _eventPostUrl = "https://eschoolserver.herokuapp.com/api/teacher";

  constructor(private http : HttpClient) { }

  getEvents(){
    return this.http.get<any>(this._eventsUrl)
  }

  getSpecialEvents(){
    return this.http.get<any>(this._specialEventsUrl)
  }

  postEvents(teacher){
    return this.http.post<any>(this._eventPostUrl,teacher)
  }


}
