class AssignmentPage{
    constructor(page){
        this.page = page;
        this.createAssignmentButton =this.page.getByRole('button', { name: 'Create Assignment' });
        this.titleTextBox =this.page.getByRole('textbox', { name: 'Assignment title' });
        this.descriptionTextBox = this.page.getByRole('textbox', { name: 'Brief overview of the assignment' });
        this.instructionsTextBox = this.page.getByRole('textbox', { name: 'Detailed instructions for learners' });
        this.submissionTypeDropdown = this.page.getByRole('combobox', { name: 'Text & File' });
        this.courseDropdown =this.page.getByRole('combobox', { name: 'Select a course (optional)' });
        this.dateInputBox = this.page.locator('input[type="datetime-local"]');
        this.batchDropdown = this.page.getByRole('combobox', { name: 'Select batch' });
        this.createAssignmentButtonInDialog = this.page.locator("//div[@role='dialog']//button[text()='Create Assignment']");
        this.aiGenerationTab =this.page.getByRole('tab', { name: 'AI Generation' });
        this.fileuploadButton = this.page.locator("//input[@type='file']");
    }

    async clickcreateAssignmentButton(){
        await this.createAssignmentButton.click();
    }
    async enterAssignmentTitle(title){
        await this.titleTextBox.click();
        await this.titleTextBox.fill(title);
    }
    async enterAssignmentDescription(des){
        await this.descriptionTextBox.click();
        await this.descriptionTextBox.fill(des);
    }
    async clickcreateAssignmentButtonInDialog(){
        await this.createAssignmentButtonInDialog.click();
    }


}module.exports ={AssignmentPage};