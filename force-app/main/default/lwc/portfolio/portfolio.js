import { LightningElement } from 'lwc';

export default class Portfolio extends LightningElement {
    
    account = {
        Name: 'Tanisha Sharma',
        Professional_Title__c: 'SDE Intern ',
        Description:
            'I am deeply interested in computer vision and its real-world implementation. ' +
            'Skilled in data visualisation and the data-science tech stack. ',
        
        Skills__c : 'OpenCV, Streamlit, FaceNet, Python, Salesforce LWC, Apex, JavaScript',
        Email__c: 'tanisha.sharma@cginfinity.com',
        Phone: '+91 98765 43210',
        Website: 'https://your-portfolio-site.com',   
        LinkedIn_URL__c: 'https://linkedin.com/in/tanisha-sharma',  
        GitHub_URL__c: 'https://github.com/tanisha-cgi',         
        
    };


    projects = [
        {
            id: 1,
            title: 'Face Recognition Attendance',          
            description: 'Automated attendance system using FaceNet and OpenCV with real-time detection.',
            tech: 'Python · OpenCV · FaceNet',
            
        },
        {
            id: 2,
            title: 'LWC Portfolio App',                   
            description: 'Salesforce Lightning Web Component portfolio deployed on a scratch org.',
            tech: 'Salesforce · LWC · Apex',
            link: '#'
        },
       
    ];

    experience = [
        {
            id: 1,
            role: 'SDE Intern',                            
            company: 'CG Infinity',                        
            duration: 'Jan 2025 – Present',               
            description: 'Building Salesforce LWC components, Apex controllers, and custom objects for client portfolios.'
        },
        
    ];

    education = [
        {
            id: 1,
            degree: 'B.Tech – Computer Science & Engineering',  
                 
            year: '2022 – 2026',
            grade: 'CGPA: 8.56'                              
        }
    ];

    certifications = [
        {
            id: 1,
            name: 'Certificate 1',   
            issuer: 'abc',
            year: '2025'
        },
        
    ];

    error = undefined;


    get hasAccount() {
        return this.account != null;
    }

    get showEmptyState() {
        return !this.hasAccount && !this.error;
    }

    get skills() {
        if (!this.account || !this.account.Skills__c) return [];
        return this.account.Skills__c.split(',')
            .map((s) => s.trim())
            .filter((s) => s.length > 0)
            .map((s, i) => ({ label: s, key: i }));
    }

    get emailLink() {
        return this.account?.Email__c ? `mailto:${this.account.Email__c}` : '';
    }
}
