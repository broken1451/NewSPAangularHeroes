import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { HeroesService } from './services/heroes.service';

//  npm install bootstrap @5.3.2 --save -> se instala por por la consola y el --save indica que la aplicacion va a necesitar de esya libreria
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ComponentsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    HeroesService,
    provideHttpClient(withFetch()) // con esto se puede usar el fetch en vez de http
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
