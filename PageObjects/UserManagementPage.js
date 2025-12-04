import { faker } from '@faker-js/faker';
class UserManagementPage {
    constructor(page) {
        this.page = page;
        this.usersTab = this.page.getByRole('tab', { name: 'Users' });
        this.onboardingTab = this.page.getByRole('tab', { name: 'Onboarding' });
        this.rolesTab = this.page.getByRole('tab', { name: 'Roles' });
        this.permissionsTab = this.page.getByRole('tab', { name: 'Permissions' });
        this.jobRoleAssignmentTab = this.page.getByRole('tab', { name: 'Job Role Assignment' });
        this.analyticsTab = this.page.getByRole('tab', { name: 'Analytics' });
        this.emailTextbox = this.page.locator('#email');
        this.firstNameTextbox = this.page.locator('#firstName');
        this.lastNameTextbox = this.page.locator('#lastName');
        this.roleDropdown = this.page.locator('button[role="combobox"]', { hasText: 'Learner' });
        this.departmentDropdown = this.page.locator('button[role="combobox"]', {hasText: 'Select department'});

        this.passwordTextbox = this.page.locator('#password');
        this.createUserAccountButton = this.page.getByRole('button', { name: 'Create User Account' });
        this.doneButton = this.page.getByRole('button', { name: 'Done' });
        this.createJobRoleButton = this.page.getByRole('button', { name: 'Create Job Role' });
        this.roleNameTextBox = this.page.getByRole('textbox', { name: 'Role Name' });
        this.roleDescriptionBox = this.page.getByRole('textbox', { name: 'Description' });
        this.departmentTextBox = this.page.getByRole('textbox', { name: 'Department' });
        this.createJobrolebuttonInDialog= this.page.locator("//div[@role='dialog']//button[text()='Create Job Role']");
        this.selectJobRoleDropdown =this.page.getByText('Select job role', { exact: true });
        this.assignJobRoleButton = this.page.locator("//button[normalize-space()='Assign']");
        this.searchUsersTextBox = this.page.getByRole('textbox', { name: 'Search by name, email, or department...' });
        this.jobRoleDropdown = this.page.locator("//button[@role='combobox']");
    }
    async clickUsersTab() {
        await this.usersTab.click();
    }   
    async clickOnboardingTab() {
        await this.onboardingTab.click();
    }
    async clickRolesTab() {
        await this.rolesTab.click();
    }
    async clickPermissionsTab() {
        await this.permissionsTab.click();
    }
    async clickJobRoleAssignmentTab() {
        await this.jobRoleAssignmentTab.click();
    }
    async clickAnalyticsTab() {
        await this.analyticsTab.click();
    }
    async enterEmail(email) {
        await this.emailTextbox.fill(email);
    }
    async enterFirstName(firstName) {
        await this.firstNameTextbox.fill(firstName);
    }
    async enterLastName(lastName) {
        await this.lastNameTextbox.fill(lastName);
    }
    async selectRole(role) {
        await this.roleDropdown.click();
        const roleOption = this.page.getByRole('option', { name: role, exact: true });
        await roleOption.click();      
    }
    async selectDepartment(department) {
        await this.departmentDropdown.click();
        const departmentOption = this.page.getByRole('option', { name: department });
        await departmentOption.click();      
    }
    async enterPassword(password) {
        await this.passwordTextbox.fill(password);
    }   
    async clickCreateUserAccount() {
        await this.createUserAccountButton.click();
    }
    async clickDone() {
        await this.doneButton.click();
    }
    async createJobRole(jobrole){
        await this.jobRoleAssignmentTab.click();
        await this.createJobRoleButton.click();
        await this.roleNameTextBox.fill(jobrole);
        await this.roleDescriptionBox.fill("des");
        await this.departmentTextBox.fill("Engineering");
        await this.createJobrolebuttonInDialog.click();

    }
    async assignJobRoleToUser(user,jobrole){
        await this.searchUsersTextBox.click();
        await this.searchUsersTextBox.fill(user);
        await this.jobRoleDropdown.click();
        await this.page.locator('[role="option"]',{hasText: jobrole}).click();
        await this.assignJobRoleButton.click();

    }
    async createALearner(useremail){
        await this.clickOnboardingTab();
        await this.enterEmail(useremail);
        await this.enterFirstName("Test");
        await this.enterLastName("Automation");
        await this.selectRole("Learner");
        await this.selectDepartment('Engineering');
        await this.enterPassword("Test@123");
        await this.clickCreateUserAccount();
        await this.clickDone();
        
    }

}
module.exports = { UserManagementPage };
