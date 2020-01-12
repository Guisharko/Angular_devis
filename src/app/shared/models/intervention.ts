import {InterventionI} from '../interfaces/intervention-i';

export class Intervention implements InterventionI {
  id: string;
  client: string;
  description: string;
  devis: object;


  constructor(fields?: Partial<Intervention>) {
    if (fields) {
      Object.assign(this, fields)
    }
  }
}
