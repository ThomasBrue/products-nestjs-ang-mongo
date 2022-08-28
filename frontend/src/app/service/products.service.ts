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

  get(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.backendUrl + "/products");
  }
}
