class AIAssessmentsPage{
    constructor(page){
        this.page = page;
        this.dashboardTab = this.page.getByText('Dashboard', { exact: true });
        this.assessmentsTab = this.page.getByRole('tab', { name: 'Assessments' });
        this.createNewTab = this.page.getByText('Create New', { exact: true });
        this.contentLibraryTab = this.page.getByText('Content Library', { exact: true });
        this.standardAssessment = this.page.locator("//h3[normalize-space()='Standard Assessment']");
        this.codingAssessment = this.page.locator('h3:has-text("Coding Assessment")');
        this.projectAssessment =this.page.getByText('Project Assessment', { exact: true });
        this.AiGenerated = this.page.getByText('Project Assessment', { exact: true });
        this.assessmentTitleTextBox = this.page.getByRole('textbox', { name: 'Assessment Title *' });
        this.targetSkillTextBox = this.page.getByRole('textbox', { name: 'Target Skill *' });
        this.assessmentTypeDropdown = this.page.locator("//select[@id='type']");
        this.generateStandardAssessmentButton = this.page.getByRole('button', { name: 'Generate Standard Assessment' });
        this.searchAssessmentsTextBox = this.page.getByRole('textbox', { name: 'Search assessments...' });
        this.projectAssessmentDescription = this.page.locator("//div[text()='Describe what the learner will build...']/..");
        this.createProjectAssessmentButton = this.page.getByRole('button', { name: 'Create Project Assessment' });
        this.projectTitleTextBox = this.page.getByRole('textbox', { name: 'Project Title' });
        this.requirementsTextBox = this.page.getByRole('textbox', { name: 'Requirements *' });
        this.createCodingAssessment = this.page.getByRole('button', { name: 'Create Coding Assessment' });
    }   
    async clickCreateNewTab(){
        await this.createNewTab.click();
    }
    async ClickStandardAssessment(){
        await this.standardAssessment.click();
    }
    async enterAssessmentTitle(title){
        await this.assessmentTitleTextBox.click();
        await this.assessmentTitleTextBox.fill(title);
    }
    async enterTargetSkill(Skill){
        await this.targetSkillTextBox.click();
        await this.targetSkillTextBox.fill(Skill);
    }
    async selectassessmentType(type){
        await this.assessmentTypeDropdown.selectOption({ label: type })
    }
    async clickgenerateStandardAssessmentButton(){
        await this.generateStandardAssessmentButton.click();
    }
    async searchAssessments(assessment){
        await this.searchAssessmentsTextBox.fill(assessment);
    }
    async clickassessmentsTab(){
        await this.assessmentsTab.click();
    }
    async enterProjectDesscription(des){
       await this.projectAssessmentDescription.click();
       await this.page.keyboard.type("des");
    }
    async clickCreateProjectAssessment(){
        await this.createProjectAssessmentButton.click();
    }
    async clickprojectAssessment(){
        await this.projectAssessment.click();
    }
    async enterProjectTitle(title){
        await this.projectTitleTextBox.click();
        await this.projectTitleTextBox.fill(title);
    }
    async clickCodingAssessment(){
        await this.codingAssessment.click();
    }
    async fillRequirements(requirements){
        await this.requirementsTextBox.click();
        await this.requirementsTextBox.fill(requirements);
    }
    async clickcreateCodingAssessment(){
        await this.createCodingAssessment.click();
    }

}module.exports ={AIAssessmentsPage};