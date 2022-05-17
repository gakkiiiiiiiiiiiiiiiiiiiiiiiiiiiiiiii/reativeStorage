import { ReactiveStorage } from './reactiveStorage.js';
(() => {
	const storage = new ReactiveStorage('sessionStorage');
	storage.setItem('msg', '123');
	let msg, msg1;
	storage.getItem('msg', (res) => {
		msg = res;
		console.log(msg);
	});
	storage.getItem('msg', (res) => {
		msg1 = res + ' in msg1';
		console.log(msg1);
	});
	storage.setItem('msg', '456');
	storage.watch('msg', (res) => {
		console.log('watch', res);
	});
	storage.setItem('msg', '789');
})();
