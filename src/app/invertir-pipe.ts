import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'invertir'
})
export class InvertirPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
