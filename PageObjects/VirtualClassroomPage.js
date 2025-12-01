class VirtualClassroomPage{
    constructor(page){
        this.page =page;
        this.sessionstab = this.page.getByRole('tab', { name: 'Sessions' });
        this.recordingsTab = this.page.getByRole('tab', { name: 'Recordings' });
        this.batchesTab    = this.page.getByRole('tab', { name: 'Batches' });
        this.analyticsTab = this.page.getByRole('tab', { name: 'Analytics' });
        this.createBatchButton= this.page.getByRole('button', { name: 'Create Batch' });
        this.createSessionButton = this.page.getByRole('button', { name: 'Create Session' });
        this.dialog = this.page.getByRole('dialog');
        this.batchNametextBox =this.dialog.locator("//input[@id='batch_name']");
        this.batchdescriptionTextBox =this.dialog.locator('#batch_description');
        this.startdateTextBox=this.page.getByRole('textbox', { name: 'Start Date *' });
        this.enddateTextBox = this.page.getByRole('textbox', { name: 'End Date *' });
        this.createBatchButtonInDialog =this.page.locator("//div[@role='dialog']//button[text()='Create Batch']");
        this.searchusersbox =this.page.getByPlaceholder('Search users by name, email, or department...')
        this.closebutton = this.page.locator("//button[text()='Close']")
        this.sessiontitletextBox =this.page.locator("#title");
        this.sessionDescriptiontextbox = this.page.locator("#description");
        this.instructorDropdown =this.page.getByText('Select instructor', { exact: true });
        this.batchDropdown = this.page.getByText('Select batch', { exact: true });
        this.starttimetextBox =this.page.locator('#start');
        this.endtimeTextBox = this.page.locator('#end');
        this.createSessionButtonInDialog =this.page.locator("//div[@role='dialog']//button[text()='Create Session']");
        this.searchSessionstextBox =this.page.getByRole('textbox', { name: 'Search sessions...' });

    }
    async clickCreateBatchButton(){
        await this.createBatchButton.click();
    }
    async enterBatchTitle(title){
         await this.batchNametextBox.waitFor({ state: 'visible' });
         await this.batchNametextBox.click();
        await this.batchNametextBox.fill(title);
    }
    async enterBatchDescription(description){
        await this.batchdescriptionTextBox.waitFor({ state: 'visible' });
         await this.batchdescriptionTextBox.click();
        await this.batchdescriptionTextBox.fill(description);
    }
    async enterStartdate(startDate){
        await this.startdateTextBox.fill(startDate);
    }
    async enterEnddate(endDate){
        await this.enddateTextBox.fill(endDate);
    }
    async clickCreateBatchButtonInDialogBox() 
    {
    await this.createBatchButtonInDialog.focus();
    await this.page.keyboard.press('Enter');
}

    async clickLearnersButton(batchName) 
    {
    const learnersButton = this.page.locator(
        `//h3[text()='${batchName}']/ancestor::div[contains(@class,'rounded-lg')]//button[normalize-space()='Learners']`
    ).first();
    await learnersButton.click();
}
async clickbatchesTab(){
    await this.batchesTab.click();
}
async searchusers(usermail){
    await this.searchusersbox.fill(usermail);
}
async clickaddUserButton(usermail) 
    {
    const learnersButton = this.page.locator(
        `//p[text()='${usermail}']/../..//button`
    );
    await learnersButton.click();
}
async closedialog(){
    await this.closebutton.click();
}
async clickCreateSessionButton(){
    await this.createSessionButton.click();
}
async entersessionTitle(title){
    await this.sessiontitletextBox.waitFor({ state: 'visible' });
    await this.sessiontitletextBox.click();
    await this.sessiontitletextBox.fill(title);

}
async enterSessionDescription(des){
     await this.sessionDescriptiontextbox.waitFor({ state: 'visible' });
    await this.sessionDescriptiontextbox.click();
    await this.sessionDescriptiontextbox.fill(des);
}
async selectInstructor(instructor){
    await this.instructorDropdown.waitFor({ state: 'visible' });
    await this.instructorDropdown.click();
    await this.page.getByRole('option', { name: instructor, exact: true }).click();

}
async selectBatch(batch){
    await this.batchDropdown.click();
    await this.page.getByRole('option', { name: batch, exact: true }).click();
}
async entersessionStartTime(starttime){
    await this.starttimetextBox.click();
    await this.starttimetextBox.fill(starttime);
}
async entersessionEndTime(endtime){
    await this.endtimeTextBox.click();
    await this.endtimeTextBox.fill(endtime);
}
async clickcreateSessionButtonInDialog(){
    await this.createSessionButtonInDialog.click();
}
 getStartTime() {
    const date = new Date();
    date.setDate(date.getDate() + 1);
    date.setHours(10, 30, 0, 0);
    return date.toISOString().slice(0, 16); // YYYY-MM-DDTHH:mm
}
 getEndTime() {
    const date = new Date();
    date.setDate(date.getDate() + 3);
    date.setHours(11, 30, 0, 0);
    return date.toISOString().slice(0, 16);
}
async searchSessions(sessionName){
    await this.searchSessionstextBox.click();
    await this.searchSessionstextBox.fill(sessionName);
}
async clickSessionsTab(){
    await this.sessionstab.click();
}



}module.exports ={VirtualClassroomPage};