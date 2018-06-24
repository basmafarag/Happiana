import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import {OneTag } from './one-tag.model';
//import {OneTag} from './one-tag';
@Injectable()
export class OneTagService {
  tagList: AngularFireList<any>;
  selectedTag: OneTag=new OneTag();

  constructor(private firebase : AngularFireDatabase) { }

  getData(){
    this.tagList = this.firebase.list('Tags');
    return this.tagList;
  }


  insertTag(OneTag : OneTag){
    this.tagList.push({
      Subject: OneTag.Subject,
      checked: false
      //Descripition: OneTag.Descripition
    });
  }
   updateTag( OneTag : OneTag){
    this.tagList.update(OneTag.$key,
      {
        Subject: OneTag.Subject,
        //checked: OneTag.Checked
      });
  }  

  deleteTag($key : string){
    this.tagList.remove($key);
  }

  checkOrUnCheckTitle($key: string, flag: boolean) {
    this.tagList.update($key, { isChecked: flag });
  }
}










