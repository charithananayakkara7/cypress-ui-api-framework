///reference types="Cypress"/>
describe('User Search flow', () => {
    var token  = "d4ec336bddecfc419331e2ebb36a90b35f4df8a6fe2d912f115b7c50ac96eafe"
    let pattern= "" 
    let randomtext = ""
    let randomemail = ""
      beforeEach(function () {
          // root-level hook
          // "this" points at the test context object
          cy.fixture('registerdetails.json').then((data) => {
            // "this" is still the test context object
            this.data = data
          
          })
        })
      it('registering a user with new email and searching for new user', function () {
        pattern = "Nequeporroquisquamestquidoloremipsumquiadolorsitametconsectetuadipiscivelit2"
        for(var i=0;i<10;i++)
        randomtext += pattern.charAt(Math.floor(Math.random()* pattern.length))
        randomemail = randomtext+'@gmail.com',
         cy.request({
  method:'POST',
  url:Cypress.env('Baseqaurl2')+"/public/v2/users",
  headers:{
    "Authorization":"Bearer "+token
  },
  body:{
    "name":this.data.name,"email":randomemail,"gender":this.data.gender,"status":this.data.status
      
  }   
          }).then((res)=>{
              const userid =res.body.id
              const userset =res.body
  expect(res.status).to.eq(201)
  expect(res.body).to.have.property('name', this.data.name)
  expect(res.body).to.have.property('gender',this.data.gender)
  expect(res.body).to.have.property('email',randomemail)
   expect(res.status).to.eq(201)
   expect(res.body).to.have.property('id',userid)  
   return userid, res
  }).then((userid)=>{
    cy.request({
      method:'GET',
      url:Cypress.env('Baseqaurl2')+"/public/v2/users?page=1",
      headers:{
        "Authorization":"bearer "+token
      },
           }).then((res)=>{
            expect(res.status).to.eq(200)
            for(let i=0;i<res.body.length;i++)  {
           var index0= res.body[0].id
           var length= res.body.length
            //expect(res.body[i]).to.have.property('id',res.body[i].id)  
            }
            cy.log(JSON.stringify(index0))
            expect(index0).to.eq(2527)
            expect(length).to.eq(10)

       })

      })
  
  })
})