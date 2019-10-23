import {ClientI} from '../interfaces/client-i';

export class Client implements ClientI {
  id: string;
  nom: string;
  prenom: string;
  adresse: string;
  ville: string;
  telephone: string;
  mail: string;


  constructor(fields?: Partial<Client>) {
    if (fields) {
      Object.assign(this, fields)
    }
  }

}
