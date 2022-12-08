import { Injectable } from '@angular/core';
import {Utulisateur} from "../../Model/Utulisateur";

@Injectable({
  providedIn: 'root'
})
export class CalculServiceService {

  constructor() {
  }

  //methodegetnumberof

  getNumberOf(list: any[], critiria: string, value: any) {
    let n = 0;
    for (let i in list) {
      if (list[i][critiria] === value) {
        n++;
      }

    }
    return n;
  }




}
