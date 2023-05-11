import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor() { }
  userSignUp(data:object){
    console.warn(data)
  }
}
