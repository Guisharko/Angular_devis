import {Client} from '../models/client';

export interface InterventionI {
  id: string;
  client: Client;
  description: string;
  devis: object;

}
