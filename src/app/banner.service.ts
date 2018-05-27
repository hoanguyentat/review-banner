import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpErrorResponse } from "@angular/common/http";

@Injectable()
export class BannerService {
  host = "http://192.168.23.203:11000/"
  constructor(private httpClient: HttpClient) { }

  getBanners(limit: number, offset: number) {
    let url = this.host + "api/banners/all/" + limit + "/" + offset;
    return this.httpClient.get(url);
  }

  async getNumberOfBanners(): Promise<number> {
    let url = this.host + "/api/banners/size";
    const response = await this.httpClient.get(url).toPromise()
    return <number>response
  }

  getBannerDetail(id) {
    let url = this.host + 'api/banners/banner/' + id;
    return this.httpClient.get(url);
  }

  updateBanner(banner){
    let url = this.host  + "api/banners/do/update";
    console.log(banner)
    return this.httpClient.post(url, banner);
  }
}
