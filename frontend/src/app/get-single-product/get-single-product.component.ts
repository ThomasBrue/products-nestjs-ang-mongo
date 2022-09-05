import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Product } from "../../../../model/interface.model";
import { ProductsService } from "../service/products.service";
import { take } from "rxjs/operators";

@Component({
  selector: "app-get-single-product",
  templateUrl: "./get-single-product.component.html",
  styleUrls: ["./get-single-product.component.css"],
})
export class GetSingleProductComponent implements OnInit {
  getProductForm: FormGroup;
  product: Product = null;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.getProductForm = this.formBuilder.group({
      id: [null, [Validators.required]],
    });
  }

  onSubmit() {
    if (this.getProductForm.invalid) {
      return;
    }
    console.log(this.getProductForm.value);

    this.productsService
      .getSingleProduct(this.getProductForm.value)
      .subscribe((product) => (this.product = product));
  }
}
