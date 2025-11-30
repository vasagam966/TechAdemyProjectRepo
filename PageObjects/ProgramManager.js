const Module = require("module");

class ProgramManagerPage{
    constructor(page){
        this.page=page;
        this.createProgramButton = this.page.locator('button:has-text("Create Program")');
        this.programtitletextbox = this.page.locator('#title');
        this.programstartdatetextbox = this.page.locator('#start_date');
        this.programenddatetextbox =this.page.locator('#end_date');
        this.descriptiontextbox = this.page.locator('#description');
        this.planningmodedropdown = this.page.locator('button:has-text("Daily Planning")');
        this.nextButton = this.page.locator('button:has-text("Next")');
        this.blockTitleTextBox =this.page.getByRole('textbox', { name: 'Block Title *' });
        this.blockdescriptionTextBox =this.page.getByRole('textbox', { name: 'Description' });
        this.blockTypeDropdown =this.page.locator('button:has-text("Self-Paced Learning")');
        this.addBlockButton = this.page.locator("//button[text()='Add']");
        this.mapcontentIcon =this.page.getByTitle('Map content');
        this.addbuttonForDay1 = this.page.locator("//h3[text()='1']/../../button");
        this.addbuttonForDay2 = this.page.locator("//h3[text()='2']/../../button");
        this.createProgramButton=this.page.getByRole('button', { name: 'Create Program' })
        this.searchProgramTextBox = this.page.getByRole('textbox', { name: 'Search by title, description, engagement model, or difficulty...' });
        this.backbutton =this.page.getByText('← Back', { exact: true });
    }

    async clickCreateProgramButton(){
        await this.createProgramButton.click();
    }
    async enterProgramTitle(title){
        await this.programtitletextbox.fill(title);
    }
    async enterProgramStartDate (startDate){
        await this.programstartdatetextbox.fill(startDate);
    }
    async enterProgramEndDate(endDate){
        await this.programenddatetextbox.fill(endDate)
    }
getStartDate() {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  return date.toISOString().split('T')[0];
}
getEndDate() {
  const date = new Date();
  date.setDate(date.getDate() + 3);
  return date.toISOString().split('T')[0];
}
async enterProgramDescription(descrption){
    await this.descriptiontextbox.fill(descrption);
}
async selectPlanningMode(plan){
    await this.planningmodedropdown.click();
    await this.page.locator('[role="option"]', {
        hasText: plan
    }).click();
}
async clicknextButton(){
    await this.nextButton.click();
}
async clickAddButtonForDay(day) {
    // 1. Find the specific row using unique classes
    const dayRow = this.page.locator('.flex.items-start.justify-between')
        // 2. Filter to find the one containing the specific Day header
        .filter({ has: this.page.getByRole('heading', { name: day }) });

    // 3. Click the button inside that specific row
    await dayRow.getByRole('button').click();
}
async enterblockTitle(title){
    await this.blockTitleTextBox.fill(title);
}
async enterBlockDescription(Description){
    await this.blockdescriptionTextBox.fill(Description);
}
async selectBlockType(type){
    await this.blockTypeDropdown.click();
    await this.page.locator('[role="option"]',{hasText: type}).click();
}
async clickAddBlockButton(){
    this.addBlockButton.click();
}
async mapCourseToTheBlock(){
    await this.mapcontentIcon.click();
    await this.page.getByText('Beginner’s course for .NET').click();
    await this.page.getByText('Add Entire Course').click();
}
async clickAddblockButtonForDay1(){
    await this.addbuttonForDay1.click();
}
async mapAssignmentToTheBlock(){
    await this.mapcontentIcon.click();
    await this.page.getByText('24n assign1', { exact: true }).click();
    //await this.page.getByText('Add Entire Course').click();
}
async clickAddblockButtonForDay2(){
    await this.addbuttonForDay2.click();
}
async mapAssessmentToTheBlock(){
    await this.mapcontentIcon.click();
    await this.page.locator('h4:has-text("adaptive assessment")').click();
    //await this.page.getByText('Add Entire Course').click();
}
async clickCreateProgramButton(){
    await this.createProgramButton.click();
}
async searchProgram(program){
    await this.searchProgramTextBox.fill(program);
}
async clickBackButton(){
    await this.backbutton.click();
}

}module.exports = {ProgramManagerPage};