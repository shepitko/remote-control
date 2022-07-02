import { body } from './body';
import { commands } from './brain';
import { hands } from './hands';

export const r2d2 = {
	brain: commands,
	hands: hands,
	body: body,
};
