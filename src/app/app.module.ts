import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from'@angular/common/http';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { Top5Component } from './components/top5/top5.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    Top5Component,
    TweetComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
