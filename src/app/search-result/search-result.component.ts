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

  results : any;
  searchQuery: string  = "";
  paramSubscription: Subscription = new Subscription;

  constructor(route: ActivatedRoute, dataService: MusicDataService) {
    this.paramSubscription = route.queryParamMap.subscribe(query => {
      this.searchQuery = String(query.get('q'));

      dataService.searchArtists(this.searchQuery).subscribe({
        next: data => this.results = data.artists.items.filter((artist: any) => artist.images.length)
      });
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    // If we have a subscription, tear it down when the component is destroyed
    if (this.paramSubscription) {
      this.paramSubscription.unsubscribe();
    }
  }

}
