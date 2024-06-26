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

     //Redirecting to the site
     cy.visit(Cypress.env('Baseqaurl3') + "/seleniumPractise/#/")
     
    //waiting till products mock call can use both should and then
    //umcommened for use then command
    cy.wait('@bookproducts').should(({response})=>{
      //cy.wait('@bookproducts').then(({request,response})=>{
cy.get('div > .product-image').should('have.length',response.body.length)

    })
    
})

})
