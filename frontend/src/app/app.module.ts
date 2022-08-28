import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DisplayProductsComponent } from "./display-products/display-products.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, DisplayProductsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
