import { Injectable } from '@angular/core';
import { ConfigService } from './config-service';
import { HttpsService } from './https/https.service';

@Injectable({
  providedIn: 'root'
})
export class BanksService {

  readonly URL_API = this.config.getConfig().bussinesServer.url
  constructor(
    private http: HttpsService,
    private config: ConfigService) { }

  getBanks() {
    return this.http.get(this.URL_API , "catom/api/challenge/banks")
  }

}
