var supertest = require('supertest');
var should = require('should');

var server = supertest.agent('http://localhost:8080');

describe('test main page', function () {

    it('should return home page', function (done) {

        server
            .get('/')
            .expect('Content-type', /json/)
            .expect(200)
            .end(function (err, res) {
                res.status.should.equal(200);
                done();
            });
    });

});

describe('test article', function () {

    it('should return some article', function (done) {

        server
            .get('/article?id=/134793&')
            .expect('Content-type', /json/)
            .expect(200)
            .end(function (err, res) {
                res.status.should.equal(200);
                done();
            });
    });

});

describe('test articles headers', function () {

    var date = new Date();

    var queryString = createQueryStringForDay(date);

    it('should return article headers for current day', function (done) {
        server
            .get(queryString)
            .expect('Content-type', /json/)
            .expect(200)
            .end(function (err, res) {
                res.status.should.equal(200);
                done();
            });
    });

});

function createQueryStringForDay(date) {
    return '/day?' +
        convertForQuery('year', date.getFullYear()) +
        convertForQuery('month', date.getMonth() + 1) +
        convertForQuery('day', date.getDate());
}

function convertForQuery(name, value) {
    return name + '=' + value + '&';
}
