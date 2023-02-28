import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Platform } from '@ionic/angular';


@Injectable()
export class HttpsService {

  constructor(
    private platform: Platform,
    private httpNat: HTTP
  ) {
  }

  get(endpoint: string, url: string, requestData?: any) {
    return new Promise((resolve, reject) => {
      if (this.platform.is('ios') || this.platform.is('android')) {
        this.httpNat.setDataSerializer('urlencoded');
        this.httpNat.setServerTrustMode('nocheck');
        this.httpNat.get(endpoint + url, requestData, null)
          .then(data => {
            resolve(JSON.parse(data.data));
          })
          .catch(error => {
            console.log(error);
            if (error.response) {
              if (error.response.status === 504) {
                reject('Timeout');
              } else {
                if (error.response.status === 401) {
                  reject('Unathorized');
                } else {
                  reject(error);
                }
              }
            } else {
              if (error.message === 'Network Error' || error.code === 0) {
                reject('NoNetwork');
              } else {
                reject(error);
              }
            }
          });
      }
    });
  }
}
