export class ReactiveStorage {
	trackMap = {};
	storage = 'localStorage';
	constructor(type = 'localStorage') {
		if (type === 'localStorage') {
			this.storage = 'localStorage';
		} else {
			this.storage = 'sessionStorage';
		}
	}
	setItem(key, value) {
		window[this.storage].setItem(key, value);
		this.trigger(key, value);
	}
	getItem(key, callBack) {
		this.track(key, callBack);
		return callBack(window[this.storage].getItem(key));
	}
	watch(key, callBack) {
		this.track(key, callBack);
	}
	track(key, callBack) {
		if (this.trackMap[key]) {
			this.trackMap[key].push(callBack);
		} else {
			this.trackMap[key] = [callBack];
		}
	}
	trigger(key, value) {
		let fnList = this.trackMap[key];
		if (fnList) {
			fnList.forEach((fn) => {
				fn(value);
			});
		}
	}
}
