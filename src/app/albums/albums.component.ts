import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumServiceService } from '../services/album-service.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: [] = [];

  constructor( private getalbums: AlbumServiceService) { }

  ngOnInit(): void {
    this.getalbums.getAlbums().subscribe( res =>{
      console.log(res);
      this.albums = res;
    });
  }


}
