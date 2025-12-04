const {test,expect} = require('@playwright/test');
const {POManager}=require('../PageObjects/POManager');
import { faker } from '@faker-js/faker';
const testdata=JSON.parse( JSON.stringify(require('../TestData/signInPageTestData.json')));



test.beforeEach(async({page})=>{
    const poManager=new POManager(page);
    const signinPage=poManager.getSigninPage();
    await signinPage.navigate(testdata.url);
    await signinPage.enterEmail(testdata.adminusername2);
    await signinPage.enterPassword(testdata.password);
    await signinPage.clickSignin();
    await expect(page).toHaveURL("https://skill-assist.ai/QapitolQA/dashboard");
    //await page.waitForTimeout(5000);
});
test('Test Creating Standard Assessment',async({page})=>{
     const poManager=new POManager(page);
    const adminDashBoard=poManager.getAdminDashBoard();
    const aiAssessmentPage = poManager.getAIAssessmentPage();
    await adminDashBoard.clickAiAssessmentsModule();
    await aiAssessmentPage.clickCreateNewTab();
    await aiAssessmentPage.ClickStandardAssessment();
    const AssessmentTitle = `PlaywrightStandardAssessment${faker.datatype.number({ min: 100, max: 999 })}`;
    await aiAssessmentPage.enterAssessmentTitle(AssessmentTitle);
    await aiAssessmentPage.enterTargetSkill("Playwright Automation");
    await aiAssessmentPage.selectassessmentType("Multiple Choice");
    await aiAssessmentPage.clickgenerateStandardAssessmentButton();
    await aiAssessmentPage.clickassessmentsTab();
    await aiAssessmentPage.searchAssessments(AssessmentTitle);
    await expect(page.locator('h3', { hasText: AssessmentTitle })).toBeVisible();

});
test('Test Creating Project Assessment',async({page})=>{
     const poManager=new POManager(page);
    const adminDashBoard=poManager.getAdminDashBoard();
    const aiAssessmentPage = poManager.getAIAssessmentPage();
    await adminDashBoard.clickAiAssessmentsModule();
    await aiAssessmentPage.clickCreateNewTab();
    await aiAssessmentPage.clickprojectAssessment();
    const AssessmentTitle = `PlaywrightStandardAssessment${faker.datatype.number({ min: 100, max: 999 })}`;
    await aiAssessmentPage.enterProjectTitle(AssessmentTitle);
    await aiAssessmentPage.enterProjectDesscription("des")
    await aiAssessmentPage.clickCreateProjectAssessment();
    await aiAssessmentPage.clickassessmentsTab();
    await aiAssessmentPage.searchAssessments(AssessmentTitle);
    await expect(page.locator('h3', { hasText: AssessmentTitle })).toBeVisible();

});
test('Test Creating Coding Assessment',async({page})=>{
     const poManager=new POManager(page);
    const adminDashBoard=poManager.getAdminDashBoard();
    const aiAssessmentPage = poManager.getAIAssessmentPage();
    await adminDashBoard.clickAiAssessmentsModule();
    await aiAssessmentPage.clickCreateNewTab();
    await aiAssessmentPage.clickCodingAssessment();
    const AssessmentTitle = `PlaywrightCodingAssessment${faker.datatype.number({ min: 100, max: 999 })}`;
    await aiAssessmentPage.enterAssessmentTitle(AssessmentTitle);
    await aiAssessmentPage.enterTargetSkill("Playwright Automation");
    await aiAssessmentPage.fillRequirements(faker.lorem.sentence());
    await aiAssessmentPage.clickcreateCodingAssessment();
    await page.waitForTimeout(5000);
    await aiAssessmentPage.clickassessmentsTab();
    await aiAssessmentPage.searchAssessments(AssessmentTitle);
    await expect(page.locator('h3', { hasText: AssessmentTitle })).toBeVisible();

});
