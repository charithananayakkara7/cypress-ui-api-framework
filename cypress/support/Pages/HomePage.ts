class HomePage {

    private logout: string = ".logout";
    private accountname: string = ".account > span";

    GetLogoutbutton() {
        return cy.get(this.logout)
    }
    Getaccountname() {
        return cy.get(this.accountname)

    }
}

export default HomePage;