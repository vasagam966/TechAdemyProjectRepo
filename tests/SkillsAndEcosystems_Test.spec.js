const {test,expect} = require('@playwright/test');
const {POManager}=require('../PageObjects/POManager');
import { faker } from '@faker-js/faker';
const testdata=JSON.parse( JSON.stringify(require('../TestData/signInPageTestData.json')));

test.beforeEach(async({page})=>{
    const poManager=new POManager(page);
    const signinPage=poManager.getSigninPage();
    await signinPage.navigate(testdata.url);
    await signinPage.enterEmail(testdata.adminusername);
    await signinPage.enterPassword(testdata.password);
    await signinPage.clickSignin();
    await expect(page).toHaveURL("https://skill-assist.ai/QapitolQA/dashboard");
    //await page.waitForTimeout(5000);
});
test('Create category and map skill to category',async({page})=>{
    const poManager=new POManager(page);
    const adminDashBoard=poManager.getAdminDashBoard();
    const skillsAndEcosystemsPage= poManager.getSkillsAndEcosystemsPage();
    await adminDashBoard.clickSkillsAndEcosystemsModule();
    await skillsAndEcosystemsPage.clickManageCategoriesTab();
    const categoryName = `PlaywrightAutomation${faker.number.int({ min: 100, max: 999 })}`;
    await skillsAndEcosystemsPage.enterCategoryName(categoryName);
    const categoryDescription = faker.lorem.sentence();
    await skillsAndEcosystemsPage.enterCategoryDescription(categoryDescription);
    await skillsAndEcosystemsPage.clickCreateCategory();
    await skillsAndEcosystemsPage.clickManageSkillsTab();
    const skillName = `PlaywrightSkill${faker.number.int({ min: 100, max: 999 })}`;
    await skillsAndEcosystemsPage.enterSkillName(skillName);
    const skillDescription = faker.lorem.sentence();
    await skillsAndEcosystemsPage.enterDescription(skillDescription);
    await skillsAndEcosystemsPage.selectCategory(categoryName);
    await skillsAndEcosystemsPage.selectLevel('Beginner');
    await skillsAndEcosystemsPage.clickCreateSkill();
    await skillsAndEcosystemsPage.searchSkills(skillName);
    await page.waitForTimeout(2000);
    await expect(page.locator('h3', { hasText: skillName })).toBeVisible();

});
