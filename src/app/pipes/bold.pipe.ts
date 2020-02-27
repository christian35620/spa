import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
	name: "bold"
})
export class BoldPipe implements PipeTransform {
	transform(value: string, ...args: any[]): string {
		console.log(value);
		return value.bold();
	}
}
