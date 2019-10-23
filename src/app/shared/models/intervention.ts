import {InterventionI} from '../interfaces/intervention-i';

export class Intervention implements InterventionI {
  id: string;
  nom: string;
  prenom: string;
  adresse: string;
  ville: string;
  telephone: string;
  mail: string;


  constructor(fields?: Partial<Intervention>) {
    if (fields) {
      Object.assign(this, fields)
    }
  }

}
