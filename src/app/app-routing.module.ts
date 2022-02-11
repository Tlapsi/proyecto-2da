import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrComponent } from './qr/qr.component';
import { ImprimirComponent } from './imprimir/imprimir.component';

const routes: Routes = [
  {
    path: 'rutaQR', component: QrComponent
  },
  {
    path: 'rutaImprimir', component: ImprimirComponent
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
