import { Component, OnInit, Input} from '@angular/core';
//interfaces
import { Tweet } from '../../interfaces/tweet.interface';
@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  @Input() data: Tweet;
  @Input() profileImage: string; 
  @Input() name: string;
  constructor() { }

  ngOnInit() {
  }

}
