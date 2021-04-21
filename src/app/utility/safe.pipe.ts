import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeUrl'
})
export class SafePipe implements PipeTransform {

  constructor (private sanitize:DomSanitizer){}
  transform(value: any, ...args: any[]): any {
    if(value)
      return this.sanitize.bypassSecurityTrustResourceUrl(value);
  }
  

}
