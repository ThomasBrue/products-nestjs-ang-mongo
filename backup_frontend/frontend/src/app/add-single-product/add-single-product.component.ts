import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Product } from "../../../../model/interface.model";
import { ProductsService } from "../service/products.service";

@Component({
  selector: "app-add-single-product",
  templateUrl: "./add-single-product.component.html",
  styleUrls: ["./add-single-product.component.css"],
})
export class AddSingleProductComponent implements OnInit {
  addProductForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.addProductForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      price: [null, [Validators.required]],
    });
  }

  onSubmit() {
    if (this.addProductForm.invalid) {
      return;
    }
    console.log(this.addProductForm.value);

    this.productsService.createSingleProduct(this.addProductForm.value);
  }
}
