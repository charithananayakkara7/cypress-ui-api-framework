test:
	docker run \
	  -v ${PWD}:/e2e \
	  -w /e2e \
	  -e TEST_SUITE="${TEST_SUITE}" \
	  -e ENVIRONMENT="${ENVIRONMENT}" \
	  -e BROWSER="${BROWSER}" \
	  cypress/included:8.2.0 \
	  npm run test -- --spec "cypress/integration/${TEST_SUITE}/*"