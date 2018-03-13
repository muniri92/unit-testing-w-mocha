const assert = require('assert');
const authController = require('../../controllers/auth.controller');
const expect = require('chai').expect;
const should = require('chai').should();
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.should();

beforeEach(function settingUpRoles(){
    authController.setRoles(['user']);
});

describe('AuthController', function(){

    describe('isAuthorized', function(){
        it('Should return false if not authorized', function(){
            var isAuth = authController.isAuthorized('admin');
            expect(isAuth).to.be.false;
        });

        it('Should return true if authorized', function(){
            authController.setRoles(['user', 'admin']);
            var isAuth = authController.isAuthorized('admin');
            isAuth.should.be.true;
            //assert.equal(true, authController.isAuthorized('admin'));
        });
        
        it('Should not allow a get if not authorized');
        it('Should allow a get if authorized');

    });

    describe('isAuthorizedAsync', function(){
        it('Should return false if not authorized', function(done){
            authController.setRoles(['user']);
            authController.isAuthorizedAsync('admin'
            , function(isAuth){
                assert.equal(false, isAuth);
                done();
            }); 
        });
    });

    describe('isAuthorizedPromise', function(){
        it('Should return false if not authorized', function(){
            return authController.isAuthorizedPromise('admin').should.eventually.be.false;
        });
    });

});