import { PrestationI } from '../interfaces/prestation-i';
import { TypePrestation } from '../enums/type-prestation.enum';
import { StatusPrestation } from '../enums/status-prestation.enum';

export class Prestation implements PrestationI {
  id: string;
  type: TypePrestation = TypePrestation.FORMATION;
  client: string;
  duree = 1;
  tjmHt = 50;
  tva = 20;
  status: StatusPrestation = StatusPrestation.OPTION;
  constructor(fields?: Partial<Prestation>) {
    if (fields) {
      Object.assign(this, fields)
    }
  }


  totalHt(): number {
    console.log('totalHT')
    return this.duree * this.tjmHt;

  }
  totalTtc(): number {
    const totalHt = this.totalHt();
    return (totalHt * this.tva / 100) + totalHt;
  }


}
