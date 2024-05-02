import { Injectable } from "@angular/core";
import { ApiService } from "../core/services";
import { FirebaseDocument } from "../core/interfaces.ts/firebase-document";
import { Products } from "../core/interfaces.ts/products";

@Injectable({providedIn:"root"})

export class ProductService extends ApiService{

  getProducts(){
    return this.get<FirebaseDocument<Products>[]>('categories.json')
  }
  getProduct(id:string){
    return this.get<FirebaseDocument<Products>>(`categories/${id}.json`)
  }
}
