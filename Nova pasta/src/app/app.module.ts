import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NovoComponenteComponent } from './paginas/novo-componente/novo-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    NovoComponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
