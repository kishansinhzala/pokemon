import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter3'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.toLocaleLowerCase().includes(searchText);
    });
  }

  // transform(value: any, searchItem: any) {
  //   return value.filter(function (search: any) {
  //     return search.name.indexOf(searchItem) > -1
  //   })
  // }

}
