class LearningPathPage{
    constructor(page){
        this.page=page;
        this.browsepathtab=this.page.getByRole('tab',{name:'Browse Paths'});
        this.createpathtab=this.page.getByRole('tab',{name:'Create Path'});
        this.titlefield=this.page.locator('#title');
        this.descriptionfield=this.page.locator('#description');
        this.difficultyDropdown=this.page.locator("button[role='combobox']:has-text('Beginner')");
        this.categorytextbox=this.page.locator('#category');
        this.searchCoursestextBox=this.page.getByPlaceholder('Search courses...');
        this.previewpathbutton=this.page.getByRole('button',{name:'Preview Path',exact: true});
        this.publishpathbutton=this.page.getByRole('button',{name:'Publish Path',exact: true});
        this.searchLearningPathTextBox=this.page.getByPlaceholder('Search learning paths...');
    }
    async clickBrowsePathTab(){
        await this.browsepathtab.click();
    }
    async clickCreatePathTab(){
        await this.createpathtab.click();
    }
    async enterTitle(title){
        await this.titlefield.fill(title);
    }
    async enterDescription(description){
        await this.descriptionfield.fill(description);
    }
    async selectDifficulty(level){
        await this.difficultyDropdown.click();
        await this.page.getByRole('option', { name: level, exact: true }).click();
    }   
    async enterCategory(category){
        await this.categorytextbox.fill(category);
    }
    async searchCourses(courseName){
        await this.searchCoursestextBox.fill(courseName);
        await this.page.waitForTimeout(2000);
        await this.page.getByText(courseName).click();
    }
    async clickPreviewPath(){
        await this.previewpathbutton.click();
    }   
    async clickPublishPath(){
        await this.publishpathbutton.click();
    }
    async searchLearningPath(pathName){
        await this.searchLearningPathTextBox.fill(pathName);
    }

}module.exports={LearningPathPage};