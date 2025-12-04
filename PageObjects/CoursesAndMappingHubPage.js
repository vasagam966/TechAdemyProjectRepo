class CoursesAndMappingHubPage{
    constructor(page){
        this.page = page;
        this.browseCoursesTab = this.page.locator("//button[text()='Browse Courses']");
        this.courseBuilderTab =this.page.getByRole('tab', { name: 'Course Builder' });
        this.skillMappingTab = this.page.getByRole('tab', { name: 'Skills Mapping' });
        this.roleMappingTab = this.page.getByRole('tab', { name: 'Roles Mapping' });
        this.bulkOperationsTab =this.page.getByRole('tab', { name: 'Bulk Operations' });
        this.newCoursebutton = this.page.getByRole('button', { name: 'New Course' });
        this.courseTitleTextBox =this.page.getByRole('textbox', { name: 'Course Title *' });
        this.courseDescriptionTextBox = this.page.getByRole('textbox', { name: 'Description' });
        this.instructorDropDowwn =this.page.getByRole('combobox', { name: 'Select instructor' });
        this.createCourseButton =this.page.getByRole('button', { name: 'Create Course' });
        this.addModuleButton = this.page.getByRole('button', { name: 'Add Module' });
        this.moduleTitleTextBox = this.page.getByRole('textbox', { name: 'e.g., Introduction to React' });
        this.saveModuleButton = this.page.getByRole('button', { name: 'Save Module' });
        this.videomodule = this.page.getByText('Module 1: Video Module', { exact: true });
        this.addVideoButton = this.page.getByRole('button', { name: 'Add Video' });
        this.videoTitleTextBox = this.page.getByRole('textbox', { name: 'e.g., Introduction Video' });
        this.videoDescriptionTextBox = this.page.getByRole('textbox', { name: 'Brief description of this content' })
        this.browseAzureStroageButton = this.page.getByRole('button', { name: 'Browse Azure Storage' });
        this.addContentButton = this.page.getByRole('button', { name: 'Add Content' });
        this.addAssessmentButton = this.page.getByRole('button', { name: 'Add Assessment' });
        this.saveCourseButton = this.page.getByRole('button', { name: 'Save Course' });
        this.publishCourseButton = this.page.getByRole('button', { name: 'Publish Course' });
        this.searchCoursestextBox = this.page.getByRole('textbox', { name: 'Search courses...' });
    }
    async clickCourseBuilderTab(){
       await this.courseBuilderTab.click();
    }
    async clickNewCourseButton(){
       await this.newCoursebutton.click();
    }
    async enterCourseTitle(title){
        await this.courseTitleTextBox.click();
        await this.courseTitleTextBox.fill(title);
        await this.courseDescriptionTextBox.click();
        await this.courseDescriptionTextBox.fill("des");
    }
    async clickCreateCourseButton(){
        this.createCourseButton.click();
    }
    async clickEditButtonForCourse(courseName) {
    const courseCard = this.page
        .locator("//div[@class='rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col']")
        .filter({ hasText: courseName });

    //await courseCard.waitFor({ state: 'visible', timeout: 30000 });

    const editButton = courseCard.getByRole('button', { name:'Edit' });

    await editButton.click();
}
async EnterModuleTitle(title){
   await this.moduleTitleTextBox.fill(title);
}
async clickaddModuleButton(){
    await this.addModuleButton.click();
}
async clicksaveModuleButton(){
    await this.saveModuleButton.click();
}
async clickVideoModule(){
    await this.videomodule.click();
}
async clickaddVideoButton(){
    await this.addVideoButton.click();
}
async addvideoToTheModule(){
    await this.videoTitleTextBox.fill("Module Video");
    await this.videoDescriptionTextBox.fill("Des");
    await this.browseAzureStroageButton.click();
    await this.page.getByText('02-Jan-2020', { exact: true }).click();
    await this.page.getByText('C11986', { exact: true }).click();
    await this.page.getByText('9781786466075', { exact: true }).click();
    await this.page.getByText('9781786466075-video1_1.mp4', { exact: true }).click();
    await this.addContentButton.click();
}
async clickAddAssessmentButton(){
    await this.addAssessmentButton.click();
    await this.page.getByText('1 Automation Assessment', { exact: true }).first().click();
}
async clickSaveCourseButton (){
    await this.saveCourseButton.click();
}
async clickPublishCourseButton(){
    await this.publishCourseButton.click();
}
async searchCourse(courseName){
    await this.searchCoursestextBox.fill(courseName);
}

}module.exports ={CoursesAndMappingHubPage};