const assert = require('assert')
const _ = require('../initial.js')

/*
_.initial([1, 2, 3]);
 => [1, 2]
*/

describe('initial', function(){
    it("_.initial([1, 2, 3]) equalTo [1, 2]", function(){
        assert.deepStrictEqual(_.initial([1, 2, 3]), [1, 2])
    })
})
