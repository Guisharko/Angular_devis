import { Prestation } from 'src/app/shared/models/prestation';
import { TypePrestation } from 'src/app/shared/enums/type-prestation.enum';
import { StatusPrestation } from 'src/app/shared/enums/status-prestation.enum';

export const fakePrestations: Prestation[] = [
  new Prestation({
    id : 'sfsef',
    type: TypePrestation.COACHING,
    client: 'GFI',
    duree: 10
  }),
  new Prestation({
    id : 'cfgfcgng',
    type: TypePrestation.COACHING,
    status : StatusPrestation.CONFIRME,
    client: 'Cap',
    tjmHt: 200,
    duree: 10
  }),
  new Prestation({
    id : 'fgfcff',
    type: TypePrestation.COACHING,
    client: 'LVMH',
    tjmHt: 2000,
    duree: 7
  }),
]
