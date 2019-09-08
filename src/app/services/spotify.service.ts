import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
    console.log("Spotify Service On");
  }

  getNewReleases(){
    const headers = {
      'Authorization' : 'Bearer BQAo1eTr7_nTKHHMLazYdifFfNC5pj80ZXkoyN6OGpoNvwuiOg7nTwQgoNgy_5wP6EOgIhMbstqywgnnxb8'  
    }

   return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers});
  }
}
