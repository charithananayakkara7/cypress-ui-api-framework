//Base Command for Login
Cypress.Commands.add('Login', (email, password) => {
    cy.get("input[id='email']").clear().type(email)
    cy.get("input[id='passwd']", { force: true }).clear().type(password)
    cy.get("Button[id='SubmitLogin']").click()
})

//Base Command for Logout
Cypress.Commands.add('Logout', () => {
    cy.get(".logout").click()
})
