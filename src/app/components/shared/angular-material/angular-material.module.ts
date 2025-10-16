import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatToolbarModule
  ],
  exports:[
    MatSliderModule
  ]
})
export class AngularMaterialModule { }
