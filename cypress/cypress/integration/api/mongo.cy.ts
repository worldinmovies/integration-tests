const mongoUrl = 'mongodb://mongo.localhost:27017'

describe('Mongo Smoke Test', () => {
    it('Check Mongo Availability', () => {
        cy.task('ping_mongo', mongoUrl)
            .then(ping => {
                expect(ping.ok).to.be.eq(1);
            });
    });
})