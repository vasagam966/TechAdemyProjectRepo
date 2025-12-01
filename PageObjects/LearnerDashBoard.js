const { expect } = require('@playwright/test');

class LearnerDashBoardPage{
    constructor(page){
        this.page = page;
        this.overviewTab =this.page.getByRole('tab', { name: 'Overview' });
        this.myLearningTab = this.page.getByRole('tab', { name: 'My Learning' });
        this.sessionsTab =this.page.getByRole('tab', { name: 'Sessions' });
        this.pathsTab =this.page.getByRole('tab', { name: 'Paths' });
        this.rolestab =this.page.getByRole('tab', { name: 'Roles' });
    }

    async clickRolesTab(){
        this.rolestab.click();
    }
    async verifyJobRoleCardVisible(jobRole) {
  await expect(
    this.page.locator(`//div[contains(@class,'rounded-lg')]//div[contains(text(),'${jobRole}')]`).first()
  ).toBeVisible({ timeout: 40000 });
}


}module.exports={LearnerDashBoardPage};