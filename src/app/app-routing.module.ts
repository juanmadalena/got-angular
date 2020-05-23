import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CharactersComponent } from './pages/characters/pages/characters/characters.component';
import { CharactersDetailsComponent } from './pages/characters/pages/characters-details/characters-details.component';


const routes: Routes = [
  {
    path:"home", component: HomeComponent
  },
  {
    path:"characters", component:CharactersComponent
  },
  {
    path:"characters/:name", component:CharactersDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
