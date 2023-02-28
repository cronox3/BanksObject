import { Component } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { BanksService } from 'src/services/banks.service';
import { ModalsmgPage } from '../modalsmg/modalsmg.page';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private bancksService: BanksService,
    private modalController: ModalController,
    private platform: Platform,
    private storage: Storage
  ) { }
  listBanks: any[] = [];
  ngOnInit() {
    this.storage.create();
    this.storage.get('listBanks').then((listBanks) => {
      if (listBanks == null) {
        this.getTypeDocuments()
      } else {
        console.log("Recupera la lista");
        this.listBanks = listBanks;
      }
    }, (err) => {
      console.log('err', err);
    })

  }

  getTypeDocuments() {
    this.platform.ready().then(() => {
      this.bancksService.getBanks().then((rest: any) => {
        console.log("Constlta el servicio");
        this.listBanks = rest;
        this.storage.set('listBanks', rest);
      }, error => {
        this.showModalMsg('Aviso', 'Se produjo un error al recuperar los tipos de bancos: ' + Object.values(error));
      });
    });

  }

  async showModalMsg(Title?: string, Msg?: string) {
    const popover = await this.modalController.create({
      component: ModalsmgPage,
      mode: 'ios',
      cssClass: 'modalMsg',
      componentProps: { title: Title, msg: Msg }
    });
    return await popover.present();
  }

}
