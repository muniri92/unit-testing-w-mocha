const assert = require('assert');
const should = require('chai').should();

describe('Basic Mocha Test', function(){
    it('Should deal with objects ', function(){
        var obj = {name: 'jon', gender: 'male'};
        var obj2 = {name: 'jon', gender: 'male'};

        obj.should.have.property('name');
        obj.should.deep.equal(obj2);
    });


    it('Should allow testing nulls', function() {
        var iAmNull = null;

        should.not.exist(iAmNull);
    })
});


