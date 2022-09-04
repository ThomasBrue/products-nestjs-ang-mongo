import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ProductsService } from "../service/products.service";

@Component({
  selector: "app-delete-single-product",
  templateUrl: "./delete-single-product.component.html",
  styleUrls: ["./delete-single-product.component.css"],
})
export class DeleteSingleProductComponent implements OnInit {
  deleteProductForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.deleteProductForm = this.formBuilder.group({
      id: [null, [Validators.required]],
    });
  }

  onSubmit() {
    if (this.deleteProductForm.invalid) {
      return;
    }
    console.log(this.deleteProductForm.value);

    this.productsService.deleteSingleProduct(this.deleteProductForm.value);
  }
}
