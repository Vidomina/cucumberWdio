import Page from './base.page.js';

class SiteSelector extends Page {

    get expansionPanel () { return $('#mat-expansion-panel-header-0[data-test="organization"]') }
    get assetMgt () { return $('button[data-test="gotoSite"]') }

    async expand () {
        await this.expansionPanel.click()
    }

    async selectassetMgt () {
        await this.assetMgt.waitForClickable({timeout: 5000});
        await this.assetMgt.click()
    }
}

export default new SiteSelector();