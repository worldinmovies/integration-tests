const mongoUrl = 'mongodb://mongo.127.0.0.1.nip.io:27017'

describe('Mongo Smoke Test', () => {
    it('Check Mongo Availability', () => {
        cy.task('ping_mongo', mongoUrl)
            .then(ping => {
                expect(ping.ok).to.be.eq(1);
            });
    });
})