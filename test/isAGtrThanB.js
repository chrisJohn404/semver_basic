
/*
 * Author: Chris Johnson
 * Date: March 2022
 */

const testCase = require('mocha').describe;
const assert = require('chai').assert;
const isAGtrThanB = require('../semver_basic.js').isAGtrThanB;


describe('isAGtrThanB()', function() {
	describe('should be false', function() {
		it('when version is less than', function() {
			assert.equal(isAGtrThanB('1.1.1', '2.0.0'), false);
		});
		it('when version is less than', function() {
			assert.equal(isAGtrThanB('1.1.1', '1.2.0'), false);
		});
		it('when version is less than', function() {
			assert.equal(isAGtrThanB('1.1.1', '1.1.2'), false);
		});
		it('when versions are equal', function() {
			assert.equal(isAGtrThanB('1.1.1', '1.1.1'), false);
		});
	});
	describe('should be true', function() {
		it('when version is greater than', function() {
			assert.equal(isAGtrThanB('2.0.1', '2.0.0'), true);
		});
		it('when version is greater than', function() {
			assert.equal(isAGtrThanB('2.2.0', '2.1.0'), true);
		});
		it('when version is greater than', function() {
			assert.equal(isAGtrThanB('3.0.0', '2.1.9'), true);
		});
	});
	describe('errors when...', function() {
		it('arg a is not x.x.x', function() {
			assert.throws(() => {
				isAGtrThanB('3.0', '2.0.0');
			});
		});
		it('arg a is not x.x.x', function() {
			assert.throws(() => {
				isAGtrThanB('3.0.0', '2.0');
			});
		});
	});
});


