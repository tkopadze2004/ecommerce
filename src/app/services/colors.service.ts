import { Injectable } from "@angular/core";
import { ApiService } from "../core/services";
import { FirebaseDocument } from "../core/interfaces.ts/firebase-document";
import { colors } from "../core/interfaces.ts/colors.interface";

@Injectable
({providedIn:"root"})

export class colorService extends ApiService{

  
  getColors() {
    return this.get<FirebaseDocument<colors>[]>('colors.json')
  }
  getColorsById(id:string){
    return this.get<FirebaseDocument<colors>>(`colors/${id}.json`)
  }
}
