import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statuscolor'
})
export class StatuscolorPipe implements PipeTransform {

  transform(value: boolean): string {
    return value ? 'Active' : 'Inactive';
  }

}
