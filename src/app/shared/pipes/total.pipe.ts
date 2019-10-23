import { Pipe, PipeTransform } from '@angular/core';

//  {{ presta | total }}   ht
// {{ presta | total:'ttc' }} ttc
@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

   transform(
    // value: Prestation, arg?: string
     )
   {}
    // : number {
  //   if (!value) { return null; }
  //   else {
  //       if ( arg === 'ttc' ) {
  //         return value.totalTtc();
  //       } else {
  //         return value.totalHt();
  //       }
  //   }
  //  }

}
