import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductsService } from "../service/products.service";

@Component({
  selector: "app-edit-single-product",
  templateUrl: "./edit-single-product.component.html",
  styleUrls: ["./edit-single-product.component.css"],
})
export class EditSingleProductComponent implements OnInit {
  editProductForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.editProductForm = this.formBuilder.group({
      id: [null, [Validators.required]],
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      price: [null, [Validators.required]],
    });
  }

  onSubmit() {
    if (this.editProductForm.invalid) {
      return;
    }
    console.log(this.editProductForm.value);

    this.productsService.editSingleProduct(this.editProductForm.value);
  }
}
