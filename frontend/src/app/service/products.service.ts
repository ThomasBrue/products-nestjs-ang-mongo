import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
// import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Product } from "./../../../../model/interface.model";
import { environment } from "environments/environment";

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.backendUrl + "/products");
  }

  getSingleProduct(value): Observable<any> {
    console.log(environment.backendUrl + "/products/" + value.id);

    let resp = this.http.get(environment.backendUrl + "/products/" + value.id);
    console.log("resp:", resp);

    return resp;
  }

  createSingleProduct(value) {
    let payload = {
      title: value.title ? value.title : "",
      description: value.description ? value.description : "",
      price: value.price ? value.price : 0,
    };

    this.http
      .post<any>(environment.backendUrl + "/products", payload)
      .subscribe((data) => {
        console.log(data);
      });
  }

  editSingleProduct(value) {
    let payload = {};
    if (value.title) {
      payload["title"] = value.title;
    }
    if (value.description) {
      payload["description"] = value.description;
    }
    if (value.price) {
      payload["price"] = value.price;
    }

    this.http
      .patch<any>(environment.backendUrl + "/products/" + value.id, payload)
      .subscribe((data) => {
        console.log(data);
      });
  }

  deleteSingleProduct(value) {
    this.http
      .delete(environment.backendUrl + "/products/" + value.id)
      .subscribe(() => console.log("Delete successful"));
  }
}
