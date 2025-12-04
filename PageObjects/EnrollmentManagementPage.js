class EnrollmentManagerPage{
    constructor(page){
        this.page =page;
        this.viewEnrollmentsTab = this.page.getByRole('tab', { name: 'View Enrollments' });
        this.enrollLearnerstab = this.page.getByRole('tab', { name: 'Enroll Learners' });
        this.programsbutton = this.page.locator("//div[normalize-space()='Programs']")
        this.searchProgramsButton =this.page.getByRole('textbox', { name: 'Search programs...' });
        this.enrolllearnerToProgrambutton =this.page.getByRole('button', { name: 'Enroll Learners' });
        this.searchUsertextBox = this.page.getByRole('textbox', { name: 'Search Users' });
        this.checkbox = this.page.locator("//button[@aria-checked='false']");
        this.enrollUserButton =this.page.locator('button:has-text("Enroll 1 User(s)")');
    }
    async clickviewEnrollmentsTab (){
        await this.viewEnrollmentsTab.click();

    }
    async clickenrollLearnerstab(){
        await this.enrollLearnerstab.click();
    }
    async clickPrograms(){
        await this.programsbutton.click();
    }
    async searchProgram(program){
        await this.searchProgramsButton.fill(program);
    }
    async clickenrolllearnerToProgrambutton(){
        await this.enrolllearnerToProgrambutton.click();
    }
    async searchUsers(userEmail){
        await this.page.waitForTimeout(2000);
        await this.searchUsertextBox.pressSequentially(userEmail);
    }
    async clickCheckboxforuser(){
        await this.checkbox.click();
    }
    async clickenrollUserButton(){
        await this.enrollUserButton.click();
    }





}module.exports ={EnrollmentManagerPage};