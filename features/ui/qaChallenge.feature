Feature: QA Challenge

Background: 
    Given I open staging deepomatic page in mobile mode
    And I log in using staging credentials

    Scenario: Check language change
        Given I click on the Asset mgt site within Télécom sur étagère
        And I access the settings
        When I change the language by clicking on Change and select Deutsch
        Then I should see the that the screen appears in German