import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTransform'
})
export class DateTransformPipe implements PipeTransform {
  month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  transform(value: string = ""): string {
    return value?.split(' ')[0].split('-')[2].toString() + " " + this.month[parseInt(value?.split(' ')[0].split('-')[1].toString())-1];
  }

}
