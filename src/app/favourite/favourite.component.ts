import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  constructor( private route: ActivatedRoute, private dataService: MusicDataService) {
  }

  favourites : Array<any> = [];
  

  ngOnInit(): void {
    this.dataService.getFavourites().subscribe(data => this.favourites = data.tracks);
  }

  removeFromFavourites(id: any){
    this.dataService.removeFromFavourites(id).subscribe(data => this.favourites = data.tracks);
  }

}
