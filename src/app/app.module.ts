import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BannersComponent } from './banners/banners.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { BannerService } from './banner.service';
import { EditBannerComponent } from './edit-banner/edit-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    BannersComponent,
    EditBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BannerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
