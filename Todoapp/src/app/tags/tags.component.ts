import { Component, OnInit } from '@angular/core';

import {OneTagService} from './shared/one-tag.service';
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
  providers :[OneTagService]
})
export class TagsComponent implements OnInit {

  constructor(private  OneTagService : OneTagService) { }

  ngOnInit() {
  }

}
