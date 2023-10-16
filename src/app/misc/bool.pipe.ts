import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bool'
})
export class BoolPipe implements PipeTransform {

  transform(bool: boolean, locale: string = "en"): string {
  return bool ? "YES" : "NO";
}

}
