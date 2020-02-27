import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "toMB"
})
export class ToMBPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
		const formatedNumber: string = (value / 1000).toFixed(1).toString();
	 return `${formatedNumber} MB`;
  }

}
