import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'; 
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  album: any;
  paramSubscription: Subscription = new Subscription; 
  constructor(private snackBar: MatSnackBar, private route: ActivatedRoute, private dataService: MusicDataService) { }

  ngOnInit(): void {
    this.paramSubscription = this.route.params.subscribe(
      (params: Params) =>{
        this.dataService.getAlbumById(params['id']).subscribe(data =>
            this.album = data
          );
      }
    );
    
  }
  addToFavourites(trackID : any){
    if(this.dataService.addToFavourites(trackID)){
      this.snackBar.open("Adding to Favourites...", "Done", { duration: 1500 });
    }
  }
  ngOnDestroy(): void {
    // If we have a subscription, tear it down when the component is destroyed
    if (this.paramSubscription) {
      this.paramSubscription.unsubscribe();
    }
  }
}
