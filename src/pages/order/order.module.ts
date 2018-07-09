import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderPage } from './order';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OrderPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderPage),
    FormsModule
  ],
})
export class OrderPageModule {}
