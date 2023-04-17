import Page from './base.page.js';

class LoginPage extends Page {

    get username () { return $('#username') }
    get password () { return $('#password') }
    get signInBtn () { return $('form input[type="submit"]') }

    async open () {
        await super.open('https://staging.vesta.deepomatic.com/');
    }

    async submit () {
        await this.signInBtn.click()
    }

}

export default new LoginPage();