test:
	docker run \
	  -v ${PWD}:/e2e \
	  -w /e2e \
	  -e TEST_SUITE="${TEST_SUITE}" \
	  -e ENVIRONMENT="${ENVIRONMENT}" \
	  -e BROWSER="${BROWSER}" \
	  cypress/browsers:node14.17.0-chrome91-ff89 \
	  npm run test -- --spec "cypress/integration/${TEST_SUITE}/*"