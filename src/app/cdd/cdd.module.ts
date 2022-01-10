import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CddRoutingModule } from './cdd-routing.module';
import { ClassesComponent } from './classes/classes.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    ClassesComponent
  ],
  imports: [
    CommonModule,
    CddRoutingModule,
    MatTableModule
  ]
})
export class CddModule { }
