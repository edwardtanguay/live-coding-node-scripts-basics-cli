const fs = require('fs');

console.log('backing up .env file...');

fs.copyFile('.env', 'D:\\general-backup\\.env-backup', (err) => {
	if (err)
		throw err;
	console.log('finished');
})