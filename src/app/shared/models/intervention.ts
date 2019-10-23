import {InterventionI} from '../interfaces/intervention-i';
import {Client} from './client';

export class Intervention implements InterventionI {
  id: string;
  client: Client;
  description: string;
  devis: object;


  constructor(fields?: Partial<Intervention>) {
    if (fields) {
      Object.assign(this, fields)
    }
  }

}
