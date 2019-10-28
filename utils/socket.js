import { EventEmitter } from 'events';

class Socket {
	constructor(ws = new WebSocket('wss://echo.websocket.org/'), ee = new EventEmitter()) {
		this.ws = ws;
		this.ee = ee;
		ws.onmessage = this.message.bind(this);
		ws.onopen = this.open.bind(this);
		ws.onclose = this.close.bind(this);
	}

	on(name, func) {
		this.ee.on(name, func);
	}

	off(name, func) {
		this.ee.removeListener(name, func);
	}

	emit(name, data) {
		const message = JSON.stringify({ name, data });
		this.ws.send(message);
	}

	message(e) {
		try {
			const message = JSON.parse(e.data);
			this.ee.emit(message.name, message.data);
		} catch (error) {
			this.ee.emit('err', error);
		}
	}
	open() {
		this.ee.emit('connected!');
	}

	close() {
		this.ee.emit('disconnected!');
	}
}

export default Socket;
