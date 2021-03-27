import { Component, OnInit, Inject } from '@angular/core';
import { DiscussionService } from '../discussion.service';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  discussions = [];
  selectedDiscussion : DiscussionService
  
  InsertedDiscussionData : any = {}

  discussionDataForm : FormGroup;
  submitted = false;
  success = false;
  isHidden = true;


  constructor(private discussionService : DiscussionService,  @Inject(DOCUMENT) private _document: Document, private formBuilder: FormBuilder) {

    this.discussionDataForm = this.formBuilder.group({
      name: ['', Validators.required],
      email : ['', Validators.required],
      password : ['', Validators.required]
    })

   }

  ngOnInit(): void {

    this.discussionService.getDiscussions()
      .subscribe(
        res => this.discussions=res,
        err => console.log(err)
      )
  }
  isValid(){
    if(this.discussionDataForm.invalid){
      return false;
    }else {
      return true;
    }
  }
  onSubmit(){
    this.submitted = true;
    if(this.discussionDataForm.invalid){
      return;
    }
    this.success=true;
  }


  postDiscussion(){
    this.discussionService.postDiscussions(this.InsertedDiscussionData)
    .subscribe(
      res=>{
        this.discussions.push(res);
        this.selectedDiscussion=res;
      },
      err => console.log(err)
    )
  }

  refreshPage() {
    this._document.defaultView.location.reload();
  }


}
