import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
    console.log("Spotify Service On");
  }

  getQuery(query :string){
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQAJqVqTIz3FbbvODXkYfeP8WcPAls5jARAmlnW66I1EeQNaI1WJt6aF7CCcJv4uRzh0SR1cP4CEgdcBqow'  
    })
    return this.http.get(url,{headers});
  }

  getNewReleases(){
    
    return this.getQuery('browse/new-releases?limit=20')
                .pipe( map ( data => data['albums'].items ));
    //operador map para filtrar la informacion
    //map recibe la informacion en bruto y returna la infromacion flitrada             
  }

  getArtist(termino:string){
   return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
                .pipe( map ( data => data['artists'].items ));        
  }
}
