import { Pipe, PipeTransform } from "@angular/core";
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({ name: "trimText" })
export class TrimTextPipe implements PipeTransform {
	transform(value: string, chars: number): string {
		value = this.stripHtml(value);
		return value.slice(0, chars) + "...";
	}

	stripHtml(html) {
		// Create a new div element
		var temporalDivElement = document.createElement("div");
		// Set the HTML content with the providen
		temporalDivElement.innerHTML = html;
		// Retrieve the text property of the element (cross-browser support)
		return (
			temporalDivElement.textContent || temporalDivElement.innerText || ""
		);
	}
}
