describe('mocking product details list', () => {

  beforeEach(function () {
    // root-level hook
    // "this" points at the test context object
    cy.fixture('productdetails.json').then((data) => {
      // "this" is still the test context object
      this.data = data
    })
  })
  
  it('Navigating to the product page', function () {
    //Redirecting to the site
    cy.visit(Cypress.env('Baseqaurl3') + "/seleniumPractise/#/")
    //mocking product details 
    cy.intercept({
        method :'GET',
        url:Cypress.env('Baseqaurl3')+"/seleniumPractise/data/products.json"

    },{

        statusCode: 200,
        
        body: [{
            "id": this.data.id,
            "name": this.data.name,
            "price": this.data.price,
            "image": this.data.image,
            "category": this.data.category
        }
    ]
      
    }).as('bookproducts')
    //waiting till products mock call can use both sould and then
    //umcomment for use should
    //cy.wait('@bookproducts').should(({request,response})=>{
      cy.wait('@bookproducts').then(({request,response})=>{
cy.get('div > .product-image').should('have.length',response.body.length)

    })
    
})

})
