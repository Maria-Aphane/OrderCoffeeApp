import { OrderPage } from './../order/order';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
username:string;
  constructor(public navCtrl: NavController,public alertCtrl: AlertController) { }

  showPrompt() {
    const prompt = this.alertCtrl.create({
      
      message: "Enter your name to order coffee",

      inputs: [
        {
          name: 'name',
          type:'text',
          placeholder: 'Enter you name '
        },
      ],
      buttons: [
        {
          text: 'GO',
          handler: data => {
            this. getData(data.name)
        }
      }

      ],  
      cssClass: 'alertCustomCss'
    });
  
    prompt.present();
  }

  getData(name):void{
       this.username=name;
       this.navCtrl.push(OrderPage,{
        data:this.username
      });
  }
}
