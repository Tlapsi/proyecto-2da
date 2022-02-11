import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaveschoologyComponent } from './navschoology/naveschoology/naveschoology.component';
import {MailModule} from "./navschoology/mail/mail.module";
import {NotificationModule} from "./navschoology/notification/notification.module";
import {MenuschoologyModule} from "./menuschoology/menuschoology.module";
import {NgxQRCodeModule} from '@techiediaries/ngx-qrcode';
import { QrComponent } from './qr/qr.component';
import { ImprimirComponent } from './imprimir/imprimir.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
     QrComponent,
     ImprimirComponent,
     NaveschoologyComponent,
     NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MailModule,
    NotificationModule,
    MenuschoologyModule,
    NgxQRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
