import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { DataService } from 'src/services/data.services';
import { UtilService } from 'src/utils/Util';

@Component({
  selector: 'app-modalsmg',
  templateUrl: './modalsmg.page.html',
  styleUrls: ['./modalsmg.page.scss'],
})
export class ModalsmgPage implements OnInit {
  public componentText: any;

  constructor(public dataService: DataService,
    public navParams: NavParams,
    public utilService: UtilService
  ) {
  }

  ngOnInit() {
    this.dataService.msg = this.navParams.get('msg');
    this.dataService.title = this.navParams.get('title');
  }

}
