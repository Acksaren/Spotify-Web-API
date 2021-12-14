import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AlbumComponent } from './album/album.component';
import { ArtistDiscographyComponent } from './artist-discography/artist-discography.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { NewReleasesComponent } from './new-releases/new-releases.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { GuardAuthService } from './guard-auth.service';


const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'new-releases', component: NewReleasesComponent },
  { path: 'artist-discography/:id', component: ArtistDiscographyComponent },
  { path: 'album/:id', component: AlbumComponent },
  { path: 'about', component: AboutComponent},
  { path: 'search', component: SearchResultComponent},
  { path: 'favouurites', component: FavouriteComponent},
  { path: '', component: NewReleasesComponent },
  { path: '**', component: NotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
