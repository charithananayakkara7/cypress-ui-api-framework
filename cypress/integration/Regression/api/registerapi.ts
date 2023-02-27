import { state } from "../../../const/state"

///reference types="Cypress"/>
describe('User registeration flow', () => {
  let token  = "d4ec336bddecfc419331e2ebb36a90b35f4df8a6fe2d912f115b7c50ac96eafe"
  let pattern= "" 
  let randomtext = ""
    beforeEach(function () {
        // root-level hook
        // "this" points at the test context object
        cy.fixture('registerdetails.json').then((data) => {
          // "this" is still the test context object
          this.data = data
        
        })
      })
    it('Registering a user with new email', function () {
      pattern = "Nequeporroquisquamestquidoloremipsumquiadolorsitametconsectetuadipiscivelit2"
      for(var i=0;i<10;i++)
      randomtext += pattern.charAt(Math.floor(Math.random()* pattern.length))
      state.testContext.emailReg = randomtext+'@gmail.com',
       cy.request({
method:'POST',
url:Cypress.env('Baseqaurl2')+"/public/v2/users",
headers:{
  "Authorization":"Bearer "+token
},
body:{
  "name":this.data.name,"email":state.testContext.emailReg,"gender":this.data.gender,"status":this.data.status
    
}   
        }).then((res)=>{
            cy.log(JSON.stringify(res))
expect(res.status).to.eq(201)
expect(res.body).to.have.property('name', this.data.name)
expect(res.body).to.have.property('gender',this.data.gender)
expect(res.body).to.have.property('email',state.testContext.emailReg)
      
        
}).then((res)=>{
  const userid=res.body.id
  //userid
  cy.log("userid -:" +userid)
  // get user from userid
  cy.request({
    method:'GET',
    url:Cypress.env('Baseqaurl2')+"/public/v2/users/"+userid,
    headers:{
      "Authorization":"Bearer "+token
    },  
            }).then((res)=>{
              expect(res.status).to.eq(200)
              expect(res.body).to.have.property('id',userid)
              expect(res.body).to.have.property('name', this.data.name)
              expect(res.body).to.have.property('gender',this.data.gender)
              expect(res.body).to.have.property('status',this.data.status)
              expect(res.body).to.have.property('email',state.testContext.emailReg)
            })
     })

})

})