import LoginPage from '../../../support/Pages/LoginPage'
import HomePage from '../../../support/Pages/HomePage'
describe('User login functionality verification', () => {
  //Creating login page object
  const Loginpage = new LoginPage()
  //Creating login page object
  const Homepage = new HomePage()

  beforeEach(function () {
    // root-level hook
    // "this" points at the test context object
    cy.fixture('login.json').then((data) => {
      // "this" is still the test context object
      this.data = data
    //inject axe
    cy.injectAxe()
    
    })
  })
  
  // the test callback is in "function () { ... }" form
  it('Navigating to the Log in page', function () {
    cy.visit(Cypress.env('Baseqaurl') + "/index.php")
    cy.config('defaultCommandTimeout', 7000)
})
it('Validate the HomePage ui elements', function () {
  Loginpage.GetH1().contains(this.data.H1)
  Loginpage.GetSiginlink().click()
})

it('Validate the login form ui elements', function () {
  Loginpage.Getemailboxelement().should('be.visible')
  Loginpage.Getpasswordboxelement().should('have.attr', 'type', this.data.passwordbxtype)
})
it('Validate the login footer ui elements', function () {
  Loginpage.GetFooterelement().contains(this.data.Footerapplicationname)
})
it('Validate the login funtionality with correct email and password ', function () {
  cy.Login(this.data.email, this.data.password)
  Homepage.GetLogoutbutton().should('be.visible')
  Homepage.Getaccountname().contains(this.data.accountname)
  cy.Logout()
})
})
