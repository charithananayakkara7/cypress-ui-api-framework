//Base Command for any login functionality
Cypress.Commands.add('Login', (email, password) => {
    cy.get("input[id='email']").clear().type(email)
    cy.get("input[id='passwd']", { force: true }).clear().type(password)
    cy.get("Button[id='SubmitLogin']").click()
})

//Base Command for Logout functionality
Cypress.Commands.add('Logout', () => {
    cy.get(".logout").click()
})

//exception handeling
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
  })
