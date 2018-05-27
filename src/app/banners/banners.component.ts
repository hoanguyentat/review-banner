import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Banner } from "../banner";
import { BANNERS } from '../banners-list';
import { BannerService } from '../banner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersComponent implements OnInit {

  banners: any = [];
  limit = 20;
  pager:number = 0;
  number_of_pages = "";
  number_of_banners = 0
  constructor(private httpClient: HttpClient, private bannerSerivce: BannerService, private router: Router) { }

  async ngOnInit() {
    this.number_of_banners =  await this.bannerSerivce.getNumberOfBanners();
    this.number_of_pages = (this.number_of_banners / this.limit).toString().split('.')[0];

    this.bannerSerivce.getBanners(this.limit, this.pager * this.limit).subscribe(
      data => {
        this.banners = data;
      }
    )
  }


  nextPage(){
    this.pager = +this.pager + 1;
    console.log(typeof(this.pager))
    this.bannerSerivce.getBanners(this.limit, this.pager * this.limit).subscribe(
      data => {
        this.banners = data;
      },
      error => {
        this.banners = []
      }
    )
  }

  prePage(){
    this.pager -= 1;
    this.bannerSerivce.getBanners(this.limit, this.pager * this.limit).subscribe(
      data => {
        this.banners = data;
      },
      error => {
        this.banners = []
      }
    )
  }

  editBanner(id:number) {
    this.router.navigate(['edit',{'id': id}]);
  }

  pagerChange() {
    console.log(this.pager)
    this.bannerSerivce.getBanners(this.limit, this.limit * this.pager).subscribe(
      data => {
        this.banners = data;
      }
    )
  }

}
