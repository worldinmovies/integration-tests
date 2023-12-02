const rabbitAdminUrl = 'https://rabbitmq.admin.localhost'

describe('RabbitMQ Smoke Test', () => {
    it('Check Rabbit Admin Availability', () => {
        cy.request(`${rabbitAdminUrl}/`)
            .then((resp) => {
                expect(resp.status).to.eq(200);
            })
    });
})