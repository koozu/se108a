const assert = require('assert')
const _ = require('../difference')

/*
_.difference([2, 1], [2, 3]);
 => [1]
*/

describe('difference', function(){
    it("_.difference([2, 1], [2, 3]) equalTo [1]", function(){
        assert.deepStrictEqual(_.difference([2, 1], [2, 3]), [1])
    })
})
