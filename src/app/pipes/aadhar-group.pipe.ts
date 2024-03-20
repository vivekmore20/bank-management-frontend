import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'aadharGroup'
})
export class AadharGroupPipe implements PipeTransform {

  transform(value: string | null | undefined): string {
    if (!value && value !== '') return ''; 


    return value!.match(/.{1,4}/g)!.join('-'); 
  }

}
