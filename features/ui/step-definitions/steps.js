import { Given, When, Then} from '@cucumber/cucumber';
import loginPage from '../pageobjects/login.page.js';
import siteSelectorPage from '../pageobjects/siteSelector.page.js';
import workOrdersPage from '../pageobjects/workOrders.page.js';
import settingsPage from '../pageobjects/settings.page.js';
import credentials from '../../../credentials.js';

Given('I open staging deepomatic page in mobile mode', async () => {
    await loginPage.open();});

Given('I log in using staging credentials', async () => {
    await loginPage.username.setValue(credentials.username);
    await loginPage.password.setValue(credentials.password);
    await loginPage.submit();
});

Given('I click on the Asset mgt site within Télécom sur étagère', async () => {
    await siteSelectorPage.expand();
    await siteSelectorPage.selectassetMgt();
});

Given('I access the settings', async () => {
    await workOrdersPage.openSettings();
});

When('I change the language by clicking on Change and select Deutsch', async () => {
    await settingsPage.changeLanguage('deutsch');

});

Then('I should see the that the screen appears in German', async () => {
    await expect(settingsPage.currentLanguage).toHaveText('Deutsch');
});