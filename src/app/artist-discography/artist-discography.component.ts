import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { MusicDataService } from '../music-data.service';


@Component({
  selector: 'app-artist-discography',
  templateUrl: './artist-discography.component.html',
  styleUrls: ['./artist-discography.component.css']
})
export class ArtistDiscographyComponent implements OnInit {
  albums: any;
  artist: any;
  paramSubscription: Subscription = new Subscription; 

  constructor( private route: ActivatedRoute, private dataService: MusicDataService) { 
    
  }

  ngOnInit(): void {
    this.paramSubscription = this.route.params.subscribe(
      (params: Params) =>{
        this.dataService.getArtistById(params['id']).subscribe(data =>
            this.artist = data
          );
          this.dataService.getAlbumsByArtistId(params['id']).subscribe(data =>
            this.albums = data.items.filter((curValue:any, index:any, self:any) => self.findIndex((t:any) => t.name.toUpperCase() === curValue.name.toUpperCase()) === index)
          );
      }
    );
     
  }
  ngOnDestroy(): void {
    // If we have a subscription, tear it down when the component is destroyed
    if (this.paramSubscription) {
      this.paramSubscription.unsubscribe();
    }
  }
}
