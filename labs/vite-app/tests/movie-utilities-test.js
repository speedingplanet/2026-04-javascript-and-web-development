import QUnit from 'qunit';
import { setSort } from '../src/movie-utilities.js';

QUnit.module('sort');

QUnit.test('starter', (assert) => {
	assert.ok(1, 'bruh');
});

QUnit.test('setSort', (assert) => {
	assert.ok(setSort());
});
