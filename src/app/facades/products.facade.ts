import { Injectable, inject } from '@angular/core';
import { ProductService } from '../services/products.service';
import { map, pipe, tap } from 'rxjs';
import { Products } from '../core/interfaces.ts/products';

@Injectable({ providedIn: 'root' })
export class ProductsFacade {
  productsservice = inject(ProductService);

  getProducts(params:{categoryId:string[],colorId?:string,size?:string } ) {

    return this.productsservice.getProducts().pipe(
      map((Products) => {
        return Object.keys(Products).map(
          (key: any) =>
            ({
              ...Products[key],
              id: key,
            } as Products)
        );
      }),map((products)=> {


        return products.filter((product)=>{

          if(params.categoryId.length && !params.categoryId.includes(product.categoryId)){
            return false
          }
          if(params.colorId && params.colorId!==product.colorId){
            return false
          }
          if(params.size && params.size!==product.size){
            return false
          }

          return true


          // if(params.categoryId.length){
          //   products=  products.filter((product) => params.categoryId.includes(product.categoryId) )
          // }
          // if(params.colorId){
          //   products=  products.filter((product) => product.colorId===params.colorId)
          // }
          // if(params.size){
          //   products=  products.filter((product) => product.size===params.size)
          // }
        })
      })

    )
  }

  getProduct(id: string) {
    return this.productsservice.getProduct(id)
      .pipe(
        map((product) => {
          return {
            ...product,
            id,
          } as Products
        })
      )
  }

   getRelatedProducts(categoryId: string, productId: string) {
    return this.productsservice.getRelatedProducts(categoryId)
      .pipe(
        map((products) => {
          return Object.keys(products).map((key: any) => ({
            ...products[key],
            id: key
          } as Products))
        }),
        map((products) => {
          return products.filter((product) => product.id !== productId).slice(0, 4)
        })
      )

  }
}
