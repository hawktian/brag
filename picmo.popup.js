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
        msg.value += selection.emoji;
    });
});
