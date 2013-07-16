var lib_dir = process.env.JS_COV ? '../lib-cov/': '../lib/';

var twitter = require(lib_dir + 'twitter')
  , assert = require('assert');

describe('Twitter', function () {

    describe('#followerCount', function () {

        it('should get the # of followers a user has', function (done) {
            twitter.followerCount('chris6F', function (err, followers) {
                assert.ifError(err);
                assert(typeof followers === 'number');
                assert(followers > 0);
                done();
            });
        });

        it('should fail on an invalid username', function (done) {
            twitter.followerCount('', function (err) {
                assert(err);
                done();
            });
        });

    });

    describe('#urlTweets', function () {

        it('should get the # of tweets a url has', function (done) {
            twitter.urlTweets('http://twitter.com', function (err, tweets) {
                assert.ifError(err);
                assert(typeof tweets === 'number');
                assert(tweets > 0);
                done();
            });
        });

        it('should fail on an invalid url', function (done) {
            twitter.urlTweets('', function (err) {
                assert(err);
                done();
            });
        });

    });

});

