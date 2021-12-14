import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor( private route: ActivatedRoute, private dataService: MusicDataService) { }

  results : any;
  searchQuery: string  = "";
  paramSubscription: Subscription = new Subscription;

  ngOnInit(): void {
    this.paramSubscription = this.route.params.subscribe(
      (params: Params) =>{
        this.searchQuery = params['q'] 
        this.dataService.searchArtists(this.searchQuery).subscribe(data =>
          this.results = data.artists.items.filter((items: { images: any[]; }) => items.images.length > 0)
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
