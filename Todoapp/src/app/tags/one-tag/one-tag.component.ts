import { Component, OnInit } from '@angular/core';
import { OneTagService } from '../shared/one-tag.service';
import { NgForm} from '@angular/forms'
import { ToastrService} from 'ngx-toastr';
//import {RouterModule,Routes} from '@angular/router';

@Component({
  selector: 'app-one-tag',
  templateUrl: './one-tag.component.html',
  styleUrls: ['./one-tag.component.css']
})
export class OneTagComponent implements OnInit {

  constructor(private  OneTagService : OneTagService, private toastr : ToastrService) { }

  ngOnInit() {
    this.OneTagService.getData();
    this.resetForm();
  }

  onSubmit(tagForm : NgForm){
    console.log("hoba");
    if(tagForm.value.$key==null){
    this.OneTagService.insertTag(tagForm.value);
    this.toastr.success('Your Task is Added!');
    }
    else{
    console.log( tagForm.value);
    this.OneTagService.updateTag(tagForm.value);
    this.toastr.success('Your Task is Edited!');
        }
    this.resetForm(tagForm);

  }
  resetForm(tagForm? : NgForm){
    if(tagForm != null)
    tagForm.reset();
    this.OneTagService.selectedTag ={
      $key : null,
      Subject : '',
      Descripition : '',
      Checked:null
    }
  }

}
/*<div class="form-group">
      <Label>Descripition</Label>
      <input class="form-control" name="Descripition" #Descripition="ngModel" [(ngModel)]="OneTagService.Descripition" placeholder="insert a breif descripition">
    </div>*/