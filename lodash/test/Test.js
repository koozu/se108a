const assert = require('assert')
const expect = require('chai').expect
const _ = require('../lodash.js')

describe('TDD', function() {

/*
_.dropRight([1, 2, 3]);
 => [1, 2]
 
_.dropRight([1, 2, 3], 2);
 => [1]
 
_.dropRight([1, 2, 3], 5);
 => []
 
_.dropRight([1, 2, 3], 0);
 => [1, 2, 3]
*/

    describe('dropRight', function() {
        it("_.dropRight([1, 2, 3]) equalTo [1, 2]", function() {
        assert.deepStrictEqual(_.dropRight([1, 2, 3]), [1, 2])
        })
        it("_.dropRight([1, 2, 3], 2) equalTo [1]", function() {
        assert.deepStrictEqual(_.dropRight([1, 2, 3], 2), [1])
        })
        it("_.dropRight([1, 2, 3], 5) equalTo []", function() {
        assert.deepStrictEqual(_.dropRight([1, 2, 3], 5), [])
        })
        it("_.dropRight([1, 2, 3], 0) equalTo [1, 2, 3]", function() {
        assert.deepStrictEqual(_.dropRight([1, 2, 3], 0), [1, 2, 3])  
        })
    })

/*
 _.difference([2, 1], [2, 3]);
=> [1]
*/

    describe('difference', function(){
        it("_.difference([2, 1], [2, 3]) equalTo [1]", function(){
            assert.deepStrictEqual(_.difference([2, 1], [2, 3]), [1])
        })
    })
})

/*
_.initial([1, 2, 3]);
 => [1, 2]
*/

describe('BDD', function(){
    describe('initial', function(){
        var answer = _.initial([1,2,3])

        it("_.initial([1, 2, 3]) equalTo [1, 2]", function(){
            expect(answer).to.deep.equal([1, 2])
            //assert.deepStrictEqual(_.initial([1, 2, 3]), [1, 2])
        })
    })
})
