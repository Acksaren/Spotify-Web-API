import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { MusicDataService } from '../music-data.service';



@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.css']
})
export class NewReleasesComponent implements OnInit {
  constructor(private route: ActivatedRoute, private dataService: MusicDataService) { }

  releases: any;
  artist: any;
  paramSubscription: Subscription = new Subscription;

  ngOnInit(): void {
    this.paramSubscription = this.route.params.subscribe((params: Params) => this.dataService.getNewReleases().subscribe(data => this.releases = data.albums.items));
   // this.releases = this.route.params.subscribe(params)
   //this.dataService.getNewReleases().subscribe((data) => {this.releases = data});
   
    // this.dataService.getNewReleases().subscribe(data => this.releases = data.albums.items);
  
  }
  ngOnDestroy(): void {
    // If we have a subscription, tear it down when the component is destroyed
    if (this.paramSubscription) {
      this.paramSubscription.unsubscribe();
    }
  }

}
