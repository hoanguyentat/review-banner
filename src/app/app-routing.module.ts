import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { BannersComponent } from './banners/banners.component';
import { EditBannerComponent } from './edit-banner/edit-banner.component';

const routes: Routes = [
  {path: 'banners', component: BannersComponent},
  {path: 'edit/:id', component: EditBannerComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
