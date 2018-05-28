import { Component, OnInit } from '@angular/core';
import { BannerService } from "../banner.service";
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-banner',
  templateUrl: './edit-banner.component.html',
  styleUrls: ['./edit-banner.component.css']
})
export class EditBannerComponent implements OnInit {
  bannerDetail: any;


  constructor(private bannerService: BannerService, private httpClient: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let bannerId = this.activatedRoute.snapshot.params["id"];
    this.bannerService.getBannerDetail(bannerId).subscribe(
      data => {
        // console.log(data)
        this.bannerDetail = data;
      },
      error => {
        console.log(error)
      }
    )
  }

  updateBanner(banner) {
    // let url = this.bannerService.host + "api/banners/do/update";
    console.log(banner);
    this.bannerService.updateBanner(banner).subscribe(
      data => {
        alert("Cap nhat banner thanh cong...")
        this.router.navigate(['banners']);
        console.log(data);
      },
      error => {
        alert("cap nhat khong thanh cong")
        console.log(error);
      }
    )
  }

}
