import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatingPageComponent } from './components/rating-page/rating-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', redirectTo: 'names/rating-page',pathMatch:'full'},
  {path:'names/rating-page',component: RatingPageComponent},
  {path:'**',component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
