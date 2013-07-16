var lib_dir = process.env.JS_COV ? '../lib-cov/': '../lib/';

var facebook = require(lib_dir + 'facebook')
  , assert = require('assert');

describe('Facebook', function () {

    describe('#urlLikes', function () {

        it('should get the # of likes a url has', function (done) {
            facebook.urlLikes('http://facebook.com', function (err, likes) {
                assert.ifError(err);
                assert(typeof likes === 'number');
                assert(likes > 0);
                done();
            });
        });

        it('should fail on an invalid url', function (done) {
            facebook.urlLikes('!@(*#&!(@*#&!', function (err) {
                assert(err);
                done();
            });
        });

    });

    describe('#pageLikes', function () {

        it('should get the # of likes a facebook page has', function (done) {
            facebook.pageLikes('https://www.facebook.com/baconaddicts', function (err, likes) {
                assert.ifError(err);
                assert(typeof likes === 'number');
                assert(likes > 0);
                done();
            });
        });

        it('should accept a page ID rather than url', function (done) {
            facebook.pageLikes('baconaddicts', function (err, likes) {
                assert.ifError(err);
                assert(typeof likes === 'number');
                assert(likes > 0);
                done();
            });
        });

        it('should fail on an invalid page url', function (done) {
            facebook.pageLikes('!@(*#&!(@*#&!', function (err) {
                assert(err);
                facebook.pageLikes('http://google.com', function (err) {
                    assert(err);
                    done();
                });
            });
        });

    });

});

