import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeTransform'
})
export class TimeTransformPipe implements PipeTransform {

  transform(value: number = 0): string {
    return new Date(value*1000-(7200*1000)).toTimeString().split(' ')[0];
  }

}
