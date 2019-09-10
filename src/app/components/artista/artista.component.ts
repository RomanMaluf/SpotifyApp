import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {
  artista:any={} ; 
  topTracks:any[] = [];

  loadingArtist:boolean;

  constructor( private activatedRoute : ActivatedRoute,
               private spotify: SpotifyService) { 
    this.loadingArtist = true;
    this.activatedRoute.params.subscribe( params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    })
  }

  ngOnInit() {
  }

  getArtista(id: string){
    this.loadingArtist = true;

    this.spotify.getArtist(id)
          .subscribe( artista =>{
            console.log(artista);
            this.artista=artista;
            this.loadingArtist = false;
          })
  }

  getTopTracks(id: string){
    
    this.spotify.getTopTracks(id)
          .subscribe( topTracks=>{
            console.log(topTracks);
            this.topTracks = topTracks;
          })
  }

}
