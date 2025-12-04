const {test,expect} = require('@playwright/test');
const {POManager}=require('../PageObjects/POManager');
import { faker } from '@faker-js/faker';
const testdata=JSON.parse( JSON.stringify(require('../TestData/signInPageTestData.json')));
const learner1 =faker.internet.email();


test.beforeEach(async({page})=>{
    const poManager=new POManager(page);
    const signinPage=poManager.getSigninPage();
    await signinPage.navigate(testdata.url);
    await signinPage.enterEmail(testdata.adminusername2);
    await signinPage.enterPassword(testdata.password);
    await signinPage.clickSignin();
    await expect(page).toHaveURL("https://skill-assist.ai/QapitolQA/dashboard");
    const adminDashBoard=poManager.getAdminDashBoard();
    const usermanagement= poManager.getUserManagementPage();
    await adminDashBoard.clickUserManagementModule();
    await usermanagement.createALearner(learner1);
    //await page.waitForTimeout(5000);
});

test(' Test Create New Program',async({page})=>{
const poManager=new POManager(page);
const signinPage=poManager.getSigninPage();
let adminDashBoard=poManager.getAdminDashBoard();
let programmanagerPage= poManager.getProgramManagerPage();
let enrollmentmanagerPage=poManager.getenrollmentManagementPage()
await programmanagerPage.clickBackButton();
adminDashBoard.clickProgramManagerModule();
const programTitleTitle = `PlaywrightProgram${faker.datatype.number({ min: 100, max: 999 })}`;
await programmanagerPage.clickCreateProgramButton();
await programmanagerPage.enterProgramTitle(programTitleTitle);
await programmanagerPage.enterProgramStartDate(programmanagerPage.getStartDate());
await programmanagerPage.enterProgramEndDate(programmanagerPage.getEndDate());
await programmanagerPage.enterProgramDescription(faker.lorem.sentence());
await programmanagerPage.selectPlanningMode("Daily Planning");
await programmanagerPage.clicknextButton();
await programmanagerPage.clicknextButton();
await programmanagerPage.clickAddButtonForDay("Day 1");
await programmanagerPage.enterblockTitle("Self Paced");
await programmanagerPage.enterBlockDescription("des");
await programmanagerPage.selectBlockType("Self-Paced Learning");
await programmanagerPage.clickAddBlockButton();
await programmanagerPage.mapCourseToTheBlock();
await programmanagerPage.clickAddblockButtonForDay1();
await programmanagerPage.enterblockTitle("Assignment block");
await programmanagerPage.enterBlockDescription("des");
await programmanagerPage.selectBlockType("Assignment");
await programmanagerPage.clickAddBlockButton();
await programmanagerPage.mapAssignmentToTheBlock();
await programmanagerPage.clickAddblockButtonForDay2();
await programmanagerPage.enterblockTitle("Assessment block");
await programmanagerPage.enterBlockDescription("des");
await programmanagerPage.selectBlockType("Assessment");
await programmanagerPage.clickAddBlockButton();
await programmanagerPage.clicknextButton();
await programmanagerPage.clickCreateProgramButton();
await programmanagerPage.searchProgram(programTitleTitle);
await expect(page.locator('h3', { hasText: programTitleTitle })).toBeVisible();
await programmanagerPage.clickBackButton();
await adminDashBoard.clickEnrollmentManagementModule();
await enrollmentmanagerPage.clickenrollLearnerstab();
await enrollmentmanagerPage.clickPrograms();
await enrollmentmanagerPage.searchProgram(programTitleTitle);
await enrollmentmanagerPage.clickenrolllearnerToProgrambutton();
await enrollmentmanagerPage.searchUsers(learner1);
await enrollmentmanagerPage.clickCheckboxforuser();
await enrollmentmanagerPage.clickenrollUserButton();
await programmanagerPage.clickBackButton();
await adminDashBoard.logoutAsAdmin();
await signinPage.enterEmail(learner1);
await signinPage.enterPassword(testdata.learnerPassword);



await page.waitForTimeout(5000);





});