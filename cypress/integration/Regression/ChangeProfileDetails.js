///reference types="Cypress"/>
describe('User login functionality verification', () => {

    it('Test the profle details chanages', function () {
       cy.request({
method:'POST',
url:' https://service.vocalizemysite.com/api/v1/user/auth',
headers:{
    //'Authorization':'bearer' +accessToken

},
body:{
    "email":"charithananayakkara7@gmail.com","password":"Test1234%"
    
}   
        }).then((res)=>{
expect(res.status).to.eq(200)
        })

})
})
