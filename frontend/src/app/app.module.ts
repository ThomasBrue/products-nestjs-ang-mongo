import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DisplayProductsComponent } from "./display-products/display-products.component";
import { HttpClientModule } from "@angular/common/http";
import { AddSingleProductComponent } from "./add-single-product/add-single-product.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { GetSingleProductComponent } from './get-single-product/get-single-product.component';
import { EditSingleProductComponent } from './edit-single-product/edit-single-product.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayProductsComponent,
    AddSingleProductComponent,
    GetSingleProductComponent,
    EditSingleProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
