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

  it('Navigating to the Log in page', function () {
    //Navigating to the site
    cy.visit(Cypress.env('Baseqaurl5') + "/practice/")
    //taking the first daat row
    cy.get('table> tbody> tr >td:nth-child(2)').first()
    //filtering from a name
    cy.get('table> tbody> tr >td').contains('Sariful Islam');
    // //filtering from a loop
    cy.get('table> tbody> tr >td:nth-child(2)').each(($el, index, $list) => {

      let text = $el.text()

      if (text.includes('QA Expert Course :Software Testing + Bugzilla')) {
        cy.log($el.text())
        cy.get('table> tbody> tr >td:nth-child(3)').eq(index).then((price) => {
          var actualprice = price.text();
          expect(actualprice.trim()).to.eq('40')

        })

      }

    })
    //filtering and grabing the text with loop
    cy.get('table> tbody> tr >td:nth-child(2)').each(($el, index, $list) => {

      var topic = $el.text();
      if (topic.includes('Selenium Webdriver with Java Basics')) {
        cy.log($el.text())
        expect(topic.trim()).to.includes('Selenium Webdriver with Java Basics')

      }


    })

    cy.config('defaultCommandTimeout', 7000)

  })

  it('Navigating to the home page', function () {
    cy.visit(Cypress.env('Baseqaurl5') + "/practice/")
     //filtering and grabing the text with loop for first and last record
    cy.get('table> tbody> tr >td:nth-child(2)').first().then((firsttopic) => {
      cy.log(firsttopic.text())
    })
    cy.get('table> tbody> tr >td:nth-child(2)').then((lasttopic) => {
      cy.log(lasttopic.text())
    })
  })
})
