import Page from './base.page.js';

class WorkOrders extends Page {

    get settings () { return $('a[class="setting-btn"]') }

    async openSettings () {
        await this.settings.waitForClickable({timeout: 10000});
        await this.settings.click()
    }
}

export default new WorkOrders();