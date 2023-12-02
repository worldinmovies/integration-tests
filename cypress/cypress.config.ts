import { defineConfig } from 'cypress'
import { MongoClient } from 'mongodb';


module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://localhost',
        specPattern: "cypress/integration/**/*.cy.{js,jsx,ts,tsx}",
        experimentalRunAllSpecs: true,
        setupNodeEvents(on, config) {
            on("task", {
                ping_mongo(mongo_url) {
                    const client = new MongoClient(mongo_url);
                    return client.db('tmdb')
                        .admin()
                        .ping();
                }
            })
        }
    }
})