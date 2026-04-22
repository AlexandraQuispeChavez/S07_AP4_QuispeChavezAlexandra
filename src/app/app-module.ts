import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { SeriesComponent } from './components/series/series';
import { BenefitsComponent } from './components/benefits/benefits';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    SeriesComponent,
    BenefitsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }