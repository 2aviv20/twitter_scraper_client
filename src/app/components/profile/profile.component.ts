import { Component, OnInit, Input } from '@angular/core';
//interfaces
import { Profile } from '../../interfaces/profile.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() data: Profile;
  constructor() {
    
  }
  
  ngOnInit() {

  }

}
