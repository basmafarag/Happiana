import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule} from '@angular/forms';
 

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { TagsComponent } from './tags/tags.component';
import { OneTagComponent } from './tags/one-tag/one-tag.component';
import { TagListComponent } from './tags/tag-list/tag-list.component';
import { ToastrModule } from 'ngx-toastr';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
//import {RouterModule,Routes} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    TagsComponent,
    OneTagComponent,
    TagListComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
