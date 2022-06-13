import { copyFile } from 'fs';

console.log('backing up .env file...');

copyFile('.env', 'D:\\general-backup\\.env-backup', (err) => {
	if (err)
		throw err;
	console.log('finished');
})