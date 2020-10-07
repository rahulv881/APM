import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'convertToSpaces',
})

export class ConvertToSpacesPipe implements PipeTransform{
  transform(value: string, character: string):string {
   // throw new Error("Method not implemented.");

    return value.replace(character,' ');
  }


}
