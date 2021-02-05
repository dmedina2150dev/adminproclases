import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// modulos
import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './pages/main.module';
import { AuthModule } from './auth/auth.module';

import { AppComponent } from './app.component';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';


@NgModule({
  declarations: [
    AppComponent,

    NopagefoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
