import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AppInputComponent } from './app-input/app-input.component';
import { FormComponent } from './form/form.component';
import { ButtonComponent } from './button/button.component';
import { LabelComponent } from './label/label.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagHomeComponent } from './pag-home/pag-home.component';
import { PagProdComponent } from './pag-prod/pag-prod.component';
import { PagPedidosComponent } from './pag-pedidos/pag-pedidos.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AppInputComponent,
    FormComponent,
    ButtonComponent,
    LabelComponent,
    PagHomeComponent,
    PagProdComponent,
    PagPedidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

