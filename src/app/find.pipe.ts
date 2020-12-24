import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'find',
})
export class FindPipe implements PipeTransform {
  movieArray = [];
  transform(movies = [], search: string = ''): any[] {
    if (!search.trim()) {
      return movies;
    }
    return movies.filter((item) => {
      return item.title
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase());
    });
  }
}
