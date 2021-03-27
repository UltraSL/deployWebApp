import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class DiscussionService {

  private _discussionsGetUrl = "https://eschoolserver.herokuapp.com/api/discussions";
  private _discussionsPostUrl = "https://eschoolserver.herokuapp.com/api/discussion";

  constructor(private http : HttpClient) { }

  getDiscussions(){
    return this.http.get<any>(this._discussionsGetUrl)
  }

  postDiscussions(discussion){
    return this.http.post<any>(this._discussionsPostUrl, discussion)
  }


}
