import { Component, OnInit } from "@angular/core";
import { ProductsService } from "./../service/products.service";
import { take } from "rxjs/operators";
import { Product } from "../../../../model/interface.model";

@Component({
  selector: "app-display-products",
  templateUrl: "./display-products.component.html",
  styleUrls: ["./display-products.component.css"],
})
export class DisplayProductsComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  products: Product[] = [];

  ngOnInit() {
    this.productsService
      .get()
      .pipe(take(1))
      .subscribe((products) => (this.products = products));
  }
}
