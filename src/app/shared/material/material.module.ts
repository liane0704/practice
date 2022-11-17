import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
// 放所有要import的material components，之後新增material只要修改這裡就好
const MaterialCompomnents = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCheckboxModule,
  MatCardModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialCompomnents,
  ]
  ,exports: [
    MaterialCompomnents,//所有material cmponents
    ],
})
export class MaterialModule { }
