class LoginPage {

    GetFooterelement() {
        return cy.get("._blank")
    }

    Getemailboxelement() {
        return cy.get("input[id='email']")
    }

    Getpasswordboxelement() {
        return cy.get("input[id='passwd']")
    }

    GetSiginbuttonelement() {
        return cy.get(".icon-lock")
    }

    GetSiginlink() {
        return cy.get(".login")
    }


    GetH1() {
        return cy.get("h1")

    }

}

export default LoginPage;