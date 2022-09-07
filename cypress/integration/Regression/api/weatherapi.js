///reference types="Cypress"/>

describe('Validating  weather api', () => {
    var apikey = "0f83e861b7969f3cb12e7c5af42f4592"
    beforeEach(function () {
        // root-level hook
        // "this" points at the test context object
        cy.fixture('weather.json').then((data) => {
            // "this" is still the test context object
            this.data = data

        })
    })
    it('Getting the weather details', function () {
        //get request to find the weather details
        cy.request({
            method: 'GET',
            url: Cypress.env('Baseqaurl4') + "/data/2.5/weather?q=London,uk&appid=" + apikey,
        }).then((res) => {
            //validating results
            expect(res.status).to.eq(200)
            expect(res.body.weather.length).to.eq(1)

        })

    })
})