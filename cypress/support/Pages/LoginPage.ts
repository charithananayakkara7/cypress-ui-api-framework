class LoginPage {

    private footer: string = "._blank";
    private email: string = "input[id='email']";
    private password: string = "input[id='passwd']";
    private signin: string = ".icon-lock";
    private signinlink: string = ".login";
    private h1: string = "h1";

    GetFooterelement() {
        return cy.get(this.footer)
    }

    Getemailboxelement() {
        return cy.get(this.email)
    }

    Getpasswordboxelement() {
        return cy.get(this.password)
    }

    GetSiginbuttonelement() {
        return cy.get(this.signin)
    }

    GetSiginlink() {
        return cy.get(this.signinlink)
    }


    GetH1() {
        return cy.get(this.h1)

    }

}

export default LoginPage;