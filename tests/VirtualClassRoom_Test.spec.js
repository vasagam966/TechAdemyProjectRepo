const {test,expect} = require('@playwright/test');
const {POManager}=require('../PageObjects/POManager');
import { faker } from '@faker-js/faker';
const testdata=JSON.parse( JSON.stringify(require('../TestData/signInPageTestData.json')));
const learner1 =faker.internet.email();
const learner2 =faker.internet.email();


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
    await usermanagement.createALearner(learner2);

    //await page.waitForTimeout(5000);
});
test('Test Creating Batch and session In Virtual Classroom and enroll the batch',async({page})=>{

    const poManager=new POManager(page);
    const adminDashBoard=poManager.getAdminDashBoard();
    const virtualClassroomPage =poManager.getVirtualClassroomPage();
    let programmanagerPage= poManager.getProgramManagerPage();
    await programmanagerPage.clickBackButton();
    await adminDashBoard.clickVirtualClassroomModule();
    await virtualClassroomPage.clickCreateBatchButton();
    const BatchTitle = `PlaywrightBatch${faker.datatype.number({ min: 100, max: 999 })}`;
    console.log(BatchTitle);
    await virtualClassroomPage.enterBatchTitle(BatchTitle);
    await  virtualClassroomPage.enterBatchDescription("des");
    await virtualClassroomPage.enterStartdate(programmanagerPage.getStartDate());
    await virtualClassroomPage.enterEnddate(programmanagerPage.getEndDate());
    await virtualClassroomPage.clickCreateBatchButtonInDialogBox();
    await virtualClassroomPage.clickbatchesTab();
    await page.waitForTimeout(5000);
    await virtualClassroomPage.clickLearnersButton(BatchTitle);
    await virtualClassroomPage.searchusers(learner2);
    await virtualClassroomPage.clickaddUserButton(learner2);
    await page.waitForTimeout(3000);
    await virtualClassroomPage.searchusers(learner1);
    await virtualClassroomPage.clickaddUserButton(learner1);
    await virtualClassroomPage.closedialog();
    await page.waitForTimeout(5000);
    await virtualClassroomPage.clickCreateSessionButton();
    const sessionTitle = `PlaywrightSession${faker.datatype.number({ min: 100, max: 999 })}`;
    await virtualClassroomPage.entersessionTitle(sessionTitle);
    await virtualClassroomPage.enterSessionDescription("des");
    await virtualClassroomPage.selectInstructor("David Martinez");
    await virtualClassroomPage.selectBatch(BatchTitle);
    await virtualClassroomPage.entersessionStartTime(virtualClassroomPage.getStartTime());
    await virtualClassroomPage.entersessionEndTime(virtualClassroomPage.getEndTime());
    await virtualClassroomPage.clickcreateSessionButtonInDialog();
    await page.waitForTimeout(5000);
    await virtualClassroomPage.clickSessionsTab();
    await virtualClassroomPage.searchSessions(sessionTitle);
    await expect(page.locator('h3', { hasText: sessionTitle })).toBeVisible();
    await page.waitForTimeout(5000);
    

});