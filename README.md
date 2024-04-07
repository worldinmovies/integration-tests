# Integration Tests

This is where I collect all the integration tests
and also for now all configurations for the infrastructure, like docker compose, or k8s


### Commands

##### Cypress
```
# Install prerequisites
npm --prefix cypress install

# UI
npm --prefix cypress run cypress:open

# Headless
npm --prefix cypress run cypress:test
```

##### Playwright
```
# Install prerequisites
npm --prefix cypress run playwright install

# UI
npm --prefix cypress run playwright:open

# Headless
npm --prefix cypress run playwright:test
```

# Artillery
```
npm --prefix cypress run artillery:run
```

# Docker Compose
```
# To run locally with docker compose
echo "VITE_WEBAPP_PORT=80
DJANGO_SECRET_KEY="$(uuidgen) > .env

docker compose up -d
```