import { Component, OnInit } from '@angular/core';
//services
import { DataService } from './services/data.service';
//interfaces
import { Profile } from './interfaces/profile.interface';
import { Top5} from './interfaces/top5.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private title:string = 'cycurity-client';
  public profileData: Profile;
  private top5Data: Top5;
  constructor(private dataService: DataService){
  }

  ngOnInit() {
    this.dataService.getProfile().then((data:Profile) => { this.profileData = data});
    this.dataService.getTop5().then((data:Top5) => {this.top5Data = data}); 
  }
}

