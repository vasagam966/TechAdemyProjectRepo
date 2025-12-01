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
test('Test Onboarding Learner,Create a job role and assign Job role to the Learner',async({page})=>{
    const poManager=new POManager(page);
    const adminDashBoard=poManager.getAdminDashBoard(); 
    const coursesPage = poManager.getCoursesAndMappingHubPage();
    // const usermanagement= poManager.getUserManagementPage();
     const programmanagerPage = poManager.getProgramManagerPage();
    // const learnerDashBoard = poManager.getLearnerdashBoard();
    await adminDashBoard.clickCoursesAndMappingHubModule();
    await coursesPage.clickCourseBuilderTab();
    await coursesPage.clickCourseBuilderTab();
    await coursesPage.clickNewCourseButton();
    const courseTitle = `PlaywrightCourse${faker.datatype.number({ min: 100, max: 999 })}`;
    await coursesPage.enterCourseTitle(courseTitle);
    await coursesPage.clickCreateCourseButton();
    await page.waitForTimeout(3000);
    await coursesPage.clickEditButtonForCourse(courseTitle);
    await coursesPage.clickaddModuleButton();
     await page.waitForTimeout(2000);
    await coursesPage.EnterModuleTitle("Video Module");
     await page.waitForTimeout(1000);
    await coursesPage.clicksaveModuleButton();
    await page.waitForTimeout(1000);
    await coursesPage.clickVideoModule();
    await page.waitForTimeout(1000);
    await coursesPage.clickaddVideoButton();
    await page.waitForTimeout(1000);
    await coursesPage.addvideoToTheModule();
    await page.waitForTimeout(1000);
    await coursesPage.clickAddAssessmentButton();
    await page.waitForTimeout(1000);
    await coursesPage.clickSaveCourseButton();
    await page.waitForTimeout(1000);
    await coursesPage.clickPublishCourseButton();
     await page.waitForTimeout(5000);
   await programmanagerPage.clickBackButton();
   await page.reload();
   await page.waitForTimeout(1000);
   await adminDashBoard.clickCoursesAndMappingHubModule();
   await coursesPage.searchCourse(courseTitle);
   await expect(page.locator('h3', { hasText: courseTitle })).toBeVisible();


});