
/*
///reference types="Cypress"/>
describe('User login functionality verification and changing profile', () => {
  let token

  beforeEach(function () {
    // root-level hook
    // "this" points at the test context object
    cy.fixture('profiledetails.json').then((data) => {
      // "this" is still the test context object
      this.data = data

    })
  })
  it('Get the authentication token', function () {
    //Authentication request
    cy.request({
      method: 'POST',
      url: Cypress.env('Baseqaurl1') + "/api/v1/user/auth",
      headers: {

      },
      body: {
        "email": this.data.email, "password": this.data.password

      }
    }).then((res) => {
      cy.log(JSON.stringify(res))
      //validating the response
      expect(res.status).to.eq(200)
      expect(res.body).to.have.property('command', 'REDIRECT_SEARCH_FOR_WORMHOLE')
      expect(res.body).to.have.property('status', true)
      expect(res.body).to.have.property('msg', null)
      expect(res.body.data).to.have.property('responseUser')
      expect(res.body.data.responseUser).to.have.property('type', 1)
      expect(res.body.data).to.have.property('token')
      token = res.body.data.token
      cy.log(JSON.stringify(token))

    })

  })

  it('Get the authentication token from same class it page', function () {

    cy.log(JSON.stringify(token))
    cy.log(JSON.stringify("token from previous it" + token))

  })
  it('Change the profile details', function () {
    //updating the details
    cy.request({
      method: 'POST',
      url: Cypress.env('Baseqaurl1') + "/api/v1/user/update",
      headers: {
        "Authorization": "bearer " + token
      },
      body: {
        "first_name": this.data.first_name, "last_name": this.data.last_name, "company_name": this.data.company_name, "phone": this.data.phone, "id": this.data.id

      }
    }).as('verifyprof').then((res) => {
      //logging the details
      cy.log(JSON.stringify(res))
      //validating the response
      expect(res.status).to.eq(200)
      expect(res.body.data).to.have.property('first_name', this.data.first_name)
      expect(res.body).to.have.property('status', true)

    })
  })

})
*/