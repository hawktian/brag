import { createPopup } from 'https://unpkg.com/@picmo/popup-picker@latest/dist/index.js?module';

document.addEventListener('DOMContentLoaded', () => {
	const selectionContainer = document.querySelector('#selection-outer');
	const emoji = document.querySelector('#selection-emoji');
	const name = document.querySelector('#selection-name');
	const trigger = document.querySelector('#emoji');

	const picker = createPopup({}, {
		referenceElement: trigger,
		triggerElement: trigger,
		position: 'right-end'
	});

	trigger.addEventListener('click', () => {
		picker.toggle();
	});

	picker.addEventListener('emoji:select', (selection) => {
		let text = selection.emoji || '';
		if (document.selection) {
			msg.focus();
			var sel = document.selection.createRange();
			sel.text = text;
		} else if (msg.selectionStart || msg.selectionStart === 0) {
			var startPos = msg.selectionStart;
			var endPos = msg.selectionEnd;
			msg.value = msg.value.substring(0, startPos) +
				text +
				msg.value.substring(endPos, msg.value.length);
				msg.selectionStart = startPos + text.length;
				msg.selectionEnd = startPos + text.length;
		} else {
			msg.value += text;
		}
	});
});
