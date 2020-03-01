import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { PageHeaderComponent } from '@src/app/core/page-header/page-header.component';
import { PageFooterComponent } from '@src/app/core/page-footer/page-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageHeaderComponent,
    PageFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
