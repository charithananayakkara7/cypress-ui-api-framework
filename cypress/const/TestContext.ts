export class TestContext {
  private _emailReg: string;
  private _password: string;


  public get emailReg(): string {
    return this._emailReg;
  }
  public set emailReg(emailReg: string) {
    this._emailReg = emailReg;
  }

  public get Password(): string {
    return this._password;
  }
  public set Password(password: string) {
    this._password = password;
  }
}
