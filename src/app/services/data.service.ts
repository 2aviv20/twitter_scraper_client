import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//interfaces
import { Top5 } from '../interfaces/top5.interface';
import { Profile } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private serverUrl: string;
  constructor(private http: HttpClient) {
    this.serverUrl = "https://twitter-scraper-server.herokuapp.com";
  }
  
  getProfile(): Promise<Profile> {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.serverUrl}/getUserProfile`).subscribe((res: Profile) =>{
        resolve(res);
      },
      error => reject(error));
    });
  }

  getTop5(): Promise<Top5>{
    return new Promise((resolve, reject) => {
      this.http.get(`${this.serverUrl}/getTop5`).subscribe((res: Top5) =>{
        resolve(res);
      },
      error => reject(error));
    });
  }

}
