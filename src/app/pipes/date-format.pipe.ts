import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'friendlyDate'
})
export class FriendlyDatePipe implements PipeTransform {
  transform(value: Date | string): string {
    const date = new Date(value);
    return date.toLocaleDateString('hu-HU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}