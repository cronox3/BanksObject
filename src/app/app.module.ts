import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ModalsmgPage } from './modalsmg/modalsmg.page';
import { HttpsService } from 'src/services/https/https.service';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClientModule } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent, ModalsmgPage],
  entryComponents: [ ModalsmgPage ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, HttpsService, HTTP, Storage],
  bootstrap: [AppComponent],
})
export class AppModule {}
