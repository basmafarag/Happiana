import { Component, OnInit } from '@angular/core';
import { OneTagService } from '../shared/one-tag.service';
import {OneTag} from '../shared/one-tag.model';
import { element } from 'protractor';
import { NgForm} from '@angular/forms'
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {
  tagList : OneTag[];
  constructor(private  OneTagService : OneTagService, private toastr: ToastrService) { }

  ngOnInit() {
    var x=this.OneTagService.getData();
    x.snapshotChanges().subscribe(item =>{
      this.tagList=[];
      item.forEach(element=>{
        var y=element.payload.toJSON();
        y["$key"] = element.key;
        this.tagList.push(y as OneTag);
      });
    });
  }
  onEdit(emp : OneTag){
    this.OneTagService.selectedTag = Object.assign({}, emp);
    console.log( this.OneTagService.selectedTag);
    
  }
  onDelete(key : string){
    console.log("hoba");

    if(confirm('Are you sure to delete this Task?')== true){
    this.OneTagService.deleteTag(key);
    this.toastr.warning("Deleted Successfully")
    }
  }
  alterCheck($key: string,isChecked) {
    this.OneTagService.checkOrUnCheckTitle($key,!isChecked);
  }
}
