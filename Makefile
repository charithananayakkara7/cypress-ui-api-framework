test:
    npm install
    npm run test --spec "cypress/integration/${TEST_SUITE}/*" --env environment=${ENVIRONMENT} --browser ${BROWSER}