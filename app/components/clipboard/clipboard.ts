import {Directive, Input} from '@angular/core';

@Directive({
	selector:			'clipboard',
	host:					{
		"(click)":		"copyText()"
	}
})

export class Clipboard {
	@Input() textTarget;

	copyText = () => {
		document.commandExec('copy');
	}
}