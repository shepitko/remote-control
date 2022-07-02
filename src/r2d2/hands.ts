import { MouseCoords } from '../types/mouseCoords.t';

export const hands = {
	drawSquare: (control: any, coords: MouseCoords, width: number): void => {
		control.mouseToggle('down', 'left');
		control.moveMouseSmooth(coords.x + width, coords.y);
		control.moveMouseSmooth(coords.x + width, coords.y + width);
		control.moveMouseSmooth(coords.x, coords.y + width);
		control.moveMouseSmooth(coords.x, coords.y);
		control.mouseToggle('up', 'left');
	},

	drawCircle: (control: any, coords: MouseCoords, radius: number): void => {
		const dot = 0.01 * Math.PI;
		const middleX = coords.x - radius;
		const middleY = coords.y;
		let currentX = 0;
		let currentY = 0;

		control.mouseToggle('down', 'left');
		for (let i = 0; i < 2 * Math.PI; i += dot) {
			currentX = middleX + radius * Math.cos(i);
			currentY = middleY + radius * Math.sin(i);

			control.dragMouse(currentX, currentY);
		}
		control.mouseToggle('up', 'left');
	},

	drawRectangle: (control: any, coords: MouseCoords, width: number, height: number): void => {
		control.mouseToggle('down', 'left');
		control.moveMouseSmooth(coords.x + width, coords.y);
		control.moveMouseSmooth(coords.x + width, coords.y + height);
		control.moveMouseSmooth(coords.x, coords.y + height);
		control.moveMouseSmooth(coords.x, coords.y);
		control.mouseToggle('up', 'left');
	},
};
