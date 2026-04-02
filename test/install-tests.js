import QUnit from 'qunit';
import process from 'node:process';

QUnit.module('install');

QUnit.test('basic test', (assert) => {
	assert.equal(2 + 2, 4);
});

QUnit.test('Node version', (assert) => {
	// Node versions look like "v1.2.3"
	let version = process.version;

	// Split them by ".", grab the first value, strip off the "v"
	let majorVersion = version.split('.')[0].slice(1);
	// assert.equal(majorVersion, 22);
	assert.true(majorVersion >= 22);
});
