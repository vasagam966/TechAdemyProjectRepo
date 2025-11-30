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
// Initialize locators and elements specific to the User Management Page here
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
}
module.exports = { UserManagementPage };
