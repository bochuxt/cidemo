

const index = require('./index')

const supertest = require('supertest');


test('hello world', () => {
    supertest(index).get('/').then(
    (res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body.result).toBe('hello world, from aws eb deploy');

        done();

});
})