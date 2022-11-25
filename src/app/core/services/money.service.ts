import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoneyService {

  public money:number = 0;


  constructor() { }


  getMoney:BehaviorSubject<number> = new BehaviorSubject(this.money)

  public money$ = this.getMoney.asObservable();


  public earnMoney(amountEarned:number){
    this.money += amountEarned
    this.getMoney.next(this.money)
    // console.log("Ganando dinero: " + this.money.toString())
  }

  public payMoney(amountPayed:number){
    this.money -= amountPayed
    this.getMoney.next(this.money)
  }

}
