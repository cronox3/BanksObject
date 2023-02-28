import { Injectable } from '@angular/core';
import { AlertController, ToastController, ModalController, LoadingController } from '@ionic/angular';
import { ConfigService } from '../services/config-service';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  loading: any;
  public dataBase64: any;

  constructor(
    public toastController: ToastController,
    public modalController: ModalController,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public configService: ConfigService) {

  }

  async alertMsg(titulo: string, subtitle: string, message: string, mode: any) {
    const alert = await this.alertController.create({
      header: titulo,
      subHeader: subtitle,
      message,
      mode,
      buttons: ['OK']
    });
    await alert.present();
  }

  async viewModal(page: any, params: any, mode: any) {
    const modal = await this.modalController.create({
      component: page,
      componentProps: {
        params
      },
      mode,
      backdropDismiss: false,
    });
    await modal.present();
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

  async presentLoading() {
    this.loading = true;
    return await this.loadingController.create({
      duration: this.configService.getConfig().paramConfig.DEFAULT_TIMEOUT * 1000,
      message: this.configService.getConfig().paramConfig.messageSpiner,
    }).then(a => {
      a.present().then(() => {
        if (!this.loading) {
          a.dismiss();
        }
      });
    });
  }

  async hideLoading() {
    this.loading = false;
    return await this.loadingController.dismiss();
  }
}
