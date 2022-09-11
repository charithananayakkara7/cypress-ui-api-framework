class HomePage {

    GetLogoutbutton() {
        return cy.get(".logout")
    }
Getaccountname(){
    return cy.get(".account > span")  

}
}

export default HomePage;