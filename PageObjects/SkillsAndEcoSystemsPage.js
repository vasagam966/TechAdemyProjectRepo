class SkillsAndEcoSystemsPage {
    constructor(page) {
        this.page = page;
        this.manageSkillsTab = this.page.getByRole('tab', { name: 'Manage Skills' });
        this.manageCategoriesTab = this.page.getByRole('tab', { name: 'Manage Categories' });
        this.aiSkillGeneratorTab = this.page.getByRole('tab', { name: 'AI Skill Generator' });
        this.ecosystemViewTab = this.page.getByRole('tab', { name: 'Ecosystem Viewer' });
        this.skillNametextbox = this.page.locator('#skillName');
        this.descriptionTextbox = this.page.locator('#skillDescription');
        this.categoryDropdown = this.page.locator('#skillCategory');
        this.levelDropdown = this.page.locator('#skillLevel');
        this.createSkillButton = this.page.getByRole('button', { name: 'Create Skill' });
        this.categoryNametextbox = this.page.locator('#categoryName');
        this.categorydescriptionTextbox = this.page.locator('#categoryDescription');
        this.createCategoryButton = this.page.getByRole('button', { name: 'Create Category' });
        this.searchSkillsbox = this.page.getByPlaceholder('Search skills...');

    }

    async clickManageSkillsTab() {
        await this.manageSkillsTab.click();
    }
    async clickManageCategoriesTab() {
        await this.manageCategoriesTab.click();
    }
    async clickAiSkillGeneratorTab() {
        await this.aiSkillGeneratorTab.click();
    }
    async clickEcosystemViewTab() {
        await this.ecosystemViewTab.click();
    }
    async enterSkillName(skillName) {
        await this.skillNametextbox.fill(skillName);
    }
    async enterDescription(description) {
        await this.descriptionTextbox.fill(description);
    }
    async selectCategory(category) {
       await this.categoryDropdown.selectOption(category);
        //await categoryOption.click();      
    }
    async selectLevel(level) {
           await this.levelDropdown.selectOption(level);     
    }
    async clickCreateSkill() {
        await this.createSkillButton.click();
    }
    async enterCategoryName(categoryName) {
        await this.categoryNametextbox.fill(categoryName);
    }
    async enterCategoryDescription(description) {
        await this.categorydescriptionTextbox.fill(description);
    }
    async clickCreateCategory() {
        await this.createCategoryButton.click();
    }
    async searchSkills(skillName) {
        await this.searchSkillsbox.fill(skillName);
    }

}
module.exports = { SkillsAndEcoSystemsPage };