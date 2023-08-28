import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './datepicker.component';
import { IonicModule } from '@ionic/angular';
import { CardModule } from 'angular-ionic-base/card';


@NgModule({
  declarations: [
    DatepickerComponent
  ],
  imports: [
    CardModule,
    CommonModule,
    IonicModule
  ],
  exports: [
    DatepickerComponent
  ]
})
export class DatepickerModule { }
