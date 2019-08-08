import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VerificarNumeroPage } from './verificar-numero.page';

const routes: Routes = [
  {
    path: '',
    component: VerificarNumeroPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VerificarNumeroPage]
})
export class VerificarNumeroPageModule {}
