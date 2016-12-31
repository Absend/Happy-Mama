import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LocationStrategy, Location, HashLocationStrategy } from '@angular/common';

// App components
import { AppComponent } from './components/app.component';
import { ChildmindersComponent } from './components/childminders/childminders.component';
import { ForumComponent } from './components/forum/forum.component';
import { SigninComponent } from './components/sign-in/sign-in.component';
import { SignupComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { FunComponent } from './components/fun/fun.component';
import { InfoComponent } from './components/info/info.component';
import { ListingsComponent } from './components/listings/listings.component';

import { ForumPost } from './components/forum/forum-elements/forum.post';
import { ForumForm } from './components/forum/forum-elements/forum-post.form';
// import { Ad, Parent, Babysitter, Category, ItemListing } from './models';
// import {ListingsComponent, Item, AddFormComponent } from './components';
// import { Item } from './components/utils/item.component';
import { AddFormComponent } from './components/add-form/add-form.component';
// import {} from './components/u'

// App Services
import { CreatorService } from './services/creator.service';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildmindersComponent,
    ForumComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    FunComponent,
    InfoComponent,
    ListingsComponent,
    ForumPost,
    ForumForm,
    AddFormComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig)
  ],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    CreatorService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}