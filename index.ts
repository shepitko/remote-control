import robot from 'robotjs';
import { createWebSocketStream, WebSocket } from 'ws';

import { httpServer } from './src/http_server';
import { webSocketServer } from './src/websocket_server';
import './env';

import { r2d2 } from './src/r2d2';

console.log(`Start static http server on the ${process.env.HTTP_PORT} port!`);

httpServer.listen(process.env.HTTP_PORT);

webSocketServer.on('connection', function connection(ws: WebSocket) {
	const duplex = createWebSocketStream(ws, { decodeStrings: false, encoding: 'utf8' });
	duplex.on('data', async (message: string) => {
		console.log('received: %s', message);

		const coords = robot.getMousePos();
		const [cmd, firstField, secondField] = message.split(' ');
		const firstMetric = Number(firstField);
		const secondMetric = Number(secondField);

		duplex.write(message);

		switch (cmd) {
			case r2d2.brain.mouseUp:
				r2d2.body.rollUp(robot, coords, firstMetric);
				break;

			case r2d2.brain.mouseDown:
				r2d2.body.rollDown(robot, coords, firstMetric);
				break;

			case r2d2.brain.mouseLeft:
				r2d2.body.rollLeft(robot, coords, firstMetric);
				break;

			case r2d2.brain.mouseRight:
				r2d2.body.rollRight(robot, coords, firstMetric);
				break;

			case r2d2.brain.drawSquare:
				r2d2.hands.drawSquare(robot, coords, firstMetric);
				break;

			case r2d2.brain.drawRectangle:
				r2d2.hands.drawRectangle(robot, coords, firstMetric, secondMetric);
				break;

			case r2d2.brain.drawCircle:
				r2d2.hands.drawCircle(robot, coords, firstMetric);
				break;

			case r2d2.brain.mousePosition:
				r2d2.body.whereAmI(duplex.write, coords, cmd);
				break;
		}
	});
});
