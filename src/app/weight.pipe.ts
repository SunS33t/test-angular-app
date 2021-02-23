import { Pipe, PipeTransform } from '@angular/core';
  
@Pipe({
    name: 'weight_format'
})
export class WeightPipe implements PipeTransform {
  transform(value: number): string {
          return value >= 1000? `${value/1000} кг`: `${value} гр`;
  }
}