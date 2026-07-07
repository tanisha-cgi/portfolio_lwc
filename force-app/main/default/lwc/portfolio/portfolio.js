import { LightningElement } from 'lwc';

export default class Portfolio extends LightningElement {
    account = {
        Name: 'Tanisha Sharma',
        Professional_Title__c: 'SDE(Intern)',
        Description:
            'I am deeply intrested in computer vision and its implementation in real world having knowledge in data visualization and data scientist tech stack.',
        Skills__c: 'opencv , streamlit , facenet',
        Email__c: 'tanisha.sharma@cginfinity.com',
        Phone: '987654321',
        Website: 'Portfolio',
        LinkedIn_URL__c: 'tanisha@linkedin',
        GitHub_URL__c: 'tanisha@git',
        Photo_URL__c: ''
    };
    error = undefined;

    get hasAccount() {
        return this.account != null;
    }

    get showEmptyState() {
        return !this.hasAccount && !this.error;
    }

    get skills() {
        if (!this.account || !this.account.Skills__c) {
            return [];
        }
        return this.account.Skills__c.split(',')
            .map((skill) => skill.trim())
            .filter((skill) => skill.length > 0)
            .map((skill, index) => ({ label: skill, key: index }));
    }

    get emailLink() {
        return this.account && this.account.Email__c ? `mailto:${this.account.Email__c}` : '';
    }
}