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
test('Create and publish learning path',async({page})=>{
    const poManager=new POManager(page);
    const adminDashBoard=poManager.getAdminDashBoard();
    const learningPathPage= poManager.getLearningPathPage();
    await adminDashBoard.clickLearningPathsModule();
    await learningPathPage.clickCreatePathTab();
    const pathTitle = `LearningPath${faker.datatype.number({ min: 100, max: 999 })}`;
    await learningPathPage.clickCreatePathTab();
    await learningPathPage.enterTitle(pathTitle);
    const pathDescription = faker.lorem.sentence(); 
    await learningPathPage.enterDescription(pathDescription);
    await learningPathPage.selectDifficulty('Beginner');
    const categoryName = 'Automation';
    await learningPathPage.enterCategory(categoryName);
    const courseName = 'course for kane Certification 323';
    await learningPathPage.searchCourses(courseName);
    await learningPathPage.clickPreviewPath();
    await learningPathPage.clickPublishPath();
    await learningPathPage.searchLearningPath(pathTitle);
    await page.waitForTimeout(2000);
    await expect(page.locator('h3', { hasText: pathTitle })).toBeVisible();
});
