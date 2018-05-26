import { Component, OnInit } from '@angular/core';
import { BannerService } from "../banner.service";
import { HttpClient } from '@angular/common/http';
import { Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-banner',
  templateUrl: './edit-banner.component.html',
  styleUrls: ['./edit-banner.component.css']
})
export class EditBannerComponent implements OnInit {

  bannerDetail: any;


  constructor(private bannerService: BannerService, private httpClient: HttpClient, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let bannerId = this.activatedRoute.snapshot.params["id"];
    this.bannerService.getBannerDetail(bannerId).subscribe(
      data => {
        this.bannerDetail = data;
        console.log(data)
      },
      error => {
        console.log(error)
      }
    )
  }

  updateBanner() {
    
  }

}
