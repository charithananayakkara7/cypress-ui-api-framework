///reference types="Cypress"/>

describe('User Search flow', () => {
  var token = "d4ec336bddecfc419331e2ebb36a90b35f4df8a6fe2d912f115b7c50ac96eafe"
  let pattern = ""
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
    //Generating  random email
    pattern = "Nequeporroquisquamestquidoloremipsumquiadolorsitametconsectetuadipiscivelit2"
    for (var i = 0; i < 10; i++)
      randomtext += pattern.charAt(Math.floor(Math.random() * pattern.length))
    randomemail = randomtext + '@gmail.com',
      //Creating the post request to send the post request
      cy.request({
        method: 'POST',
        url: Cypress.env('Baseqaurl2') + "/public/v2/users",
        headers: {
          "Authorization": "Bearer " + token
        },
        body: {
          "name": this.data.name, "email": randomemail, "gender": this.data.gender, "status": this.data.status

        }
      }).then((res) => {
        // extract the id 
        const userid = res.body.id
        //validating the results
        expect(res.status).to.eq(201)
        expect(res.body).to.have.property('name', this.data.name)
        expect(res.body).to.have.property('gender', this.data.gender)
        expect(res.body).to.have.property('email', randomemail)
        expect(res.status).to.eq(201)
        expect(res.body).to.have.property('id', userid)
        return userid
        //Getting the details relted to the new entry
      }).then((userid) => {
        cy.request({
          method: 'GET',
          url: Cypress.env('Baseqaurl2') + "/public/v2/users?page=1",
          headers: {
            "Authorization": "bearer " + token
          },
        }).then((res) => {
          //checking the id from the array
          for (let i = 0; i < res.body.length; i++) {
            var index0 = res.body[0].id
            var length = res.body.length
            //expect(res.body[i]).to.have.property('id',res.body[i].id)  
          }
          cy.log(JSON.stringify(index0))
          //expect(index0).to.eq(3253)
          expect(length).to.eq(10)
          expect(res.status).to.eq(200)

        }).then((res) => {
          expect(res.status).to.eq(200)
          let count = 1;
          var malecount = 0;
          //getting the gender equal to male count
          for (let i = 0; i < res.body.length; i++) {
            if (res.body[i].gender == 'male') {
              cy.log(count)
              malecount = malecount + count
            }
            var index0 = res.body[0].id
            var length = res.body.length
            //expect(res.body[i]).to.have.property('id',res.body[i].id)  
          }
          //logging details
          cy.log(JSON.stringify(index0))
          cy.log(malecount)
          cy.log(randomemail)
          cy.log("this-is-userid" + userid)

          expect(length).to.eq(10)

        })

      })

  })
})