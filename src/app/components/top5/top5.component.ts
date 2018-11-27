import { Component, OnInit, Input } from '@angular/core';
//interfaces
import { Tweet } from '../../interfaces/tweet.interface';

@Component({
  selector: 'app-top5',
  templateUrl: './top5.component.html',
  styleUrls: ['./top5.component.css']
})
export class Top5Component implements OnInit {
  @Input() data: Tweet[]; 
  @Input() profileImage: string; 
  @Input() name: string; 
  constructor() { }

  ngOnInit() {
  }

}
