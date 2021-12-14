import { Component, OnInit } from '@angular/core';
import { MusicDataService } from '../music-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
})
export class FavouriteComponent implements OnInit {
  favourites!: Array<any>;

  constructor(
    private dataService: MusicDataService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.dataService.getFavourites().subscribe((data) => {
      this.favourites = data.tracks;
      console.log(data);
    });
  }

  removeFromFavourites(id: any) {
    this.dataService.removeFromFavourites(id).subscribe((data) => {
      this.favourites = data.tracks;
    });
    this.snackBar.open('Removing from Favourites...', 'Done', {
      duration: 15000,
    });
  }
}
