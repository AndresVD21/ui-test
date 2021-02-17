import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewFeatureComponent } from './new-feature.component';
import { NewFeatureRoutingModule } from './new-feature.routing';



@NgModule({
  declarations: [NewFeatureComponent],
  imports: [
    CommonModule,
    NewFeatureRoutingModule
  ]
})
export class NewFeatureModule { }
