/**
 * Controller for the `portfolio` LWC.
 * Retrieves the single Account record flagged as the portfolio record.
 */
public with sharing class PortfolioController {
    @AuraEnabled(cacheable=true)
    public static Account getPortfolioAccount() {
        List<Account> accounts = [
            SELECT Id, Name, Phone, Website, Description, Professional_Title__c,
                   Email__c, Skills__c, LinkedIn_URL__c, GitHub_URL__c, Photo_URL__c
            FROM Account
            WHERE Is_Portfolio_Account__c = TRUE
            WITH USER_MODE
            LIMIT 1
        ];
        return accounts.isEmpty() ? null : accounts[0];
    }
}