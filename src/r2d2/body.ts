import { MouseCoords } from '../types/mouseCoords.t';

export const body = {
	rollUp: (control: any, coords: MouseCoords, width: number): void => {
		control.moveMouse(coords.x, coords.y - width);
	},

	rollDown: (control: any, coords: MouseCoords, width: number): void => {
		control.moveMouse(coords.x, coords.y + width);
	},

	rollLeft: (control: any, coords: MouseCoords, width: number): void => {
		control.moveMouse(coords.x - width, coords.y);
	},

	rollRight: (control: any, coords: MouseCoords, width: number): void => {
		control.moveMouse(coords.x + width, coords.y);
	},

	whereAmI: (say: any, coords: MouseCoords, command: string): void => {
		say(`${command} ${coords.x},${coords.y}`);
	},
};
