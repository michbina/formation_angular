import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starRating'
})
export class StarRatingPipe implements PipeTransform {

  transform(metascore:string | undefined): string {
    if(!metascore) {
      return ''
    }
    if (+metascore<20) {
      return '★'
    }else if (+metascore<40) {
       return '★'
    }else if (+metascore<60) {
      return '★★★'
    }else if (+metascore<80) {
      return '★★★★'
    }else if (+metascore<100) {
      return '★★★★★'
    }else {
      return 'no rating'
    }
  }

}
