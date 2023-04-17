Feature: QA Challenge API

Scenario: Check historical conversion rate
    When I request the conversion rate was on <date>, between the <from> and the <to>
    Then I receive response 

    Examples:
        | date | from | to |
        | '2020-01-02' | 'EUR' | 'USD' |