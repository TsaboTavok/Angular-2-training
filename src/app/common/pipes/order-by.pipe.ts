import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: any[], field: string, order?: boolean): any {
      const  o = order || 'false';
      return value.sort((n1, n2) => {
        if (n1[field] > n2[field]) {
            return  o === 'false' ? -1 : 1;
        }
        if (n1[field] < n2[field]) {
            return o === 'false' ? 1 : -1;
        }
        return 0;
      });
  }

}
