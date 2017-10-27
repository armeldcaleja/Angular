import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { HttpClientModule } from '@angular/common/http';

import {
  CategoryListComponent,
  ProductDetailsListComponent,
  ProductService,
  ProductListComponent,
  ProductDetailsComponent,
  ConvertCurrencyPipe
} from './product/index';

import { NavComponent } from './nav/nav.component';

import {
  AdminCategoriesComponent
} from './admin/index';

@NgModule({
  declarations: [
    AppComponent,
    CategoryListComponent,
    ProductListComponent,
    ProductDetailsListComponent,
    NavComponent,
    ProductDetailsComponent,
    ConvertCurrencyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
