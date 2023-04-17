import Page from './base.page.js';

class Seetings extends Page {

    get langChange () { return $('a[data-test="change-language"]') }
    get deutsch () { return $('button[data-test="Deutsch-language"]')}
    get english () { return $('button[data-test="English-language"]')}
    get francais () { return $('button[data-test="Français-language"]')}
    get espanol () { return $('button[data-test="Español-language"]')}
    get currentLanguage () { return $('span[data-test="current-language"]')}

    async changeLanguage (language) {
        await this.langChange.waitForClickable({timeout: 5000});
        await this.langChange.click();
        await this[language].waitForClickable({timeout: 5000});
        await this[language].click()
    }
}

export default new Seetings();