import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  
  name:string;
  coffeeNumber = 1;
  coffePrice = 50;
  totPrice = 0;
  whippedCream = false;
  chocolate= false;
  OptResults1:string ='NO';
  OptResults2:string="NO";

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
      this.name=navParams.get('data');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

  orderNumberCal( value:number):void{

      this.coffeeNumber+=value;
  }

  ClearOrder (value:number):void{

    this.coffeeNumber = 0;
    this.totPrice=0;
    
 
  }

  
  CalcTotalPrice():Number{

    if (this.whippedCream)
    { 
         this.totPrice = (this.coffePrice + 40 ) * this.coffeeNumber;
         this.OptResults1="YES";
    }
    if (this.chocolate)
    {
      this.totPrice = (this.coffePrice + 30 ) * this.coffeeNumber;
      this.OptResults2="YES";
    }
    return this.totPrice;
 
  }
  showOrderAlert() {
    const alert = this.alertCtrl.create({

      title: 'Coffee order for ' +  this.name,
      message:'Number of cups : ' + this.coffeeNumber  +  ' <br /> W.cream added  ? ' +  this.OptResults1 +   ' <br /> Chocolate added ? ' +  this.OptResults2 +  ' <br />Total price :  R '+ this.totPrice + '<br />THANK YOU',
     
      buttons: [
        {
          text: 'CANCEL',
          handler: () => {
            this.navCtrl.push(HomePage);
  
          }
        },
        {
          text: 'OK',
          handler: () => {
          
          }
        }
      ],
      cssClass: 'alertCustomCss'

    });
    alert.present();
  }
  SendOrder():void{

 this.CalcTotalPrice();
 this.showOrderAlert();

  }



 

}
