import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { SharedModule } from './shared/navbar/shared.module';

@NgModule({
  declarations: [AppComponent, ],
  imports: [BrowserModule, AppRoutingModule, RouterModule,SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
