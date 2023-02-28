import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  [x: string]: any;
  public msg: string | undefined;
  public title: string | undefined;
  private messageSource = new BehaviorSubject(this['messaged']);

  constructor(private router: Router) { }


  sendMessage(message: string) {
    this.messageSource.next(message);
  }

  home() {
    this.router.navigate(['/start']);
  }
}
