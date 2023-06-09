const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
console.log('test 1');
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));
console.log('test');


server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
	await new Promise((res) => {
		setTimeout(res, 800);
	});
	next();
});

// Эндпоинт для логина
server.post('/login', (req, res) => {
	try {
		const { username, password } = req.body;
		console.log(username, password);
		const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
		const { users = [] } = db;

		const userFromBd = users.find(
			(user) => user.username === username && user.password === password,
		);
		delete userFromBd.password;

		if (userFromBd) {
			return res.json(userFromBd);
		}

		return res.status(403).json({ message: 'User not found' });
	} catch (e) {
		console.log(e);
		return res.status(500).json({ message: e.message });
	}
});

// проверяем, авторизован ли пользователь
// eslint-disable-next-line
server.use((req, res, next) => {
	if (!req.headers.authorization) {
		return res.status(403).json({ message: 'AUTH ERROR' });
	}

	next();
});
server.use((req, res, next) => {
	if (req.method === 'POST') {
		
		let locale = Intl.DateTimeFormat().resolvedOptions().locale;
		req.body.createdAt = Intl.DateTimeFormat(locale, { dateStyle: 'short', timeStyle: 'short', }).format(Date.now()).toString().replace(',', '');
		console.log(locale);

	}
	// Continue to JSON Server router
	next();
});
server.use(router);

// запуск сервера
server.listen(8000, () => {
	console.log('server is running on 8000 port');
});
