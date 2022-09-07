import { token1 } from "./authenticationapi.js";
///reference types="Cypress"/>
describe('Authentication token from other file test', () => {

  beforeEach(function () {
    // root-level hook
    // "this" points at the test context object
    cy.fixture('profiledetails.json').then((data) => {
      // "this" is still the test context object
      this.data = data

    })
  })
  it('Get the authentication token from authentication token file', function () {
    //cy.log(JSON.stringify(token))
    cy.log(JSON.stringify("token from previous it" + token1))


  })








})
